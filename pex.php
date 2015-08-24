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
		<div id = "pexHtml">
			<div class = "container" id = "pex">
				<h1 id = "pageTitle"></h1>
				<div class = "mainScrollBox dragscroll" id = "pexMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "pexSubTab">
					<ul>
						<li><button id = "pexHowPexWorksBtn" onClick = "pexHowPexWorksSubTab()"></button></li>
						<li><button id = "pexWhyPexBtn" onClick = "pexWhyPexSubTab()"></button></li>
						<li><button id = "pexClaimYourPexBtn" onClick = "pexClaimYourPexSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "pexHowPexWorksScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "pexWhyPexScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "pexClaimYourPexScrollBox">

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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/pex_payment_express.xml",false);
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
			document.getElementById("pexMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
			document.getElementById("pexHowPexWorksScrollBox").innerHTML = y[0].childNodes[0].nodeValue;
			document.getElementById("pexWhyPexScrollBox").innerHTML = y[1].childNodes[0].nodeValue;
			document.getElementById("pexClaimYourPexScrollBox").innerHTML = y[2].childNodes[0].nodeValue;
			//get sub tab value
			document.getElementById("pexHowPexWorksBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("pexWhyPexBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("pexClaimYourPexBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerHlcList();
			pexHowPexWorksSubTab();
			highlightPex();
		</script>
	</body>
</html>