var touchdevice = false,
	win = $(window),
	windowH = win.height();
	

$(function() {

	if (!$('html').hasClass('no-touch')) touchdevice = true;


	$('#menu_trigger-top').menuTop();

	// заглавная картинка
	if($('#js-cont-height').length){
		$('#js-cont-height').animateCollage();
	}
	
	if($('#animate_index_3').length || $('#animate_index_4').length){
		$('#animate_index_3, #animate_index_4').animateImg1();
	}

	if($('.avangard_about #animate_index_5').length){
		$('.avangard_about #animate_index_5').airLoadMove();
	}

	if($('.avangard_about #animate_index_6').length){
		$('.avangard_about #animate_index_6').animateImg2();
	}

	if($('.avangard_about #animate_index_7').length){
		$('.avangard_about #animate_index_7').animateImg3();
	}

	if($('.avangard_about #animate_index_8').length){
		$('.avangard_about #animate_index_8').animateImg4();
	}

	if($('#engineering_technical_services_animate_2').length || $('#managed_aircraft_animate_1').length){
		$('#engineering_technical_services_animate_2, #managed_aircraft_animate_1').animateImg9();
	}

	if($('.avangard_about .collage_birds').length){		
		$('.avangard_about .collage_birds').animateImg5();
	}

	$('#header .lang_dropdown').menuLangShow();

	if($('#air_btn-toogle').length){
		$('#air_btn-toogle').airBtnToogle();
	}

	setTimeout(function() {
		$('select').styler({
			selectSmartPositioning: false,
			selectSearchLimit: 7
		});
	}, 100);


	if($('#map').length){
		$('#map').mapAnimate();
	}

});


(function($){
	$.fn.menuTop = function(){
		var btn = $(this),
			close = $('#menu_overlay-close'),
			cont = $('#menu_overlay');

		$('html').on('click', function(e){
			btn.addClass('closed').removeClass('opened');
		});

		function toggleOverlay(e) {
			if(btn.hasClass('close')) {
				cont.addClass('open').removeClass('close');
				btn.addClass('open').removeClass('close');
				$('.wrapper').addClass('blur');
			} else {
				cont.addClass('close').removeClass('open');
				btn.addClass('close').removeClass('open');
				$('.wrapper').removeClass('blur');
			}
		};

		btn.on('click', toggleOverlay);
		close.on('click', toggleOverlay);
	}
})(jQuery);

(function($){
	$.fn.menuLangShow = function(){
		var btn = $(this);

		$('html').on('click', function(e){
			btn.addClass('closed').removeClass('opened');
		});

		btn.on('click', function(event){
			event.stopPropagation();
			if(btn.hasClass('closed')){
				btn.addClass('opened').removeClass('closed');
			} else {
				btn.addClass('closed').removeClass('opened');
			}
		});
	}
})(jQuery);



(function($){
	$.fn.animateCollage = function(){
		var contFirst = $(this),
			btn = $('.js-collage_down', contFirst),
			imgTo = $('.js-animate_to'),
			posA1 = imgTo.offset().top;

		contFirst.css({
			position: 'relative',
			height: windowH
		});
		
		win.on('scroll', myScroll1);

		function myScroll1(){

			$('.avangard_engineering_technical_services #js-cont-height').css({
				height: 'auto'
			});

			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH;

			if(scrollPos > posA1){
				var img1 = $('#animate_index_1'),
					img2 = $('#animate_index_2');
				
				img1.addClass('active').css({position: 'absolute', top: 0});
				img2.addClass('active');
			}
		}
		
		btn.on('click', function(){
			$('body').animate({
				scrollTop: $('section.second').offset().top
			}, 800)
			return false;
		});
	};
})(jQuery);

(function($){
	$.fn.animateImg1 = function(){
		var textCnt1 = $('#animate_index_3'),
			textCnt2 = $('#animate_index_4'),
			posA2 = textCnt1.offset().top,
			posA3 = textCnt2.offset().top;

		win.on('scroll', myScroll2);
		win.on('scroll', myScroll3);

		function myScroll2(){
			var topScroll = win.scrollTop(),
				scrollPos = (topScroll + windowH) + textCnt1.height();
			if(scrollPos > posA2){
				textCnt1.css({opacity: 1});
			}
			return false;
		}

		function myScroll3(){
			var topScroll = win.scrollTop(),
				scrollPos = (topScroll + windowH) + textCnt2.height()*2;

			if(scrollPos > posA3){
				textCnt2.css({opacity: 1});
			}
			return false;
		}

	}
})(jQuery);

(function($){
	$.fn.airLoadMove = function(){
		var that = $(this),
			win = $(window),
			heightW = $(window).height();

		win.on('load', function(){
			var scrollTop = win.scrollTop(),
				posEl = that.offset();
			
			if(posEl.top < scrollTop+heightW){    
				that.addClass('active');
			}
		});
	}
})(jQuery);

