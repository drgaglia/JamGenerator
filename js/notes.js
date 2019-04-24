class Note {
    constructor ( letter, accidental, name ) {
        this.letter = letter;
        this.accidental = accidental;
        this.name = name;
    }
}

function getNote ( note ) {
	let distance = note.letter + note.accidental;
    let enharmonics = NOTES [ distance ];
	for ( let i = 0; i < enharmonics.length; i++ ) {
        if ( enharmonics [ i ] === null ) {
            continue;
        }
		if ( enharmonics [ i ].letter === note.letter ) {
			return enharmonics [ i ];
        }
    }
}