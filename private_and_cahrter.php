<?
$pagename = 'private_and_cahrter';
$pagetitle = 'private_and_cahrter';
include('include/header.php')
?>
	<section id="js-cont-height" class="collage first">
		<div class="collage_img">
			<div class="intro">
				<h1>Managed Aircraft</h1>
				<p>Headquartered at Baden Airpark near Baden-Baden, the world-renowned, historic thermal spa and cultural center along the Rhine River which constitutes the border between the fabled Black Forest of Germany and Alsace in France, near Strasbourg, France and halfway between Frankfurt, Germany, and Basel, Switzerland, Avangard Aviation’s aircraft operations arm, Baden Aircraft Operations GmbH, operates under Air Operator’s Certificate D-273EG issued by Luftfahrt-Bundeasamt, the aviation licensing and operational safety oversight organization of Germany, and pursuant to Europe’s aviation safety oversight agency, EASA</p>
			</div>
		</div>
		<div class="collage_down js-collage_down"></div>
	</section>

	<section class="collage second js-animate_to">
		<div class="about_text center">
			<div class="about_text-wrap">
				<h2>Aircrafts</h2>
				<p>Avangard Aviation is the result of three successful companies coming together to create a singular<br/> organization which is well-placed to all of your aviation needs</p>
			</div>
		</div>
		<div id="air_btn-toogle">
			<div class="btn_toogle">
				<span class="btn current">Citation X</span><span class="btn">Legacy 600</span>
			</div>
			<div class="about_race-wrap visible">
				<div class="collage_pic">
					<img src="pic/pic_20.png" alt="">
				</div>
				<div class="about_raice cols"> 
					<div>
						<p class="title">Range</p>
						<p class="info"><span class="num">3 242</span> km</p>
					</div>
					<div>
						<p class="title">Max speed</p>
						<p class="info"><span class="num">997</span> kmph</p>
					</div>
					<div>
						<p class="title">Seating Capacity</p>
						<p class="info"><span class="num">9</span> people</p>
					</div>
					<div>
						<p class="title">Useful Load</p>
						<p class="info"><span class="num">14 000</span> kg</p>
					</div>
					<div>
						<p class="title">Takeoff Distance</p>
						<p class="info"><span class="num">3 242</span> km</p>
					</div>
				</div>
			</div>
			<div class="about_race-wrap">
				<div class="collage_pic">
					<img src="pic/pic_24.png" alt="">
				</div>
				<div class="about_raice cols"> 
					<div>
						<p class="title">Range</p>
						<p class="info"><span class="num">3 242</span> km</p>
					</div>
					<div>
						<p class="title">Max speed</p>
						<p class="info"><span class="num">997</span> kmph</p>
					</div>
					<div>
						<p class="title">Seating Capacity</p>
						<p class="info"><span class="num">9</span> people</p>
					</div>
					<div>
						<p class="title">Useful Load</p>
						<p class="info"><span class="num">14 000</span> kg</p>
					</div>
					<div>
						<p class="title">Takeoff Distance</p>
						<p class="info"><span class="num">3 242</span> km</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="collage third js-animate_to">
		<div class="air_map" id="map"></div>
	</section>
	<section class="text second bg_color_1">
		<div class="intro">
			<h3>Leave request</h3>
			<p>It is the way we have worked for over 50 years. And it’s the way we give you the superior experience you expect and deserve from the most qualified aviation company in the world. So to help you get to know us, we would like to present the Air Partner team of Private Jet experts</p>
			<form action="engineering_technical_services_submit" method="get" accept-charset="utf-8" class="feedback">
			<ul>
				<li>
					<select name="management">
						<option value="1">Services & management</option>
						<option value="2">Engineering services</option>
						<option value="3">Services & management</option>
						<option value="4">Engineering services</option>
					</select>
				</li>
				<li>
					<select name="engineering">
						<option value="0">Engineering services</option>
						<option value="1">Services & management</option>
						<option value="2">Engineering services</option>
						<option value="3">Services & management</option>
						<option value="4">Engineering services</option>
					</select>
				</li>
				<li>
					<input type="mail" placeholder="E-mail" />
				</li>
				<li>
					<textarea  placeholder="Message"></textarea>
				</li>
				<li>
					<input type="button" class="btn" value="Send">
				</li>				
			</ul>	
			</form>
		</div>
	</section>
	<section class="text">
		<div class="features">
			<div class="left col-2">
				<p class="ico_cover"><span class="ico_22"></span></p>
				<h4>Engineering &  Technical Services</h4>
				<p>is the world leader in private aviation, with a portfolio of services that includes fractional ownership, jet cards, aircraft management and charter</p>
				<p><a href="#" class="more_info">Learn more</a></p>
			</div><div class="right col-2">
				<p class="ico_cover"><span class="ico_24"></span></p>
				<h4>Managed Aircraft</h4>
				<p>is the world leader in private aviation, with a portfolio of services that includes fractional ownership, jet сards, aircraft management and charter</p>
				<p><a href="#" class="more_info">Learn more</a></p>			
			</div>			
		</div>
	</section>

<?
include('include/footer.php')
?>