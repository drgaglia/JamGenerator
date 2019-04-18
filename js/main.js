window.onload = function () {
    var canvas = document.getElementById("main-canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFF";
    ctx.fillRect(50, 50, 100, 100);

    var keySelect = document.getElementById("key-select");
    var acdntlSelect = document.getElementById("acdntl-select");
    var keyVal = parseInt(keySelect.options[keySelect.selectedIndex].value); 
    var acdntlVal = parseInt(acdntlSelect.options[acdntlSelect.selectedIndex].value);

    var relativeToC = keyVal + acdntlVal;

    console.log(relativeToC);

    console.log(notes[relativeToC]);
    
}

