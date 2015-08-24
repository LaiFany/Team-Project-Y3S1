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
		<div class = "container" id = "HLBSME">	
			<h1 id = "pageTitle"></h1>
			<div class = "subTab dragscroll" id = "hlbSmeSubTab">
					<ul>
						<li><button id = "hlbSmeTipsBtn" onClick = "hlbSmeTipsSubTab()"></button></li>
						<li><button id = "hlbSmeContactDetailsBtn" onClick = "hlbSmeContactDetailsSubTab()"></button></li>
					</ul>
				</div>
			<div class = "scrollBox dragscroll" id = "tipsScrollBox">
			
			</div>
			<div class = "scrollBox dragscroll" id = "contactDetailsScrollBox">
			
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/sme.xml",false);
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
			//get side image2
			document.getElementById("sideImage1").src = xmlDoc.getElementsByTagName("content")[0].getAttributeNode("image").nodeValue;
			//get scroll box content
			document.getElementById("tipsScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("contactDetailsScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			//get sub tab values
			document.getElementById("hlbSmeTipsBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("hlbSmeContactDetailsBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerBcbList();
			highlightHlbSme();
			hlbSmeTipsSubTab();
		</script>
	</body>
</html>