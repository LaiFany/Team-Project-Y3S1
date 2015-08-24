<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "debitCardImg" src = "">
			<img id = "juniorDebitCardImg" src = "">
			<img id = "zingDebitCardImg" src = "">
		</div>
		<div id = "debitCardsHtml">
			<div class = "container" id = "hongLeongDebitCard">
				<h1 id = "pageTitle1"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongDebitCardMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongDebitCardSubTab">
					<ul>
						<li><button id = "debitCardFeaturesBtn" onClick = "debitCardFeaturesSubTab();changeDebitCardFeaturesSubTabColor();"></button></li>
						<li><button id = "debitCardEligibilityBtn" onClick = "debitCardEligibilitySubTab();changeDebitCardEligibilitySubTabColor();"></button></li>
						<li><button id = "debitCardFeesBtn" onClick = "debitCardFeesSubTab();changeDebitCardFeesSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongDebitCardFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongDebitCardEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongDebitCardFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongJuniorDebitCard">
				<h1 id = "pageTitle2"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongJuniorDebitCardTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongJuniorDebitCardSubTab">
					<ul>
						<li><button id = "juniorDebitCardMainBtn" onClick = "juniorDebitCardMainSubTab();changeJuniorDebitCardMainSubTabColor();"></button></li>
						<li><button id = "juniorDebitCardFeaturesBtn" onClick = "juniorDebitCardFeaturesSubTab();changeJuniorDebitCardFeaturesSubTabColor();"></button></li>
						<li><button id = "juniorDebitCardEligibilityBtn" onClick = "juniorDebitCardEligibilitySubTab();changeJuniorDebitCardEligibilitySubTabColor();"></button></li>
						<li><button id = "juniorDebitCardFeesBtn" onClick = "juniorDebitCardFeesSubTab();changeJuniorDebitCardFeesSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorDebitCardMainScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorDebitCardFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorDebitCardEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongJuniorDebitCardFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongTouchNGoZingDebitCard">
				<h1 id = "pageTitle3"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongTouchNGoZingDebitCardMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongTouchNGoZingDebitCardSubTab">
					<ul>
						<li><button id = "zingDebitCardFeaturesBtn" onClick = "zingDebitCardFeaturesSubTab();changeZingDebitCardFeaturesSubTabColor();"></button></li>
						<li><button id = "zingDebitCardEligibilityBtn" onClick = "zingDebitCardEligibilitySubTab();changeZingDebitCardEligibilitySubTabColor();"></button></li>
						<li><button id = "zingDebitCardFeesBtn" onClick = "zingDebitCardFeesSubTab();changeZingDebitCardFeesSubTabColor();"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongTouchNGoZingDebitCardFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongTouchNGoZingDebitCardEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongTouchNGoZingDebitCardFeesScrollBox">
					
				</div>
			</div>
			<div class = "navBar dragscroll dragscroll" id = "debitCardsNavBar">
				<ul>
					<li><button id = "hongLeongDebitCardBtn" onClick = "hongLeongDebitCardTab();changeHongLeongDebitCardBtnColor();"></button></li>
					<li><button id = "hongLeongJuniorDebitCardBtn" onClick = "hongLeongJuniorDebitCardTab();changeHongLeongJuniorDebitCardBtnColor();changeJuniorFeaturesSubTabColor();"></button></li>
					<li><button id = "hongLeongTouchNGoZingDebitCardBtn" onClick = "hongLeongTouchNGoZingDebitCardTab();changeHongLeongTouchNGoZingDebitCardBtnColor();changeSeniorFeaturesSubTabColor();"></button></li>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/debit_card.xml",false);
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
			document.getElementById("debitCardImg").src = x[0].getAttributeNode("image").nodeValue;
			document.getElementById("juniorDebitCardImg").src = x[1].getAttributeNode("image").nodeValue;
			document.getElementById("zingDebitCardImg").src = x[2].getAttributeNode("image").nodeValue;
			//get main scroll box content
			document.getElementById("hongLeongDebitCardMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
			document.getElementById("hongLeongJuniorDebitCardTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[1].childNodes[1].nodeValue;
			document.getElementById("hongLeongTouchNGoZingDebitCardMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[2].childNodes[1].nodeValue;
			//get scroll box content
			document.getElementById("hongLeongDebitCardFeaturesScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("hongLeongDebitCardEligibilityScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("hongLeongDebitCardFeesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorDebitCardMainScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").innerHTML = y[4].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").innerHTML = y[5].childNodes[1].nodeValue;
			document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("hongLeongTouchNGoZingDebitCardFeaturesScrollBox").innerHTML = y[7].childNodes[1].nodeValue;
			document.getElementById("hongLeongTouchNGoZingDebitCardEligibilityScrollBox").innerHTML = y[8].childNodes[1].nodeValue;
			document.getElementById("hongLeongTouchNGoZingDebitCardFeesScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			//get sub tab value
			document.getElementById("debitCardFeaturesBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("debitCardEligibilityBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("debitCardFeesBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("juniorDebitCardMainBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
			document.getElementById("juniorDebitCardFeaturesBtn").innerHTML = y[4].getAttributeNode("title").nodeValue;
			document.getElementById("juniorDebitCardEligibilityBtn").innerHTML = y[5].getAttributeNode("title").nodeValue;
			document.getElementById("juniorDebitCardFeesBtn").innerHTML = y[6].getAttributeNode("title").nodeValue;
			document.getElementById("zingDebitCardFeaturesBtn").innerHTML = y[7].getAttributeNode("title").nodeValue;
			document.getElementById("zingDebitCardEligibilityBtn").innerHTML = y[8].getAttributeNode("title").nodeValue;
			document.getElementById("zingDebitCardFeesBtn").innerHTML = y[9].getAttributeNode("title").nodeValue;
			//get nav bar value
			document.getElementById("hongLeongDebitCardBtn").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongJuniorDebitCardBtn").innerHTML = x[1].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongTouchNGoZingDebitCardBtn").innerHTML = x[2].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			hongLeongDebitCardTab();
			changeHongLeongDebitCardBtnColor();
			highlightDebitCards();
		</script>
	</body>
</html>