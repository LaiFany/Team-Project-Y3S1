<html>
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
		<div id = "tradeServicesHtml">
			<div class = "container" id = "tradeServices">
				<h1 id = "pageTitle"></h1>
				<div class = "mainScrollBox dragscroll" id = "tradeServicesTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "tradeServicesSubTab">
					<ul>
						<li><button id = "mainBtn" onClick = "mainSubTab()"></button></li>
						<li><button id = "importsLocalPurchasesBtn" onClick = "importsLocalPurchasesSubTab()"></button></li>
						<li><button id = "exportsLocalSalesBtn" onClick = "exportsLocalSalesSubTab()"></button></li>
						<li><button id = "servicesBtn" onClick = "servicesSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "tradeServicesMainScrollBox">
				
				</div>
				<div class = "scrollBox dragscroll" id = "tradeServicesImportsLocalPurchasesScrollBox">
				
				</div>
				<div class = "scrollBox dragscroll" id = "tradeServicesExportsLocalSalesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "tradeServicesServicesScrollBox">

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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/trade_services.xml",false);
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
			document.getElementById("sideImage1").src = xmlDoc.getElementsByTagName("content")[0].getAttributeNode("image").nodeValue;
			//get scroll box content
			document.getElementById("tradeServicesTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
			document.getElementById("tradeServicesMainScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("tradeServicesImportsLocalPurchasesScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("tradeServicesExportsLocalSalesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("tradeServicesServicesScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			//get sub tab values
			document.getElementById("mainBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("importsLocalPurchasesBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("exportsLocalSalesBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("servicesBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerBcbList();
			highlightTradeServices();
			mainSubTab();
		</script>
	</body>
</html>