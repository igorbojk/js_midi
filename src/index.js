import './css/style.scss';

const notesField = document.getElementById('notes');
const bpmField = document.getElementById('bpm');

const frequencies = {
    'C0': 12,
    'C#0': 13,
    'D0': 14,
    'D#0': 15,
    'E0': 16,
    'F0': 17,
    'F#0': 18,
    'G0': 19,
    'G#0': 20,
    'A0': 21,
    'A#0': 22,
    'B0': 23,
    'C1': 24,
    'C#1': 25,
    'D1': 26,
    'D#1': 27,
    'E1': 28,
    'F1': 29,
    'F#1': 30,
    'G1': 31,
    'G#1': 32,
    'A1': 33,
    'A#1': 34,
    'B1': 35,
    'C2': 36,
    'C#2': 37,
    'D2': 38,
    'D#2': 39,
    'E2': 40,
    'F2': 41,
    'F#2': 42,
    'G2': 43,
    'G#2': 44,
    'A2': 45,
    'A#2': 46,
    'B2': 47,
    'C3': 48,
    'C#3': 49,
    'D3': 50,
    'D#3': 51,
    'E3': 52,
    'F3': 53,
    'F#3': 54,
    'G3': 55,
    'G#3': 56,
    'A3': 57,
    'A#3': 58,
    'B3': 59,
    'C4': 60,
    'C#4': 61,
    'D4': 62,
    'D#4': 63,
    'E4': 64,
    'F4': 65,
    'F#4': 66,
    'G4': 67,
    'G#4': 68,
    'A4': 69,
    'A#4': 70,
    'B4': 71,
    'C5': 72,
    'C#5': 73,
    'D5': 74,
    'D#5': 75,
    'E5': 76,
    'F5': 77,
    'F#5': 78,
    'G5': 79,
    'G#5': 80,
    'A5': 81,
    'A#5': 82,
    'B5': 83,
    'C6': 84,
    'C#6': 85,
    'D6': 86,
    'D#6': 87,
    'E6': 88,
    'F6': 89,
    'F#6': 90,
    'G6': 91,
    'G#6': 92,
    'A6': 93,
    'A#6': 94,
    'B6': 95,
    'C7': 96,
    'C#7': 97,
    'D7': 98,
    'D#7': 99,
    'E7': 100,
    'F7': 101,
    'F#7': 102,
    'G7': 103,
    'G#7': 104,
    'A7': 105,
    'A#7': 106,
    'B7': 107,
    'C8': 108,
    'C#8': 109,
    'D8': 110,
    'D#8': 111,
    'E8': 112,
    'F8': 113,
    'F#8': 114,
    'G8': 115,
    'G#8': 116,
    'A8': 117,
    'A#8': 118,
    'B8': 119,
    'C9': 120,
    'C#9': 121,
    'D9': 122,
    'D#9': 123,
    'E9': 124,
    'F9': 126,
    'F#9': 127,
    '_': 0
};

const ctx = new AudioContext() || new webkitAudioCondext();
const threshold = 0.001;
let releaseValue = 1;
const eps = 0.01;

function play() {
    if (!notesField.value || !bpmField.value) {
        return;
    }
    let time = ctx.currentTime + eps;
    parseNotes(notesField.value).forEach(note => {
        const freq = note.number !== 0 ? Math.pow(2, (note.number - 69) / 12) * 440 : 0;
        const noteTime = note.isLong ? note.time * 1.5 : note.time;
        playNote(freq, time, (60 / bpmField.value) * noteTime);
        time += (60 / bpmField.value) * noteTime;
    });

};

function parseNotes(notes) {
    const arr = [];
    notes.trim().split(' ').forEach(el => {
        const [number, time] = el.split('/');
        arr.push({
            number: frequencies[number],
            time: 1 / (+(time.replace('.', '')) / 4),
            isLong: time.includes('.')
        })
    });

    return arr;
};

function playNote(freq, startTime = 0, endTime) {
    const osc = ctx.createOscillator();
    osc.type = 'square';
    const release = ctx.createGain();
    osc.connect(release);
    osc.frequency.value = freq;
    release.connect(ctx.destination);
    release.gain.setValueAtTime(0.9, startTime);
    release.gain.exponentialRampToValueAtTime(
        0.00001,
        startTime + endTime + Math.max(releaseValue, threshold)
    );
    osc.start(startTime);
    osc.stop(startTime + endTime + Math.max(releaseValue, threshold));
}

document.addEventListener('submit', function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    play();
}, true);

document.getElementById('stop').addEventListener('click', () => {
    // console.log(ctx.destination)
    // gainNode.disconnect(ctx.destination);
}, true);