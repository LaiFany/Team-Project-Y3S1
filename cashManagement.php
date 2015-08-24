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
		<div id = "cashManagementHtml">
			<div class = "container" id = "cashManagement">
				<h1 id = "pageTitle"></h1>
				<div class = "mainScrollBox dragscroll" id = "cashManagementTopMainScrollBox">
				</div>
				<div class = "subTab dragscroll" id = "cashManagementSubTab">
					<ul>
						<li><button id = "cashManagementServicesAndFeaturesBtn" onClick = "cashManagementServicesAndFeaturesSubTab()"></button></li>
						<li><button id = "cashManagementBenefitsBtn" onClick = "cashManagementBenefitsSubTab()"></button></li>
						<li><button id = "cashManagementHowToApplyBtn" onClick = "cashManagementHowToApplySubTab()"></button></li>
						<li><button id = "cashManagementContactUsBtn" onClick = "cashManagementContactUsSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "cashManagementServicesAndFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "cashManagementBenefitsScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "cashManagementHowToApplyScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "cashManagementContactUsScrollBox">
			
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/cash_management.xml",false);
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
			document.getElementById("cashManagementTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[1].nodeValue;
			document.getElementById("cashManagementServicesAndFeaturesScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("cashManagementBenefitsScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("cashManagementHowToApplyScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("cashManagementContactUsScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			//get sub tab values
			document.getElementById("cashManagementServicesAndFeaturesBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("cashManagementBenefitsBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("cashManagementHowToApplyBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("cashManagementContactUsBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerBcbList();
			cashManagementServicesAndFeaturesSubTab();
			highlightCashManagement();
		</script>
	</body>
</html>