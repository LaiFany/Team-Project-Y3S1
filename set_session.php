<?php
	if(!isset($_SESSION)){
    session_start();
   }
   
   //get language session
   if(!isset($_SESSION['lang'])){
		$_SESSION['lang'] = "eng";
   }
   else if(isset($_SESSION['lang'])){
	   if(isset($_REQUEST['lang'])){
			$_SESSION['lang'] = $_REQUEST['lang'];
	   }
   }
   
   //get version session
   if(!isset($_SESSION['ver'])){
		$_SESSION['ver'] = "normal";
   }
   else if(isset($_SESSION['ver'])){
	   if(isset($_REQUEST['ver'])){
			$_SESSION['ver'] = $_REQUEST['ver'];
	   }
   }
   
	echo '
		<script>
			var verSession = "'.$_SESSION['ver'].'";
		</script>
	';
	
	if($_SESSION['ver'] == "normal"){
		echo '
			<div id = "hlbLogo">
				<img src = "images/bg/hlb_logo.gif">
			</div>
		';
	}
	else if($_SESSION['ver'] == "islamic"){
		echo '
			<div id = "hlbLogo">
				<img src = "images/bg/hlb_islamic_logo.png">
			</div>
		';
	}
?>