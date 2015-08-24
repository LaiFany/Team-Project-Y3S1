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
		<div id = "bancassuranceHtml">
			<div class = "container" id = "bancassurance">
				<h1 id = "pageTitle"></h1>
				<div class = "subTab dragscroll" id = "bancassuranceSubTab">
					<ul>
						<li><button id = "bancassuranceIntroductionBtn" onClick = "bancassuranceIntroductionSubTab()"></button></li>
						<li><button id = "bancassurancePopularProductsBtn" onClick = "bancassurancePopularProductsSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "bancassuranceIntroductionScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "bancassurancePopularProductsScrollBox">
					
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/assurance.xml",false);
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
			//get sub tabs
			document.getElementById("bancassuranceIntroductionBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("bancassurancePopularProductsBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			//get scrollbox contents
			document.getElementById("bancassuranceIntroductionScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("bancassurancePopularProductsScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			bancassuranceIntroductionSubTab();
			highlightBancassurance();
		</script>
	</body>
</html>