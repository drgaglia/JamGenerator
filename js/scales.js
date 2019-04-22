class ScaleDegree {
    constructor ( degree, name, accidental, relativeToC) {
        this.degree = degree;
        this.name = name;
        this.accidental = accidental;
        this.relativeToC = relativeToC;
    }
}

class Mode {

    constructor ( parent, modeNumber, name ) {
        this.parent = parent;
        this.modeNumber = modeNumber;
        this.name = name;
        this.steps = [];
        this.notes = [];
        this.createMode ();
        this.getNotes ();
    }

    createMode () {
        let tonicity = this.parent.length;
        for ( let i = 0; i < tonicity; i++ ) {
            let degree = ( i + this.modeNumber ) % tonicity;           
            switch ( PARENT_SCALES.Ionian[degree] ) {
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

    getNotes () {
        
    }
}

const PARENT_SCALES = Object.freeze (
    {
        "Ionian" :
        [ 
            STEPS.W,
            STEPS.W,
            STEPS.H,
            STEPS.W,
            STEPS.W,
            STEPS.W,
            STEPS.H    
        ],
        "Harmonic Minor" :
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
);