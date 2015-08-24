<?php
	include 'set_session.php';
	echo '
			<div id = "toggle">
				<ul>
					<li><a id = "verBtn" onclick = "showVerToggle()"><img src = "HLB-Interactive/images/icon/icon_plus.png" /><span id = "verText">Version</span></a></li>
					<li><a id = "langBtn" onclick = "showLangToggle()"><img src = "HLB-Interactive/images/icon/icon_plus.png" /><span id = "langText">Language</span></a></li>
				</ul>
			</div>
			<div id = "verToggle">
				<ul>
					<li><a class = "toggle" id = "normal" href = "index.php" onclick = "changeVerToIslamic();changeNormalColor()">Normal</a></li>
					<li><a class = "toggle" id = "islamic" href = "islamIndex.php" onclick = "changeVerToNormal();changeIslamicColor()">Islamic</a></li>
				</ul>
			</div>
			<div id = "langToggle">
			<ul>
				<li><a class = "toggle" id = "bm" href = "#" onclick = "changeLangToBM();changeBmColor()">Bahasa Malaysia</a></li>
				<li><a class = "toggle" id = "eng" href = "#" onclick = "changeLangToEng();changeEngColor()">English</a></li>
			</ul>
			</div>
			
			<script>
				<!--highlight session based on session-->
				var lang = "'.$_SESSION["lang"].'";
				if(lang == "bm"){
					changeBmColor();
				}
				else if(lang == "eng"){
					changeEngColor();
				}
				
				<!--highlight version based on session-->
				var ver = "'.$_SESSION["ver"].'";
				if(ver == "islamic"){
					changeIslamicColor();
				}
				else if(ver == "normal"){
					changeNormalColor();
				}
			</script>
			
			'
			;

?>