let modes = [];

window.onload = function () {
    let canvas = document.getElementById ( "main-canvas" );
    let ctx = canvas.getContext ( "2d" );

    ctx.fillStyle = "#A4A4A4";
    ctx.fillRect ( 50, 50, 100, 100 );

    

    updateKey ();

    /*
    let keySelect = document.getElementById ( "key-select" );
    let acdntlSelect = document.getElementById ( "acdntl-select" );
    let keyVal = parseInt (keySelect.options [ keySelect.selectedIndex ].value ); 
    let acdntlVal = parseInt (acdntlSelect.options [ acdntlSelect.selectedIndex ].value );

    let relativeToC = keyVal + acdntlVal;

    */
    
}


function updateKey () {

    // Get our elements
    let keySelect, acdntlSelect, modeSelect; 

    keySelect = document.getElementById ( "key-select" );
    acdntlSelect = document.getElementById ( "acdntl-select" );
    modeSelect = document.getElementById ( "mode-select" );

    // Get our elements' values
    let keyVal, keyText, acdntlVal, modeVal, modeText;

    keyVal = parseInt ( keySelect.value );
    keyText = keySelect.text;
    acdntlVal = parseInt ( acdntlSelect.value );
    modeVal = parseInt ( modeSelect.value );
    modeText = modeSelect.text;

    // 
    keyVal += acdntlVal;
    let modeName = keyText + modeText;

    modes.push (
        new Mode ( PARENT_SCALES.Ionian, modeVal, modeName)
    );

    document.getElementById ( "scale-display" ).innerHTML = modes[modes.length - 1].steps;
}

