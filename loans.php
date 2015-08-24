<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "propertyLoanImg" src = "">
			<img id = "carLoanImg" src = "">
			<img id = "personalLoanImg" src = "">
			<img id = "smfImg" src = "">
		</div>
		<div id = "loansHtml">
			<div class = "container" id = "propertyLoan">	
				<h1 id = "pageTitle1" ></h1>
				<div class = "scrollBox dragscroll" id = "propertyLoanScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "autoLoan">
				<h1 id = "pageTitle2"></h1>
				<div class = "scrollBox dragscroll" id = "autoLoanScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "personalLoan">
				<h1 id = "pageTitle3"></h1>
				<div class = "scrollBox dragscroll" id = "personalLoanScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "shareMarketFinance">
				<h1 id = "pageTitle4"></h1>
				<div class = "scrollBox dragscroll" id = "shareMarketFinanceScrollBox">
					
				</div>
			</div>
			<div class = "navBar dragscroll" id = "loansNavBar">
				<ul>
					<li><button id = "propertyLoanBtn" onClick = "propertyLoanTab();changePropertyLoanBtnColor();">Property Loan</button></li>
					<li><button id = "autoLoanBtn" onClick = "autoLoanTab();changeAutoLoanBtnColor();">Auto Loan</button></li>
					<li><button id = "personalLoanBtn" onClick = "personalLoanTab();changePersonalLoanBtnColor();">Personal Loan</button></li>
					<li><button id = "shareMarketFinanceBtn" onClick = "shareMarketFinanceTab();changeShareMarketFinanceBtnColor();">Share Market Finance</button></li>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/loans.xml",false);
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
			document.getElementById("pageTitle4").innerHTML = x[3].getAttributeNode("title").nodeValue;
			//get side image
			document.getElementById("propertyLoanImg").src = x[0].getAttributeNode("image").nodeValue;
			document.getElementById("carLoanImg").src = x[1].getAttributeNode("image").nodeValue;
			document.getElementById("personalLoanImg").src = x[2].getAttributeNode("image").nodeValue;
			document.getElementById("smfImg").src = x[3].getAttributeNode("image").nodeValue;
			//get scroll box content
			document.getElementById("propertyLoanScrollBox").innerHTML = x[0].childNodes[1].nodeValue;
			document.getElementById("autoLoanScrollBox").innerHTML = x[1].childNodes[1].nodeValue;
			document.getElementById("personalLoanScrollBox").innerHTML = x[2].childNodes[1].nodeValue;
			document.getElementById("shareMarketFinanceScrollBox").innerHTML = x[3].childNodes[1].nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			propertyLoanTab();
			changePropertyLoanBtnColor();
			highlightLoans();
		</script>
	</body>
</html>