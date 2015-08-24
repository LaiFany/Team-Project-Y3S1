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
		<div class = "container" id = "priorityBanking">	
			<h1 id = "pageTitle"></h1>
			<div class = "subTab dragscroll" id = "priorityBankingSubTab">
					<ul>
						<li><button id = "priorityBankingIntroductionBtn" onClick = "priorityBankingIntroductionSubTab()"></button></li>
						<li><button id = "priorityBankingPrivilegeBtn" onClick = "priorityBankingPrivilegeSubTab()"></button></li>
					</ul>
			</div>
			<div class = "scrollBox dragscroll" id = "priorityBankingIntroductionScrollBox">
			
			</div>
			<div class = "scrollBox dragscroll" id = "priorityBankingPrivilegeScrollBox">
			
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/priority_banking.xml",false);
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
			document.getElementById("priorityBankingIntroductionScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("priorityBankingPrivilegeScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			//get sub tab value
			document.getElementById("priorityBankingIntroductionBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("priorityBankingPrivilegeBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			highlightPriorityBanking();
			priorityBankingIntroductionSubTab();
		</script>
	</body>
</html>