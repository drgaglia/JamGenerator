
/**
 * Generates all mode constructions of the PARENT_SCALES object
 * 
 * @param {Array} modeGroups the global array of all modes
 *  */ 
function generateInitialModes ( modeGroups ) {
    for ( let i = 0; i < PARENT_SCALES.length; i++ ) {
        modeGroups.push ( generateModes ( PARENT_SCALES [ i ] ) );
    }
    return modeGroups;
}

/**
 * Generates all modes from a given scale
 * 
 * @param {Object} parentScale - The parent scale from which to derive all modes
 */
function generateModes ( parentScale ) {
    let scaleModes = {};
    for ( let i = 0; i < parentScale.steps.length; i++ ) {
        scaleModes [ i ] = new Mode ( parentScale, i );
    }
    return scaleModes;
}
