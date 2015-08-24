<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "flexiFDImg" src = "">
			<img id = "juniorFDImg" src = "">
			<img id = "seniorFDImg" src = "">
		</div>
		<div id = "fixedDepositsHtml">
			<div class = "container" id = "hongLeongFlexiFD">
				<h1 id = "pageTitle1"></h1>
				<div class = "subTab dragscroll" id = "hongLeongFlexiFDSubTab">
					<ul>
						<li><button id = "flexiFDFeaturesBtn" onClick = "flexiFDFeaturesSubTab();changeFlexiFDFeaturesSubTabColor();"></button></li>
						<li><button id = "flexiFDEligibilityBtn" onClick = "flexiFDEligibilitySubTab();changeFlexiFDEligibilitySubTabColor();"></button></li>
						<li><button id = "flexiFDFeesBtn" onClick = "flexiFDFeesSubTab();changeFlexiFDFeesSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongFlexiFDFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongFlexiFDEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongFlexiFDFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongJuniorFD">
				<h1 id = "pageTitle2"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongJuniorFDMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongJuniorFDSubTab">
					<ul>
						<li><button id = "juniorFDFeaturesBtn" onClick = "juniorFDFeaturesSubTab();changeJuniorFDFeaturesSubTabColor();"></button></li>
						<li><button id = "juniorFDEligibilityBtn" onClick = "juniorFDEligibilitySubTab();changeJuniorFDEligibilitySubTabColor();"></button></li>
						<li><button id = "juniorFDFeesBtn" onClick = "juniorFDFeesSubTab();changeJuniorFDFeesSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorFDFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorFDEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorFDFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongSeniorSaversFlexiFD">
				<h1 id = "pageTitle3"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongSeniorSaversFlexiFDMainScrollBox">
					
				</div>
				<div class = "subTab dragscroll dragscroll" id = "hongLeongSeniorSaversFlexiFDSubTab">
					<ul>
						<li><button id = "seniorFDFeaturesBtn" onClick = "seniorFDFeaturesSubTab();changeSeniorFDFeaturesSubTabColor();"></button></li>
						<li><button id = "seniorFDEligibilityBtn" onClick = "seniorFDEligibilitySubTab();changeSeniorFDEligibilitySubTabColor();"></button></li>
						<li><button id = "seniorFDFeesBtn" onClick = "seniorFDFeesSubTab();changeSeniorFDFeesSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongSeniorSaversFlexiFDFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongSeniorSaversFlexiFDEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongSeniorSaversFlexiFDFeesScrollBox">
					
				</div>
			</div>
			<div class = "navBar dragscroll dragscroll" id = "fixedDepositsNavBar">
				<ul>
					<li><button id = "hongLeongFlexiFDBtn" onClick = "hongLeongFlexiFDTab();changeHongLeongFlexiFDBtnColor();"></button></li>
					<li><button id = "hongLeongJuniorFDBtn" onClick = "hongLeongJuniorFDTab();changeHongLeongJuniorFDBtnColor();changeJuniorFeaturesSubTabColor();"></button></li>
					<li><button id = "hongLeongSeniorSaversFlexiFDBtn" onClick = "hongLeongSeniorSaversFlexiFDTab();changeHongLeongSeniorSaversFlexiFDBtnColor();changeSeniorFeaturesSubTabColor();"></button></li>
				</ul>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/fixed_deposits.xml",false);
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
			document.getElementById("pageTitle1").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("pageTitle2").innerHTML = x[1].getAttributeNode("title").nodeValue;
			document.getElementById("pageTitle3").innerHTML = x[2].getAttributeNode("title").nodeValue;
			//get side image
			document.getElementById("flexiFDImg").src = x[0].getAttributeNode("image").nodeValue;
			document.getElementById("juniorFDImg").src = x[1].getAttributeNode("image").nodeValue;
			document.getElementById("seniorFDImg").src = x[2].getAttributeNode("image").nodeValue;
			//get main scroll box content
			document.getElementById("hongLeongJuniorFDMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[1].nodeValue;
			document.getElementById("hongLeongSeniorSaversFlexiFDMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[1].childNodes[1].nodeValue;
			//get scroll box content
			document.getElementById("hongLeongFlexiFDFeaturesScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("hongLeongFlexiFDEligibilityScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("hongLeongFlexiFDFeesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorFDFeaturesScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorFDEligibilityScrollBox").innerHTML = y[4].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorFDFeesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("hongLeongSeniorSaversFlexiFDFeaturesScrollBox").innerHTML = y[6].childNodes[1].nodeValue;
			document.getElementById("hongLeongSeniorSaversFlexiFDEligibilityScrollBox").innerHTML = y[7].childNodes[1].nodeValue;
			document.getElementById("hongLeongSeniorSaversFlexiFDFeesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			//get sub tab value
			document.getElementById("flexiFDFeaturesBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("flexiFDEligibilityBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("flexiFDFeesBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("juniorFDFeaturesBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
			document.getElementById("juniorFDEligibilityBtn").innerHTML = y[4].getAttributeNode("title").nodeValue;
			document.getElementById("juniorFDFeesBtn").innerHTML = y[5].getAttributeNode("title").nodeValue;
			document.getElementById("seniorFDFeaturesBtn").innerHTML = y[6].getAttributeNode("title").nodeValue;
			document.getElementById("seniorFDEligibilityBtn").innerHTML = y[7].getAttributeNode("title").nodeValue;
			document.getElementById("seniorFDFeesBtn").innerHTML = y[8].getAttributeNode("title").nodeValue;
			//get nav bar value
			document.getElementById("hongLeongFlexiFDBtn").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongJuniorFDBtn").innerHTML = x[1].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongSeniorSaversFlexiFDBtn").innerHTML = x[2].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			hongLeongFlexiFDTab();
			changeHongLeongFlexiFDBtnColor();
			triggerPfsList();
			highlightFixedDeposits();
		</script>
	</body>
</html>