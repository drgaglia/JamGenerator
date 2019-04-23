// TODO: this currently takes in ONE scale 
// e.g. [ 2, 2, 1, 2, 2, 2, 1 ]
// Possiby refactor to intake the entire parent?

class Key {
    constructor ( scale ) {
        this.kevValue = keyValue;
        this.keyCenter = NOTES[keyValue].values.N;
        this.scale = scale;
        this.notes = [];
        this.generateNotes ();
    }

    generateNotes () {
        let len = this.scale.length; 
        for (let i = 0; i < len; i++ ) {

        }
    }

    checkHasNote ( note ) {
        for ( let i = 0; i < this.notes.length; i++ ) {
            
        }
    }


}