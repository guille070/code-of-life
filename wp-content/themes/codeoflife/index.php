<?php
/**
 * Fichero PHP
 *
 * Define el template de la pagina principal
 *
 * @copyright Copyright (c) 2020 Dandy Agency
*/

get_header();

    /*while(have_posts()) { the_post();
        the_content();
    }*/

    ?>

<section id="about" class="container full inView">
				<div class="contentWrapper">
					<h2>About Code of Life</h2>
					<img src="images/section_about.jpg" width="800" height="396" alt="" />
					<div class="content">
						<p><b class="slash high">Code of Life<span>.</span></b> An integrated system that nurtures body and mind and elevates the spirit.</p>
						<p><b class="slash high">Hosanna De Linares<span>.</span></b> Polestar certified Pilates Master, Institute of Integrative Nutrition certified Health Coach.</p>
						<blockquote><p>Live a healthy lifestyle, <em>live the Code of Life</em></p></blockquote>
					</div>
				</div>
			</section>
			<section id="pilates-and-fitness" class="container postContainer full">
				<div class="contentWrapper">
					<h2>Code pilates &amp; fitness</h2>
					<div class="videoWrapper">
						<video poster="images/section_pilates-and-fitness.jpg" controls="controls" width="800" height="450">
							<source src="video/code_of_life-1024x576.mp4" />
							<source src="video/code_of_life-1024x576.webm" />
							<img src="images/section_pilates-and-fitness.jpg" width="800" height="450" alt="" />
						</video>
					</div>
					<div class="content">
						<p><b class="slash">Code Pilates &amp; Fitness<span>.</span></b> The complete coordination of mind, body and spirit. A moving meditation. <strong class="high"><b class="slash">Code<span>:</span></b> Align. Breath. Flow.</strong></p>
						<p><strong>Group classes, semiprivates and privates.</strong></p>
						<p><a href="https://clients.mindbodyonline.com/classic/ws?studioid=168401&stype=-7&sView=day&sLoc=0" target="_blank">Register</a></p>
					</div>
				</div>
			</section>
			<section id="wellness" class="container postContainer full">
				<div class="contentWrapper">
					<h2><a href="http://code-wellness.com" target="_blank">Shop Code wellness</a></h2>
					<img src="images/section_wellness.jpg" width="800" height="396" alt="" />
					<div class="content">
						<p><b class="slash">Code Wellness<span>.</span></b> Nutrition plays a big role in life, not only physically but also emotionally. Eat clean, be healthy. <strong class="high break"><b class="slash">Code<span>:</span></b> Listen to your body</strong></p>
						<p><strong>Health coaching by appointment only</strong></p>
						<p><a href="mailto:info@code-wellness.com">info@code-wellness.com</a></p>
					</div>
				</div>
			</section>
			<section id="kod-wear" class="container postContainer full">
				<div class="contentWrapper">
					<h2><a href="http://code-activewear.com" target="_blank">Shop Code Activewear</a></h2>
					<img src="images/section_kod-wear.jpg" width="800" height="396" alt="" />
					<div class="content">
						<p><b class="slash">Code Activewear<span>.</span></b> The right attire will boost your confidence and increase your energy levels. <strong class="high"><span class="slash">Kod</span> Wear confidence</strong></p>
						<blockquote><p>Live life to the fullest, <em>live the Code of Life</em></p></blockquote>
						<p><a href="mailto:info@code-activewear.com">info@code-activewear.com</a></p>
					</div>
				</div>
			</section>
			<section id="contact" class="container postContainer full">
				<div class="contentWrapper">
					<h2>Contact</h2>
					<img src="images/section_contact.jpg" width="800" height="440" alt="" />
					<div class="content">
						<p class="vcard"><span class="org"><a class="url" href="http://www.code-of-life.com/">Code of Life</a></span> <a class="email" href="mailto:info@code-of-life.com">info@code-of-life.com</a></p>
						<p class="app-link"><strong><a href="https://itunes.apple.com/app/id1027529803" target="_blank">Download our app</a> <span class="break">available on the <b class="break">App Store</b></span></strong></p>
					</div>
				</div>
			</section>
            <?php


get_footer();
