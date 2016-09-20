'use strict';

/**
 * Created by qedpi on 9/20/2016.
 */
// ES6
var print = console.log;

var range = function range(start, stop, step) {
    "use strict";

    if (typeof stop == 'undefined') {
        stop = start;start = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
    }
    if (step > 0 && start >= stop || step < 0 && start <= stop) {
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

var N_STEPS = 12;

/* Arithmetic mod 12 for semitones in scales
 * -> 0 <= ans <= 11
 */
var step_by = function step_by(key, offset) {
    return (key + offset + N_STEPS) % 12;
};

var key_codes = range(12); // one for each semitone

// eg: C -> a
var relative_minor = function relative_minor(key) {
    return step_by(key, -3);
};

// eg: a -> C
var relative_major = function relative_major(key) {
    return step_by(key, 3);
};

var name_to_key = {
    'Cx': 2, 'Dx': 4, 'Ex': 6, 'Fx': 7, 'Gx': 9, 'Ax': 11, 'Bx': 1,
    'C#': 1, 'D#': 3, 'E#': 5, 'F#': 6, 'G#': 8, 'A#': 10, 'B#': 0,
    'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11,
    'Cb': 11, 'Db': 1, 'Eb': 3, 'Fb': 4, 'Gb': 6, 'Ab': 8, 'Bb': 10,
    'Cbb': 10, 'Dbb': 0, 'Ebb': 2, 'Fbb': 3, 'Gbb': 5, 'Abb': 7, 'Bbb': 9
};

// 1 -> sharps, 0 -> flats:  C     Db    D      Eb     E     F     G      Ab    A     Bb      B
var degree_signatures = [true, false, true, false, true, false, true, false, true, false, true];

/* Note Modifiers */
var DOUBLESHARP = '𝄪';
var SHARP = '♯';
var NEUTRAL = '♮';
var FLAT = '♭';
var DOUBLEFLAT = '𝄫';
// print(DOUBLESHARP, SHARP, NEUTRAL, FLAT, DOUBLEFLAT);

//# sourceMappingURL=main-compiled.js.map