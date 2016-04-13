//$(document).ready(function ()
(function () {
    
    var t= TweenMax;
    
    function init() {
        console.log("init");
        addEventListeners();
        $('#blocker').css("display", "none");
        t.set($tagline1, {alpha:0});
        t.set($tagline2, {alpha:0});
        t.set($expand, {bottom:-30});
        t.to($tagline1, 0.7, {alpha:1, ease:Quad.easeOut, delay:1});
        t.to($tagline1, 0.5, {alpha:0, delay:3});
        t.to($tagline2, 0.5, {alpha:1, ease:Quad.easeOut, delay:4});
        t.to($expand, 0.5, {bottom:6, ease:Quad.easeOut, delay:4.5, onComplete:playButton});
        buildPalette(colorlist);
    }
    
    function addEventListeners() {
        
        $('#closebtn').click(function (e) {
            collapse();
        });

        $('#collapsed').on('mouseenter', playButton);

        $('#collapsed').click(function (e) {
            expand();
        });

        $('.openbtn').on('mouseover',function (e) {
            $(this).css("background-position", "-67px 0");
        });

        $('.openbtn').on('mouseout',function (e) {
            $(this).css("background-position", "0 0");
        });

        $('.openbtn-sm').on('mouseover',function (e) {
            $(this).css("background-position", "-52px 0");
        });

        $('.openbtn-sm').on('mouseout',function (e) {
            $(this).css("background-position", "0 0");
        });
        $('#closebtn2').on('click',function (e) {
            $paletteholder.hide();
        });
        $('#taba').on('mouseover', tabEvents);
        $('#popup').on('mouseover', tabEvents);
        $('#popup').on('click', tabEvents);
        $('#tabs').on('mouseleave', tabEvents);
       /* $('#popup').click(function (e) {
            //window.open('http://http://www.painton.com');
            clickthrough();
            return false
        });*/
        
        $('#expanded').click(function (e) {
            //window.open('http://www.painton.com');
            var temp = $(e.target).attr('class');
            if (temp == 'openbtn-sm') {
                $('#selectroom').hide();
                $paletteholder.show();
                currRoom = $(e.target).parent();
                console.log(currRoom.attr('id'));
                $paletteholder.addClass("ign");
                switch (currRoom.attr('id')) {
                    case 'room2':
                        currImage = imageObj2;
                        $paletteholder.addClass("pos1");
                        EB.userActionCounter("PB2");
                        break;
                    case 'room4':
                        currImage = imageObj4;
                        $paletteholder.addClass("pos2");
                        EB.userActionCounter("PB5");
                        break;
                    case 'room6':
                        currImage = imageObj6;
                        $paletteholder.addClass("pos1");
                        EB.userActionCounter("PB6");
                        break;
                }
                $paletteholder.on('mouseleave',function (e) {
                    $paletteholder.hide();
                });
            } else if (temp == 'openbtn') {
                $('#selectroom').hide();
                $paletteholder.show();
                currRoom = $(e.target).parent();
                console.log(currRoom.attr('id'));
                $paletteholder.removeClass();
                $paletteholder.addClass("ign");
                switch (currRoom.attr('id')) {
                    case 'room1':
                        currImage = imageObj1;
                        $paletteholder.addClass("pos1");
                        EB.userActionCounter("PB1");
                        break;
                    case 'room3':
                        currImage = imageObj3;
                        $paletteholder.addClass("pos2");
                        EB.userActionCounter("PB3");
                        break;
                    case 'room5':
                        currImage = imageObj5;
                        $paletteholder.addClass("pos1");
                        EB.userActionCounter("PB5");
                        break;
                }
                $paletteholder.on('mouseleave',function (e) {
                    $paletteholder.hide();
                });            
            } else if (typeof temp == "undefined") {
                clickthrough();
                collapse();
                
            }
            return false;
        });

        //$('#paletteholder').draggable();
    }
    
    function expand() {
        reset();
        EB.expand();
        $expanded.show();
        $collapsed.hide();
    }

    function collapse() {
        $expanded.hide();
        $collapsed.show();
        EB.collapse();
    }

    function clickthrough() {
//        console.log();
        EB.clickthrough("CTA");
    }

    
    var colorlist = ['Natural Wonder Color Collection', '999083', 'edeeea', 'e5cfb1', 'c8a372', '8f949a', 'd2cac3', 'd1bca7', 'dccab4', 'e4e1d8', 'b7aaa2', '907967', 'cbcfd2', '8b7d75', '8c958d', 'd4cec4', 'e8ddce', 'ac9072', 'd4d3c6', 'b3b3ab', 'beb0a1'];
    var $tagline1 = $('#tagline1');
    var $tagline2 = $('#tagline2');
    var $expand = document.querySelector('#expand');
    var $expanded = $('#expanded');
    var $collapsed = $('#collapsed');
    var $canvas1 = $('#canvas1');
    var $canvas2 = $('#canvas2');
    var $canvas3 = $('#canvas3');
    var $canvas4 = $('#canvas4');
    var $canvas5 = $('#canvas5');
    var $canvas6 = $('#canvas6');
    var $paletteholder = $('#paletteholder');
    var $palettename = $('#palettename');
    var $palette = $('#palette');
    var currRoom, currCanvas, currContext, currImage;
    var isFirstRun = true;


    $paletteholder.hide();
    $canvas1.hide();
    $canvas2.hide();
    $canvas3.hide();
    $canvas4.hide();
    $canvas5.hide();
    $canvas6.hide();
    

    var context1 = $canvas1[0].getContext('2d');
    var imageObj1 = new Image();

    imageObj1.src = 'images/section1.png';
    imageObj1.onload = function () {
        /*var img_w = this.width;
        var img_h = this.height;
        $canvas1[0].setAttribute('width', String(img_w));
        $canvas1[0].setAttribute('height', String(img_h));*/
        $canvas1[0].setAttribute('width', '227');
        $canvas1[0].setAttribute('height', '181');
        context1.drawImage(imageObj1, 0, 0);
    };

    var context2 = $canvas2[0].getContext('2d');
    var imageObj2 = new Image();

    imageObj2.src = 'images/section2.png';
    imageObj2.onload = function () {
        $canvas2[0].setAttribute('width', '227');
        $canvas2[0].setAttribute('height', '75');
        context2.drawImage(imageObj2, 0, 0);
    };
    
    var context3 = $canvas3[0].getContext('2d');
    var imageObj3 = new Image();

    imageObj3.src = 'images/section3.png';
    imageObj3.onload = function () {
        $canvas3[0].setAttribute('width', '261');
        $canvas3[0].setAttribute('height', '181');
        context3.drawImage(imageObj3, 0, 0);
    };
      
    var context4 = $canvas4[0].getContext('2d');
    var imageObj4 = new Image();

    imageObj4.src = 'images/section4.png';
    imageObj4.onload = function () {
        $canvas4[0].setAttribute('width', '216');
        $canvas4[0].setAttribute('height', '79');
        context4.drawImage(imageObj4, 0, 0);
    };
    
    var context5 = $canvas5[0].getContext('2d');
    var imageObj5 = new Image();
    
    imageObj5.src = 'images/section5.png';
    imageObj5.onload = function () {
        $canvas5[0].setAttribute('width', '228');
        $canvas5[0].setAttribute('height', '178');
        context5.drawImage(imageObj5, 0, 0);
    };
    
    var context6 = $canvas6[0].getContext('2d');
    var imageObj6 = new Image();

    imageObj6.src = 'images/section6.png';
    imageObj6.onload = function () {
        $canvas6[0].setAttribute('width', '55');
        $canvas6[0].setAttribute('height', '70');
        context6.drawImage(imageObj6, 0, 0);
    };
    
    function tabEvents(e){
        //var mc = e.currentTarget;
        var mc = $('#tabs');
        switch (e.type) {
            case "mouseover":
                t.to(mc, 0.5, {top:59, ease:Quad.easeOut});
                break;
            case "mouseleave":
                t.to(mc, 0.5, {top:239});
                break;
            case "click":
                EB.clickthrough("ABOUTNW");
                collapse();
                break;
        }
    }

    function buildPalette(arr) {

        for (var i = 0; i < arr.length; i++) {
            if (i == 0) {
                //$palettename.html(arr[i]);
            } else {
                var txt = $('<div id="color' + i + '" class="color ign"></div>');
                $palette.append(txt.css('background-color', '#' + arr[i]));
            }
            console.log(i);
        }

        $('.color').click(function (e) {

            var x = $(this).css('background-color');

            currCanvas = currRoom.find('canvas');
            currContext = currCanvas[0].getContext('2d');
            
            if (currCanvas.is(":hidden")) currCanvas.show();
            
            var color = new RGBColor(x);
            currContext.drawImage(currImage, 0, 0);
            multiply(color.r, color.g, color.b, currCanvas[0], currContext);

        });
    }
    
    function playButton(){
        t.spriteSheet( $expand, { 
            width: 1270, 
            offsetX: 0,
            offsetY: 0,
            stepX: 254, 
            stepY: 32, 
            count: 25
        }, .75, { delay:0 });
    }

    function changePalette(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (i == 0) {
                //$palettename.html(arr[i]);
            } else {
                $('#color' + i).css('background-color', '#' + arr[i]);
            }
        }
    }

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

    /*function addPaletteEvents() {
        $palette.mouseenter(function (e) {
            $('#newcursor').toggle();
            console.log('out');
        }).mouseleave(function (e) {
            $('#newcursor').hide();
            console.log('in');
        }).mousemove(function (e) {
            $('#newcursor').css('left', e.pageX - 2).css('top', e.pageY - 40);
        });
    }*/

    init();
})();
//    checkInit();