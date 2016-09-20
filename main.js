/**
 * Created by qedpi on 9/20/2016.
 */
// ES6
const print = console.log;

const range = (start, stop, step) => {
    "use strict";
    if (typeof stop == 'undefined'){
        stop = start; start = 0;
    }
    if (typeof step == 'undefined'){
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};

/* alternative range */
//const nums_to = n => Array.from(new Array(n).keys());

const N_STEPS = 12;

/* Arithmetic mod 12 for semitones in scales
 * -> 0 <= ans <= 11
 */
const step_by = (key, offset) => (key + offset + N_STEPS) % 12;

const key_codes = range(12); // one for each semitone

// eg: C -> a
const relative_minor = key => step_by(key, -3);

// eg: a -> C
const relative_major = key => step_by(key, 3);

const name_to_key = {
    'Cx': 2, 'Dx': 4, 'Ex': 6, 'Fx': 7, 'Gx': 9, 'Ax': 11, 'Bx': 1,
    'C#': 1, 'D#': 3, 'E#': 5, 'F#': 6, 'G#': 8, 'A#': 10, 'B#': 0,
    'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11,
    'Cb': 11, 'Db': 1, 'Eb': 3, 'Fb': 4, 'Gb': 6, 'Ab': 8, 'Bb': 10,
    'Cbb': 10, 'Dbb': 0, 'Ebb': 2, 'Fbb': 3, 'Gbb': 5, 'Abb': 7, 'Bbb': 9,
};

// 1 -> sharps, 0 -> flats:  C     Db    D      Eb     E     F     G      Ab    A     Bb      B
const degree_signatures = [true, false, true, false, true, false, true, false, true, false, true];

/* Note Modifiers */
const DOUBLESHARP = '\u{1D12A}';
const SHARP = '\u{266F}';
const NEUTRAL = '\u{266E}';
const FLAT = '\u{266D}';
const DOUBLEFLAT = '\u{1D12B}';
// print(DOUBLESHARP, SHARP, NEUTRAL, FLAT, DOUBLEFLAT);

