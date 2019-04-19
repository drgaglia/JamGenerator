const STEPS = Object.freeze (
    {
        "H" : 1,
        "W" : 2,
        "T" : 3
    }
);

// Unneeded (for now)
const TONICITIES = Object.freeze (
    {
    //  "Quartatonic" : 4
        "Pentatonic" : 5,
        "Hexatonic" : 6,
        "Diatonic" : 7,
        "Octatonic" : 8,
    //  "Nonatonic" : 9,
    //  "Decatonic" : 10,
    //  "Undecatonic" : 11,
        "Chromatic" : 12
    }
);

const PARENT_SCALES = Object.freeze (
    {
        "Ionian" :
        {
            name: "Ionian",
            steps:
            [ 
                STEPS.W,
                STEPS.W,
                STEPS.H,
                STEPS.W,
                STEPS.W,
                STEPS.W,
                STEPS.H    
            ]
        }       
    },
    {
        "HarmonicMinor" :
        {
            name: "Harmonic Minor",
            steps:
            [
                STEPS.W,
                STEPS.H,
                STEPS.W,
                STEPS.W,
                STEPS.H,
                STEPS.T,
                STEPS.H
            ]
        }
    }
);

class Mode {

    constructor ( keyValue, parent, modeNumber, modeName ) {
        this.keyValue = keyValue;
        this.parent = parent;     
        this.tonicity = this.parent.steps.length;  
        this.modeNumber = modeNumber;
        this.modeName = modeName;
        this.steps = [];
        this.createMode ();
    }

    createMode () {
        for ( let i = 0; i < this.tonicity; i++ ) {
            let degree = ( i + this.modeNumber ) % this.tonicity;           
            switch ( PARENT_SCALES.Ionian.steps[degree] ) {
                case 1:
                    this.steps.push ( STEPS.H );
                    break;
                case 2:
                    this.steps.push ( STEPS.W );
                    break;
                case 3:
                    this.steps.push ( STEPS.T );
                    break; 
                default:
                    console.log ( "Something went wrong when creating the mode" );
            }              
        }
    }
}