var ctr = (function (){
	
	//DEFINE MODULE GLOBAL VARIABLES
	var clickTagUrl = 'http://www.cialis.com';
	var $loader,
		$scene1,
		$scene2,
		$geta,
		$free,
		$wipe,
		$countdown,
		$day,
		$tablet,
		$swoosh,
		$small30l,
		$small30r,
		$triallg,
		$trialsm,
		$tubs,
		$footer,
		$patinfo,
		$presinfo,
		$isi,
		$isiscroller,
		$clicktag,
		$tm,
		$tw1,
		$tw2,
		$tweenActive;	
	
	//INTITIALIZE
	var init = function(){
		if (Enabler.isInitialized()) {
		    enablerInitHandler();
		} else {
		    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
		}
	};
	
	//PRELOAD SPRITESHEETS
	var loadSpriteSheet = function(){
		var loadedImages = 0;
		var imageArr = [
			'words.png',
			'numbers.png'
		];

		preloadImages();

		function preloadImages(){
			for(var i = 0; i<imageArr.length;i++){
				var tempImage = new Image();
				tempImage.src = imageArr[i];
				tempImage.onload = function (){
					trackProgress();
				}
			}
		}

		function trackProgress(){
			loadedImages++;
			if(loadedImages == imageArr.length){
				enablerInitHandler();
				//console.log('ELEMENTS SET AND LOADED');
			}
		}

	};
	//PRELOAD JQUERY; CHECK IF ASSETS LOADED
	var enablerInitHandler = function(){
		//loadJsCssFile('//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js', setupElements);
		loadJsCssFile('https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js',setupElements);
	};
	//SETUP ELEMENTS
	
	var setupElements = function(){
		//Set variables
  		$loader = $('#cls_loader');
		$scene1 = $('#cls_scene1');
		$scene2 = $('#cls_scene2');
		$geta = $('#cls_geta');
		$free = $('#cls_free');
		$countdown = $('#cls_countdown');
		$wipe = $('#cls_radialwipe');
		$croppedr = $('#cls_postwipe_right');
		$countdown = $('#cls_countdown');
		$day = $('#cls_day');
		$tablet = $('#cls_tablet');
		$swoosh = $('#cls_swoosh');
		$small30l = $('#cls_small30_left');
		$small30r = $('#cls_small30_right');
		$triallg = $('#cls_freetriallg');
		$trialsm = $('#cls_freetrialsm');
		$tubs = $('#cls_tubs');
		$footer = $('#cls_footer');
		$patinfo = $('#cls_isi_patinfo');
		$presinfo = $('#cls_isi_presinfo');
		$isi = $('#cls_isi_container');
		$isiscroller= $('#cls_isi_copy');
		$clicktag = $('#cls_clicktag');
		
		//Configure initial properties
		$free.css('opacity', 0);
		$countdown.css('opacity', 0);
		$day.css('opacity', 0);
		$swoosh.css('opacity', 0);
		$small30l.css('display', 'none');
		$small30r.css('display', 'none');

		//Define clicktags
		clickTagArr = [$clicktag];
		for(var i = 0; i<clickTagArr.length;i++){
			clickTagArr[i].click(function(){
				Enabler.exit('exit', clickTagUrl);
			})
			clickTagArr[i].css('cursor','pointer');
		}
		
		//LOAD REMAINING JAVASCRIPT AND CSS	FILES
		
		//Use for online testing
        /*
		loadJsCssFile('//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
		loadJsCssFile('jquery.scrollbar.min.js');
		loadJsCssFile('cialis_300x600.css');
		loadJsCssFile('jquery-custom-content-scroller.css');
		loadJsCssFile('//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', removeLoader);
        */
        //load TweenMax
		
		//Use for local testing
		
		loadJsCssFile('http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
		loadJsCssFile('jquery.scrollbar.min.js');
		loadJsCssFile('cialis_300x600.css');
		loadJsCssFile('jquery-custom-content-scroller.css');
		loadJsCssFile('http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', removeLoader);//load TweenMax
		
	};
	
	var removeLoader = function(){
		//console.log('ELEMENTS SET AND LOADED');
		$loader.remove();
		addMouseEvents();
		addTweens();
	};
	
	// MOUSE EVENTS
	var addMouseEvents = function(){
		$patinfo.click(
			function(){ window.open('http://pi.lilly.com/us/cialis-ppi.pdf', '_blank');}
		);
		$presinfo.click(
			function(){ window.open('http://pi.lilly.com/us/cialis-pi.pdf', '_blank');}
		);
		$clicktag.hover(
			function() { $triallg.addClass('cls_freetriallg_over'); $trialsm.addClass('cls_freetrialsm_over');},
			function() { $triallg.removeClass('cls_freetriallg_over'); $trialsm.removeClass('cls_freetrialsm_over');}
		);	
		$patinfo.hover(
			function() { $(this).addClass('cls_isi_patinfo_over'); },
			function() { $(this).removeClass('cls_isi_patinfo_over'); }
		);
		$presinfo.hover(
			function() { $(this).addClass('cls_isi_presinfo_over'); },
			function() { $(this).removeClass('cls_isi_presinfo_over'); }
		);
	};
	
	// ANIMATION
	var addTweens = function(){
		$tm = new TimelineLite();
		$tm.set($triallg, {css:{scale:0}})
		   .to($geta, 0.5, {top:117, ease:Quint.easeOut}, 0.5)
		   .addLabel ('free')
		   .from($free, 1, {scale:0.5, ease:Quint.easeOut}, 'free')
		   .to($free, 1, {css:{opacity:1}, ease:Quint.easeOut}, 'free')
		   .addLabel ('changescene', '+=0.7')
		   .to($scene1, 0.5, {top:508, ease:Quint.easeOut}, 'changescene')
		   .to($scene2, 0.5, {top:92, ease:Quint.easeOut, onComplete:function(){$scene1.remove();}},'changescene')
		   .to($wipe, .7, {backgroundPosition: '-'+(300*30)+'px 0px', ease:new SteppedEase(30), onComplete:clearWipe})
		   .to($day, 0.3, {opacity:1, ease:Quad.easeOut}, '-=0.2')
		   .to($countdown, 0.2, {opacity:1}, '+=1.1')
		   .addLabel ('countdown')
		   .to($countdown, 1.2, {backgroundPosition: '0px -'+(130*29)+'px', ease:new SteppedEase(29), onComplete:bounce30}, 'countdown')
		   .from($countdown, 1.2, {scale:0.8}, 'countdown')
		   .to($tablet, 0.3, {top:266, ease:Quad.easeOut}, '+=0.4')
		   .addLabel ('shrinkcountdown', '+=1')
		   .to($countdown, 0.3, {top:31, ease:Quad.easeOut}, 'shrinkcountdown')
		   .addLabel ('countdownshrunk')
		   .to($tablet, 0.1, {opacity:0, ease:Quad.easeOut}, 'shrinkcountdown')
		   .to($swoosh, 0.3, {opacity:1}, 'shrinkcountdown+=0.2')
		   .to($isi, 0.5, {top:278, ease:Quad.easeOut, onStart:initISI}, 'shrinkcountdown')
		   .to($small30l, 0.5, {left:-110, ease:Quint.easeIn, onStart:swap30}, 'countdownshrunk')
		   .to($small30r, 0.5, {left:306, ease:Quint.easeIn}, 'countdownshrunk')
		   .to($trialsm, 0.2, {left:302, ease:Quint.easeIn}, 'countdownshrunk')
		   .to($triallg, 0.5, {scale:1, ease:Quint.easeIn}, 'countdownshrunk')
		   .to($tubs, 0.2, {left:164, ease:Quint.easeIn, onComplete:animDone}, 'countdownshrunk+=0.3');  
	};
	
	// CALLBACK FUNCTIONS
	var clearWipe = function(){
		TweenMax.to($wipe, 0.2, {opacity:0, onComplete:function(){$wipe.css('display','none');}, delay:1});
		TweenMax.to($day, 0.2, {opacity:0, delay:1});
	};
	
	var initISI = function(){
		$isi.css('display','block');
		initScroller();
	};
	
	var bounce30 = function(){
		TweenMax.to($countdown, 0.1, {scale:1.2, ease:Quad.easeIn});
		TweenMax.to($countdown, 0.1, {scale:1.0, ease:Quad.easeOut, delay:0.1});
	};
	
	var swap30 = function(){
		$countdown.remove();
		$small30l.css('display', 'block');
		$small30r.css('display', 'block');
	};
	
	var animDone = function(){
		scrollText();
        $clicktag.css('height',358);
	};
	
	//ISI SCROLLER FUNCTIONS
	var scrollText = function(){
		$tweenActive = true;
		$tw1 = TweenMax.to($('#mCSB_1_container'), 60, {top:'-=200px', ease:Linear.easeNone});
		$tw2 = TweenMax.to($('#mCSB_1_dragger_vertical'), 60, {top:'+=10px', ease:Linear.easeNone, onComplete: rewindScroller});
	};
	
	var rewindScroller = function(){
		TweenMax.to($('#mCSB_1_container'), .8, {top:'+=200px', ease:Quint.easeInOut});
		TweenMax.to($('#mCSB_1_dragger_vertical'), .8, {top:'-=10px', ease:Quint.easeInOut});
	};
	
	//ISI SCROLLER PARAMETERS
	var initScroller = function(){
		$isiscroller.mCustomScrollbar({
			scrollInertia: 300,	//scrolling momentum as duration in milliseconds. Higher value = longer scrolling momentum 
			contentTouchScroll: true,	//Enable or disable content touch-swipe scrolling for touch-enabled devices.
			theme: 'dark-3',
			mouseWheel: {
			    scrollAmount: 3,	//mouse-wheel scrolling amount (in pixels)
			    deltaFactor: 2,		//number of pixels one wheel notch scrolls
			    normalizeDelta: true	//Enable or disable mouse-wheel acceleration
			    },
			setWidth: (true, 286),	//width of textbox
			callbacks:{
				onScroll:function(){//when scroll is complete
				//console.log('REWIND');
				},
				whileScrolling:function(){//while scrolling is active
					if ($tweenActive) {
						$tw1.kill();
						$tw2.kill();
						$tweenActive = false;
					}
				}
			}
		});
	};
	
	//DYNAMICALLY LOAD JS/CSS + CALLBACK
	//Source: http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
	var loadJsCssFile = function(filename,func){
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
	
	return {
		init: init 
	};	
	
})();
		
ctr.init(); //Run Animation