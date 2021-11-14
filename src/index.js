import './css/style.scss';
import { midiNotes } from './const/midiNotes';

const notesField = document.getElementById('notes');
const bpmField = document.getElementById('bpm');
const releaseField = document.getElementById('release');
const attackField = document.getElementById('attack');
const decayField = document.getElementById('decay');
const sustainField = document.getElementById('sustain');
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
let type = 'square';
let parserError = false;
let sources = [];
let timer = null;

function start() {
    clearTimeout(timer);
    ctx = new AudioContext() || new webkitAudioCondext();
    if (!notesField.value || !bpmField.value) {
        return;
    }
    document.getElementById('parserError').classList.remove('show');
    let time = ctx.currentTime + eps;
    const notes = parseNotes(notesField.value);
    stopAll();
    if (parserError) {
        document.getElementById('parserError').classList.add('show');
        return;
    }
    notes.forEach((note, index) => {
        let freq = note.number !== 0 ? Math.pow(2, (note.number - 69) / 12) * 440 : 0;
        const noteTime = note.isLong ? note.time * 1.5 : note.time;
        playNote(freq, time, (60 / bpmField.value) * noteTime, index, index === notes.length - 1);
        time += (60 / bpmField.value) * noteTime;
    });

};

function parseNotes(notes) {
    parserError = false;
    const arr = [];
    notes.trim().split(' ').forEach(el => {
        const [number, time] = el.split('/');
        if (midiNotes[number] === undefined) {
            parserError = true;
            return;
        }
        arr.push({
            number: midiNotes[number],
            time: 1 / (+(time.replace('.', '')) / 4),
            isLong: time.includes('.')
        })
    });

    return arr;
};

function playNote(freq, startTime = 0, endTime, index, isLast) {
    const osc = ctx.createOscillator();
    const release = ctx.createGain();
    const attack = ctx.createGain();
    const decay = ctx.createGain();

    sources[index] = osc;
    osc.type = type;
    osc.frequency.value = freq;
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
        timer = setTimeout(() => {
            stop();
        }, stopTime * 1000)
    }
};

function stopAll() {
    sources.forEach(el => el.stop());
    sources = [];
};

function stop() {
    ctx.close();
    stopBtn.setAttribute('disabled', 'disabled');
    suspendBtn.setAttribute('disabled', 'disabled');
    suspendBtn.textContent = 'pause';
}

function setValuesToFields() {
    switch (instrumentType) {
        case 'type1':
            {
                type = 'square';
                releaseValue = 1;
                attackValue = 0;
                decayValue = 0;
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
}

startBtn.addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    start();
    stopBtn.removeAttribute('disabled');
    suspendBtn.removeAttribute('disabled');
}, true);

stopBtn.addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    clearTimeout(timer);
    stop();
}, true);

suspendBtn.addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    clearTimeout(timer);
    if (ctx.state === 'running') {
        ctx.suspend();
        suspendBtn.textContent = 'resume';
    } else {
        ctx.resume();
        suspendBtn.textContent = 'pause';
    }
}, true);

releaseField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    releaseValue = +releaseField.value;
}, true);

attackField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    attackValue = +attackField.value;
}, true);

decayField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    decayValue = +decayField.value;
}, true);

sustainField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    sustainValue = +sustainField.value;
}, true);

sustainField.addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    sustainValue = +sustainField.value;
}, true);

document.getElementsByName('instrument').forEach(el => {
    el.addEventListener('change', () => {
        instrumentType = el.value;
        setValuesToFields();
    });
})