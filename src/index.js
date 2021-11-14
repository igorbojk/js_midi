import './css/style.scss';
import { midiNotes } from './const/midiNotes';

const notesField = document.getElementById('notes');
const bpmField = document.getElementById('bpm');
const releaseField = document.getElementById('release');


let ctx;
const threshold = 0.001;
let releaseValue = 1;
const eps = 0.01;
let parserError = false;
let sources = [];

function start() {
    ctx = new AudioContext() || new webkitAudioCondext()
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
        const freq = note.number !== 0 ? Math.pow(2, (note.number - 69) / 12) * 440 : 0;
        const noteTime = note.isLong ? note.time * 1.5 : note.time;
        playNote(freq, time, (60 / bpmField.value) * noteTime, index);
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

function playNote(freq, startTime = 0, endTime, index) {
    const osc = ctx.createOscillator();
    sources[index] = osc;
    osc.type = 'square';
    osc.frequency.value = freq;

    const release = ctx.createGain();
    osc.connect(release);
    release.connect(ctx.destination);
    release.gain.setValueAtTime(0.9, startTime);
    release.gain.exponentialRampToValueAtTime(
        0.00001,
        startTime + endTime + Math.max(releaseValue, threshold)
    );
    osc.start(startTime);
    osc.stop(startTime + endTime + Math.max(releaseValue, threshold));
};

function stopAll() {
    sources.forEach(el => el.stop());
    sources = [];
}

document.addEventListener('submit', function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    start();
}, true);

document.getElementById('stop').addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    ctx.close();
}, true);

document.getElementById('pause').addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    ctx.suspend();
}, true);

document.getElementById('resume').addEventListener('click', function(evt) {
    evt.stopImmediatePropagation();
    ctx.resume();
}, true);

document.getElementById('release').addEventListener('mouseup', function(evt) {
    evt.stopImmediatePropagation();
    releaseValue = releaseField.value;
}, true);