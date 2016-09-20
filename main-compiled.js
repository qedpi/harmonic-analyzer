"use strict";

/**
 * Created by qedpi on 9/20/2016.
 */
// ES6
print = console.log;

var N_STEPS = 12;

/* Arithmetic mod 12 for semitones in scales
 * -> 0 <= ans <= 11
 */
var step_by = function step_by(key, offset) {
  return (key + offset + N_STEPS) % 12;
};

x = 5;

//# sourceMappingURL=main-compiled.js.map