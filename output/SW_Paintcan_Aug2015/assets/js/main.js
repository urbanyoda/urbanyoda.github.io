//$(document).ready(function ()
(function () {
  
    var counter = 0,
        t,
        colorlist,
        $tagline1,
        $tagline2,
        $expand,
        expanded,
        $collapsed,
        $canvas1,
        $canvas2,
        $canvas3,
        $canvas4,
        $canvas5,
        $canvas6,
        context1, imageObj1,
        context2, imageObj2,
        context3, imageObj3,
        context4, imageObj4,
        context5, imageObj5,
        context6, imageObj6,
        $paletteholder,
        $palettename,
        $palette,
        currRoom, currCanvas, currContext, currImage, t,
        isFirstRun;

    function checkInit() {
      console.log("Check RB");
//        if (!EB.isInitialized())
//        {
//          EB.addEventListener(EBG.EventName.EB_INITIALIZED, loadScripts);
//          // checks if the EB object is initialized, if no - launches the function "wait" which loops back to the function "checkInit" until the EB object is initialized. if it is done initializing - will run the "onInit" function.
//        }
//        else
//        {
//          EB.initExpansionParams(0,0,728,270);
//          loadScripts();
//        }
      loadScripts();
    }

    function loadScripts() {
      console.log("load scripts");
        loadJsCssFile("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", trackProgress);
        loadJsCssFile("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js", trackProgress);
        loadJsCssFile("js/rgbcolor.js", trackProgress);
        loadJsCssFile("css/styles.css", trackProgress);
    }

    function trackProgress(){
        counter++;
        if(counter == 4){
            console.log('ELEMENTS SET AND LOADED');
            loadJsCssFile("js/TweenSprite.min.js", loadNext);
            loadJsCssFile("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js", loadNext);
        }
    }
        
    function loadNext(){
        counter++;
        if(counter == 6){
            console.log("meow");
            t = TweenMax;
            init();
        }
    }

    //DYNAMICALLY LOAD JS/CSS + CALLBACK
        //Source: http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
    function loadJsCssFile(filename,func){
        var filetype = filename.substring(filename.lastIndexOf('.')+1);
        if(filetype == 'js'){
            var fileref = document.createElement('script');
            fileref.setAttribute('type','text/javascript')
            fileref.setAttribute('src', filename);
        }
        else if(filetype == 'css'){
            var fileref = document.createElement('link');
            fileref.setAttribute('rel','stylesheet');
            fileref.setAttribute('type', 'text/css')
            fileref.setAttribute('href', filename);
        }
        if(typeof fileref!= 'undefined'){
            if(func){
                if(fileref.readyState){//IE 8, 9, 10
                    fileref.onreadystatechange = fileref.onload = function(){
                        if(fileref.readyState == 'loaded' || fileref.readyState == 'complete'){
                            fileref.onreadystatechange = null;
                            func();
                        }
                    };
                }
                else{//other browsers
                    fileref.onload = function (){
                    func();
                    }
                }
            }
        document.getElementsByTagName('head')[0].appendChild(fileref);
        }
    }
    
    function init() {
        console.log("init");
        colorlist = ['Natural Wonder Color Collection', '999083', 'edeeea', 'e5cfb1', 'c8a372', '8f949a', 'd2cac3', 'd1bca7', 'dccab4', 'e4e1d8', 'b7aaa2', '907967', 'cbcfd2', '8b7d75', '8c958d', 'd4cec4', 'e8ddce', 'ac9072', 'd4d3c6', 'b3b3ab', 'beb0a1'];
        $tagline1 = $('#tagline1');
        $tagline2 = $('#tagline2');
        $expand = document.querySelector('#expand');
        $expanded = $('#expanded');
        $collapsed = $('#collapsed');
        $canvas1 = $('#canvas1');
        $canvas2 = $('#canvas2');
        $canvas3 = $('#canvas3');
        $canvas4 = $('#canvas4');
        $canvas5 = $('#canvas5');
        $canvas6 = $('#canvas6');
        $paletteholder = $('#paletteholder');
        $palettename = $('#palettename');
        $palette = $('#palette');
        currRoom, currCanvas, currContext, currImage;
        isFirstRun = true;
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
      


    $paletteholder.hide();
    $canvas1.hide();
    $canvas2.hide();
    $canvas3.hide();
    $canvas4.hide();
    $canvas5.hide();
    $canvas6.hide();
    

    context1 = $canvas1[0].getContext('2d');
    imageObj1 = new Image();

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

    context2 = $canvas2[0].getContext('2d');
    imageObj2 = new Image();

    imageObj2.src = 'images/section2.png';
    imageObj2.onload = function () {
        $canvas2[0].setAttribute('width', '227');
        $canvas2[0].setAttribute('height', '75');
        context2.drawImage(imageObj2, 0, 0);
    };
    
    context3 = $canvas3[0].getContext('2d');
    imageObj3 = new Image();

    imageObj3.src = 'images/section3.png';
    imageObj3.onload = function () {
        $canvas3[0].setAttribute('width', '261');
        $canvas3[0].setAttribute('height', '181');
        context3.drawImage(imageObj3, 0, 0);
    };
      
    context4 = $canvas4[0].getContext('2d');
    imageObj4 = new Image();

    imageObj4.src = 'images/section4.png';
    imageObj4.onload = function () {
        $canvas4[0].setAttribute('width', '216');
        $canvas4[0].setAttribute('height', '79');
        context4.drawImage(imageObj4, 0, 0);
    };
    
    context5 = $canvas5[0].getContext('2d');
    imageObj5 = new Image();
    
    imageObj5.src = 'images/section5.png';
    imageObj5.onload = function () {
        $canvas5[0].setAttribute('width', '228');
        $canvas5[0].setAttribute('height', '178');
        context5.drawImage(imageObj5, 0, 0);
    };
    
    context6 = $canvas6[0].getContext('2d');
    imageObj6 = new Image();

    imageObj6.src = 'images/section6.png';
    imageObj6.onload = function () {
        $canvas6[0].setAttribute('width', '55');
        $canvas6[0].setAttribute('height', '70');
        context6.drawImage(imageObj6, 0, 0);
    };
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
        $expanded.show();
        $collapsed.hide();
    }

    function collapse() {
        $expanded.hide();
        $collapsed.show();
    }

    function clickthrough() {
        console.log("clickthrough");
    }

    
    
    
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

    checkInit();
})();
//    checkInit();