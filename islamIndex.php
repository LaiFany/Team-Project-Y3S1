<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
		<script src="jquery-flipster-master/src/js/jquery.flipster.js"></script>
		<link rel="stylesheet" type="text/css" href="jquery-flipster-master/src/css/jquery.flipster.css">
	</head>
	<body>
		<style>
			body{
				background : url(images/bg/bg_p.jpg) no-repeat center center fixed;
				background-size : cover;
				overflow : hidden;
			}
		</style>
		
		<?php
			$dir = "promo/";

			// Open a directory, and read its contents
			if (is_dir($dir)){
			  if ($dh = opendir($dir)){
				  echo "<div class = 'coverflow' id = 'coverflow'><ul>";
				while (($file = readdir($dh)) !== false){
					if($file == "." || $file == ".."){
						continue;
					}
					else{
				  echo "<li><div><img src='".$dir.$file."'/></div></li>";
					}
				}
				echo "</ul></div>";
				closedir($dh);
			  }
			}
			?>
		<script>
			$(document).ready( function() {
			$(".coverflow").flipster();
			});
		</script>
		<?php
			include 'menuBtn.php';
		?>
	</body>
</html>