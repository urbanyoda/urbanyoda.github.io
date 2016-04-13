$(document).ready(function () {
    var dist, swatchHeight, stripHeight;
    var swatches = [];
    var strips = [];
    var numbers = [];
    var bm:BlitMask;
    var colorlist = [0xBFC9D0, 0x99324E, 0xF1D3DA, 0xED939D, 0xC4633E, 0xF5D68F, 0x7FAC6E, 0xC1E6DF, 0x01A0B8, 0x015D87, 0x624977, 0xC0AFD0, 0x90979B, 0x22657F, 0x2F3D4C, 0xEDEAE0, 0xE8DCC6, 0xF2ECE6, 0x353337, 0xCE6C91];
    var pad = 5;
    var viewport = 136;
    var times = 3;
    var testnum = 10;
    var isFirstRun = true;
    var isSpinning = false;


    //clickhandle.alpha = arrow.alpha = spinagain.alpha = 0;
    function multiply(R, G, B, cnv, ctx) {
    imgData = ctx.getImageData(0, 0, cnv.width, cnv.height);
    data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
        data[i] = R * data[i] / 255;
        data[i + 1] = G * data[i + 1] / 255;
        data[i + 2] = B * data[i + 2] / 255;
    }
    ctx.putImageData(imgData, 0, 0);
    }
    
    function reset() {
        context1.drawImage(imageObj1, 0, 0);
        context2.drawImage(imageObj2, 0, 0);
        $canvas1.hide();
        $canvas2.hide();
    }
}