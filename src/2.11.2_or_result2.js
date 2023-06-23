alert( alert(1) || 2 || alert(3) );

// alerts: 1
// alerts: 1

// wrong, alert does NOT return a value apparently
// I had assumed that it returned its expression, but apparently not
// it's actually 1, then 2