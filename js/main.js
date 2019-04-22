let modes = [];

// Dummy data for onload function - will eventually do something useful
window.onload = function () {
    var canvas = document.getElementById("main-canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFF";
    ctx.fillRect(50, 50, 100, 100);

    var keySelect = document.getElementById ( "key-select" );
    var acdntlSelect = document.getElementById ( "acdntl-select" );
    var keyValue = parseInt ( keySelect.options [ keySelect.selectedIndex ].value ); 
    var acdntlVal = parseInt ( acdntlSelect.options [ acdntlSelect.selectedIndex ].value );

    var relativeToC = keyValue + acdntlVal;
}

function updateKey () {

    // Get elements
    let keySelect = document.getElementById ( "key-select" );
    let keyOption = keySelect.options [ keySelect.selectedIndex ];

    let acdntlSelect = document.getElementById ( "acdntl-select" );
    let acdntlOption = acdntlSelect.options [ acdntlSelect.selectedIndex ];

    let modeSelect = document.getElementById ( "mode-select" );
    let modeOption = modeSelect.options [ modeSelect.selectedIndex ];

    // Get data
    let keyValue = parseInt ( keyOption.value ) + parseInt ( acdntlOption.value );
    let parentScale = modeOption.className;
    let modeNumber = parseInt ( modeOption.value );
    let modeName = keyOption.text + acdntlOption.text + " " + modeOption.text

    switch ( parentScale ) {
        case PARENT_SCALES.Ionian.name:    
            modes.push (
                new Mode ( keyValue, PARENT_SCALES.Ionian, modeNumber, modeName )
            );
            break;
        case PARENT_SCALES.HarmonicMinor.name:

            break;
        default:
            console.log ( "Something went wrong" );
            break;
    }

    console.log ( modes );
}


