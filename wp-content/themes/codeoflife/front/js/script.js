/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


/* script
 * Written by Raffael Stueken
 */
 
var winW, winH, winR, screenH, emS, screensI = 0, scrolled = 0, theS = 1, exp = false, trans3D = false, thisL = 0, topL, leftL, sizeL = 1, inBetween = [], aboutOff, menuH = 0, bigL = true;
var $screen = [], $contentWrapper = [], $navLink = [], $navCount = [], inView = [], $h4 = [];
var $win, $body, $bigL, $bigLc;

var navH = 20; // height of nav li
var frame = 50; // position of nav item

// distortion time
var dt1 = 500, dt2 = 8000;

// random big letter
var bigL1 = 50, bigL2 = 100;
var starting = true;
var started = false;
var poolS = '&brvbar; &nabla; &oline; &deg; &Delta; &bull;';
var randomCharS = poolS.split(' ');

// random special character
var pool = '&brvbar; &nabla; &oline; &otimes; &brvbar; &bull; &deg; &Delta; &mdash; &lang; &loz; &rarr; &there4; &times; | 1 2 3 4 5 6 8 9 START';
var randomChar = pool.split(' ');

// main render loop
// render as fast as possible and only when tab is in view
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  window.oRequestAnimationFrame      ||
		  window.msRequestAnimationFrame     ||
		  function(/* function */ callback, /* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);
  };
})();
 
$(document).ready(function() {
	
	$('body').append('<div id="bigLetter"><span></span></div>');
	$('main').append('<section class="fix-section container postContainer full"></section>');
	$('.landerWrapper').append('<p class="lander-text">Be present</p>');
	$('.landerWrapper').append('<p class="lander-scroll"><a href="#about" class="cf" id="scroll-down">Scroll down</a></p>');

	$win = $(window);
	$body = $('body');
	$bigL = $('#bigLetter');
	$bigLc = $('#bigLetter span');
	
	$('.videoWrapper video').removeAttr('controls');
	$('.videoWrapper').addClass("paused").click(function() {
		$(this).find('video')[0].paused ? $(this).removeClass("paused").find('video')[0].play() : $(this).addClass("paused").find('video')[0].pause(); 
		return false;
	} );
	
	var screenSize = screen.width; //(screen.width > screen.height) ? screen.width : screen.height;
	/*var videoResolution = "480x270";
	if(screenSize >= 640) videoResolution = "640x360";
	if(screenSize >= 800) videoResolution = "800x450";
	if(screenSize >= 1024) videoResolution = "1024x576";*/
	
	//$('.videoWrapper video').get(0).src = ($('.videoWrapper video').get(0).canPlayType('video/mp4')) ? "video/code_of_life-" + videoResolution + ".mp4" : "video/code_of_life-" + videoResolution + ".webm";

	if ($('.videoWrapper video').get(0).canPlayType('video/mp4')) {
		$('.videoWrapper video').get(0).src = $('.videoWrapper video').find('source.mp4').attr('src');
	} else {
		$('.videoWrapper video').get(0).src = $('.videoWrapper video').find('source.webp').attr('src');
	}
	
	initCommon();
	
	if(!$.browser.mobile) {
		cacheScreens();
		init();
	}
	
} );

$(window).load(function() { start(); } );

if($.browser.mobile) $('html').removeClass("js").addClass('mobile');
else $('html').removeClass("no-js").addClass("js");
	

// init site functions
/////////////////////////////////////////
function initCommon() {
	
	// start up after 3sec no matter what
	setTimeout(function(){ start(); }, 2000);

	// handle scrolling
	$win.scroll(function() { handleScroll(); } );
	
	$('#menu, .links-menu .schedule a').click(function() {
		$('body').hasClass('menu-opened') ? $('body').removeClass('menu-opened') : $('body').addClass('menu-opened');
		$('.menu-bar').scrollTop(0);
		var pptop = ($(window).height() - ($('#menu li').height() * ($('#menu li').length+1))) / 2;
		pptop = (pptop < 64) ? 64 : pptop;
		$('#menu').css('padding-top', pptop + "px");
	} );
	$('.menu-bar').scrollTop(0);
	
	// navigation
	initNav();
	
}

