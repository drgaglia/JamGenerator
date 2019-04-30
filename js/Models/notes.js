
class Note {
    // Notes: bb, b, n, #, ## note names
    // pitches: wav files for pitches 
    constructor( enharmonics, pitches) {
        this.enharmonics = enharmonics;
        this.pitches = pitches;
    }
}

class Enharmonic {
    constructor ( name, accidental ) {
        this.name = name;
        this.accidental = accidental;
    }
}
