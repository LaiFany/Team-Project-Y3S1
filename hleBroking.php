<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "sideImage1" src = "">
		</div>
		<div id = "hleBrokingHtml">
			<div class = "container" id = "hleBroking">
				<h1 id = "pageTitle"></h1>
				<div class = "mainScrollBox dragscroll" id = "hleBrokingMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hleBrokingSubTab">
					<ul>
						<li><button id = "hleBrokingFeaturesBtn" onClick = "hleBrokingFeaturesSubTab()"></button></li>
						<li><button id = "hleBrokingEligibilityBtn" onClick = "hleBrokingEligibilitySubTab()"></button></li>
						<li><button id = "hleBrokingStartUpGuideBtn" onClick = "hleBrokingStartUpGuideSubTab()"></button></li>
						<li><button id = "hleBrokingContactUsBtn" onClick = "hleBrokingContactUsSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hleBrokingFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hleBrokingEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hleBrokingStartUpGuideScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hleBrokingContactUsScrollBox">
					
				</div>
			</div>
		</div>
		<script>
			if(window.XMLHttpRequest){
				xmlhttp = new XMLHttpRequest();
			}
			<?php
				echo 'var ver = "'.$_SESSION['ver'].'";';
				echo 'var lang = "'.$_SESSION['lang'].'";';
			?>
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/hle_broking.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML;
			
			x = xmlDoc.getElementsByTagName("page");
			y = xmlDoc.getElementsByTagName("tab");
			//get background
			var background = xmlDoc.getElementsByTagName("content")[0].getAttributeNode("background").nodeValue;
			document.body.style.background = "url('"+background+"') no-repeat center center fixed";
			document.body.style.backgroundSize = "cover";
			document.body.style.width = "100%";
			//get page title
			document.getElementById("pageTitle").innerHTML = x[0].getAttributeNode("title").nodeValue;
			//get side image
			document.getElementById("sideImage1").src = x[0].getAttributeNode("image").nodeValue;
			//get scroll box content
			document.getElementById("hleBrokingMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
			document.getElementById("hleBrokingFeaturesScrollBox").innerHTML = y[0].childNodes[0].nodeValue;
			document.getElementById("hleBrokingEligibilityScrollBox").innerHTML = y[1].childNodes[0].nodeValue;
			document.getElementById("hleBrokingStartUpGuideScrollBox").innerHTML = y[2].childNodes[0].nodeValue;
			document.getElementById("hleBrokingContactUsScrollBox").innerHTML = y[3].childNodes[0].nodeValue;
			//get sub tab value
			document.getElementById("hleBrokingFeaturesBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("hleBrokingEligibilityBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("hleBrokingStartUpGuideBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("hleBrokingContactUsBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerHlcList();
			hleBrokingFeaturesSubTab();
			highlightHleBroking();
		</script>
	</body>
</html>