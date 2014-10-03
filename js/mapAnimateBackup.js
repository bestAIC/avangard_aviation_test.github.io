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

		        function selectCur(){
		        	$('#air_map-from-styler, #air_map-to-styler').on('click', function(){

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

	    			        // dashed air_border
	    			        var lineCoordinates = [
	    			          new google.maps.LatLng(selFromX, selFromY), // from
	    			          new google.maps.LatLng(selToX, selToY) // to
	    			        ];

	    			        // var lineSymbol = {
	    			        //   path: 'M15.3,11.5L9.1,8.4L8.4,2.1l-1.6-1l-1,7.3L0,12.7l1.6,1l5.9-2.4l5.6,3.9L5,24l1.6,1l12.7-6.1l5.4,3.3c1,0.6,3.5,1,4.1-0.1 l0,0c0.6-1-0.9-3.1-1.9-3.7l-5.5-3.3L20.6,1L19,0L15.3,11.5z',
	    			        //   strokeOpacity: 0,
	    			        //   anchor: new google.maps.Point(15,0),
	    			        //   fillOpacity: 1,
	    			        //   fillColor: '#ffb500',
	    			        //   scale: 1
	    			        // };

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
		        	})
		        }
		        selectCur();
		       
		        
		} // init

		function animateCircle() { // функция анимирует каждый первый символ линии
		    var count = 0;
		    window.setInterval(function() {
		      count = (count + 1) % 200;

		      var icons = line.get('icons');
		      icons[0].offset = (count / 2) + '%';
		      line.set('icons', icons);
		  }, 60);
		}


	}
})(jQuery);