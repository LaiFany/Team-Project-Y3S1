<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "powerSMEImg" src = "">
			<img id = "loanImg" src = "">
		</div>
		<div id = "businessDepositsHtml">
			<div class = "container" id = "hongLeongPowerSMECurrentAccount">
				<h1 id = "pageTitle1" ></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongPowerSMECurrentAccountMainScrollBox">
					
				</div>
				<div class = "subTab dragscroll" id = "hongLeongPowerSMECurrentAccountSubTab">
					<ul>
						<li><button id = "powerSMECurrentAccountFeaturesBtn" onClick = "powerSMECurrentAccountFeaturesSubTab();changePowerSMECurrentAccountFeaturesSubTabColor();"></button></li>
						<li><button id = "powerSMECurrentAccountEligibilityBtn" onClick = "powerSMECurrentAccountEligibilitySubTab();changePowerSMECurrentAccountEligibilitySubTabColor();"></button></li>
						<li><button id = "powerSMECurrentAccountPromotionBtn" onClick = "powerSMECurrentAccountPromotionSubTab();changePowerSMECurrentAccountPromotionSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPowerSMECurrentAccountFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPowerSMECurrentAccountEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPowerSMECurrentAccountPromotionScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongBusinessFlexiFD">
				<h1 id = "pageTitle2"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongBusinessFlexiFDMainScrollBox">
					
				</div>
				<div class = "subTab dragscroll" id = "hongLeongBusinessFlexiFDSubTab">
					<ul>
						<li><button id = "businessFlexiFDFeaturesBtn" onClick = "businessFlexiFDFeaturesSubTab();changeBusinessFlexiFDFeaturesSubTabColor();"></button></li>
						<li><button id = "businessFlexiFDEligibilityBtn" onClick = "businessFlexiFDEligibilitySubTab();changeBusinessFlexiFDEligibilitySubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBusinessFlexiFDFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBusinessFlexiFDEligibilityScrollBox">
					
				</div>
			</div>
			<div class = "navBar dragscroll" id = "businessDepositsNavBar">
				<ul>
					<li><button id = "hongLeongPowerSMECurrentAccountBtn" onClick = "hongLeongPowerSMECurrentAccountTab();changeHongLeongPowerSMECurrentAccountBtnColor();changePowerSMECurrentAccountFeaturesSubTabColor();"></button></li>
					<li><button id = "hongLeongBusinessFlexiFDBtn" onClick = "hongLeongBusinessFlexiFDTab();changeHongLeongBusinessFlexiFDBtnColor();changeBusinessFlexiFDFeaturesSubTabColor();"></button></li>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/business_deposits.xml",false);
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
			//get side image info
			document.getElementById("powerSMEImg").src = xmlDoc.getElementsByTagName("content")[0].getAttributeNode("image").nodeValue;
			document.getElementById("loanImg").src = x[1].getAttributeNode("image").nodeValue;
			//get main scrollBox1 info
			document.getElementById("hongLeongPowerSMECurrentAccountMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
			//get main scrollBox 2 info
			document.getElementById("hongLeongBusinessFlexiFDMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[1].childNodes[1].nodeValue;			
			//get scrollBox 1 info
			document.getElementById("hongLeongPowerSMECurrentAccountFeaturesScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("hongLeongPowerSMECurrentAccountEligibilityScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("hongLeongPowerSMECurrentAccountPromotionScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			//get scrollBox 2 info
			document.getElementById("hongLeongBusinessFlexiFDFeaturesScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			document.getElementById("hongLeongBusinessFlexiFDEligibilityScrollBox").innerHTML = y[4].childNodes[1].nodeValue;
			//get sub tab 1 info
			document.getElementById("powerSMECurrentAccountFeaturesBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("powerSMECurrentAccountEligibilityBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("powerSMECurrentAccountPromotionBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			//get sub tab 2 info
			document.getElementById("businessFlexiFDFeaturesBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
			document.getElementById("businessFlexiFDEligibilityBtn").innerHTML = y[4].getAttributeNode("title").nodeValue;
			//get nav bar info
			document.getElementById("hongLeongPowerSMECurrentAccountBtn").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongBusinessFlexiFDBtn").innerHTML = x[1].getAttributeNode("title").nodeValue;

			</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerBcbList();
			hongLeongPowerSMECurrentAccountTab();
			highlightBusinessDeposits();
		</script>
	</body>
</html>