function init() {
	
	$('#about h2').css('opacity', 0);

	$('footer').hide();
	setTimeout(function() { $('footer').show(); }, 4000);
	
	// start letter animation
	bigLetterR();

	// get window dimensions
	adjustWindow();
	$win.resize(function() { adjustWindow(); } );

	// add bigger experience for non-touch devises and other than IE < 10
	if($('html').hasClass("no-touch") && !$('html').hasClass("oldie")) {
		$('html').addClass("exp");
		exp = true;
	}
	if($('html').hasClass("csstransforms3d")) trans3D = true;

	// start rendering image
	animloop();

	// start distroy animation
	//disTroy($h4[theS-1],true);

	
	
}

// fade in experience
function start() {

	if(started == false) {

		started = true;

		// start off
		window.setTimeout(function() {

		  // reduce bigL speed
		  bigL1 = 200;
		  bigL2 = 1000;

		  // set full caracter set
		  starting = false;


		  window.setTimeout(function() {
			// show showreel
			$('section.full').css({display: "block", opacity: "0"});
			//$about.css({display: "block", opacity: "1"});
			topOffs();
			$('section.full').animate({opacity: "1"}, 1400, "easeInOutQuad");

			// show navi
			window.setTimeout(function() {
				// reduce bigL speed
					bigL1 = 2000;
					bigL2 = 16000;
					showNav($("li.navLink").last());
				}, 800);

		  }, 1000);

		}, 600);

	}

}

function showNav(el) {

	if(el.prev().length) {
		el.animate({opacity: "1"},300, "easeOutQuad");
	} else {
		window.setTimeout(function() {
			el.animate({opacity: "1"},450, "easeOutQuad");
		}, 300);
	}

	window.setTimeout(function() {
		if(el.prev().length) {
			showNav(el.prev(),false);
		}
	}, 100);


}


// set image and window dimensions
function adjustWindow(){

	// get window size
	winW = $(window).width();
	winH = $(window).height();
	winR = winH/winW;

	if(winR >= 1) { // portrait
		screenH = Math.floor(winH * 1.05);
	} else if(winR < 1 && winH <= 480) { // small landscape
		screenH = 480;
	} else { // normal landscape
		screenH = Math.floor(winH * 1.25);
	}

	// calculate basis em size
	emS = $body.css('font-size');
	emS = emS.replace('px','');


	// set fullscreen sizes
	$('section.full').css({height: screenH});
	// var footer = $('#footer').outerHeight();
	//$('#post6').css({height: winH});

	$('.fix-section').css({height: 0});

	// calculate top offset for every screen
	topOffs();

	var videoH = 0

  // center content vertically and position subhead
  for (var i=0;i<screensI; i++) {
		var thisMargin = Math.floor((winH - videoH) / 2);
		if(thisMargin < 0) { thisMargin = 0; }
		// if(i != screensI - 1) {
		// //custom padding for code of life
	 //    $contentWrapper[i].css({paddingTop: 25 + "px"});
	 //  }
	}

}

function cacheScreens() {

	screensI = $('section.full').length;

	$('section.full').each(function(){
		$screen.push($(this));
		$contentWrapper.push($(this).find(".contentWrapper"));
		inView.push(0);
		/*var h4 = $(this).find("h4");
		$h4.push(h4);
		// destroy first h4s
		if(h4.html()) {
			disTroy(h4,false);
			h4.mouseover(function() {
				disTroy($(this),false);
			});
		}*/
	});

	$('.navLink').each(function(){
		$navLink.push($(this));
		$navCount.push($(this).find(".navCount"));
		inBetween.push(false);
	} );

}

// calculate top offset for every screen
function topOffs() {

	for (var i=0;i<screensI; i++) {
		var topOff = $screen[i].position();
		topOff = topOff.top;
	$screen[i].data("offset", topOff);
	if(i == screensI-1) {
		aboutOff = Math.floor($screen[i].data("offset"));
	}
	}


}

