alert( null || 2 && 3 || 4 );

// AND has the higher precendence
// it would alert 'true'
// 2 && 3 = true
// it would skip past null and evaluate and return that true

// INCORRECT
// omg I am stupid
// && doesn't return true, it returns the last true operator (which would
// essentially return a truthy signal, so kinda… true)
// so it would return null || 3 || 4, ergo, 3 would be alerted