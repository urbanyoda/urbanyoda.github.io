var time = 1;
var clickTag = "http://www.ally.com";//"<a href=http://www.google.com" + ">";
var firstRun = true;
var oldIndex = 0;
var newIndex = 0;
var tm, tl;
var headlineArr =["ha", "hb", "hc", "hd", "he", "hf"];
var btextArr =["ba", "bb", "bc", "bd", "be", "bf"];

var scrollDTC = {
	
	//INTITIALIZE
	init:function(){
		if (Enabler.isInitialized()) {
		    scrollDTC.enablerInitHandler();
		} else {
		    Enabler.addEventListener(studio.events.StudioEvent.INIT, scrollDTC.enablerInitHandler);
		}
	},
	//LOAD SPRITESHEET
	loadSpriteSheet:function(){
		var loadedImages = 0;
		var imageArr = [
			"bodytext.svg",
			"graphics.svg",
			"headlines.svg",
			"photos.png"
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
				scrollDTC.enablerInitHandler();
				//console.log("ELEMENTS SET AND LOADED");
			}
		}


	},
	//ENABLER CHECK IF ASSETS LOADED
	enablerInitHandler:function(){
		loadJsCssFile("http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",scrollDTC.setupElements);
	},
	//SETUP ELEMENTS
	setupElements:function(){
  		$load = $('#loader');
		$headline = $('#headline');
		$btext = $('#btext');
		$slider = $('#slider');
		$swipeinfo = $('#swipeinfo');
		$arrowl = $('#arrowl');
		$arrowr = $('#arrowr');
		$learnmore = $('#learnmore');
		$blocker = $('#blocker');
		$swipeanim = $('#swipeanim');
		$hand = $('#hand');
		$clicktag1 = $('#clicktag1');
		$clicktag2 = $('#clicktag2');
		
		//Clicktags
		$mainClickTag = "<a href=http://www.ally.com" + ">";
		clickTagArr = [$clicktag2];
		for(var i = 0; i<clickTagArr.length;i++){
			clickTagArr[i].click(function(){
				Enabler.exit('exit', clickTag);
			})
			clickTagArr[i].css('cursor','pointer');
		}
		
		window.mySwipe = new Swipe(document.getElementById('slider'), {
		  startSlide: 0,
		  speed: 800,
		  auto: 0,
		  swipearea:"clicktag1",
		  continuous: true,
		  disableScroll: true,
		  stopPropagation: false,
		  callback: function(index, elem) {
			  Enabler.counter('swipe_count', true);
			  firstRun = false;
			  oldIndex = newIndex;
			  newIndex = index;
			  //scrollDTC.blockerOn(); 
			  if (newIndex < oldIndex) {
				 if ((newIndex - oldIndex) < -1) {
				 	//alert("forwardsLoop" + " old:" + oldIndex + " new:" + newIndex);
				 } else {
					//alert("backwards" + " old:" + oldIndex + " new:" + newIndex) ;
				 }
			  } else {
				 if ((newIndex - oldIndex) > 1) {
				 	//alert("backwardsLoop" + " old:" + oldIndex + " new:" + newIndex);
				 } else {
					//alert("forwards" + " old:" + oldIndex + " new:" + newIndex) ;
				 }
			  }
			  tl.restart();
			  //oldIndex = index;
			  
		  },
		  transitionEnd: function(index, elem) {
			  //
			  //oldIndex = index;
		  }
		});
		
		//MAKE ARROWS CLICKABLE
		$arrowl.click(mySwipe.prev);
		$arrowr.click(mySwipe.next);
		$arrowr.click(function(){console.log("tewst")});
		
		//LOAD JS/CSS
		//loadJsCssFile("css/ally_300x600.css");
		//loadJsCssFile("js/swipe.js");
		
		if (scrollDTC.supportsSVG()) {
		  loadJsCssFile("ally_300x600.css")
		} else {
		  loadJsCssFile("ally_300x600_android2_3.css")
		}
		loadJsCssFile("http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js", scrollDTC.removeLoader);//load TweenMax
		
		//console.log("ELEMENTS SET AND LOADED");
		
		
	},
	
	removeLoader: function(){
		$load.addClass("visoff");
		//scrollDTC.swipeDemo();
		scrollDTC.addTweens();
	},
	
	swipeDemo: function(){
		tm = new TimelineLite();
		tm.to($swipeanim, 0.5, {css:{opacity:1}, ease:Quint.easeOut}, "+=1")
		  .to($hand, 0.5, {css:{left:"+=50", rotation:10}, ease:Quint.easeOut})
		  .to($hand, 0.5, {css:{opacity:0}, ease:Quint.easeOut}, "+=0.3")
		  .to($hand, 0, {css:{left:"-=50", rotation:0}, ease:Quint.easeOut})
		  .to($hand, 0.5, {css:{opacity:1}, ease:Quint.easeOut})
		  .to($hand, 0.5, {css:{left:"-=50", rotation:-10}, ease:Quint.easeOut})
		  .to($swipeanim, 0.5, {css:{opacity:0}, ease:Quint.easeOut}, "+=0.3")
		  .to($slider, 0.5, {css:{opacity:1}, ease:Quint.easeOut, onComplete:scrollDTC.addTweens}, "+=0.3");
	},
	
	addTweens: function(){
		tl = new TimelineLite();
		tl.pause();
		//tl.call(scrollDTC.updateText);
		tl.call(scrollDTC.changeSwipeInfo);
		//tl.call(scrollDTC.blockerOff,[], 0.4);
		tl.to($headline, 0.4, {css:{opacity:0}, ease:Quint.easeOut}, 0);
		tl.to($btext, 0.4, {css:{opacity:0}, ease:Quint.easeOut, onComplete:scrollDTC.updateText}, 0);
		tl.to($headline, 0.4, {css:{opacity:1}, ease:Quint.easeOut}, 0.4);
		tl.to($btext, 0.4, {css:{opacity:1}, ease:Quint.easeOut}, 0.4);
	},
	/*
	onSwipe: function(){
		TweenMax.to($headline, 0.4, {delay:0, css:{opacity:0}, ease:Quint.easeOut, onComplete:scrollDTC.changeSwipeInfo});
		TweenMax.to($btext, 0.4, {delay:0, css:{opacity:0}, ease:Quint.easeOut, onComplete: scrollDTC.updateBanner});
	},
	
	*/
	blockerOff: function(){
		$blocker.removeClass("vison").addClass("visoff");
	},
	
	blockerOn: function(){
		$blocker.removeClass("visoff").addClass("vison");
	},
	
	updateText: function(){
		$headline.removeClass(headlineArr[oldIndex]).addClass(headlineArr[newIndex]);
		$btext.removeClass(btextArr[oldIndex]).addClass(btextArr[newIndex]);
	},
	
	supportsSVG: function() {
  		return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
	},
	
	changeSwipeInfo: function(){
		if(!firstRun){
			$swipeinfo.removeClass("swipelong").addClass("swipeshort");
		}
	}
	
}		
scrollDTC.init();//Run Animation

//LOAD JAVASCRIPT THEN CALLBACK
function loadJsCssFile(filename,func){//http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
	var filetype = filename.substring(filename.lastIndexOf('.')+1);
	if(filetype == 'js'){
		var fileref = document.createElement('script');
		fileref.setAttribute('src', filename);
	}
	else if(filetype == 'css'){
		var fileref = document.createElement('link');
		fileref.setAttribute('rel','stylesheet');
		fileref.setAttribute('href', filename);
	}
	if(typeof fileref!= 'undefined'){
		if(func){
			if(fileref.readyState){//IE
				fileref.onreadsystatechange = function(){
					if(fileref.readyState == "loaded" || fileref.readyState == "complete"){
						fileref.onreadsystatechange = null;
						//console.log("THIS WORKS " +func);
						func();
					}
				};
			}
			else{//other browsers
				fileref.onload = function (){
				//console.log("THIS WORKS " +func);
				func();
				}
			}
		}
		document.getElementsByTagName('head')[0].appendChild(fileref);
	}
	//console.log("FILE LOADED = "+filename+" FILE TYPE = "+filetype);
}