function initNav() {

	$("nav#menu a").live( "click", function(e) {
		var top = ($($(this).attr("href")).offset()).top; //($($(this).attr("href")).data("offset")) ? $($(this).attr("href")).data("offset") : ($($(this).attr("href")).offset()).top;
		$('body,html').animate({scrollTop:top},800, "easeInOutQuad");
		killPadbug(800);
		$(this).parents(".navLink").addClass("active");
		e.preventDefault();
	});

	$("#scroll-down").live( "click", function(e) {
		$('body,html').animate({scrollTop: $($(this).attr("href")).data("offset")},800, "easeInOutQuad");
		killPadbug(800);
		e.preventDefault();
	});

	// position navi
	if(exp) {
		for (var i=0;i<(screensI-2); i++) {
			$navLink[i].css({top: ( winH - frame - (navH * screensI) + (navH * i)) + "px"});
			// calculate navH
			menuH = menuH + 20;
		}
	}
}


// rendering
function render() {

	for (var i=0;i<screensI; i++) {
		// is screen in view?
		var thisOffset = $screen[i].data("offset");
		if((scrolled + winH) > thisOffset) { // already in view?
			if(scrolled < (thisOffset+ winH)) { // still in view?
				renderScreen(i,thisOffset);
				theS = i;
			}
		} else {
			inView[i] = 0; // prevent from missing inview state
		}

		if(exp) {
			if(i<(screensI) && exp) {
			  if($navLink[i]) {
				renderNav(i,thisOffset);
			  }
			}
		}
	}

	if(exp) {
		renderNavA();
	}

}

function renderNav(i,thisOffset) {

	var navPos = Math.floor((thisOffset - scrolled));
	var bottomPos = (winH - (frame * 3) - (navH * screensI) + (navH * i));
	var topPos = (frame + (navH * i));

	// render only if projects are in view
	if((scrolled + frame + menuH) < aboutOff) {

		if (navPos > bottomPos) {
		  navPos = bottomPos;
		}
		if (navPos < topPos) {
		  navPos = topPos;
		}

	} else { // scroll out of view if about comes in view

		navPos = Math.floor(aboutOff + (navH * i) - scrolled - frame - menuH);

	}
	//Se asigna el tope superior del primer elemento del navlink
	$navLink[i].css({top: navPos + 51 + "px"});

}

function renderNavA() {

	var bottomPos = 0;
	var topPos = winH - (16 * emS);

	// render only if projects are in view
	if((scrolled + (winH * 0.5)) > aboutOff) {

		var navPos = Math.floor((scrolled + (winH * 0.5) - aboutOff) * 1.7);

		if (navPos < bottomPos) {
		  navPos = bottomPos;
		}
		if (navPos > topPos) {
		  navPos = topPos;
		}

	} else { // scroll out of view if about comes in view

		var navPos = 0;

	}
}

// thisOffset = obere ecke section
// scrolled = bei start 0 / zB: ein fullscreen gescrolled 1000 (winH)

function renderScreen(i,thisOffset) {

	// render only for big experience
	if(exp) {

		// calculate zoom
		var zoom = ((scrolled + winH - thisOffset) / (winH * 1.333)) + 0.25; // +0.5: dont start with 0,
		if(zoom > 0.999) { zoom = 1; }

		// calculate deg
		var deg = (thisOffset - scrolled) / winH * 20;
		if(deg < 0) { deg = 0; }

		if(scrolled > thisOffset) {

		  // fade out
		  var opac = ((thisOffset + (winH * 1.2) - scrolled)) / (winH);	// * 1.2 = trigger later,
		  opac = Math.pow(opac,4);

		  if(opac < 0.01) { opac = 0; }

		} else {
		  // fade in

		  // zoom all frames except the first one (showreel)
			if(i != 0) {
			var opac = ((scrolled + winH - thisOffset) / winH);
				opac = Math.pow(opac,4);
				if(opac > 1) { opac = 1; }

			} else {
				opac = 1;
			}
		}

		if(trans3D) {
			$contentWrapper[i].css('transform', 'rotateX(' + deg + 'deg) scale('+zoom+', '+zoom+')').css({opacity: opac});
		} else {
			$contentWrapper[i].css('transform', 'scale('+zoom+', '+zoom+')').css({opacity: opac});
		}

	}


	// define screen in view
	if((scrolled + (winH * 0.05)) > thisOffset) { // close to centered on viewport
		if(scrolled < (thisOffset + (winH * 0.5))) { // half outside of viewport already

			if(inView[i] == 0) {
				$('section').removeClass('inView');
				$screen[i].addClass("inView");
				$('.navLink').removeClass('active');
				if($navLink[i]) {
					$navLink[i].addClass("active");
				}
				inView[i] = 1;
			}

		} else {

			if(inView[i] == 1) {
				$('section').removeClass('inView');
				$('.navLink').removeClass('active');
				inView[i] = 0;
			}

		}

	} else {
		inView[i] = 0;
	}


}


