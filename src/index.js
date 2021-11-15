import './css/style.scss';
import { midiNotes } from './const/midiNotes';

const textField1 = document.getElementById('text-field-1');
const textField2 = document.getElementById('text-field-2');
const bpmField = document.getElementById('bpm');
const releaseField = document.getElementById('release');
const releaseValueField = document.getElementById('release-value');
const attackField = document.getElementById('attack');
const attackValueField = document.getElementById('attack-value');
const decayField = document.getElementById('decay');
const decayValueField = document.getElementById('decay-value');
const sustainField = document.getElementById('sustain');
const sustainValueField = document.getElementById('sustain-value');
const pitchField = document.getElementById('pitch');
const pitchValueField = document.getElementById('pitch-value');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const suspendBtn = document.getElementById('suspend');
const eps = 0.01;
const threshold = 0.001;

let ctx;
let releaseValue = 1;
let attackValue = 0;
let decayValue = 0;
let sustainValue = 50;
let instrumentType = 'default';
let pitchValue = 1;
let type = 'square';
let parserError = false;
let sources = {
    first: [],
    second: []
};
let timer = null;
let timerStopTime = 0;
let timerStopTimeStamp = 0;

function start() {
    clearTimeout(timer);
    ctx = new AudioContext() || new webkitAudioCondext();
    if (!bpmField.value || (!textField1.value && !textField2.value)) {
        return;
    }
    document.getElementById('parserError').classList.remove('show');
    stopAll();
    playFromArray(parseNotes(textField1.value), ctx.currentTime + eps, 'first');
    playFromArray(parseNotes(textField2.value), ctx.currentTime + eps, 'second');
};

/**
 * @param {Array[sting]} array 
 * @param {number} startTime 
 * @param {string} source 
 */
function playFromArray(array, startTime, source) {
    if (parserError) {
        document.getElementById('parserError').classList.add('show');
        return;
    }
    stopBtn.removeAttribute('disabled');
    suspendBtn.removeAttribute('disabled');
    let time = startTime;
    array.forEach((note, index) => {
        let freq = note.number !== 0 ? Math.pow(2, (note.number - 69) / 12) * 440 : 0;
        const noteTime = note.isLong ? note.time * 1.5 : note.time;
        playNote(freq, time, (60 / bpmField.value) * noteTime, index, index === array.length - 1, source);
        time += (60 / bpmField.value) * noteTime;
    });
}

/**
 * @param {string} notes 
 * @returns {array}
 */
function parseNotes(notes) {
    if (!notes) {
        return [];
    }
    parserError = false;
    const arr = [];
    notes.trim().split(' ').forEach(el => {
        const [number, time] = el.split('/');
        const noteTime = time && +time.replace('.', '');
        if (midiNotes[number] === undefined || !number || !time || isNaN(noteTime)) {
            parserError = true;
            return;
        }
        arr.push({
            number: midiNotes[number],
            time: 1 / (noteTime / 4),
            isLong: time.includes('.')
        });
        console.log(1 / (noteTime / 4))
    });
    return arr;
};
/**
 * 
 * @param {number} freq 
 * @param {number} startTime 
 * @param {number} endTime 
 * @param {number} index 
 * @param {boolean} isLast 
 * @param {sting} source 
 */
function playNote(freq, startTime = 0, endTime, index, isLast, source) {
    const osc = ctx.createOscillator();
    const release = ctx.createGain();
    const attack = ctx.createGain();
    const decay = ctx.createGain();

    sources[source][index] = osc;
    osc.type = type;
    osc.frequency.value = freq * pitchValue;
    osc.connect(attack);

    let time = startTime + threshold;
    if (attackValue > threshold) {
        time += attackValue;
    }
    attack.gain.setValueAtTime(0.00001, startTime);
    attack.gain.exponentialRampToValueAtTime(0.9, time);
    attack.connect(decay);

    decay.gain.setValueAtTime(1, startTime + attackValue);
    decay.gain.exponentialRampToValueAtTime(
        sustainValue / 100,
        startTime + attackValue + decayValue
    );
    decay.connect(release)

    const stopTime = startTime + endTime + Math.max(releaseValue, threshold);

    release.gain.setValueAtTime(0.9, startTime);
    release.gain.exponentialRampToValueAtTime(
        0.00001,
        stopTime
    );

    release.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(stopTime);
    if (isLast) {
        clearTimeout(timer);
        timerStopTime = Math.max(timerStopTime, stopTime);
        setupTimer();
    }
};

function stopAll() {
    Object.keys(sources).forEach(key => {
        sources[key].forEach(el => el.stop());
        sources[key] = [];
    });
};

function stop() {
    ctx.close();
    stopBtn.setAttribute('disabled', 'disabled');
    suspendBtn.setAttribute('disabled', 'disabled');
    suspendBtn.textContent = 'pause';
}

function setupTimer() {
    timerStopTimeStamp = Date.now() + (timerStopTime * 1000);
    timer = setTimeout(() => {
        stop();
    }, timerStopTime * 1000);
}

function setValuesToFields() {
    switch (instrumentType) {
        case 'type1':
            {
                type = 'square';
                releaseValue = 4;
                decayValue = 0;
                attackValue = 0.1;
                sustainValue = 50;
                break
            }
        case 'type2':
            {
                type = 'triangle';
                releaseValue = 4;
                decayValue = 1.4;
                attackValue = 0.05;
                sustainValue = 50;
                break
            }
        case 'type3':
            {
                type = 'sine';
                releaseValue = 3.6;
                attackValue = 0.05;
                decayValue = 1.1;
                sustainValue = 22;
                break
            }
        case 'type4':
            {
                type = 'sine';
                releaseValue = 5.1;
                attackValue = 0.4;
                decayValue = 1.9;
                sustainValue = 50;
                break
            }
    }
    releaseField.value = releaseValue;
    attackField.value = attackValue;
    decayField.value = decayValue;
    sustainField.value = sustainValue;
    releaseValueField.textContent = releaseField.value;
    attackValueField.textContent = attackField.value;
    decayValueField.textContent = decayField.value;
    sustainValueField.textContent = sustainField.value;
}

startBtn.addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    start();
}, true);

stopBtn.addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    clearTimeout(timer);
    stop();
}, true);

suspendBtn.addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    clearTimeout(timer);
    if (ctx.state === 'running') {
        ctx.suspend();
        timerStopTime = (timerStopTimeStamp - Date.now()) / 1000;
        suspendBtn.textContent = 'resume';
    } else {
        ctx.resume();
        suspendBtn.textContent = 'pause';
        setupTimer();
    }
}, true);

releaseField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    releaseValue = +releaseField.value;
    releaseValueField.textContent = releaseField.value;
}, true);

attackField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    attackValue = +attackField.value;
    attackValueField.textContent = attackField.value;
}, true);

decayField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    decayValue = +decayField.value;
    decayValueField.textContent = decayField.value;
}, true);

sustainField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    sustainValue = +sustainField.value;
    sustainValueField.textContent = sustainField.value;
}, true);

pitchField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    pitchValue = +pitchField.value;
    pitchValueField.textContent = pitchField.value;
}, true);

document.getElementsByName('instrument').forEach(el => {
    el.addEventListener('change', () => {
        instrumentType = el.value;
        setValuesToFields();
    });
})