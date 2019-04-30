
class Key {
    constructor ( keyCenter, parentScale ) {
        this.keyCenter = keyCenter;
        this.modeSteps = parentScale.modeSteps;

        // this.keyIntervals;
        // this.scaleDegrees;
        
        this.keyNotes = generateKeyNotes ( this.keyCenter, this.modeSteps );
        this.keyChords = generateKeyChords ( this.keyNotes );
        // this.keyChordFunctions;
    }
}
