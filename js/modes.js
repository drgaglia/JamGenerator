class Mode {
    constructor ( modeParent, modeNumber ) {
        this.parent = modeParent;
        this.number = modeNumber;
        this.name = this.parent.modes [ this.number ];
        this.steps = [];
        this.generateSteps ();
    }

    generateSteps () {
        let len = this.parent.steps.length;
        for ( let i = 0; i < len; i++ ) {          
            let modeIndex = ( i + this.number ) % len;
            this.steps.push ( this.parent.steps [ modeIndex ] );
        }      
    }
}

modeFamilies = [];

// Generates the modes of the PARENT_SCALES object
function generateInitialModes () {
    for ( let i = 0; i < PARENT_SCALES.length; i++ ) {
        generateModes ( PARENT_SCALES [ i ] );
    }
}

// Generates modes from any parent scale
function generateModes ( parent ) {
    let modes = {};
    for ( let i = 0; i < parent.steps.length; i++ ) {
        modes [ i ] = new Mode ( parent, i );
    }
    modeFamilies.push ( modes );
}