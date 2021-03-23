<?php

$rep_content = 'main_content';

if (have_rows($rep_content)) {

	$i = 0;
	
	while ( have_rows($rep_content) ) : the_row();

		$section_name = get_sub_field('section_name');
		$section_title = get_sub_field('section_title');
		$section_media_type = get_sub_field('section_media_type'); 
		$section_image = get_sub_field('section_image'); 
		$section_video_mp4 = get_sub_field('section_video_mp4'); 
		$section_video_webm = get_sub_field('section_video_webm'); 
		$section_video_image_poster = get_sub_field('section_video_image_poster'); 
		$section_wysiwyg = get_sub_field('section_wysiwyg'); 

		$classes_names = ($i==0) ? 'container full inView' : 'container postContainer full';
		?>

		<section id="<?php echo str_replace(array("#", "'", ";", " ", "&"), '', strtolower($section_name)); ?>" class="<?php echo $classes_names; ?>">
			<div class="contentWrapper">

				<?php if ($section_title) { ?>
					<h2><?php echo $section_title; ?></h2>
				<?php } ?>

				<?php if ($section_media_type=='image') {

					if ($section_image['sizes']['section_image']) { ?>
						<img src="<?php echo $section_image['sizes']['section_image']; ?>" alt="" /><?php 
					}

				} else { ?>

					<div class="videoWrapper">
						<video poster="<?php echo $section_video_image_poster['sizes']['section_image']; ?>" controls="controls" width="800" height="450">
							<?php if ($section_video_mp4['url']) { ?>
								<source class="mp4" src="<?php echo $section_video_mp4['url']; ?>" />
							<?php } ?>

							<?php if ($section_video_webm['url']) { ?>
								<source class="webm" src="<?php echo $section_video_webm['url']; ?>" />
							<?php } ?>
							
							<?php if ($section_video_image_poster['sizes']['section_image']) { ?>
								<img src="<?php echo $section_video_image_poster['sizes']['section_image']; ?>" alt="" />
							<?php } ?>
						</video>
					</div>

				<?php } ?>

				<?php if ($section_wysiwyg) { ?>
					<div class="content">
						<?php echo $section_wysiwyg; ?>
					</div>
				<?php } ?>
				
			</div>
		</section>

<?php $i++;
	endwhile;
} ?>