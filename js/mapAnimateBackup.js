var win = $(window),
	windowH = win.height();
	

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
  	        initOverlays();
          var locations = [
  			['moscow', 'Transfer fligth', 'Distance: ', 'undefined', 'undefined', 55.755826, 37.6173, 'img/ico_7.png'],
  			['new-york', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 40.7127837, -74.0059413, 'img/ico_7.png'],
  			['paris', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 48.856614, 2.3522219, 'img/ico_7.png'],
  			['novosibirsk', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 55.023906, 83.010197, 'img/ico_7.png'],
  			['japan', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 36.593638, 140.171318, 'img/ico_7.png'],
  			['ulanbator', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 47.513624, 106.948662, 'img/ico_7.png'],
  			['carakas', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 10.547485, -66.651079, 'img/ico_7.png'],
  			['berlin', 'Transfer fligth', 'undefined', 'undefined', 'undefined', 52.52000659999999, 13.404954, 'img/ico_7.png']
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
          }

          $( "body" ).delegate( ".map_city_icon", "mouseenter", function() {
              var cur = $('this').attr('data');

              var depLat = $(this).find('div').attr('data-fromx');
              var depLon = $(this).find('div').attr('data-fromy');
              var arLat = $(this).closest('.map').find('.map_city_icon.icon_dep.dep_'+ cur +' div').attr('data-fromx');
              var arLon = $(this).closest('.map').find('.map_city_icon.icon_dep.dep_'+ cur +' div').attr('data-fromy');
              var deps = new google.maps.LatLng(depLat, depLon);
              var ar =  new google.maps.LatLng(arLat, arLon);

              $(this).addClass('is_hover');
            });

            $( "body" ).delegate( ".map_city_icon", "mouseleave", function() {
              var cur = $(this).attr('data');
              $(this).removeClass('is_hover');
            });

          	$('#air_map-from-styler, #air_map-to-styler').on('focus click', calcData);

          	function clerPath() {
          		var len = flighhArr.length;
          		for (var i = 0; i < len; i++ ) {
    				flighhArr[i].setMap(null);
  				}
  				flighhArr = [];
          	}

        	function calcData(){

        		var selFrom = $('#air_map-from-styler li.selected').text();
        		var selTo = $('#air_map-to-styler li.selected').text();
        		var selFromOpt = $('option', $('#air_map-from-styler'));
        		var selToOpt = $('option', $('#air_map-to-styler'));

        		selToOpt.each(function(){
        			var txt = $(this).text();
        			$(this).removeClass('selected');
        			if(selTo == txt){
        				$(this).addClass('selected');
        			}
        		})

        		selFromOpt.each(function(){
        			var txt = $(this).text();
        			$(this).removeClass('selected');
        			if(selFrom == txt){
        				$(this).addClass('selected');
        			}
        		})

        		var myHtml = $('#air_map-data').find('.' + selFrom +  '.' + selTo).html();

        		$('.map_city_icon .maps_placeholder').html(myHtml);        		
        		
        		$('.map_city_icon').removeClass('current');
        		$('.map_city_icon').parent().find('.'+selFrom).addClass('current start');
        		$('.map_city_icon').parent().find('.'+selTo).addClass('current end');

        		clerPath();	// удаляем старые координаты
        		

	    		if($(this).attr('id') == 'air_map-from-styler'){
	    			var selFrom = $('option.selected', $(this)),
	        			selFromX = selFrom.data('fromx'),
	        			selFromY = selFrom.data('fromy');
	    			var selTo = $('option.selected', $('#air_map-to-styler')),
	        			selToX = selTo.data('tox'),
	        			selToY = selTo.data('toy');
	        		} else {
	        			var selFrom = $('option.selected', $('#air_map-from-styler')),
		        			selFromX = selFrom.data('fromx'),
		        			selFromY = selFrom.data('fromy');
	        			var selTo = $('option.selected', $(this)),
		        			selToX = selTo.data('tox'),
		        			selToY = selTo.data('toy');
	        		}

	        		var flightPlanCoordinates = [
	        			new google.maps.LatLng(selFromX, selFromY), // from
	        			new google.maps.LatLng(selToX, selToY) // to
	        		];

	        		var lineSymbol = {
	        		  path: 'M 0,-1 0,1',
	        		  strokeOpacity: 2,
	        		  scale: 3
	        		};

	        		flightPathOptions = ({
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

	        		flightPath = new google.maps.Polyline(flightPathOptions);
	        		flighhArr.push(flightPath);

        	} // calcData
			
		} // init

		google.maps.event.addDomListener(window, 'load', initialize);
	}
})(jQuery);




(function($){
	$.fn.airBtnToogle = function(){
		var cont = $(this),
			btnBlock = $('.btn_toogle', cont),
			table = $('.about_raice'),
			cols = $('.num', table),
			btnCur  = $('.btn.current', btnBlock);

		// var airDate = {
		//   "aircrafts": [
		//     ["3 242","997","9","14 000","3 342"],
		//     ["7 321",231,34,"5 000","9 123"]
		//   ]
		// };
		// var airDateStr = JSON.stringify(airDate);
		// var arr1 = airDate.aircrafts[0];
		// var arr2 = airDate.aircrafts[1];

		
		btnBlock.on('click', '.btn:not(.current)', function(){
			$(this).addClass('current').siblings().removeClass('current').parents('#air_btn-toogle').find('.about_race-wrap').eq($(this).index()).fadeIn(450).siblings('.about_race-wrap').hide();
			// cols.text('');
			// var colsArr = cols.toArray();

			// if($(this).data('air') == 'Citation X'){
			// 	cols.splice(0,5,"3 242","997","9","14 000","3 342");
			// }

			// if($(this).data('air') == 'Legacy 600'){
			// 	for(var i = 0; i < arr2.length; i++){
			// 		cols.text(arr2[i]);
			// 	}
			// }
		});


	}
})(jQuery);

