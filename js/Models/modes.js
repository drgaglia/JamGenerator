
class Mode {
    constructor ( parentScale, modeNumber ) {
        this.parentScale = parentScale;
        this.modeNumber = modeNumber;
        this.modeName = this.parentScale.modes [ this.modeNumber ];
        this.modeSteps = [];
        this.generateModeSteps ();
    }

    generateModeSteps () {
        let scaleLength = this.parentScale.steps.length;
        for ( let i = 0; i < scaleLength; i++ ) {          
            let modeStepIndex = ( i + this.modeNumber ) % scaleLength;
            this.modeSteps.push ( this.parentScale.steps [ modeStepIndex ] );
        }      
    }
}