(function($){
	$.fn.animateImg2 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl > windowH - 200){
					cont.addClass('action');
				}
		}).on('load', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl < windowH){
					cont.addClass('static');
				} else {
					cont.removeClass('static');
				}
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg3 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl < windowH + posWin + 50){
					cont.addClass('action');
				}
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg4 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

				if(posEl < windowH + posWin + 50){
					cont.addClass('action');
				}
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg5 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height;

			if(posEl < windowH + posWin + 50){
				cont.addClass('action');
			} 
		})
	}
})(jQuery);

(function($){
	$.fn.animateImg9 = function(){
		var cont = $(this),
			win = $(window);

		win.on('scroll', function(){
			var posEl = cont.offset().top,
				posWin = win.scrollTop(),
				heightW = win.height,
				delta = posWin - posEl;

				if(posEl < windowH + posWin + 50){
					cont.find('img').css({
						top: -700-delta/2
					});
				}
		})
	}
})(jQuery);

(function($){
	$.fn.mapAnimate = function(){
		google.maps.event.addDomListener(window, 'load', init);
		    var map;
		    var marker;
		    var line;
		    function init() {
		        var mapOptions = {
		            center: new google.maps.LatLng(47.465744,-7.567063),
		            zoom: 2,
	                zoomControl: false,
	                disableDoubleClickZoom: false,
	                mapTypeControl: false,
	                scaleControl: false,
	                scrollwheel: false,
	                panControl: false,
	                streetViewControl: false,
	                draggable : false,
	                backgroundColor: {
	                    stroke: '#ffffff',
	                    strokeWidth: '2'
	                },
	                overviewMapControl: false,
	                overviewMapControlOptions: {
	                    opened: false,
	                },
		            mapTypeId: google.maps.MapTypeId.ROADMAP,
		            styles: [
		            	{
							"featureType": "administrative",
							"stylers": [
							{ "color": "#ffffff" },
							{ "visibility": "off" }
						]
						},{
							"featureType": "water",
							"stylers": [
							{ "color": "#ffffff" }
						]
						},{
							"featureType": "landscape",
							"stylers": [
							{ "visibility": "on" },{ "hue": "#ffffff" }, { "lightness": 14 }, { "color": "#f4f5f6" }, { "saturation": 3 }, { "gamma": 0.4 }
						]
						}
						],
		        }

		        var mapElement = document.getElementById('map');
		        var map = new google.maps.Map(mapElement, mapOptions);

		        var locations = [
					['moskow', 'undefined', 'undefined', 'undefined', 'undefined', 55.755826, 37.6173, 'img/ico_7.png'],
					['new-york', 'undefined', 'undefined', 'undefined', 'undefined', 40.7127837, -74.0059413, 'img/ico_7.png'],
					['paris', 'undefined', 'undefined', 'undefined', 'undefined', 48.856614, 2.3522219, 'img/ico_7.png'],
					['berlin', 'undefined', 'undefined', 'undefined', 'undefined', 52.52000659999999, 13.404954, 'img/ico_7.png']
		        ];
		        for (i = 0; i < locations.length; i++) {
					if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
					if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
					if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
		           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
		           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
		            marker = new google.maps.Marker({
		                icon: markericon,
		                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
		                map: map,
		                title: locations[i][0],
		                desc: description,
		                tel: telephone,
		                email: email,
		                web: web
		            });
		        }

		        // dashed air_border
		        var lineCoordinates = [
		          new google.maps.LatLng(55.755, 37.617),
		          new google.maps.LatLng(40.712, -74.005)
		        ];

		        var lineSymbol = {
		          path: 'M15.3,11.5L9.1,8.4L8.4,2.1l-1.6-1l-1,7.3L0,12.7l1.6,1l5.9-2.4l5.6,3.9L5,24l1.6,1l12.7-6.1l5.4,3.3c1,0.6,3.5,1,4.1-0.1 l0,0c0.6-1-0.9-3.1-1.9-3.7l-5.5-3.3L20.6,1L19,0L15.3,11.5z',
		          strokeOpacity: 0,
		          anchor: new google.maps.Point(15,0),
		          fillOpacity: 1,
		          fillColor: '#ffb500',
		          scale: 1
		        };

				line = new google.maps.Polyline({
					path: lineCoordinates,
					geodesic: true,
					strokeColor: '#ffb500',
					strokeOpacity: 1.0,
					strokeWeight: 2,
					icons: [{
						icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
						offset: '80%'
					}],
					map: map
				});

				animateCircle();
		} // init

		function animateCircle() { // функция анимирует каждый первый символ линии
		    var count = 0;
		    window.setInterval(function() {
		      count = (count + 1) % 200;

		      var icons = line.get('icons');
		      icons[0].offset = (count / 2) + '%';
		      line.set('icons', icons);
		  }, 20);
		}
	}
})(jQuery);


(function($){
	$.fn.airBtnToogle = function(){
		var cont = $(this),
			btnBlock = $('.btn_toogle', cont);

		btnBlock.on('click', '.btn:not(.current)', function(){
			$(this).addClass('current').siblings().removeClass('current').parents('#air_btn-toogle').find('.about_race-wrap').eq($(this).index()).fadeIn(150).siblings('.about_race-wrap').hide();
		});




	}
})(jQuery);

