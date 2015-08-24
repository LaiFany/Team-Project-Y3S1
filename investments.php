<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "unitTrustImg" src = "">
			<img id = "dualCurrencyImg" src = "">
			<img id = "eliImg" src = "">
		</div>
		<div id = "investmentsHtml">
			<div class = "container" id = "unitTrust">	
				<h1 id = "pageTitle1"></h1>
				<div class = "scrollBox dragscroll" id = "unitTrustScrollBox">

				</div>
			</div>
			<div class = "container" id = "dualCurrencyInvestment">
				<h1 id = "pageTitle2"></h1>
				<div class = "scrollBox dragscroll" id = "dualCurrencyInvestmentScrollBox">

				</div>
			</div>
			<div class = "container" id = "equityLinkedInvestment">
				<h1 id = "pageTitle3"></h1>
				<div class = "scrollBox dragscroll" id = "equityLinkedInvestmentScrollBox">

				</div>
			</div>
			<div class = "navBar dragscroll" id = "investmentsNavBar">
				<ul>
					<li><button id = "unitTrustBtn" onClick = "unitTrustTab();changeUnitTrustBtnColor();"></button></li>
					<li><button id = "dualCurrencyInvestmentBtn" onClick = "dualCurrencyInvestmentTab();changeDualCurrencyInvestmentBtnColor();"></button></li>
					<li><button id = "equityLinkedInvestmentBtn" onClick = "equityLinkedInvestmentTab();changeEquityLinkedInvestmentBtnColor();"></button></li>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/investments.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML;
			
			x = xmlDoc.getElementsByTagName("page");
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
			document.getElementById("unitTrustImg").src = x[0].getAttributeNode("image").nodeValue;
			document.getElementById("dualCurrencyImg").src = x[1].getAttributeNode("image").nodeValue;
			document.getElementById("eliImg").src = x[2].getAttributeNode("image").nodeValue;
			//get scroll box content
			document.getElementById("unitTrustScrollBox").innerHTML = x[0].childNodes[1].nodeValue;
			document.getElementById("dualCurrencyInvestmentScrollBox").innerHTML = x[1].childNodes[1].nodeValue;
			document.getElementById("equityLinkedInvestmentScrollBox").innerHTML = x[2].childNodes[1].nodeValue;
			//get nav bar value
			document.getElementById("unitTrustBtn").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("dualCurrencyInvestmentBtn").innerHTML = x[1].getAttributeNode("title").nodeValue;
			document.getElementById("equityLinkedInvestmentBtn").innerHTML = x[2].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			unitTrustTab();
			changeUnitTrustBtnColor();
			highlightInvestments();
		</script>
	</body>
</html>