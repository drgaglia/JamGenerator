
// Generates the modes of the PARENT_SCALES object
function generateInitialModes ( modeGroups ) {
    for ( let i = 0; i < PARENT_SCALES.length; i++ ) {
        modeGroups.push ( generateModes ( PARENT_SCALES [ i ] ) );
    }
    return modeGroups;
}

// Generates modes from any parent scale
function generateModes ( parentScale ) {
    let scaleModes = {};
    for ( let i = 0; i < parentScale.steps.length; i++ ) {
        scaleModes [ i ] = new Mode ( parentScale, i );
    }
    return scaleModes;
}
