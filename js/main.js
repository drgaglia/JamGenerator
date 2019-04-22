// Dummy data for onload function - will eventually do something useful
window.onload = function () {
    var canvas = document.getElementById("main-canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFF";
    ctx.fillRect(50, 50, 100, 100);

    generateInitialModes ();
}

// In all likelyhood, this will get retooled and removed. But it is good for
// dummy data right now and so it shall stay
function updateKey () {

    // Get selects and their selected options
    let keySelect = document.getElementById ( "key-select" );
    let keyOption = keySelect.options [ keySelect.selectedIndex ];

    let acdntlSelect = document.getElementById ( "acdntl-select" );
    let acdntlOption = acdntlSelect.options [ acdntlSelect.selectedIndex ];

    let modeSelect = document.getElementById ( "mode-select" );
    let modeOption = modeSelect.options [ modeSelect.selectedIndex ];

    // Get data relative to C key value
    let keyValue = parseInt ( keyOption.value ) + parseInt ( acdntlOption.value );
    let parentScale = modeOption.className;
    let modeNumber = parseInt ( modeOption.value );
    let modeName = keyOption.text + acdntlOption.text + " " + modeOption.text

    console.table ( keyValue, parentScale, modeNumber, modeName );
}


