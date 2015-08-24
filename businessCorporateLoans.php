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
		<div id = "businessCorporateLoansHtml">
			<div class = "container" id = "businessCorporateLoans">
				<h1 id = "pageTitle"></h1>
				<div class = "mainScrollBox dragscroll" id = "businessCorporateLoansTopMainScrollBox">
			 
				</div>
				<div class = "subTab dragscroll" id = "businessCorporateLoansSubTab">
					<ul>
						<li><button id = "businessCorporateLoansMainBtn" onClick = "businessCorporateLoansMainSubTab()"></button></li>
						<li><button id = "businessCorporateLoansWCBPFBtn" onClick = "businessCorporateLoansWCBPFSubTab()"></button></li>
						<li><button id = "businessCorporateLoansBnmSchemeBtn" onClick = "businessCorporateLoansBnmSchemeSubTab()"></button></li>
						<li><button id = "businessCorporateLoansCgcSchemeBtn" onClick = "businessCorporateLoansCgcSchemeSubTab()"></button></li>
						<li><button id = "businessCorporateLoansContactBtn" onClick = "businessCorporateLoansContactSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "businessCorporateLoansMainScrollBox">
					  
				</div>
				<div class = "scrollBox dragscroll" id = "businessCorporateLoansWCBPFScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "businessCorporateLoansBnmSchemeScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "businessCorporateLoansCgcSchemeScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "businessCorporateLoansContactScrollBox">
		
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/business_corporate_banking.xml",false);
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
			document.getElementById("businessCorporateLoansTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
			document.getElementById("businessCorporateLoansMainScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("businessCorporateLoansWCBPFScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("businessCorporateLoansBnmSchemeScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("businessCorporateLoansCgcSchemeScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			document.getElementById("businessCorporateLoansContactScrollBox").innerHTML = y[4].childNodes[0].nodeValue;
			//get sub tab values
			document.getElementById("businessCorporateLoansMainBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("businessCorporateLoansWCBPFBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("businessCorporateLoansBnmSchemeBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("businessCorporateLoansCgcSchemeBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
			document.getElementById("businessCorporateLoansContactBtn").innerHTML = y[4].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerBcbList();
			businessCorporateLoansMainSubTab();
			highlightBusinessCorporateLoans();
		</script>
	</body>
</html>