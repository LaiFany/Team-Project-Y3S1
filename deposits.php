<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage">
			<img id = "basicSavingsAccImg" src = "">
			<img id = "basicCurrentAccImg" src = "">
			<img id = "oneAccImg" src = "">
			<img id = "payAndSaveAccImg" src = "">
		</div>
		<div id = "depositsHtml">
			<div class = "container" id = "hongLeongBasicSavingsAccount">
				<h1 id = "pageTitle1"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongBasicSavingsAccountTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongBasicSavingsAccountSubTab">
					<ul>
						<li><button id = "basicSavingsAccountMainBtn" onClick = "basicSavingsAccountMainSubTab()"></button></li>
						<li><button id = "basicSavingsAccountFeaturesBtn" onClick = "basicSavingsAccountFeaturesSubTab()"></button></li>
						<li><button id = "basicSavingsAccountEligibilityBtn" onClick = "basicSavingsAccountEligibilitySubTab()"></button></li>
						<li><button id = "basicSavingsAccountFeesBtn" onClick = "basicSavingsAccountFeesSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicSavingsAccountMainScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicSavingsAccountFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicSavingsAccountEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicSavingsAccountFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongBasicCurrentAccount">
				<h1 id = "pageTitle2" ></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongBasicCurrentAccountTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongBasicCurrentAccountSubTab">
					<ul>
						<li><button id = "basicCurrentAccountMainBtn" onClick = "basicCurrentAccountMainSubTab()"></button></li>
						<li><button id = "basicCurrentAccountFeaturesBtn" onClick = "basicCurrentAccountFeaturesSubTab()"></button></li>
						<li><button id = "basicCurrentAccountEligibilityBtn" onClick = "basicCurrentAccountEligibilitySubTab()"></button></li>
						<li><button id = "basicCurrentAccountFeesBtn" onClick = "basicCurrentAccountFeesSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicCurrentAccountMainScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicCurrentAccountFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicCurrentAccountEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongBasicCurrentAccountFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongOneAccount">
				<h1 id = "pageTitle3"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongOneAccountTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongOneAccountSubTab">
					<ul>
						<li><button id = "oneAccountMainBtn" onClick = "oneAccountMainSubTab()"></button></li>
						<li><button id = "oneAccountFeaturesBtn" onClick = "oneAccountFeaturesSubTab()"></button></li>
						<li><button id = "oneAccountEligibilityBtn" onClick = "oneAccountEligibilitySubTab()"></button></li>
						<li><button id = "oneAccountFeesBtn" onClick = "oneAccountFeesSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongOneAccountMainScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongOneAccountFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongOneAccountEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongOneAccountFeesScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "hongLeongPayAndSaveAccount">
				<h1 id = "pageTitle4"></h1>
				<div class = "mainScrollBox dragscroll" id = "hongLeongPayAndSaveAccountTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "hongLeongPayAndSaveAccountSubTab">
					<ul>
						<li><button id = "payAndSaveAccountMainBtn" onClick = "payAndSaveAccountMainSubTab()"></button></li>
						<li><button id = "payAndSaveAccountFeaturesBtn" onClick = "payAndSaveAccountFeaturesSubTab()"></button></li>
						<li><button id = "payAndSaveAccountEligibilityBtn" onClick = "payAndSaveAccountEligibilitySubTab()"></button></li>
						<li><button id = "payAndSaveAccountFeesBtn" onClick = "payAndSaveAccountFeesSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPayAndSaveAccountMainScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPayAndSaveAccountFeaturesScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPayAndSaveAccountEligibilityScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "hongLeongPayAndSaveAccountFeesScrollBox">
					
				</div>
			</div>
			<div>
				<div class = "navBar dragscroll dragscroll" id = "depositsNavBar">
					<div id = "list">
						<ul>
							<li><button id = "hongLeongBasicSavingsAccountBtn" onClick = "hongLeongBasicSavingsAccountTab()"></button></li>
							<li><button id = "hongLeongBasicCurrentAccountBtn" onClick = "hongLeongBasicCurrentAccountTab()"></button></li>
							<li><button id = "hongLeongOneAccountBtn" onClick = "hongLeongOneAccountTab()"></button></li>
							<li><button id = "hongLeongPayAndSaveAccountBtn" onClick = "hongLeongPayAndSaveAccountTab()"></button></li>
						</ul>
					</div>
				</div>
				<!-- Incomplete code. To check end of horizontal scroll. Left working, but not right. -->
				<!--<script>
					$(document).ready(function(){
						$(function() {
							$('#depositsNavBar').scroll( function() {
								if ( $('#depositsNavBar').scrollLeft() == ($('#depositsNavBar #list').width() - $('#depositsNavBar').width())) {
									//document.getElementById("").style.display = "none";
									alert('left');
								}
								else if ( $('#depositsNavBar #list').width() == ($('#depositsNavBar').width() + $('#depositsNavBar').scrollLeft())) {
									//document.getElementById("").style.display = "none";
									alert('right');
								}
							});
						});
					});
				</script>-->
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/deposits.xml",false);
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
			document.getElementById("pageTitle4").innerHTML = x[3].getAttributeNode("title").nodeValue;
			//get side image
			document.getElementById("basicSavingsAccImg").src = x[0].getAttributeNode("image").nodeValue;
			document.getElementById("basicCurrentAccImg").src = x[1].getAttributeNode("image").nodeValue;
			document.getElementById("oneAccImg").src = x[2].getAttributeNode("image").nodeValue;
			document.getElementById("payAndSaveAccImg").src = x[3].getAttributeNode("image").nodeValue;
			//get main scroll box content
			document.getElementById("hongLeongBasicSavingsAccountTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicCurrentAccountTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[1].childNodes[0].nodeValue;
			document.getElementById("hongLeongOneAccountTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[2].childNodes[0].nodeValue;
			document.getElementById("hongLeongPayAndSaveAccountTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[3].childNodes[0].nodeValue;
			//get scroll box content
			document.getElementById("hongLeongBasicSavingsAccountMainScrollBox").innerHTML = y[0].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").innerHTML = y[1].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").innerHTML = y[2].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").innerHTML = y[3].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").innerHTML = y[4].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").innerHTML = y[5].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").innerHTML = y[6].childNodes[1].nodeValue;
			document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").innerHTML = y[7].childNodes[1].nodeValue;
			document.getElementById("hongLeongOneAccountMainScrollBox").innerHTML = y[8].childNodes[0].nodeValue;
			document.getElementById("hongLeongOneAccountFeaturesScrollBox").innerHTML = y[9].childNodes[0].nodeValue;
			document.getElementById("hongLeongOneAccountEligibilityScrollBox").innerHTML = y[10].childNodes[0].nodeValue;
			document.getElementById("hongLeongOneAccountFeesScrollBox").innerHTML = y[11].childNodes[0].nodeValue;
			document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").innerHTML = y[12].childNodes[0].nodeValue;
			document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").innerHTML = y[13].childNodes[0].nodeValue;
			document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").innerHTML = y[14].childNodes[0].nodeValue;
			document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").innerHTML = y[15].childNodes[0].nodeValue;
			//get sub tab value
			document.getElementById("basicSavingsAccountMainBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("basicSavingsAccountFeaturesBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("basicSavingsAccountEligibilityBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("basicSavingsAccountFeesBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
			document.getElementById("basicCurrentAccountMainBtn").innerHTML = y[4].getAttributeNode("title").nodeValue;
			document.getElementById("basicCurrentAccountFeaturesBtn").innerHTML = y[5].getAttributeNode("title").nodeValue;
			document.getElementById("basicCurrentAccountEligibilityBtn").innerHTML = y[6].getAttributeNode("title").nodeValue;
			document.getElementById("basicCurrentAccountFeesBtn").innerHTML = y[7].getAttributeNode("title").nodeValue;
			document.getElementById("oneAccountMainBtn").innerHTML = y[8].getAttributeNode("title").nodeValue;
			document.getElementById("oneAccountFeaturesBtn").innerHTML = y[9].getAttributeNode("title").nodeValue;
			document.getElementById("oneAccountEligibilityBtn").innerHTML = y[10].getAttributeNode("title").nodeValue;
			document.getElementById("oneAccountFeesBtn").innerHTML = y[11].getAttributeNode("title").nodeValue;
			document.getElementById("payAndSaveAccountMainBtn").innerHTML = y[12].getAttributeNode("title").nodeValue;
			document.getElementById("payAndSaveAccountFeaturesBtn").innerHTML = y[13].getAttributeNode("title").nodeValue;
			document.getElementById("payAndSaveAccountEligibilityBtn").innerHTML = y[14].getAttributeNode("title").nodeValue;
			document.getElementById("payAndSaveAccountFeesBtn").innerHTML = y[15].getAttributeNode("title").nodeValue;
			//get nav bar value
			document.getElementById("hongLeongBasicSavingsAccountBtn").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongBasicCurrentAccountBtn").innerHTML = x[1].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongOneAccountBtn").innerHTML = x[2].getAttributeNode("title").nodeValue;
			document.getElementById("hongLeongPayAndSaveAccountBtn").innerHTML = x[3].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			hongLeongBasicSavingsAccountTab();
			highlightDeposits();
		</script>
	</body>
</html>