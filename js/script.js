var win = $(window),
	windowH = win.height();


	  
	  var fixViewportHeight = function() {
	  	document.documentElement.style.height = window.innerHeight + "px";
	    if ($('body').scrollTop() !== 0) {
	      window.scrollTo(0, 0);
	    }
	  }.bind(this);

	  // window.addEventListener("scroll", fixViewportHeight, false);
	  window.addEventListener("orientationchange", fixViewportHeight, false);
	  fixViewportHeight();
		

$(function() {

	$('#menu_trigger-top').menuTop();

	// заглавная картинка
	if($('#js-cont-height').length){
		$('#js-cont-height').animateCollage();
	}
	
	if($('#animate_index_3').length || $('#animate_index_4').length){
		if($('html.mobile, html.tablet').length === 0){
			$('#animate_index_3, #animate_index_4').animateImg1();
		}
	}

	if($('.avangard_about #animate_index_5').length){
		$('.avangard_about #animate_index_5').airLoadMove();
	}

	if($('.avangard_about #animate_index_6').length){
		if($('html.mobile, html.tablet').length === 0){
			$('.avangard_about #animate_index_6').animateImg2();
		}
	}

	if($('.avangard_about #animate_index_7').length){
		if($('html.mobile, html.tablet').length === 0){
			$('.avangard_about #animate_index_7').animateImg3();
		}
	}

	if($('.avangard_about #animate_index_8').length){
		if($('html.mobile, html.tablet').length === 0){
			$('.avangard_about #animate_index_8').animateImg4();
		}
	}

	if($('#engineering_technical_services_animate_2').length || $('#managed_aircraft_animate_1').length){
		$('#engineering_technical_services_animate_2, #managed_aircraft_animate_1').animateImg9();
	}

	if($('.avangard_about .collage_birds').length){		
		$('.avangard_about .collage_birds').animateImg5();
	}

	$('#header .lang_dropdown').menuLangShow();

	$('select').styler({
		selectSmartPositioning: false,
		selectSearchLimit: 7
	});

	if($('#map').length){
		$('#map').mapAnimate();
	}

	if($('#leave_request').length){
		$('.lang_btn').on('click', function(e){
			e.preventDefault();
			pos = $('#leave_request').offset().top;
			$('body').animate({scrollTop: +pos}, 1000);
			
		});
	}

	if($('.slick-plain').length){
		$('.slick-plain').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		})
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
			height: window.innerHeight + 'px'
		})
		
		win.on('scroll', myScroll1);

		function myScroll1(){
			var topScroll = win.scrollTop(),
				scrollPos = topScroll + windowH;

			if(scrollPos > posA1){
				if($('html.mobile, html.tablet').length === 0){
					var img1 = $('#animate_index_1'),
						img2 = $('#animate_index_2');
					
					img1.addClass('active').css({position: 'absolute'});
					img2.addClass('active');
				}
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

		win.on('scroll', function(e){
			e.preventDefault();
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

		win.on('scroll', function(e){
			e.preventDefault();
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

		win.on('scroll', function(e){
			e.preventDefault();
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
		var flighhArr = [];
		var flightPath;
		var flightPlanCoordinates = [];
		var map;

		/** @constructor */
		function MyOverlay(map, coord, code) {
		  this.coord_ = coord;
		  this.code_ = code;
		  this.map_ = map;
		  this.div_ = null;
		  this.setMap(map);
		}

		function initOverlays(){
		  MyOverlay.prototype = new google.maps.OverlayView();

		  MyOverlay.prototype.onAdd = function() {

		    var div = document.createElement('div');
		    div.style.borderStyle = 'none';
		    div.style.borderWidth = '0px';
		    div.style.position = 'absolute';
		    div.style.display = 'inline-block';

		    div.innerHTML = this.code_;
		    this.div_ = div;

		    var panes = this.getPanes();
		    panes.floatPane.appendChild(div);
		  };

		  MyOverlay.prototype.draw = function() {
		    var overlayProjection = this.getProjection();
		    var pos = overlayProjection.fromLatLngToDivPixel(this.coord_);
		    var div = this.div_;
		    div.style.left = pos.x + 'px';
		    div.style.top = pos.y + 'px';
		  };

		  MyOverlay.prototype.onRemove = function() {
		    this.div_.parentNode.removeChild(this.div_);
		    this.div_ = null;
		  };
		};

		function initialize() {
  	        var mapOptions = {
  	            center: new google.maps.LatLng(41.608168, 21.595281),
  	            zoom: 2,
				zoomControl: false,
				disableDefaultUI: false,
				disableDoubleClickZoom: false,
				maxZoom: 2,
				minZoom: 2,
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
  	        } // mapOptions

  	        map = new google.maps.Map(document.getElementById('map'), mapOptions);
  	        initOverlays();
			var locations = [
				['moscow', 'Transfer fligth', 'Distance: ', 'undefined', 'undefined', 55.755826, 37.6173, 'img/ico_7.png'],
				['new-york', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 40.7127837, -74.0059413, 'img/ico_7.png'],
				['paris', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 48.856614, 2.3522219, 'img/ico_7.png'],
				['novosibirsk', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 55.023906, 83.010197, 'img/ico_7.png'],
				['japan', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 36.593638, 140.171318, 'img/ico_7.png'],
				['carakas', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 10.547485, -66.651079, 'img/ico_7.png'],
				['berlin', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 52.520473, 13.341656, 'img/ico_7.png']
			];
			for (i = 0; i < locations.length; i++) {
				if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
				if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
				if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
				if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
				if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
				
				var arr1 = locations[0][5];

				marker = new MyOverlay(map,new google.maps.LatLng(locations[i][5], locations[i][6]),
					'<div class="map_city_icon '+ locations[i][0] +' ">'+
					'<div>' +
					'<div class="maps_marker_icons"></div>' +
					'<span class="maps_province_icons">'+ locations[i][0] +'</span>'+
					'<div class="maps_placeholder">' + description + '</div>' +
					'</div>'+
					'</div>'
					);
          	} // for

          	function clerPath() {
          		var len = flighhArr.length;
          		for (var i = 0; i < len; i++ ) {
    				flighhArr[i].setMap(null);
  				}
  				flighhArr = [];
          	} // функция сброса путей

        	function calcData(){
        		var GoFrom = $('#air_map-from-styler');
        		var GoTo = $('#air_map-to-styler');
      			
  				var selToX = $('li.selected', GoTo).data('tox'),
  					selToY = $('li.selected', GoTo).data('toy'),
  					selFromX = $('li.selected', GoFrom).data('fromx'),
  					selFromY = $('li.selected', GoFrom).data('fromy');

				if((selToX && selToY !== 'undefined') && (selFromX && selFromY !== 'undefined')){
					var selFromText = $('li.selected', GoFrom).text();
					var selToText = $('li.selected', GoTo).text();
					var myHtml = $('#air_map-data').find('.' + selFromText.toLowerCase() + '.' + selToText.toLowerCase()).html();


					$('.map_city_icon').removeClass('current');
					$('.map_city_icon').parent().find('.'+selFromText.toLowerCase()).addClass('current start');
					$('.map_city_icon').parent().find('.'+selToText.toLowerCase()).addClass('current end');
					$('.map_city_icon .maps_placeholder').html(myHtml);

	        		var flightPlanCoordinates = [
	        			new google.maps.LatLng(selFromX, selFromY), // from
	        			new google.maps.LatLng(selToX, selToY) // to
	        		];

	        		clerPath();	// удаляем старые координаты

	        		var lineSymbol = {
	        		  path: 'M 0,-1 0,1',
	        		  strokeOpacity: 2,
	        		  scale: 3
	        		};

	        		flightPathOptions = new google.maps.Polyline({
	        			path: flightPlanCoordinates,
	        			geodesic: true,
	        			strokeColor: '#ffb500',
	        			strokeOpacity: 1,
	        			strokeWeight: 2,
	        			icons: [{
	        				icon: {path: google.maps.SymbolPath.FORWARD_OPEN_ARROW},
	        				offset: '80%'
	        			}],
	        			map: map
	        		});

	        		animateCircle();
	        		flighhArr.push(flightPathOptions);
	        	}

        	} // calcData

        	$('#air_map-from-styler, #air_map-to-styler').change(calcData);
			
		} // init

		function animateCircle() {
		    var count = 0;
		    offsetId = window.setInterval(function() {
		      count = (count + 1) % 200;

		      var icons = flightPathOptions.get('icons');
		      icons[0].offset = (count / 2) + '%';
		      flightPathOptions.set('icons', icons);
		  }, 20);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}
})(jQuery);


// (function(){
// 	$.fn.airPlaneSlider = function(){
// 		var that = $(this),
// 			dots = $('.slick-dots li', that);
// 		var slideArr = [];
// 		var obj = {};

// 			$('.about_race-wrap', that).each(function(){				
// 				var arr = $(this).data('air');
// 				slideArr.push(arr)
// 			})

// 			function unique(arr){
// 				for(var i = 0; i < arr.length; i++){
// 					var str = arr[i];
// 					obj[str] = true;
// 				}
// 				return Object.keys(obj);
// 			}
// 			unique(slideArr)


// 			for(var prop in obj){
// 				obj[prop] = prop;
// 				console.log(obj["Citation X"]);
// 				console.log(obj["Legacy 600"]);
// 				dots.find('button').text('').append(prop);
// 			}
// 	}
// })(jQuery);