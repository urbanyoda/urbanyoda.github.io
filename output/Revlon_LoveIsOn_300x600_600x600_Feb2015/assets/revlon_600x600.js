var ctr = (function (){
	
	//DEFINE MODULE GLOBAL VARIABLES
    var debug = false; //for local testing
    var firstRun = true;
    var msgSelected = false;
    var isExpanded = false;
    var isExit = false;
	var clickTagUrl = 'http://www.revlon.com/loveison';
    var clickTagArr = [];
    var onPreview = false;
    var shareview = null; 
 
	var $loader,
		$collapsed,
        $intro,
		$logo,
		$ilu,
		$youre,
        $bold,
        $brilliant,
        $intense,
		$lipstick,
		$expresshare,
		$sendnote,
        $form,
		$expresslove,
		$dear,
		$recip,
		$ilu2,
		$messages,
		$continue,
		$expanded,
        $shades,
        $colorname,
        $slider,
        $slarrowl,
        $slarrowr,
        $slcore,
        $note,
        $text,
        $sender,
        $review,
		$preview,
        $prev1,
        $prev2,
        $prev3,
        $prev4,
        $prev5,
		$loveison,
		$logolg,
		$share,
		$sharetag,
		$sharetext,
		$shareemail,
		$sharefb,
		$shareig,
        $sharerestart,
        $email,
        $emailto,
        $emailfrom,
        $send,
        $scrollbar,
		$tweenActive,
        $clicktag,
        $tmintro,
        $tmform,
        $closebtn,
        $closebtn2,
        $exit,
        list,
        activeindex,
        activemsg,
        activeshade,
        activecolor,
        sendto,
        sender,
        sendfrom,
        imgurl;
        
    var messages = ["you laugh at my&nbsp;jokes", "you hold my&nbsp;hand", "you catch my eye across the&nbsp;room", "you give the best&nbsp;massages", "you like rom-coms&nbsp;too", "you're a night&nbsp;owl", "you're a morning&nbsp;person", "you make me more&nbsp;me", "you put hot sauce on everything&nbsp;too", "you let me pick the&nbsp;movie", "you're always ready with a warm&nbsp;hug", "you have some serious dance&nbsp;moves", "you can hang with my&nbsp;friends", "you make me feel&nbsp;beautiful", "you're the only one I can talk to&nbsp;pre-coffee", "you're a dog&nbsp;person", "you're a cat&nbsp;person", "you listen to my dad's&nbsp;stories", "you listen to my mom's&nbsp;stories", "you spoil the&nbsp;dog", "you let me&nbsp;vent", "you make me smile, even when I'm mad at&nbsp;you", "you let me repeat my&nbsp;stories", "you tell me when something's in my&nbsp;teeth", "you know all my&nbsp;secrets", "you believe in&nbsp;me", "you're my partner in&nbsp;crime", "you make me forget to check my&nbsp;phone", "you're always down for&nbsp;karaoke", "you take care of me when I'm&nbsp;sick", "you're the best part of my&nbsp;day", "you let me be the little&nbsp;spoon", "you're happy to see me, even if I'm&nbsp;late", "you'll switch dinners when I order&nbsp;wrong", "you always know just what to&nbsp;say", "you sing in the&nbsp;shower", "you give me the last&nbsp;slice", "you let me hog the&nbsp;blankets", "you make the&nbsp;bed", "you never turn down an&nbsp;adventure", "you're always on my&nbsp;side", "you can keep a&nbsp;secret", "you know how I take my&nbsp;coffee", "you know how I take my&nbsp;tea", "you create the best&nbsp;playlists", "you let me have the window&nbsp;seat", "you snort when you&nbsp;laugh", "you think I'm cute,&#13;even in the&nbsp;morning", "you notice my new red&nbsp;lipstick", "you can make friends with&nbsp;anyone","you compliment my&nbsp;makeup","you're an amazing&nbsp;dad","you wake up with the&nbsp;kids"];
    var shades = ["HD MAGNOLIA", "HD ROSE", "HD HYDRANGEA", "HD PEONY", "HD AZALEA", "HD IRIS", "HD POPPY", "HD POINSETTIA", "HD PRIMROSE", "HD TULIP", "HD GERMANIUM", "HD HIBISCUS", "HD CAMELIA", "HD GLADIOLUS", "HD MARIGOLD", "HD SWEET PEA", "HD ORCHID", "HD DAHLIA", "HD SNAPDRAGON", "HD PETUNIA"];
    var shadeshex = ["#e18d8e", "#db7383", "#ef4e74", "#f27ca4", "#ee398a", "#94034b", "#de1d24", "#d12149", "#ab5560", "#f27171", "#f15a5b", "#f37469", "#b77c6c", "#e01a3b", "#ef4730", "#f172a7", "#d93a96", "#ab353c", "#9d4b3d", "#ce0d60"];
    var shadescss = ["rev-magnolia", "rev-rose", "rev-hydrangea", "rev-peony", "rev-azalea", "rev-iris", "rev-poppy", "rev-poinsettia", "rev-primrose", "rev-tulip", "rev-germanium", "rev-hibiscus", "rev-camelia", "rev-gladiolus", "rev-marigold", "rev-sweetpea", "rev-orchid", "rev-dahlia", "rev-snapdragon", "rev-petunia"];
    
	//INTITIALIZE
	var init = function(){
      politeInit();
		/*if (Enabler.isInitialized()) {
		    enablerInitHandler();
		} else {
		    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
		}*/
	};
    
    var enablerInitHandler = function(){
        if (Enabler.isVisible()){
            politeInit();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, politeInit);
        } 
    };
    
//    var enablerInitHandler = function(){
//        if (Enabler.isPageLoaded()){
//            politeInit();
//        } else {
//            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
//        } 
//    };
//    
    //PRELOAD JQUERY; CHECK IF ASSETS LOADED
	var politeInit = function(){
        loadJsCssFile('https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',setupElements);
	};
	
	//PRELOAD SPRITESHEETS
	var loadSpriteSheet = function(){
    var loadedImages = 0;
    var imageArr = ['rev-images.png'];

    preloadImages();

    function preloadImages(){
        for(var i = 0; i<imageArr.length;i++){
            var tempImage = new Image();
            tempImage.src = imageArr[i];
            tempImage.onload = trackProgress();
        }
    };

    function trackProgress(){
        loadedImages++;
        if(loadedImages == imageArr.length){
            enablerInitHandler();
            //console.log('ELEMENTS SET AND LOADED');
        }
    };

};
	
	//SETUP ELEMENTS
	var setupElements = function(){
        console.log("moo");
        if (firstRun) {
            //Set variables
            $loader = $('#rev-loader');
            $collapsed = $('#rev-collapsed');
            $intro = $('#rev-intro');
            $logo = $('#rev-logo');
            $ilu = $('#rev-ilu');
            $youre = $('#rev-youre');
            $bold = $('#rev-bold');
            $brilliant = $('#rev-brilliant');
            $intense = $('#rev-intense');
            $lipstick = $('#rev-lipstick');
            $expresshare = $('#rev-expresshare');
            $sendnote = $('#rev-sendnote');
            $form = $('#rev-form');
            $expresslove = $('#rev-xpresslove');
            $dear = $('#rev-dear');
            $recip = $('#rev-recip');
            $ilu2 = $('#rev-ilu2');
            $messages = $('#rev-messages');
            $continue = $('#rev-continue');
            $expanded = $('#rev-expanded');
            $shades = $('#rev-shades');
            $slarrowl = $('#rev-arrow-l');
            $slarrowr = $('#rev-arrow-r');
            $slider = $('#rev-slider');
            $colorname = $('#rev-colorname');
            $note = $('#rev-note');
            $text = $('#rev-text1');
            $sender = $('#rev-sender');
            $review = $('#rev-review');
            $preview = $('#rev-preview');
            $prev1 = $('#rev-prev1');
            $prev2 = $('#rev-prev2');
            $prev3 = $('#rev-prev3');
            $prev4 = $('#rev-prev4');
            $prev5 = $('#rev-prev5');
            $loveison = $('#rev-loveison');
            $logolg = $('#rev-logo-lg');
            $share = $('#rev-share');
            $sharetag = $('#rev-share-tag');
            $sharetext = $('#rev-share-text');
            $shareemail = $('#rev-share-email');
            $sharefb = $('#rev-share-fb');
            $shareig = $('#rev-share-ig');
            $sharerestart = $('#rev-share-restart');
            $closebtn = $('#rev-close-btn');
            $closebtn2 = $('#rev-close-btn2');
            $email = $('#rev-email');
            $emailto= $('#rev-emailto');
            $emailfrom = $('#rev-emailfrom');
            $send = $('#rev-send');
            $scrollbar = $('#rev-scrollbar-track');
            $exit = $('.rev-exit');
    
            //Configure initial properties
            //$loader.css('opacity', 0);
            $recip.val('');
            $sender.val('');
            $sender.on('keydown',function(){
              $( this ).css({"font-style":"normal"});
             });
            //Define clicktags
            clickTagArr = [$exit];
            for(var i = 0; i < clickTagArr.length; i++){
                clickTagArr[i].click(function(){
                    onExit();
                    //Enabler.exit('exit', clickTagUrl);
                });
                clickTagArr[i].css('cursor','pointer');
            };

            //LOAD REMAINING JAVASCRIPT AND CSS	FILES

            if (debug) {
                loadJsCssFile('https://ajax.googleapis.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
                loadJsCssFile('http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', removeLoader);
            } else {

                loadJsCssFile('http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
                loadJsCssFile('http://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/utils/Draggable.min.js');
                loadJsCssFile('http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', removeLoader);
            }
            //loadJsCssFile('http://frederickjaime.info/Revlon/extract/rev-styles.css');
            loadJsCssFile('html2canvas.js');
        }
	};
	
	var removeLoader = function(){
        addListeners();
		console.log('ELEMENTS SET AND LOADED');
		$loader.remove();
		//addMouseEvents();
        addTweens();
		/*if (debug) {
            selectMessages();
        } else {
            addTweens();
        };*/
    };
    
    var addListeners = function (){ 
        /*Enabler.setExpandingPixelOffsets('300','0');
        Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, showExpanded);
        Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, setupSlider);
        Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, reInit);
        Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, selectMessages);*/
        //Enabler.addEventListener(studio.events.StudioEvent.EXIT, onExit);
    };
        /*Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, onExpandStart);
        Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, onExpandFinish);
        Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, onCollapseStart);
        Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, onCollapseFinish);
        Enabler.addEventListener(studio.events.StudioEvent.EXIT, onExit);*/
       /* var onExpandStart = function() {
            if (!debug) Enabler.requestExpand();
        };

        var onExpandFinish = function() {
            if (!debug) Enabler.finishExpand();
        };

        var onCollapseStart = function() {
            if (!debug) Enabler.requestCollapse();
        };

        var onCollapseFinish = function() {};

        var onExit = function() {
            if (!debug) Enabler.exit('exit', clickTagUrl);
            */

	
	// MOUSE EVENTS
	var addMouseEvents = function(){
        /*$continue.click(function(){
            console.log (msgSelected);
            if (msgSelected) onExpandStart();
        });*/
    };
	
	// ANIMATION
	var addTweens = function(){
		$tmintro = new TimelineLite();
        //.to($lipstick, 0.7, {left:250, rotation:-27, transformOrigin:"center top", ease:Quint.easeOut})
        $tmintro.to($ilu, 0.6, {autoAlpha:1, ease:Sine.easeOut})
        .to($youre, 0.6, {autoAlpha:1, ease:Sine.easeOut}, "-=0.0")
        .to($bold, 0.6, {autoAlpha:1, ease:Sine.easeOut}, "-=0.6")

        .to($bold, 0.6, {autoAlpha:0, ease:Sine.easeOut}, "+=.7")
        .to($brilliant, 0.6, {autoAlpha:1, ease:Sine.easeOut}, "+=0")

        .to($brilliant, 0.6, {autoAlpha:0, ease:Sine.easeOut}, "+=.7")
        .to($intense, 0.6, {autoAlpha:1, ease:Sine.easeOut}, "-=0.25")

        .add("step2", "+=.7")
        .to($youre, 0.6, {autoAlpha:0, ease:Sine.easeOut}, "step2")
        .to($intense, 0.6, {autoAlpha:0, ease:Sine.easeOut}, "step2")

        .to($ilu, 0.6, {autoAlpha:0, ease:Sine.easeOut}, "step2")
        .to($lipstick, 0.6, {top:221, left:85,autoAlpha:1, rotation:0, transformOrigin:"center top", ease:Sine.easeOut}, "step2")
        .to($expresshare, 0.6, {autoAlpha:1, ease:Sine.easeOut}, "step2")
        .to($expresshare, 0.6, {top:48, ease:Sine.easeOut}, "+=1")
        .to($sendnote, 0.6, {autoAlpha:1, ease:Sine.easeOut}, "-=0.4")
        .call(selectMessages) 
};

	// CALLBACK FUNCTIONS
	
    //MAIN FUNCTIONS    
    var selectMessages = function() {
        isExpanded = false;
        //Randomize messsages
        //In for loops, var i = # of messages, j = # of options listed)
        
        var ar = [];
        //Number of messages
        for (var i = 0; i < 53; i++) {
            ar[i] = i;
        }
        ar.sort(function () {
          return Math.random() - 0.5;
        });
        //Reset messages and lists options
        list = $messages.empty().append('<ul>').find('ul');
        for (var j = 0; j < 8; j++) {
            list.append('<li><div class="rev-options rev-outer"><div class="rev-inner"><p>' + messages[ar[j]] + '</p></div></div></li>');
        }
        setScroller($messages, list);
        if (firstRun) activateForm();
    };
    
    var activateForm = function() {
        TweenMax.to($intro, .6, {left:-300, delay:2, ease:Sine.easeOut});
        TweenMax.to($form, .6, {left:0, delay:2, ease:Sine.easeOut});
        document.addEventListener("scrollinitcomplete", activateMessages);
    };
        
    var activateMessages = function() {
        //Add hover to message list elements
        var listelems = list.find('li');
        listelems.css('cursor','pointer');        
        listelems.hover(
			function() { $(this).addClass('rev-messages-hover');},
			function() { $(this).removeClass('rev-messages-hover');}
		);
        //Set color when message list element is clicked
        //listelems.click(function(e) {
        listelems.on('click',function(e){
            
            $(this).siblings().removeClass('rev-messages-click');
            $(this).addClass('rev-messages-click');
            activemsg = $(this).text();
            showContinue();
        });
    };
    
    var showContinue = function() {
        if (!msgSelected) {TweenMax.from($continue, 0.3, {autoAlpha:0});}
        msgSelected = true;
        $continue.click(function(){
            console.log (msgSelected);
            if (msgSelected) showExpanded(); 
//            if (msgSelected) Enabler.requestExpand(); 
        });
    };
           
    var showExpanded = function() { //from onExpandStart();
        sendto = $recip.val();
        $collapsed.addClass('rev-hide');
        $expanded.addClass('rev-show');
//        if (!debug) Enabler.finishExpand();
        if (!debug) setupSlider();
        $sharerestart.on('click',function(){
//            Enabler.requestCollapse();
            reInit();
            $share.removeClass('rev-show');
            $share.addClass('rev-hide');
            
            
            console.log(shareview+" do another one");
            //shareview = null;

        });
        $closebtn.click( function() {
//            Enabler.requestCollapse();
          reInit()
           $share.removeClass('rev-show');
            $share.addClass('rev-hide');
           
            console.log(shareview+" close x");
            //shareview = null;
           

        });
    };
    
    var setupSlider = function() {
        firstRun = false;
        isExpanded = true;
        $slcore = $slider.empty().append('<ul id="rev-slider-core"></ul>').find('ul');
        for (var i=0; i < 20 ; i++) {
            $slcore.append('<li><div class="'+ shadescss[i] +' rev-images rev-tips">' + i + '</div></li>');
        }
        if (sendto) $text.empty().html('Dear ' + sendto + ',');
        $note.find('.rev-inner').html('<span class="cm">'+activemsg+'</span>');
        var $t = $slcore.find('.rev-tips');
        $slarrowl.toggleClass( 'rev-arrow-disabled' );
        //Randomly choose one of the first 10 colors
        var $slintro = new TimelineLite();
        $slintro.staggerFrom($t, 1.5, {top:50, ease:Elastic.easeOut}, 0.05, "", positionSlider);
    };
    
    // init slider initial state and activates arrows
    var positionSlider = function(){
       //activeindex = Math.floor(Math.random() * 20);
       activeindex = 13; /*Requested for this tip to be the init color*/
        console.log(activeindex);
        if (activeindex > 9) {
            moveSliderLeft();
            setTimeout(initSlider, 250);
        } else {
            initSlider();
        }
    };
    
    var initSlider = function(){
        selectShade(activeindex);
        var tips = $slcore.find('.rev-tips');
        var ntip = tips.eq(activeindex);
        ntip.addClass('rev-tip-active');
        $slcore.on('click',function(){
            var tip = $(this);
            var option = tip.text();
            if (option>=0 && option<=19) {
                tips.removeClass('rev-tip-active')
                tip.addClass ('rev-tip-active');
                selectShade(option);
            }
        });
        /* added mouse over: */
        $('#rev-slider li div').on('mouseenter',function(){
            var tip = $( this);
            var option = tip.text();
            if (option>=0 && option<=19) {
                tips.removeClass('rev-tip-active')
                tip.addClass ('rev-tip-active');
                selectShade(option);
            }
        })
        $slarrowl.click(moveSliderRight);
        $slarrowr.click(moveSliderLeft);

        $slarrowl.mouseenter(moveSliderRight);
        $slarrowr.mouseenter(moveSliderLeft);
        $review.click(setupReview);
    };

    var selectShade = function(id) {
        activeindex = Number(id);
        activeshade = shades[activeindex];
        activecolor = shadeshex[activeindex];
        $colorname.html(activeshade);
        $note.css('color', activecolor);

    };
    
    var moveSliderRight = function() {
        $slarrowl.addClass( 'rev-arrow-disabled' ).prop('disabled',true);
        $slarrowr.removeClass( 'rev-arrow-disabled' ).prop('disabled',false);
        TweenMax.to($slcore, 0.4, {left:0, ease:Quint.easeInOut});
    }
   
    
    var moveSliderLeft = function() {
        $slarrowl.removeClass( 'rev-arrow-disabled' ).prop('disabled',false);
        $slarrowr.addClass( 'rev-arrow-disabled' ).prop('disabled',true);
        TweenMax.to($slcore, 0.4, {left:-520, ease:Quint.easeInOut});
    }
   
   
    var setupReview = function() {
        var sender = $sender.val();
        if (sendto) $prev1.html('Dear ' + sendto + ',');
        $prev2.text('I love you because');
        $prev3.empty().append('<div class="rev-outer"><div class="rev-inner">' + activemsg + '</div></div>')
        $prev3.find('.rev-inner').css('color', activecolor);
        if (sender) {
            $prev3.css('top', '176px');
            $prev4.html('xo ' + sender);
        }
        $prev5.empty().append('MY LOVE EXPRESSED IN REVLON ULTRA HD&#8482; LIPSTICK <span>' + activeshade +'</span>');
        $shades.addClass('rev-hide');
        $preview.addClass('rev-show');
        captureImage();
        onPreview = true;
    }
    
    var captureImage = function() {
        $preview.addClass('rev-preview-border');
        
        html2canvas($preview, {
            proxy: "",
            onrendered: function(canvas) {
                var img = canvas.toDataURL("image/png");
                var output = encodeURIComponent(img);
                var params = "image=" + output + "&filedir=" + "rendered";
                $.ajax({
                    type: "POST",
                    url: "http://urbanyoda.github.io/output/Revlon_LoveIsOn_300x600_600x600_Feb2015/assets/savePNG.php",
                    data: params,
                    success : function(data){
                        console.log("screenshot done");
                        imgurl = 'http://urbanyoda.github.io/output/Revlon_LoveIsOn_300x600_600x600_Feb2015/assets/' + data;
                        console.log(imgurl);
                        $preview.removeClass('rev-preview-border');
                        
                           

                            shareview = setTimeout(function(){
                                setupShare();
                                //clearInterval(shareview);
                               
                                shareview = null;
                            }, 5000);
                        
    
                       
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log('error');
                        console.log(errorThrown);
                    }
                });
            }
        });
    };
    
    var setupShare = function() {
            $share.removeClass('rev-hide'); 
            $share.addClass('rev-show');
            
            shareEmail()
            shareFB();
            shareIG();
            $share.css({top:0,opacity:0});
            TweenMax.to($share, 0.5, {autoAlpha:1, delay:0,overwrite:true, ease:Quint.easeOut});
        
        
        
    };
    
    var shareEmail = function() {
        $closebtn2.on('click',function(){
             $email.removeClass('rev-show');
        })
        $shareemail.click(function(){
            $email.addClass('rev-show');
            $share.addClass('rev-solidblack');
            $send.click(function(e){
            var emailto = $emailto.val();
            var emailfrom = $emailfrom.val();
            if (emailto && emailfrom) {
                    var params = "image=" + imgurl + "&emailto=" + $emailto.val() + "&emailfrom=" + $emailfrom.val() + "&messagesender=" + $sender.val();
                    console.log(imgurl);
                    $.ajax({
                        type: "POST",
                        url: "http://frederickjaime.info/Revlon/extract/sendemail.php",
                        data: params,
                        success : function(data){
                            console.log("email sent");
                            $email.removeClass('rev-show');
                            $share.removeClass('rev-solidblack');
                            console.log(data)
                        }
                    });
                }
            });
        });
    };


    
    var shareFB = function() {
        var socialNet,
            DialogW = 520,
            DialogH = 350,
            winTop = (screen.height / 2) - (DialogW / 2),
            winLeft = (screen.width / 2) - (DialogH / 2),
            url_pass;
    
        var popitup = function(url) {
            newwindow = window.open(url,'name','width='+DialogW+',height='+DialogH+',menubar=no,location=no,scrollbars=no,toolbar=no,left='+winLeft+',top='+winTop);
            if (window.focus) {newwindow.focus()}
            return false;
        };
        
        $sharefb.click(function(){
            console.log(imgurl);
            var info = {
                'href' : 'https://www.facebook.com/dialog/feed',//$ele.attr('href'),
                'url' : encodeURIComponent( 'http://loveison.com' ),
                'title' : encodeURIComponent( 'I love you because....' ),
                'picture' : encodeURIComponent( imgurl ),
                'description' : encodeURIComponent( 'Share your love #LOVEISON' ),
                'caption' : encodeURIComponent( 'Expressed in NEW Revlon Ultra HD Lipstick' ),  // This is usually just the brand name
                'display' : 'popup',
                // Unfortunately, you need a FB App ID to use this dialog, so just create one titled after the brand if you don't already have one
                'app_id' : '318743028326770'
            };
			url_pass = info.href + "?app_id=" + info.app_id + "&display=" + info.display + 
				"&link=" + info.url + "&name=" + info.title + "&caption=" + info.caption + 
				"&picture=" + info.picture + "&description=" + info.description + 
				"&redirect_uri=http://frederickjaime.info/closeWindow.html";
			popitup(url_pass);
        });
    };

    var shareIG = function() {
        var downloadurl = 'http://frederickjaime.info/Revlon/extract/download.php?image='+imgurl;
        $shareig.attr('href',downloadurl);
        $shareig.on('click',function(){
                //var params = "image=" + imgurl;
                //window.location = 'frederickjaime.info/Revlon/extract/download.php?image='+imgurl;
                    //console.log(params);
                    /*
                    $.ajax({
                        type: "GET",
                        url: "http://frederickjaime.info/Revlon/extract/download.php",
                        data: params,
                        success : function(data){
                          
                    });
                    */
        });
    };

    
    var reInit = function() {
        //reset back to animation-completed collapsed state
        //Enabler.requestCollapse();
        console.log("value of recip "+$recip.val()+" | "+$sender.val());
        $expanded.removeClass('rev-show');
        $email.removeClass('rev-show');
        $collapsed.removeClass('rev-hide');
        $shades.removeClass('rev-hide')
        $preview.removeClass('rev-show');
        $share.css('visibility', 'hidden');
        $continue.css('visibility', 'hidden');
        msgSelected = false;
        onPreview = false;
        $share.removeClass('rev-show');
        $share.addClass('rev-hide');
        $share.css({top:-600,opacity:0});
        $text.html('');
        $recip.val('');
        $sender.val('');
        $prev1.html('');
        $prev4.html('');

        

        $(':input').val('');
        console.log("value of recip "+$recip.val()+" | "+$sender.val());
        activecolor = "";
        activemsg ="";
        activeshade ="";
        if (!debug) Enabler.finishCollapse();
        if (isExit) {
            Enabler.exit('exit', clickTagUrl);
        }
    };
    
    var onExit = function() {
        //Activates DCS exit 
        console.log('exit');
        isExit = true;
        $recip.val('');
        Enabler.requestCollapse();
    };
    
    var setScroller = function(scrollparent, scrollchild){
        scrollparent.append('<div id="rev-scrollbar-track"><div id="rev-scrollbar"><div id="rev-scrollbar-core"></div></div></div>');
        function scrollBar(){
            var scrollbarTrack = $('#rev-scrollbar-track');
            var scrollbar = $('#rev-scrollbar');
            var parentHeight = scrollparent.height();
            var childHeight = scrollchild.height();
            var childMinY = -(childHeight - parentHeight + 2);
            scrollbarTrack.height(parentHeight);
            var trackHeight = scrollbarTrack.height();
            var scrollbarHeight = Math.floor((parentHeight/childHeight)*trackHeight);
            var scrollbarMaxY = trackHeight - scrollbarHeight;
            var scrollbarTop;
            scrollbar.height(scrollbarHeight);
            if (firstRun) {
                var draggable;
                TweenMax.to(scrollchild, 1, {top:childMinY, ease: Quint.easeOut, delay:4});
                TweenMax.to(scrollbar, 1, {top:scrollbarMaxY, ease: Quint.easeOut, delay:4});
                TweenMax.to(scrollchild, 1, {top:0, ease: Quint.easeOut, delay:6});
                TweenMax.to(scrollbar, 1, {top:0, ease: Quint.easeOut, delay:6, onComplete:setDraggable});
            } else {
                setDraggable();
            }

            function setDraggable() {
                draggable = Draggable.create('#rev-scrollbar', {
                    type:"y",
                    edgeResistance:1,
                    bounds: '#rev-scrollbar-track',
                    throwProps:false,
                    onClick:function() {
                        console.log("clicked");
                    },
                    onDrag:function() {
                        console.log("dragging");
                        scrollbarTop = scrollbar.position().top;
                        var scrollTopNew = -Math.floor((scrollbarTop/trackHeight)*childHeight);
                        scrollchild.stop().animate({
                            top: scrollTopNew
                        }, 400, 'easeOutCirc');
                    },
                    onDragEnd:function() {
                        console.log("drag ended");
                        scrollchild.stop();
                        if ((scrollchild.position().top != 0) && (scrollbarTop == 0)) {
                             scrollchild.animate({
                                top: 0
                            }, 10, 'easeOutCirc');
                        }
                        if ((scrollchild.position().top != childMinY) && (scrollbarTop == scrollbarMaxY)) {
                             scrollchild.animate({
                                top: childMinY
                            }, 10, 'easeOutCirc');
                        }
                    }
                });
                //Create and dispatch event when scroller intro animation completes
                var scrollevent = new CustomEvent( "scrollinitcomplete", {
                    /*detail: {
                        message: "",
                        time: new Date(),
                    },
                    */
                    bubbles: true,
                    cancelable: true
                });
                document.dispatchEvent(scrollevent);
            };
        };
        scrollBar();
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
		init: init,
        pinit: politeInit
	};	
	
})();
		
ctr.init(); //Run module
//ctr.pinit(); //Run module