// on every loop render image
function animloop() {
  render();
  requestAnimFrame(animloop);
}

// get window offset / scroll position
function handleScroll() {
	
	scrolled = $win.scrollTop();
	if(exp) { bigLetter(); }
	
	if ((!$.browser.mobile && scrolled > 200) || ($.browser.mobile && scrolled > 80)) {
		if(!$('.menu-bar').hasClass('fix')) $('.menu-bar').addClass('fix');
		if ($(".lander-text").css('opacity') != 1 || $.browser.mobile) return;
		$("#about h2").stop().animate({"opacity": "1"});
		$(".lander-scroll").stop().animate({"opacity": "0"});
		$(".lander-text").stop().animate({"opacity": "0"});
	} else {
		if($('.menu-bar').hasClass('fix')) $('.menu-bar').removeClass('fix');
		if ($(".lander-text").css('opacity') != 0 || $.browser.mobile) return;
		$("#about h2").stop().animate({"opacity": "0"});
		$(".lander-scroll").stop().animate({"opacity": "1"});
		$(".lander-text").stop().animate({"opacity": "1"});
	}

}

function bigLetter() {

	if(bigL == true && !$screen[theS].hasClass("playing")) {

		if(starting == true) {
		 thisL = randomCharS[Math.floor(Math.random()*randomCharS.length)];
		} else {
		 thisL = randomChar[Math.floor(Math.random()*randomChar.length)];
		}

		topL = Math.floor(Math.random() * winH * 0.5) + (winH * 0.05);
		leftL = Math.floor(Math.random() * winW * 0.7) + (winW * 0.05);
		sizeL = Math.random() * 0.4 + 0.8;

		if(thisL == "START") {
			sizeL = sizeL * 0.5;
		}

		$bigL.hide();
		$bigLc.html(thisL);
		$bigL.css({top: topL+"px", left: leftL+"px", transform: "scale("+sizeL+")"}).show();

		// length of appearance
		var outL = Math.floor(Math.random()* 50) + 150;

		bigL = false;

		// hide
		window.setTimeout(function(){
		  $bigL.hide();
		}, outL);

		// delay of appearance
		outL = Math.floor(Math.random()* 100) + outL;

		window.setTimeout(function(){
			bigL = true;
		}, outL);

	}

}

function bigLetterR() {

	bigLetter();

	var outL = Math.floor(Math.random()* bigL2) + bigL1;

	window.setTimeout(function(){
		bigLetterR();
	}, outL);

}


/*function disTroy(el,repeat) {

	if(el && el.html()) {

		var content = el.html();
		content = content.replace('<span class="top">', "");
		content = content.replace('<span class="super">', "");
		content = content.replace("</span>", "");

		if(Math.floor(Math.random() * 2) == 1) {
		  var spanC = '<span class="top">';
		} else {
		  var spanC = '<span class="super">';
		}

		var conL = content.length;
		var conS0 = Math.floor(Math.random() * (content.length / 4)) + 2; 	// max length of distortion // min: 2
		var conS1 = Math.floor(Math.random() * (content.length - conS0));
		var conS2 = conS0 + conS1;
		var conN = content.substring(conS1, conS2);

		if(Math.floor(Math.random() * 2) == 1) {
		  content = content.replace(conN, '<span class="top">'+conN+"</span>");
		} else {
		  content = content.replace(conN, '<span class="super">'+conN+"</span>");
		}

		// el.hide().html(content).fadeIn("200");
		el.html(content);


	}

	// do it again after random time?
	if(repeat == true) {

	  var outL = Math.floor(Math.random() * (dt2-dt1)) + dt1;

	  window.setTimeout(function() {
		disTroy($h4[theS-1],true);
	  }, outL);

	}

}*/

// iPad fixed navigation bug after scrollTo
function killPadbug(time) {
	if(exp == false) {
		time = time + 500;
		$body.addClass('scrolling');
		window.setTimeout(function(){
			$body.removeClass('scrolling');
		},time);
	}
}
