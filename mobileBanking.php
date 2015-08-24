<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "hlbLogo">
			<img src = "HLB-Interactive/images/bg/hlb_logo.gif">
		</div>
		<div id = "sideImage">
			<img id = "sideImage1" src = "">
		</div>
		<div id = "mobileBankingHtml">
			<div class = "container" id = "mobileBanking">
				<h1 id = "pageTitle"></h1>
				<div class = "mainScrollBox dragscroll" id = "mobileBankingMainScrollBox">
				</div>
				<div class = "subTab dragscroll" id = "mobileBankingSubTab">
					<ul>
						<li><button id = "mobileBankingFeaturesBtn" onClick = "mobileBankingFeaturesSubTab()"></button></li>
						<li><button id = "mobileBankingSecurityBtn" onClick = "mobileBankingSecuritySubTab()"></button></li>
						<li><button id = "mobileBankingGetStartedBtn" onClick = "mobileBankingGetStartedSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "mobileBankingFeaturesScrollBox">
		
				</div>
				<div class = "scrollBox dragscroll" id = "mobileBankingSecurityScrollBox">
			
				</div>
				<div class = "scrollBox dragscroll" id = "mobileBankingGetStartedScrollBox">
					
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/mobile_banking.xml",false);
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
			document.getElementById("mobileBankingMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[1].nodeValue;
			document.getElementById("mobileBankingFeaturesScrollBox").innerHTML = y[0].childNodes[0].nodeValue;
			document.getElementById("mobileBankingSecurityScrollBox").innerHTML = y[1].childNodes[0].nodeValue;
			document.getElementById("mobileBankingGetStartedScrollBox").innerHTML = y[2].childNodes[0].nodeValue;
			//get sub tab value
			document.getElementById("mobileBankingFeaturesBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("mobileBankingSecurityBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("mobileBankingGetStartedBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerHlcList();
			mobileBankingFeaturesSubTab();
			highlightMobileBanking();
		</script>
	</body>
</html>