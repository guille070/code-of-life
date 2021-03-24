<?php
    $footer_content = get_field('footer_content', 'option');
?>
        
        </main>

        <?php if ($footer_content) { ?>
            <footer>
                <?php echo $footer_content; ?>
            </footer>
        <?php } ?>
	</div> <!-- wrapper -->

    <?php wp_footer(); ?>

</body>
</html>