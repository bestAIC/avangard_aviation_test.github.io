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

	$('select').styler({
		selectSmartPositioning: false,
		selectSearchLimit: 7
	});

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
			e.preventDefault();
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
			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH;

			if(scrollPos > posA1){
				var img1 = $('#animate_index_1'),
					img2 = $('#animate_index_2');
				
				img1.addClass('active').css({position: 'absolute'});
				img2.addClass('active');
			}
		}
		
		btn.on('click', function(){
			$('body').animate({
				scrollTop: $('.js-animate_to').offset().top
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
				scrollPos = (topScroll + windowH) + textCnt1.height() + 500;
			if(scrollPos > posA2){
				textCnt1.css({opacity: 1});
			}
			return false;
		}

		function myScroll3(){
			var topScroll = win.scrollTop(),
				scrollPos = (topScroll + windowH) + textCnt2.height()*2 + 500;

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
						top: -500-delta/2
					});
				}
		})
	}
})(jQuery);

(function($){
	$.fn.mapAnimate = function(){
		var flightPath;
		var map;
		function initialize() {
  	        var mapOptions = {
  	            center: new google.maps.LatLng(41.608168, 21.595281),
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
					    "featureType": "administrative.locality",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      { "color": "#ff0000" }
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

  	        map = new google.maps.Map(document.getElementById('map'), mapOptions);

          var locations = [
  			['moskow', 'undefined', 'undefined', 'undefined', 'undefined', 55.755826, 37.6173, 'img/ico_7.png'],
  			['new-york', 'undefined', 'undefined', 'undefined', 'undefined', 40.7127837, -74.0059413, 'img/ico_7.png'],
  			['paris', 'undefined', 'undefined', 'undefined', 'undefined', 48.856614, 2.3522219, 'img/ico_7.png'],
  			['novosibirsk', 'undefined', 'undefined', 'undefined', 'undefined', 55.023906, 83.010197, 'img/ico_7.png'],
  			['ulanbator', 'undefined', 'undefined', 'undefined', 'undefined', 47.891190, 106.895796, 'img/ico_7.png'],
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

          	$('#air_map-from-styler, #air_map-to-styler').on('click', calcData);

        	function calcData(){

	    		if($(this).attr('id') == 'air_map-from-styler'){
	    			var selFrom = $('li.selected', $(this)),
	        			selFromX = selFrom.data('fromx'),
	        			selFromY = selFrom.data('fromy');
	    			var selTo = $('li.selected', $('#air_map-to-styler')),
	        			selToX = selTo.data('tox'),
	        			selToY = selTo.data('toy');
	        		} else {
	        			var selFrom = $('li.selected', $('#air_map-from-styler')),
		        			selFromX = selFrom.data('fromx'),
		        			selFromY = selFrom.data('fromy');
	        			var selTo = $('li.selected', $(this)),
		        			selToX = selTo.data('tox'),
		        			selToY = selTo.data('toy');
	        		}

	        		var flightPlanCoordinates = [
	        			new google.maps.LatLng(selFromX, selFromY), // from
	        			new google.maps.LatLng(selToX, selToY) // to
	        		];

	        		flightPathOptions = ({
	        			path: flightPlanCoordinates,
	        			geodesic: true,
	        			strokeColor: '#ffb500',
	        			strokeOpacity: 1.0,
	        			strokeWeight: 2,
	        			icons: [{
	        				icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
	        				offset: '50%'
	        			}]
	        		});

	        		flightPath = new google.maps.Polyline(flightPathOptions);

	        		flightPath.setMap(map);
        	} // calcData
        	flightPath.setMap(null);
			
		} // init

		google.maps.event.addDomListener(window, 'load', initialize);

	}
})(jQuery);




(function($){
	$.fn.airBtnToogle = function(){
		var cont = $(this),
			btnBlock = $('.btn_toogle', cont),
			table = $('.about_raice');


		// var airDate = {
		//   "aircrafts": [
		//     {
		//       "range": "3 242",
		//       "maxSpeed": 997,
		//       "seatingCapacity": "9",
		//       "usefulLoad": "14 000",
		//       "takeoffDistance": "3 242"
		//     },
		//     {
		//       "range": "7 321",
		//       "maxSpeed": 231,
		//       "seatingCapacity": 34,
		//       "usefulLoad": "5 000",
		//       "takeoffDistance": "9 123"
		//     }
		//   ]
		// };
		// var airDateStr = JSON.stringify(airDate);
		// var arr = airDate.aircrafts[1];
		// var keys = Object.keys(arr);
		// var col = $('.num', table);
		// var btnCur  = $('.btn.current', btnBlock);

		// col.each(function(index, el) {
		// 	console.log(keys[0])
		// });
		
		


		// $(window).on('load', airDateCalc)

		// function airDateCalc(){
			

		// 	col.text('');
		// };

		

		btnBlock.on('click', '.btn:not(.current)', function(){
			$(this).addClass('current').siblings().removeClass('current').parents('#air_btn-toogle').find('.about_race-wrap').eq($(this).index()).fadeIn(450).siblings('.about_race-wrap').hide();
		});
	}
})(jQuery);

