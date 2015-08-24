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
		</div>
		<div id = "onlineBankingHtml">
			<div class = "container" id = "onlineBanking">
				<h1 id = "pageTitle1"></h1>
				<div class = "mainScrollBox dragscroll"id = "onlineBankingTopMainScrollBox">
				</div>
				<div class = "subTab dragscroll" id = "onlineBankingSubTab">
					<ul>
						<li><button id = "onlineBankingServicesAvailableBtn" onClick = "onlineBankingServicesAvailableSubTab()"></button></li>
						<li><button id = "onlineBankingEligibilityBtn" onClick = "onlineBankingEligibilitySubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "onlineBankingServicesAvailableScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "onlineBankingEligibilityScrollBox">

				</div>
			</div>
			<div class = "container" id = "accountInquiryAndRepayments">
				<h1 id = "pageTitle2"></h1>
				<div class = "mainScrollBox dragscroll" id = "accountInquiryAndRepaymentsTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "accountInquiryAndRepaymentsSubTab">
					<ul>
						<li><button id = "accountInquiryAndRepaymentsAccountInquiryBtn" onClick = "accountInquiryAndRepaymentsAccountInquirySubTab()"></button></li>
						<li><button id = "accountInquiryAndRepaymentsLoanRepaymentBtn" onClick = "accountInquiryAndRepaymentsLoanRepaymentSubTab()"></button></li>
						<li><button id = "accountInquiryAndRepaymentsCreditCardRepaymentBtn" onClick = "accountInquiryAndRepaymentsCreditCardRepaymentSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "accountInquiryAndRepaymentsAccountInquiryScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "accountInquiryAndRepaymentsLoanRepaymentScrollBox">
				
				</div>
				<div class = "scrollBox dragscroll" id = "accountInquiryAndRepaymentsCreditCardRepaymentScrollBox">

				</div>
			</div>
			<div class = "container" id = "billPaymentAndPrepaidReload">
				<h1 id = "pageTitle3"></h1>
				<div class = "mainScrollBox dragscroll" id = "billPaymentAndPrepaidReloadTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "billPaymentAndPrepaidReloadSubTab">
					<ul>
						<li><button id = "billPaymentAndPrepaidReloadPayBillsBtn" onClick = "billPaymentAndPrepaidReloadPayBillsSubTab()"></button></li>
						<li><button id = "billPaymentAndPrepaidReloadPrepaidReloadsBtn" onClick = "billPaymentAndPrepaidReloadPrepaidReloadsSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "billPaymentAndPrepaidReloadPayBillsScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "billPaymentAndPrepaidReloadPrepaidReloadsScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "fundTransfer">
				<h1 id = "pageTitle4"></h1>
				<div class = "mainScrollBox dragscroll" id = "fundTransferTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "fundTransferSubTab">
					<ul>
						<li><button id = "fundTransferMainBtn" onClick = "fundTransferMainSubTab()"></button></li>
						<li><button id = "fundTransferWhichServiceToUseBtn" onClick = "fundTransferWhichServiceToUseSubTab()"></button></li>
						<li><button id = "fundTransferReceivingBankDetailsBtn" onClick = "fundTransferReceivingBankDetailsSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "fundTransferMainScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "fundTransferWhichServiceToUseScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "fundTransferReceivingBankDetailsScrollBox">
					
				</div>	
			</div>
			<div class = "container" id = "standingInstruction">
				<h1 id = "pageTitle5"></h1>
				<div class = "mainScrollBox dragscroll" id = "standingInstructionTopMainScrollBox">
					
				</div>
				<div class = "subTab dragscroll" id = "standingInstructionSubTab">
					<ul>
						<li><button id = "standingInstructionMainBtn" onClick = "standingInstructionMainSubTab()"></button></li>
						<li><button id = "standingInstructionServicesAvailableBtn" onClick = "standingInstructionServicesAvailableSubTab()"></button></li>
						<li><button id = "standingInstructionHowDoIBtn" onClick = "standingInstructionHowDoISubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "standingInstructionMainScrollBox">

				</div>
				<div class = "scrollBox dragscroll" id = "standingInstructionServicesAvailableScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "standingInstructionHowDoIScrollBox">
					
				</div>
			</div>
			<div class = "container" id = "otherServices">
				<h1 id = "pageTitle6"></h1>
				<div class = "mainScrollBox dragscroll" id = "otherServicesTopMainScrollBox">

				</div>
				<div class = "subTab dragscroll" id = "otherServicesSubTab">
					<ul>
						<li><button id = "otherServicesServicesAvailableBtn" onClick = "otherServicesServicesAvailableSubTab()"></button></li>
						<li><button id = "otherServicesFPXBtn" onClick = "otherServicesFPXSubTab()"></button></li>
					</ul>
				</div>
				<div class = "scrollBox dragscroll" id = "otherServicesServicesAvailableScrollBox">
					
				</div>
				<div class = "scrollBox dragscroll" id = "otherServicesFPXScrollBox">
					
				</div>
			</div>
			<div class = "navBar dragscroll" id = "onlineBankingNavBar">
				<ul>
					<li><button id = "onlineBankingOnlineBankingBtn" onClick = "onlineBankingOnlineBankingTab()"></button></li>
					<li><button id = "onlineBankingAccountInquiryAndRepaymentsBtn" onClick = "onlineBankingAccountInquiryAndRepaymentsTab()"></button></li>
					<li><button id = "onlineBankingBillPaymentAndPrepaidReloadBtn" onClick = "onlineBankingBillPaymentAndPrepaidReloadTab()"></button></li>
					<li><button id = "onlineBankingFundTransferBtn" onClick = "onlineBankingFundTransferTab()"></button></li>
					<li><button id = "onlineBankingStandingInstructionBtn" onClick = "onlineBankingStandingInstructionTab()"></button></li>
					<li><button id = "onlineBankingOtherServicesBtn" onClick = "onlineBankingOtherServicesTab()"></button></li>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/online_banking.xml",false);
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
			document.getElementById("pageTitle5").innerHTML = x[4].getAttributeNode("title").nodeValue;
			document.getElementById("pageTitle6").innerHTML = x[5].getAttributeNode("title").nodeValue;
			//get side image
			document.getElementById("basicSavingsAccImg").src = xmlDoc.getElementsByTagName("content")[0].getAttributeNode("image").nodeValue;
			//get main scroll box content
			document.getElementById("onlineBankingTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[0].childNodes[1].nodeValue;
			document.getElementById("accountInquiryAndRepaymentsTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[1].childNodes[0].nodeValue;
			document.getElementById("billPaymentAndPrepaidReloadTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[2].childNodes[0].nodeValue;
			document.getElementById("fundTransferTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[3].childNodes[0].nodeValue;
			document.getElementById("standingInstructionTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[4].childNodes[0].nodeValue;
			document.getElementById("otherServicesTopMainScrollBox").innerHTML = xmlDoc.getElementsByTagName("description")[5].childNodes[0].nodeValue;
			//get scroll box content
			document.getElementById("onlineBankingServicesAvailableScrollBox").innerHTML = y[0].childNodes[0].nodeValue;
			document.getElementById("onlineBankingEligibilityScrollBox").innerHTML = y[1].childNodes[0].nodeValue;
			document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").innerHTML = y[2].childNodes[0].nodeValue;
			document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").innerHTML = y[3].childNodes[0].nodeValue;
			document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").innerHTML = y[4].childNodes[0].nodeValue;
			document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").innerHTML = y[5].childNodes[0].nodeValue;
			document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").innerHTML = y[6].childNodes[1].nodeValue;
			document.getElementById("fundTransferMainScrollBox").innerHTML = y[7].childNodes[0].nodeValue;
			document.getElementById("fundTransferWhichServiceToUseScrollBox").innerHTML = y[8].childNodes[0].nodeValue;
			document.getElementById("fundTransferReceivingBankDetailsScrollBox").innerHTML = y[9].childNodes[0].nodeValue;
			document.getElementById("standingInstructionMainScrollBox").innerHTML = y[10].childNodes[0].nodeValue;
			document.getElementById("standingInstructionServicesAvailableScrollBox").innerHTML = y[11].childNodes[0].nodeValue;
			document.getElementById("standingInstructionHowDoIScrollBox").innerHTML = y[12].childNodes[0].nodeValue;
			document.getElementById("otherServicesServicesAvailableScrollBox").innerHTML = y[13].childNodes[0].nodeValue;
			document.getElementById("otherServicesFPXScrollBox").innerHTML = y[14].childNodes[0].nodeValue;
			//get sub tab value
			document.getElementById("onlineBankingServicesAvailableBtn").innerHTML = y[0].getAttributeNode("title").nodeValue;
			document.getElementById("onlineBankingEligibilityBtn").innerHTML = y[1].getAttributeNode("title").nodeValue;
			document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").innerHTML = y[2].getAttributeNode("title").nodeValue;
			document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").innerHTML = y[3].getAttributeNode("title").nodeValue;
			document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").innerHTML = y[4].getAttributeNode("title").nodeValue;
			document.getElementById("billPaymentAndPrepaidReloadPayBillsBtn").innerHTML = y[5].getAttributeNode("title").nodeValue;
			document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsBtn").innerHTML = y[6].getAttributeNode("title").nodeValue;
			document.getElementById("fundTransferMainBtn").innerHTML = y[7].getAttributeNode("title").nodeValue;
			document.getElementById("fundTransferWhichServiceToUseBtn").innerHTML = y[8].getAttributeNode("title").nodeValue;
			document.getElementById("fundTransferReceivingBankDetailsBtn").innerHTML = y[9].getAttributeNode("title").nodeValue;
			document.getElementById("fundTransferMainBtn").innerHTML = y[10].getAttributeNode("title").nodeValue;
			document.getElementById("standingInstructionMainBtn").innerHTML = y[11].getAttributeNode("title").nodeValue;
			document.getElementById("standingInstructionHowDoIBtn").innerHTML = y[12].getAttributeNode("title").nodeValue;
			document.getElementById("standingInstructionServicesAvailableBtn").innerHTML = y[13].getAttributeNode("title").nodeValue;
			document.getElementById("otherServicesServicesAvailableBtn").innerHTML = y[13].getAttributeNode("title").nodeValue;
			document.getElementById("otherServicesFPXBtn").innerHTML = y[14].getAttributeNode("title").nodeValue;
			//get nav bar value
			document.getElementById("onlineBankingOnlineBankingBtn").innerHTML = x[0].getAttributeNode("title").nodeValue;
			document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").innerHTML = x[1].getAttributeNode("title").nodeValue;
			document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").innerHTML = x[2].getAttributeNode("title").nodeValue;
			document.getElementById("onlineBankingFundTransferBtn").innerHTML = x[3].getAttributeNode("title").nodeValue;
			document.getElementById("onlineBankingStandingInstructionBtn").innerHTML = x[4].getAttributeNode("title").nodeValue;
			document.getElementById("onlineBankingOtherServicesBtn").innerHTML = x[5].getAttributeNode("title").nodeValue;
		</script>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerHlcList();
			onlineBankingOnlineBankingTab();
			highlightOnlineBanking();
		</script>
	</body>
</html>