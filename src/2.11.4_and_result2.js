alert( alert(1) && alert(2) );

// returns: 1, 2, then nothing

// incorrect, I had assumed the alerts would evaluate before the comparison,
// I was wrong.
// in fact, 1 would be alterted, then return nothing, and since this is a
// logical AND operation, it would return undefined, thus alerting
// undefined