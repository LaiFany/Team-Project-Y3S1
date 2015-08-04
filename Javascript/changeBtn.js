/*scripts for menu button*/
function changeBtnToClose(){
	document.getElementById("exploreBtn").style.visibility = "hidden";
	document.getElementById("closeBtn").style.visibility = "visible";
	document.getElementById("menuList").style.visibility = "visible";
	document.getElementById("backBtn").style.visibility = "hidden";
	document.getElementById("aboutList").style.visibility = "hidden";
	document.getElementById("pfsList").style.visibility = "hidden";
	document.getElementById("bcbList").style.visibility = "hidden";
	document.getElementById("hlcList").style.visibility = "hidden";
	
	document.getElementById("menuList").style.opacity = "1";
	document.getElementById("menuList").style.transition = "opacity 1s linear";
	document.getElementById("aboutList").style.opacity = "0";
	document.getElementById("pfsList").style.opacity = "0";
	document.getElementById("bcbList").style.opacity = "0";
	document.getElementById("hlcList").style.opacity = "0";
}

function changeBtnToExplore(){
	document.getElementById("closeBtn").style.visibility = "hidden";
	document.getElementById("exploreBtn").style.visibility = "visible";
	document.getElementById("menuList").style.visibility = "hidden";
	location.href = "index.html";
	
	document.getElementById("menuList").style.opacity = "0";
}

/*scripts for menu list*/
function triggerAboutList(){
	document.getElementById("closeBtn").style.visibility = "hidden";
	document.getElementById("backBtn").style.visibility = "visible";
	document.getElementById("menuList").style.visibility = "hidden";
	document.getElementById("aboutList").style.visibility = "visible";
	document.getElementById("exploreBtn").style.visibility = "hidden";
	
	document.getElementById("aboutList").style.opacity = "1";
	document.getElementById("aboutList").style.transition = "opacity 1s linear";
	
	document.getElementById("menuList").style.opacity = "0";
	document.getElementById("pfsList").style.opacity = "0";
	document.getElementById("bcbList").style.opacity = "0";
	document.getElementById("hlcList").style.opacity = "0";
}

function triggerPfsList(){
	document.getElementById("closeBtn").style.visibility = "hidden";
	document.getElementById("backBtn").style.visibility = "visible";
	document.getElementById("menuList").style.visibility = "hidden";
	document.getElementById("pfsList").style.visibility = "visible";
	document.getElementById("exploreBtn").style.visibility = "hidden";
	
	document.getElementById("pfsList").style.opacity = "1";
	document.getElementById("pfsList").style.transition = "opacity 1s linear";
	
	document.getElementById("menuList").style.opacity = "0";
	document.getElementById("aboutList").style.opacity = "0";
	document.getElementById("bcbList").style.opacity = "0";
	document.getElementById("hlcList").style.opacity = "0";
}

function triggerBcbList(){
	document.getElementById("closeBtn").style.visibility = "hidden";
	document.getElementById("backBtn").style.visibility = "visible";
	document.getElementById("menuList").style.visibility = "hidden";
	document.getElementById("bcbList").style.visibility = "visible";
	document.getElementById("exploreBtn").style.visibility = "hidden";
	
	document.getElementById("bcbList").style.opacity = "1";
	document.getElementById("bcbList").style.transition = "opacity 1s linear";
	
	document.getElementById("menuList").style.opacity = "0";
	document.getElementById("aboutList").style.opacity = "0";
	document.getElementById("pfsList").style.opacity = "0";
	document.getElementById("hlcList").style.opacity = "0";
}

function triggerHlcList(){
	document.getElementById("closeBtn").style.visibility = "hidden";
	document.getElementById("backBtn").style.visibility = "visible";
	document.getElementById("menuList").style.visibility = "hidden";
	document.getElementById("hlcList").style.visibility = "visible";
	document.getElementById("exploreBtn").style.visibility = "hidden";
	
	document.getElementById("hlcList").style.opacity = "1";
	document.getElementById("hlcList").style.transition = "opacity 1s linear";
	
	document.getElementById("menuList").style.opacity = "0";
	document.getElementById("aboutList").style.opacity = "0";
	document.getElementById("pfsList").style.opacity = "0";
	document.getElementById("bcbList").style.opacity = "0";
}

/**/
function highlightStory(){
	document.getElementById("1").style.backgroundColor = "#000055";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightCreditCards(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "#000055";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightDebitCards(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "#000055";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightFixedDeposits(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "#000055";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightDeposits(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "#000055";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightBancassurance(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "#000055";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightLoans(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "#000055";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightPriorityBanking(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "#000055";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightInvestments(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "#000055";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightBusinessCorporateLoans(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "#000055";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightBusinessDeposits(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "#000055";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightTradeServices(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "#000055";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightCashManagement(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "#000055";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightHlbSme(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "#000055";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightOnlineBanking(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "#000055";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightMobileBanking(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "#000055";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightPex(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "#000055";
	document.getElementById("18").style.backgroundColor = "red";
}

function highlightHleBroking(){
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	document.getElementById("10").style.backgroundColor = "red";
	document.getElementById("11").style.backgroundColor = "red";
	document.getElementById("12").style.backgroundColor = "red";
	document.getElementById("13").style.backgroundColor = "red";
	document.getElementById("14").style.backgroundColor = "red";
	document.getElementById("15").style.backgroundColor = "red";
	document.getElementById("16").style.backgroundColor = "red";
	document.getElementById("17").style.backgroundColor = "red";
	document.getElementById("18").style.backgroundColor = "#000055";
}

/*PFS*/
/*script for investments.html*/
/*hide and show tabs*/
function unitTrustTab(){
	document.getElementById("dualCurrencyInvestment").style.visibility = "hidden";
	document.getElementById("equityLinkedInvestment").style.visibility = "hidden";
	document.getElementById("unitTrust").style.visibility = "visible";
	
	document.getElementById("unitTrustImg").style.visibility = "visible";
	document.getElementById("dualCurrencyImg").style.visibility = "hidden";
	document.getElementById("eliImg").style.visibility = "hidden";
}

function dualCurrencyInvestmentTab(){
	document.getElementById("dualCurrencyInvestment").style.visibility = "visible";
	document.getElementById("equityLinkedInvestment").style.visibility = "hidden";
	document.getElementById("unitTrust").style.visibility = "hidden";
	
	document.getElementById("unitTrustImg").style.visibility = "hidden";
	document.getElementById("dualCurrencyImg").style.visibility = "visible";
	document.getElementById("eliImg").style.visibility = "hidden";
}

function equityLinkedInvestmentTab(){
	document.getElementById("dualCurrencyInvestment").style.visibility = "hidden";
	document.getElementById("equityLinkedInvestment").style.visibility = "visible";
	document.getElementById("unitTrust").style.visibility = "hidden";
	
	document.getElementById("unitTrustImg").style.visibility = "hidden";
	document.getElementById("dualCurrencyImg").style.visibility = "hidden";
	document.getElementById("eliImg").style.visibility = "visible";
}

/*change color of button*/
function changeUnitTrustBtnColor(){
	document.getElementById("unitTrustBtn").style.backgroundColor = "red";
	document.getElementById("dualCurrencyInvestmentBtn").style.backgroundColor = "#000055";
	document.getElementById("equityLinkedInvestmentBtn").style.backgroundColor = "#000055";
}

function changeDualCurrencyInvestmentBtnColor(){
	document.getElementById("unitTrustBtn").style.backgroundColor = "#000055";
	document.getElementById("dualCurrencyInvestmentBtn").style.backgroundColor = "red";
	document.getElementById("equityLinkedInvestmentBtn").style.backgroundColor = "#000055";
}

function changeEquityLinkedInvestmentBtnColor(){
	document.getElementById("unitTrustBtn").style.backgroundColor = "#000055";
	document.getElementById("dualCurrencyInvestmentBtn").style.backgroundColor = "#000055";
	document.getElementById("equityLinkedInvestmentBtn").style.backgroundColor = "red";
}

/*scripts for loans.html*/
/*hide and show tabs*/
function propertyLoanTab(){
	document.getElementById("propertyLoan").style.visibility = "visible";
	document.getElementById("autoLoan").style.visibility = "hidden";
	document.getElementById("personalLoan").style.visibility = "hidden";
	document.getElementById("shareMarketFinance").style.visibility = "hidden";
	
	document.getElementById("propertyLoanImg").style.visibility = "visible";
	document.getElementById("carLoanImg").style.visibility = "hidden";
	document.getElementById("personalLoanImg").style.visibility = "hidden";
	document.getElementById("smfImg").style.visibility = "hidden";
}

function autoLoanTab(){
	document.getElementById("propertyLoan").style.visibility = "hidden";
	document.getElementById("autoLoan").style.visibility = "visible";
	document.getElementById("personalLoan").style.visibility = "hidden";
	document.getElementById("shareMarketFinance").style.visibility = "hidden";
	
	document.getElementById("propertyLoanImg").style.visibility = "hidden";
	document.getElementById("carLoanImg").style.visibility = "visible";
	document.getElementById("personalLoanImg").style.visibility = "hidden";
	document.getElementById("smfImg").style.visibility = "hidden";
}

function personalLoanTab(){
	document.getElementById("propertyLoan").style.visibility = "hidden";
	document.getElementById("autoLoan").style.visibility = "hidden";
	document.getElementById("personalLoan").style.visibility = "visible";
	document.getElementById("shareMarketFinance").style.visibility = "hidden";
	
	document.getElementById("propertyLoanImg").style.visibility = "hidden";
	document.getElementById("carLoanImg").style.visibility = "hidden";
	document.getElementById("personalLoanImg").style.visibility = "visible";
	document.getElementById("smfImg").style.visibility = "hidden";
}

function shareMarketFinanceTab(){
	document.getElementById("propertyLoan").style.visibility = "hidden";
	document.getElementById("autoLoan").style.visibility = "hidden";
	document.getElementById("personalLoan").style.visibility = "hidden";
	document.getElementById("shareMarketFinance").style.visibility = "visible";
	
	document.getElementById("propertyLoanImg").style.visibility = "hidden";
	document.getElementById("carLoanImg").style.visibility = "hidden";
	document.getElementById("personalLoanImg").style.visibility = "hidden";
	document.getElementById("smfImg").style.visibility = "visible";
}

/*change color of button*/
function changePropertyLoanBtnColor(){
	document.getElementById("propertyLoanBtn").style.backgroundColor = "red";
	document.getElementById("autoLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("personalLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("shareMarketFinanceBtn").style.backgroundColor = "#000055";
}

function changeAutoLoanBtnColor(){
	document.getElementById("propertyLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("autoLoanBtn").style.backgroundColor = "red";
	document.getElementById("personalLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("shareMarketFinanceBtn").style.backgroundColor = "#000055";
}

function changePersonalLoanBtnColor(){
	document.getElementById("propertyLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("autoLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("personalLoanBtn").style.backgroundColor = "red";
	document.getElementById("shareMarketFinanceBtn").style.backgroundColor = "#000055";
}

function changeShareMarketFinanceBtnColor(){
	document.getElementById("propertyLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("autoLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("personalLoanBtn").style.backgroundColor = "#000055";
	document.getElementById("shareMarketFinanceBtn").style.backgroundColor = "red";
}

/*scripts for bancassurance.html*/
/*hide and show subtabs*/
function bancassuranceIntroductionSubTab(){
	document.getElementById("bancassuranceIntroductionScrollBox").style.visibility = "visible";
	document.getElementById("bancassurancePopularProductsScrollBox").style.visibility = "hidden";
	
	changeBancassuranceIntroductionBtnColor();
}

function bancassurancePopularProductsSubTab(){
	document.getElementById("bancassuranceIntroductionScrollBox").style.visibility = "hidden";
	document.getElementById("bancassurancePopularProductsScrollBox").style.visibility = "visible";
	
	changeBancassurancePopularProductsBtnColor();
}

/*change color of subtab*/
function changeBancassuranceIntroductionBtnColor(){
	document.getElementById("bancassuranceIntroductionBtn").style.backgroundColor = "red";
	document.getElementById("bancassurancePopularProductsBtn").style.backgroundColor = "white";
	document.getElementById("bancassuranceIntroductionBtn").style.color = "white";
	document.getElementById("bancassurancePopularProductsBtn").style.color = "black";
}

function changeBancassurancePopularProductsBtnColor(){
	document.getElementById("bancassuranceIntroductionBtn").style.backgroundColor = "white";
	document.getElementById("bancassurancePopularProductsBtn").style.backgroundColor = "red";
	document.getElementById("bancassuranceIntroductionBtn").style.color = "black";
	document.getElementById("bancassurancePopularProductsBtn").style.color = "white";
}

/*scripts for fixedDeposits.html*/
/*hide and show tabs*/
function hongLeongFlexiFDTab(){
	document.getElementById("hongLeongFlexiFD").style.visibility = "visible";
	document.getElementById("hongLeongJuniorFD").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFD").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeesScrollBox").style.visibility = "hidden";
	
	document.getElementById("flexiFDImg").style.visibility = "visible";
	document.getElementById("juniorFDImg").style.visibility = "hidden";
	document.getElementById("seniorFDImg").style.visibility = "hidden";
}

function hongLeongJuniorFDTab(){
	document.getElementById("hongLeongFlexiFD").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFD").style.visibility = "visible";
	document.getElementById("hongLeongSeniorSaversFlexiFD").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeesScrollBox").style.visibility = "hidden";
	juniorFDFeaturesSubTab();
	changeJuniorFDFeaturesSubTabColor();
	
	document.getElementById("flexiFDImg").style.visibility = "hidden";
	document.getElementById("juniorFDImg").style.visibility = "visible";
	document.getElementById("seniorFDImg").style.visibility = "hidden";
}

function hongLeongSeniorSaversFlexiFDTab(){
	document.getElementById("hongLeongFlexiFD").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFD").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFD").style.visibility = "visible";
	document.getElementById("hongLeongJuniorFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDFeesScrollBox").style.visibility = "hidden";
	seniorFDFeaturesSubTab();
	changeSeniorFDFeaturesSubTabColor();
	
	document.getElementById("flexiFDImg").style.visibility = "hidden";
	document.getElementById("juniorFDImg").style.visibility = "hidden";
	document.getElementById("seniorFDImg").style.visibility = "visible";
}

/*change color of button*/
function changeHongLeongFlexiFDBtnColor(){
	document.getElementById("hongLeongFlexiFDBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongJuniorFDBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongSeniorSaversFlexiFDBtn").style.backgroundColor = "#000055";
}

function changeHongLeongJuniorFDBtnColor(){
	document.getElementById("hongLeongFlexiFDBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongJuniorFDBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongSeniorSaversFlexiFDBtn").style.backgroundColor = "#000055";
}

function changeHongLeongSeniorSaversFlexiFDBtnColor(){
	document.getElementById("hongLeongFlexiFDBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongJuniorFDBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongSeniorSaversFlexiFDBtn").style.backgroundColor = "red";
}

/*script for junior FD sub tabs*/
function juniorFDFeaturesSubTab(){
	document.getElementById("hongLeongJuniorFDFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongJuniorFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDFeesScrollBox").style.visibility = "hidden";
}

function juniorFDEligibilitySubTab(){
	document.getElementById("hongLeongJuniorFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongJuniorFDFeesScrollBox").style.visibility = "hidden";
}

function juniorFDFeesSubTab(){
	document.getElementById("hongLeongJuniorFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorFDFeesScrollBox").style.visibility = "visible";
}

/*change color of button*/
function changeJuniorFDFeaturesSubTabColor(){
	document.getElementById("juniorFDFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("juniorFDEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("juniorFDFeesBtn").style.backgroundColor = "white";
	document.getElementById("juniorFDFeaturesBtn").style.color = "white";
	document.getElementById("juniorFDEligibilityBtn").style.color = "black";
	document.getElementById("juniorFDFeesBtn").style.color = "black";
}

function changeJuniorFDEligibilitySubTabColor(){
	document.getElementById("juniorFDFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("juniorFDEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("juniorFDFeesBtn").style.backgroundColor = "white";
	document.getElementById("juniorFDFeaturesBtn").style.color = "black";
	document.getElementById("juniorFDEligibilityBtn").style.color = "white";
	document.getElementById("juniorFDFeesBtn").style.color = "black";
}

function changeJuniorFDFeesSubTabColor(){
	document.getElementById("juniorFDFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("juniorFDEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("juniorFDFeesBtn").style.backgroundColor = "red";
	document.getElementById("juniorFDFeaturesBtn").style.color = "black";
	document.getElementById("juniorFDEligibilityBtn").style.color = "black";
	document.getElementById("juniorFDFeesBtn").style.color = "white";
}

/*script for senior FD sub tabs*/
function seniorFDFeaturesSubTab(){
	document.getElementById("hongLeongSeniorSaversFlexiFDFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongSeniorSaversFlexiFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeesScrollBox").style.visibility = "hidden";
}

function seniorFDEligibilitySubTab(){
	document.getElementById("hongLeongSeniorSaversFlexiFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeesScrollBox").style.visibility = "hidden";
}

function seniorFDFeesSubTab(){
	document.getElementById("hongLeongSeniorSaversFlexiFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongSeniorSaversFlexiFDFeesScrollBox").style.visibility = "visible";
}

/*change color of button*/
function changeSeniorFDFeaturesSubTabColor(){
	document.getElementById("seniorFDFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("seniorFDEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("seniorFDFeesBtn").style.backgroundColor = "white";
	document.getElementById("seniorFDFeaturesBtn").style.color = "white";
	document.getElementById("seniorFDEligibilityBtn").style.color = "black";
	document.getElementById("seniorFDFeesBtn").style.color = "black";
}

function changeSeniorFDEligibilitySubTabColor(){
	document.getElementById("seniorFDFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("seniorFDEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("seniorFDFeesBtn").style.backgroundColor = "white";
	document.getElementById("seniorFDFeaturesBtn").style.color = "black";
	document.getElementById("seniorFDEligibilityBtn").style.color = "white";
	document.getElementById("seniorFDFeesBtn").style.color = "black";
}

function changeSeniorFDFeesSubTabColor(){
	document.getElementById("seniorFDFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("seniorFDEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("seniorFDFeesBtn").style.backgroundColor = "red";
	document.getElementById("seniorFDFeaturesBtn").style.color = "black";
	document.getElementById("seniorFDEligibilityBtn").style.color = "black";
	document.getElementById("seniorFDFeesBtn").style.color = "white";
}

/*script for debitCards.html*/
/*hide and show tabs*/
function hongLeongDebitCardTab(){
	document.getElementById("hongLeongDebitCard").style.visiblity = "visible";
	document.getElementById("hongLeongJuniorDebitCard").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCard").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardSubTab").style.visibility = "visible";
	document.getElementById("hongLeongJuniorDebitCardSubTab").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardSubTab").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeesScrollBox").style.visibility = "hidden";
	debitCardFeaturesSubTab();
	changeDebitCardFeaturesSubTabColor();
	
	document.getElementById("debitCardImg").style.visibility = "visible";
	document.getElementById("juniorDebitCardImg").style.visibility = "hidden";
	document.getElementById("zingDebitCardImg").style.visibility = "hidden";
}

function hongLeongJuniorDebitCardTab(){
	document.getElementById("hongLeongDebitCard").style.visiblity = "hidden";
	document.getElementById("hongLeongJuniorDebitCard").style.visibility = "visible";
	document.getElementById("hongLeongTouchNGoZingDebitCard").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardSubTab").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardSubTab").style.visibility = "visible";
	document.getElementById("hongLeongTouchNGoZingDebitCardSubTab").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeesScrollBox").style.visibility = "hidden";
	juniorDebitCardMainSubTab();
	changeJuniorDebitCardMainSubTabColor();
	
	document.getElementById("debitCardImg").style.visibility = "hidden";
	document.getElementById("juniorDebitCardImg").style.visibility = "visible";
	document.getElementById("zingDebitCardImg").style.visibility = "hidden";
}

function hongLeongTouchNGoZingDebitCardTab(){
	document.getElementById("hongLeongDebitCard").style.visiblity = "hidden";
	document.getElementById("hongLeongJuniorDebitCard").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCard").style.visibility = "visible";
	document.getElementById("hongLeongDebitCardSubTab").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardSubTab").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardSubTab").style.visibility = "visible";
	document.getElementById("hongLeongDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").style.visibility = "hidden";
	zingDebitCardFeaturesSubTab();
	changeZingDebitCardFeaturesSubTabColor();
	
	document.getElementById("debitCardImg").style.visibility = "hidden";
	document.getElementById("juniorDebitCardImg").style.visibility = "hidden";
	document.getElementById("zingDebitCardImg").style.visibility = "visible";
}

/*change color of button*/
function changeHongLeongDebitCardBtnColor(){
	document.getElementById("hongLeongDebitCardBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongJuniorDebitCardBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongTouchNGoZingDebitCardBtn").style.backgroundColor = "#000055";
}

function changeHongLeongJuniorDebitCardBtnColor(){
	document.getElementById("hongLeongDebitCardBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongJuniorDebitCardBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongTouchNGoZingDebitCardBtn").style.backgroundColor = "#000055";
}

function changeHongLeongTouchNGoZingDebitCardBtnColor(){
	document.getElementById("hongLeongDebitCardBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongJuniorDebitCardBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongTouchNGoZingDebitCardBtn").style.backgroundColor = "red";
}

/*script for debit card sub tabs*/
/*hide and show scroll box*/
function debitCardFeaturesSubTab(){
	document.getElementById("hongLeongDebitCardFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardFeesScrollBox").style.visibility = "hidden";
}

function debitCardEligibilitySubTab(){
	document.getElementById("hongLeongDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongDebitCardFeesScrollBox").style.visibility = "hidden";
}

function debitCardFeesSubTab(){
	document.getElementById("hongLeongDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongDebitCardFeesScrollBox").style.visibility = "visible";
}
/*change color of button*/
function changeDebitCardFeaturesSubTabColor(){
	document.getElementById("debitCardFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("debitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("debitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("debitCardFeaturesBtn").style.color = "white";
	document.getElementById("debitCardEligibilityBtn").style.color = "black";
	document.getElementById("debitCardFeesBtn").style.color = "black";
}

function changeDebitCardEligibilitySubTabColor(){
	document.getElementById("debitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("debitCardEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("debitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("debitCardFeaturesBtn").style.color = "black";
	document.getElementById("debitCardEligibilityBtn").style.color = "white";
	document.getElementById("debitCardFeesBtn").style.color = "black";
}

function changeDebitCardFeesSubTabColor(){
	document.getElementById("debitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("debitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("debitCardFeesBtn").style.backgroundColor = "red";
	document.getElementById("debitCardFeaturesBtn").style.color = "black";
	document.getElementById("debitCardEligibilityBtn").style.color = "black";
	document.getElementById("debitCardFeesBtn").style.color = "white";
}

/*script for junior debit card sub tabs*/
/*hide and show scroll box*/
function juniorDebitCardMainSubTab(){
	document.getElementById("hongLeongJuniorDebitCardMainScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").style.visibility = "hidden";
}

function juniorDebitCardFeaturesSubTab(){
	document.getElementById("hongLeongJuniorDebitCardMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").style.visibility = "hidden";
}

function juniorDebitCardEligibilitySubTab(){
	document.getElementById("hongLeongJuniorDebitCardMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").style.visibility = "hidden";
}

function juniorDebitCardFeesSubTab(){
	document.getElementById("hongLeongJuniorDebitCardMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongJuniorDebitCardFeesScrollBox").style.visibility = "visible";
}

/*change color of button*/
function changeJuniorDebitCardMainSubTabColor(){
	document.getElementById("juniorDebitCardMainBtn").style.backgroundColor = "red";
	document.getElementById("juniorDebitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardMainBtn").style.color = "white";
	document.getElementById("juniorDebitCardFeaturesBtn").style.color = "black";
	document.getElementById("juniorDebitCardEligibilityBtn").style.color = "black";
	document.getElementById("juniorDebitCardFeesBtn").style.color = "black";
}

function changeJuniorDebitCardFeaturesSubTabColor(){
	document.getElementById("juniorDebitCardMainBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("juniorDebitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardMainBtn").style.color = "black";
	document.getElementById("juniorDebitCardFeaturesBtn").style.color = "white";
	document.getElementById("juniorDebitCardEligibilityBtn").style.color = "black";
	document.getElementById("juniorDebitCardFeesBtn").style.color = "black";
}

function changeJuniorDebitCardEligibilitySubTabColor(){
	document.getElementById("juniorDebitCardMainBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("juniorDebitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardMainBtn").style.color = "black";
	document.getElementById("juniorDebitCardFeaturesBtn").style.color = "black";
	document.getElementById("juniorDebitCardEligibilityBtn").style.color = "white";
	document.getElementById("juniorDebitCardFeesBtn").style.color = "black";
}

function changeJuniorDebitCardFeesSubTabColor(){
	document.getElementById("juniorDebitCardMainBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("juniorDebitCardFeesBtn").style.backgroundColor = "red";
	document.getElementById("juniorDebitCardMainBtn").style.color = "black";
	document.getElementById("juniorDebitCardFeaturesBtn").style.color = "black";
	document.getElementById("juniorDebitCardEligibilityBtn").style.color = "black";
	document.getElementById("juniorDebitCardFeesBtn").style.color = "white";
}

/*script for zing debit card*/
/*hide and show scroll box*/
function zingDebitCardFeaturesSubTab(){
	document.getElementById("hongLeongTouchNGoZingDebitCardFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongTouchNGoZingDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeesScrollBox").style.visibility = "hidden";
}

function zingDebitCardEligibilitySubTab(){
	document.getElementById("hongLeongTouchNGoZingDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeesScrollBox").style.visibility = "hidden";
}

function zingDebitCardFeesSubTab(){
	document.getElementById("hongLeongTouchNGoZingDebitCardFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongTouchNGoZingDebitCardFeesScrollBox").style.visibility = "visible";
}

/*change color of button*/
function changeZingDebitCardFeaturesSubTabColor(){
	document.getElementById("zingDebitCardFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("zingDebitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("zingDebitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("zingDebitCardFeaturesBtn").style.color = "white";
	document.getElementById("zingDebitCardEligibilityBtn").style.color = "black";
	document.getElementById("zingDebitCardFeesBtn").style.color = "black";
}

function changeZingDebitCardEligibilitySubTabColor(){
	document.getElementById("zingDebitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("zingDebitCardEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("zingDebitCardFeesBtn").style.backgroundColor = "white";
	document.getElementById("zingDebitCardFeaturesBtn").style.color = "black";
	document.getElementById("zingDebitCardEligibilityBtn").style.color = "white";
	document.getElementById("zingDebitCardFeesBtn").style.color = "black";
}

function changeZingDebitCardFeesSubTabColor(){
	document.getElementById("zingDebitCardFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("zingDebitCardEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("zingDebitCardFeesBtn").style.backgroundColor = "red";
	document.getElementById("zingDebitCardFeaturesBtn").style.color = "black";
	document.getElementById("zingDebitCardEligibilityBtn").style.color = "black";
	document.getElementById("zingDebitCardFeesBtn").style.color = "white";
}

/*script for deposits.html*/
/*hide and show tabs*/
function hongLeongBasicSavingsAccountTab(){
	document.getElementById("hongLeongBasicSavingsAccount").style.visiblity = "visible";
	document.getElementById("hongLeongBasicCurrentAccount").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccount").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccount").style.visibility = "hidden";

	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "hidden";
	
	basicSavingsAccountFeaturesSubTab();
	changeHongLeongBasicSavingsAccountBtnColor();
	
	document.getElementById("basicSavingsAccImg").style.visibility = "visible";
	document.getElementById("basicCurrentAccImg").style.visibility = "hidden";
	document.getElementById("oneAccImg").style.visibility = "hidden";
	document.getElementById("payAndSaveAccImg").style.visibility = "hidden";
}

function hongLeongBasicCurrentAccountTab(){
	document.getElementById("hongLeongBasicSavingsAccount").style.visiblity = "hidden";
	document.getElementById("hongLeongBasicCurrentAccount").style.visibility = "visible";
	document.getElementById("hongLeongOneAccount").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccount").style.visibility = "hidden";
	
	document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "hidden";

	basicCurrentAccountMainSubTab();
	changeHongLeongBasicCurrentAccountBtnColor();
	
	document.getElementById("basicSavingsAccImg").style.visibility = "hidden";
	document.getElementById("basicCurrentAccImg").style.visibility = "visible";
	document.getElementById("oneAccImg").style.visibility = "hidden";
	document.getElementById("payAndSaveAccImg").style.visibility = "hidden";
}

function hongLeongOneAccountTab(){
	document.getElementById("hongLeongBasicSavingsAccount").style.visiblity = "hidden";
	document.getElementById("hongLeongBasicCurrentAccount").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccount").style.visibility = "visible";
	document.getElementById("hongLeongPayAndSaveAccount").style.visibility = "hidden";
	
	document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "hidden";

	oneAccountMainSubTab();
	changeHongLeongOneAccountBtnColor();
	
	document.getElementById("basicSavingsAccImg").style.visibility = "hidden";
	document.getElementById("basicCurrentAccImg").style.visibility = "hidden";
	document.getElementById("oneAccImg").style.visibility = "visible";
	document.getElementById("payAndSaveAccImg").style.visibility = "hidden";
}

function hongLeongPayAndSaveAccountTab(){
	document.getElementById("hongLeongBasicSavingsAccount").style.visiblity = "hidden";
	document.getElementById("hongLeongBasicCurrentAccount").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccount").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccount").style.visibility = "visible";
	
	document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "hidden";

	payAndSaveAccountMainSubTab();
	changeHongLeongPayAndSaveAccountBtnColor();
	
	document.getElementById("basicSavingsAccImg").style.visibility = "hidden";
	document.getElementById("basicCurrentAccImg").style.visibility = "hidden";
	document.getElementById("oneAccImg").style.visibility = "hidden";
	document.getElementById("payAndSaveAccImg").style.visibility = "visible";
}

/*change color of button*/
function changeHongLeongBasicSavingsAccountBtnColor(){
	document.getElementById("hongLeongBasicSavingsAccountBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongBasicCurrentAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongOneAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongPayAndSaveAccountBtn").style.backgroundColor = "#000055";
}

function changeHongLeongBasicCurrentAccountBtnColor(){
	document.getElementById("hongLeongBasicSavingsAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongBasicCurrentAccountBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongOneAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongPayAndSaveAccountBtn").style.backgroundColor = "#000055";
}

function changeHongLeongOneAccountBtnColor(){
	document.getElementById("hongLeongBasicSavingsAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongBasicCurrentAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongOneAccountBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongPayAndSaveAccountBtn").style.backgroundColor = "#000055";
}

function changeHongLeongPayAndSaveAccountBtnColor(){
	document.getElementById("hongLeongBasicSavingsAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongBasicCurrentAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongOneAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongPayAndSaveAccountBtn").style.backgroundColor = "red";
}
/*Basic Savings Account */
/*hide and show sub tab*/
function basicSavingsAccountFeaturesSubTab(){
	document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").style.visibility = "hidden";
	
	changeBasicSavingsAccountFeaturesSubTabColor();
}

function basicSavingsAccountEligibilitySubTab(){
	document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").style.visibility = "hidden";
	
	changeBasicSavingsAccountEligibilitySubTabColor();
}

function basicSavingsAccountFeesSubTab(){
	document.getElementById("hongLeongBasicSavingsAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicSavingsAccountFeesScrollBox").style.visibility = "visible";
	
	changeBasicSavingsAccountFeesSubTabColor();
}

/*change color of subtab*/
function changeBasicSavingsAccountFeaturesSubTabColor(){
	document.getElementById("basicSavingsAccountFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("basicSavingsAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("basicSavingsAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("basicSavingsAccountFeaturesBtn").style.color = "white";
	document.getElementById("basicSavingsAccountEligibilityBtn").style.color = "black";
	document.getElementById("basicSavingsAccountFeesBtn").style.color = "black";
}

function changeBasicSavingsAccountEligibilitySubTabColor(){
	document.getElementById("basicSavingsAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("basicSavingsAccountEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("basicSavingsAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("basicSavingsAccountFeaturesBtn").style.color = "black";
	document.getElementById("basicSavingsAccountEligibilityBtn").style.color = "white";
	document.getElementById("basicSavingsAccountFeesBtn").style.color = "black";
}

function changeBasicSavingsAccountFeesSubTabColor(){
	document.getElementById("basicSavingsAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("basicSavingsAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("basicSavingsAccountFeesBtn").style.backgroundColor = "red";
	document.getElementById("basicSavingsAccountFeaturesBtn").style.color = "black";
	document.getElementById("basicSavingsAccountEligibilityBtn").style.color = "black";
	document.getElementById("basicSavingsAccountFeesBtn").style.color = "white";
}

/*Basic Current Account*/
/*hide and show sub tab*/
function basicCurrentAccountMainSubTab(){
	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "hidden";
	
	changeBasicCurrentAccountMainSubTabColor();
}

function basicCurrentAccountFeaturesSubTab(){
	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "hidden";
	
	changeBasicCurrentAccountFeaturesSubTabColor();
}

function basicCurrentAccountEligibilitySubTab(){
	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "hidden";
	
	changeBasicCurrentAccountEligibilitySubTabColor();
}

function basicCurrentAccountFeesSubTab(){
	document.getElementById("hongLeongBasicCurrentAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBasicCurrentAccountFeesScrollBox").style.visibility = "visible";
	
	changeBasicCurrentAccountFeesSubTabColor();
}

/*change color of subtab*/
function changeBasicCurrentAccountMainSubTabColor(){
	document.getElementById("basicCurrentAccountMainBtn").style.backgroundColor = "red";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountMainBtn").style.color = "white";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.color = "black";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.color = "black";
	document.getElementById("basicCurrentAccountFeesBtn").style.color = "black";
}

function changeBasicCurrentAccountFeaturesSubTabColor(){
	document.getElementById("basicCurrentAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountMainBtn").style.color = "black";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.color = "white";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.color = "black";
	document.getElementById("basicCurrentAccountFeesBtn").style.color = "black";
}

function changeBasicCurrentAccountEligibilitySubTabColor(){
	document.getElementById("basicCurrentAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("basicCurrentAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountMainBtn").style.color = "black";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.color = "black";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.color = "white";
	document.getElementById("basicCurrentAccountFeesBtn").style.color = "black";
}

function changeBasicCurrentAccountFeesSubTabColor(){
	document.getElementById("basicCurrentAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("basicCurrentAccountFeesBtn").style.backgroundColor = "red";
	document.getElementById("basicCurrentAccountMainBtn").style.color = "black";
	document.getElementById("basicCurrentAccountFeaturesBtn").style.color = "black";
	document.getElementById("basicCurrentAccountEligibilityBtn").style.color = "black";
	document.getElementById("basicCurrentAccountFeesBtn").style.color = "white";
}

/*One Account*/
/*hide and show sub tab*/
function oneAccountMainSubTab(){
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "hidden";
	
	changeOneAccountMainSubTabColor();
}

function oneAccountFeaturesSubTab(){
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "hidden";
	
	changeOneAccountFeaturesSubTabColor();
}

function oneAccountEligibilitySubTab(){
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "hidden";
	
	changeOneAccountEligibilitySubTabColor();
}

function oneAccountFeesSubTab(){
	document.getElementById("hongLeongOneAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongOneAccountFeesScrollBox").style.visibility = "visible";
	
	changeOneAccountFeesSubTabColor();
}

/*change color of subtab*/
function changeOneAccountMainSubTabColor(){
	document.getElementById("oneAccountMainBtn").style.backgroundColor = "red";
	document.getElementById("oneAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountMainBtn").style.color = "white";
	document.getElementById("oneAccountFeaturesBtn").style.color = "black";
	document.getElementById("oneAccountEligibilityBtn").style.color = "black";
	document.getElementById("oneAccountFeesBtn").style.color = "black";
}

function changeOneAccountFeaturesSubTabColor(){
	document.getElementById("oneAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("oneAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountMainBtn").style.color = "black";
	document.getElementById("oneAccountFeaturesBtn").style.color = "white";
	document.getElementById("oneAccountEligibilityBtn").style.color = "black";
	document.getElementById("oneAccountFeesBtn").style.color = "black";
}

function changeOneAccountEligibilitySubTabColor(){
	document.getElementById("oneAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("oneAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountMainBtn").style.color = "black";
	document.getElementById("oneAccountFeaturesBtn").style.color = "black";
	document.getElementById("oneAccountEligibilityBtn").style.color = "white";
	document.getElementById("oneAccountFeesBtn").style.color = "black";
}

function changeOneAccountFeesSubTabColor(){
	document.getElementById("oneAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("oneAccountFeesBtn").style.backgroundColor = "red";
	document.getElementById("oneAccountMainBtn").style.color = "black";
	document.getElementById("oneAccountFeaturesBtn").style.color = "black";
	document.getElementById("oneAccountEligibilityBtn").style.color = "black";
	document.getElementById("oneAccountFeesBtn").style.color = "white";
}

/*Pay & Save Account*/
/*hide and show sub tab*/
function payAndSaveAccountMainSubTab(){
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "hidden";
	
	changePayAndSaveAccountMainSubTabColor();
}

function payAndSaveAccountFeaturesSubTab(){
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "hidden";
	
	changePayAndSaveAccountFeaturesSubTabColor();
}

function payAndSaveAccountEligibilitySubTab(){
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "hidden";
	
	changePayAndSaveAccountEligibilitySubTabColor();
}

function payAndSaveAccountFeesSubTab(){
	document.getElementById("hongLeongPayAndSaveAccountMainScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPayAndSaveAccountFeesScrollBox").style.visibility = "visible";
	
	changePayAndSaveAccountFeesSubTabColor();
}

/*change color of subtab*/
function changePayAndSaveAccountMainSubTabColor(){
	document.getElementById("payAndSaveAccountMainBtn").style.backgroundColor = "red";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountMainBtn").style.color = "white";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.color = "black";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.color = "black";
	document.getElementById("payAndSaveAccountFeesBtn").style.color = "black";
}

function changePayAndSaveAccountFeaturesSubTabColor(){
	document.getElementById("payAndSaveAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountMainBtn").style.color = "black";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.color = "white";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.color = "black";
	document.getElementById("payAndSaveAccountFeesBtn").style.color = "black";
}

function changePayAndSaveAccountEligibilitySubTabColor(){
	document.getElementById("payAndSaveAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("payAndSaveAccountFeesBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountMainBtn").style.color = "black";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.color = "black";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.color = "white";
	document.getElementById("payAndSaveAccountFeesBtn").style.color = "black";
}

function changePayAndSaveAccountFeesSubTabColor(){
	document.getElementById("payAndSaveAccountMainBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("payAndSaveAccountFeesBtn").style.backgroundColor = "red";
	document.getElementById("payAndSaveAccountMainBtn").style.color = "black";
	document.getElementById("payAndSaveAccountFeaturesBtn").style.color = "black";
	document.getElementById("payAndSaveAccountEligibilityBtn").style.color = "black";
	document.getElementById("payAndSaveAccountFeesBtn").style.color = "white";
}

/*BCB*/
/*scripts for businessDeposits.html*/
/*hide and show tabs*/
function hongLeongPowerSMECurrentAccountTab(){
	document.getElementById("hongLeongPowerSMECurrentAccount").style.visibility = "visible";
	document.getElementById("hongLeongBusinessFlexiFD").style.visibility = "hidden";
	
	document.getElementById("hongLeongBusinessFlexiFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBusinessFlexiFDEligibilityScrollBox").style.visibility = "hidden";
	
	document.getElementById("powerSMEImg").style.visibility = "visible";
	document.getElementById("loanImg").style.visibility = "hidden";
	
	changeHongLeongPowerSMECurrentAccountBtnColor();
	powerSMECurrentAccountFeaturesSubTab();
}

function hongLeongBusinessFlexiFDTab(){
	document.getElementById("hongLeongPowerSMECurrentAccount").style.visibility = "hidden";
	document.getElementById("hongLeongBusinessFlexiFD").style.visibility = "visible";
	
	document.getElementById("hongLeongPowerSMECurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPowerSMECurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPowerSMECurrentAccountPromotionScrollBox").style.visibility = "hidden";
	
	document.getElementById("powerSMEImg").style.visibility = "hidden";
	document.getElementById("loanImg").style.visibility = "visible";
	
	changeHongLeongBusinessFlexiFDBtnColor();
	businessFlexiFDFeaturesSubTab();
}

/*change color of button*/
function changeHongLeongPowerSMECurrentAccountBtnColor(){
	document.getElementById("hongLeongPowerSMECurrentAccountBtn").style.backgroundColor = "red";
	document.getElementById("hongLeongBusinessFlexiFDBtn").style.backgroundColor = "#000055";
}

function changeHongLeongBusinessFlexiFDBtnColor(){
	document.getElementById("hongLeongPowerSMECurrentAccountBtn").style.backgroundColor = "#000055";
	document.getElementById("hongLeongBusinessFlexiFDBtn").style.backgroundColor = "red";
}

/*script for powerSME current account sub tabs*/
function powerSMECurrentAccountFeaturesSubTab(){
	document.getElementById("hongLeongPowerSMECurrentAccountFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongPowerSMECurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPowerSMECurrentAccountPromotionScrollBox").style.visibility = "hidden";
	
	changePowerSMECurrentAccountFeaturesSubTabColor();
}

function powerSMECurrentAccountEligibilitySubTab(){
	document.getElementById("hongLeongPowerSMECurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPowerSMECurrentAccountEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongPowerSMECurrentAccountPromotionScrollBox").style.visibility = "hidden";
}

function powerSMECurrentAccountPromotionSubTab(){
	document.getElementById("hongLeongPowerSMECurrentAccountFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPowerSMECurrentAccountEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongPowerSMECurrentAccountPromotionScrollBox").style.visibility = "visible";
}

/*change color of button*/
function changePowerSMECurrentAccountFeaturesSubTabColor(){
	document.getElementById("powerSMECurrentAccountFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("powerSMECurrentAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("powerSMECurrentAccountPromotionBtn").style.backgroundColor = "white";
	document.getElementById("powerSMECurrentAccountFeaturesBtn").style.color = "white";
	document.getElementById("powerSMECurrentAccountEligibilityBtn").style.color = "black";
	document.getElementById("powerSMECurrentAccountPromotionBtn").style.color = "black";
}

function changePowerSMECurrentAccountEligibilitySubTabColor(){
	document.getElementById("powerSMECurrentAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("powerSMECurrentAccountEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("powerSMECurrentAccountPromotionBtn").style.backgroundColor = "white";
	document.getElementById("powerSMECurrentAccountFeaturesBtn").style.color = "black";
	document.getElementById("powerSMECurrentAccountEligibilityBtn").style.color = "white";
	document.getElementById("powerSMECurrentAccountPromotionBtn").style.color = "black";
}

function changePowerSMECurrentAccountPromotionSubTabColor(){
	document.getElementById("powerSMECurrentAccountFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("powerSMECurrentAccountEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("powerSMECurrentAccountPromotionBtn").style.backgroundColor = "red";
	document.getElementById("powerSMECurrentAccountFeaturesBtn").style.color = "black";
	document.getElementById("powerSMECurrentAccountEligibilityBtn").style.color = "black";
	document.getElementById("powerSMECurrentAccountPromotionBtn").style.color = "white";
}

/*script for business flexi fd sub tabs*/
function businessFlexiFDFeaturesSubTab(){
	document.getElementById("hongLeongBusinessFlexiFDFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hongLeongBusinessFlexiFDEligibilityScrollBox").style.visibility = "hidden";
	
	changeBusinessFlexiFDFeaturesSubTabColor();
}

function businessFlexiFDEligibilitySubTab(){
	document.getElementById("hongLeongBusinessFlexiFDFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hongLeongBusinessFlexiFDEligibilityScrollBox").style.visibility = "visible";
	
}

/*change color of button*/
function changeBusinessFlexiFDFeaturesSubTabColor(){
	document.getElementById("businessFlexiFDFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("businessFlexiFDEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("businessFlexiFDFeaturesBtn").style.color = "white";
	document.getElementById("businessFlexiFDEligibilityBtn").style.color = "black";
}

function changeBusinessFlexiFDEligibilitySubTabColor(){
	document.getElementById("businessFlexiFDFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("businessFlexiFDEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("businessFlexiFDFeaturesBtn").style.color = "black";
	document.getElementById("businessFlexiFDEligibilityBtn").style.color = "white";
}

/*script for tradeServices.html*/
/*hide and show sub tabs*/
function mainSubTab(){
	document.getElementById("tradeServicesMainScrollBox").style.visibility = "visible";
	document.getElementById("tradeServicesImportsLocalPurchasesScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesExportsLocalSalesScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesServicesScrollBox").style.visibility = "hidden";
	
	changeMainSubTabColor();
}

function importsLocalPurchasesSubTab(){
	document.getElementById("tradeServicesMainScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesImportsLocalPurchasesScrollBox").style.visibility = "visible";
	document.getElementById("tradeServicesExportsLocalSalesScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesServicesScrollBox").style.visibility = "hidden";
	
	changeImportsLocalPurchasesSubTabColor();
}

function exportsLocalSalesSubTab(){
	document.getElementById("tradeServicesMainScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesImportsLocalPurchasesScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesExportsLocalSalesScrollBox").style.visibility = "visible";
	document.getElementById("tradeServicesServicesScrollBox").style.visibility = "hidden";
	
	changeExportsLocalSalesSubTabColor();
}

function servicesSubTab(){
	document.getElementById("tradeServicesMainScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesImportsLocalPurchasesScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesExportsLocalSalesScrollBox").style.visibility = "hidden";
	document.getElementById("tradeServicesServicesScrollBox").style.visibility = "visible";
	
	changeServicesSubTabColor();
}

/*change color of sub tab*/
function changeMainSubTabColor(){
	document.getElementById("mainBtn").style.backgroundColor = "red";
	document.getElementById("importsLocalPurchasesBtn").style.backgroundColor = "white";
	document.getElementById("exportsLocalSalesBtn").style.backgroundColor = "white";
	document.getElementById("servicesBtn").style.backgroundColor = "white";
	document.getElementById("mainBtn").style.color = "white";
	document.getElementById("importsLocalPurchasesBtn").style.color = "black";
	document.getElementById("exportsLocalSalesBtn").style.color = "black";
	document.getElementById("ServicesBtn").style.color = "black";
}

function changeImportsLocalPurchasesSubTabColor(){
	document.getElementById("mainBtn").style.backgroundColor = "white";
	document.getElementById("importsLocalPurchasesBtn").style.backgroundColor = "red";
	document.getElementById("exportsLocalSalesBtn").style.backgroundColor = "white";
	document.getElementById("servicesBtn").style.backgroundColor = "white";
	document.getElementById("mainBtn").style.color = "black";
	document.getElementById("importsLocalPurchasesBtn").style.color = "white";
	document.getElementById("exportsLocalSalesBtn").style.color = "black";
	document.getElementById("ServicesBtn").style.color = "black";
}

function changeExportsLocalSalesSubTabColor(){
	document.getElementById("mainBtn").style.backgroundColor = "white";
	document.getElementById("importsLocalPurchasesBtn").style.backgroundColor = "white";
	document.getElementById("exportsLocalSalesBtn").style.backgroundColor = "red";
	document.getElementById("servicesBtn").style.backgroundColor = "white";
	document.getElementById("mainBtn").style.color = "black";
	document.getElementById("importsLocalPurchasesBtn").style.color = "black";
	document.getElementById("exportsLocalSalesBtn").style.color = "white";
	document.getElementById("ServicesBtn").style.color = "black";
}

function changeServicesSubTabColor(){
	document.getElementById("mainBtn").style.backgroundColor = "white";
	document.getElementById("importsLocalPurchasesBtn").style.backgroundColor = "white";
	document.getElementById("exportsLocalSalesBtn").style.backgroundColor = "white";
	document.getElementById("servicesBtn").style.backgroundColor = "red";
	document.getElementById("mainBtn").style.color = "black";
	document.getElementById("importsLocalPurchasesBtn").style.color = "black";
	document.getElementById("exportsLocalSalesBtn").style.color = "black";
	document.getElementById("ServicesBtn").style.color = "white";
}

/*script for hleBroking.html*/
/*hide and show sub tabs*/
function hleBrokingFeaturesSubTab(){
	document.getElementById("hleBrokingFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("hleBrokingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingStartUpGuideScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingContactUsScrollBox").style.visibility = "hidden";
	
	changeHleBrokingFeaturesSubTabColor();
}

function hleBrokingEligibilitySubTab(){
	document.getElementById("hleBrokingFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingEligibilityScrollBox").style.visibility = "visible";
	document.getElementById("hleBrokingStartUpGuideScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingContactUsScrollBox").style.visibility = "hidden";
	
	changeHleBrokingEligibilitySubTabColor();
}

function hleBrokingStartUpGuideSubTab(){
	document.getElementById("hleBrokingFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingStartUpGuideScrollBox").style.visibility = "visible";
	document.getElementById("hleBrokingContactUsScrollBox").style.visibility = "hidden";
	
	changeHleBrokingStartUpGuideSubTabColor();
}

function hleBrokingContactUsSubTab(){
	document.getElementById("hleBrokingFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingStartUpGuideScrollBox").style.visibility = "hidden";
	document.getElementById("hleBrokingContactUsScrollBox").style.visibility = "visible";
	
	changeHleBrokingContactUsSubTabColor();
}

/*change color of sub tab*/
function changeHleBrokingFeaturesSubTabColor(){
	document.getElementById("hleBrokingFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("hleBrokingEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingStartUpGuideBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingContactUsBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingFeaturesBtn").style.color = "white";
	document.getElementById("hleBrokingEligibilityBtn").style.color = "black";
	document.getElementById("hleBrokingStartUpGuideBtn").style.color = "black";
	document.getElementById("hleBrokingContactUsBtn").style.color = "black";
}

function changeHleBrokingEligibilitySubTabColor(){
	document.getElementById("hleBrokingFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("hleBrokingStartUpGuideBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingContactUsBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingFeaturesBtn").style.color = "black";
	document.getElementById("hleBrokingEligibilityBtn").style.color = "white";
	document.getElementById("hleBrokingStartUpGuideBtn").style.color = "black";
	document.getElementById("hleBrokingContactUsBtn").style.color = "black";
}

function changeHleBrokingStartUpGuideSubTabColor(){
	document.getElementById("hleBrokingFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingStartUpGuideBtn").style.backgroundColor = "red";
	document.getElementById("hleBrokingContactUsBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingFeaturesBtn").style.color = "black";
	document.getElementById("hleBrokingEligibilityBtn").style.color = "black";
	document.getElementById("hleBrokingStartUpGuideBtn").style.color = "white";
	document.getElementById("hleBrokingContactUsBtn").style.color = "black";
}

function changeHleBrokingContactUsSubTabColor(){
	document.getElementById("hleBrokingFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingStartUpGuideBtn").style.backgroundColor = "white";
	document.getElementById("hleBrokingContactUsBtn").style.backgroundColor = "red";
	document.getElementById("hleBrokingFeaturesBtn").style.color = "black";
	document.getElementById("hleBrokingEligibilityBtn").style.color = "black";
	document.getElementById("hleBrokingStartUpGuideBtn").style.color = "black";
	document.getElementById("hleBrokingContactUsBtn").style.color = "white";
}

/*script for cashManagement.html*/
/*hide and show sub tabs*/
function cashManagementServicesAndFeaturesSubTab(){
	document.getElementById("cashManagementServicesAndFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("cashManagementBenefitsScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementHowToApplyScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementContactUsScrollBox").style.visibility = "hidden";
	
	changeCashManagementServicesAndFeaturesSubTabColor();
}

function cashManagementBenefitsSubTab(){
	document.getElementById("cashManagementServicesAndFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementBenefitsScrollBox").style.visibility = "visible";
	document.getElementById("cashManagementHowToApplyScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementContactUsScrollBox").style.visibility = "hidden";
	
	changeCashManagementBenefitsSubTabColor();
}

function cashManagementHowToApplySubTab(){
	document.getElementById("cashManagementServicesAndFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementBenefitsScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementHowToApplyScrollBox").style.visibility = "visible";
	document.getElementById("cashManagementContactUsScrollBox").style.visibility = "hidden";
	
	changeCashManagementHowToApplySubTabColor();
}

function cashManagementContactUsSubTab(){
	document.getElementById("cashManagementServicesAndFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementBenefitsScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementHowToApplyScrollBox").style.visibility = "hidden";
	document.getElementById("cashManagementContactUsScrollBox").style.visibility = "visible";
	
	changeCashManagementContactUsSubTabColor();
}

/*change color of subtab*/
function changeCashManagementServicesAndFeaturesSubTabColor(){
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("cashManagementBenefitsBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementHowToApplyBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementContactUsBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.color = "white";
	document.getElementById("cashManagementBenefitsBtn").style.color = "black";
	document.getElementById("cashManagementHowToApplyBtn").style.color = "black";
	document.getElementById("cashManagementContactUsBtn").style.color = "black";
}

function changeCashManagementBenefitsSubTabColor(){
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementBenefitsBtn").style.backgroundColor = "red";
	document.getElementById("cashManagementHowToApplyBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementContactUsBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.color = "black";
	document.getElementById("cashManagementBenefitsBtn").style.color = "white";
	document.getElementById("cashManagementHowToApplyBtn").style.color = "black";
	document.getElementById("cashManagementContactUsBtn").style.color = "black";
}

function changeCashManagementHowToApplySubTabColor(){
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementBenefitsBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementHowToApplyBtn").style.backgroundColor = "red";
	document.getElementById("cashManagementContactUsBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.color = "black";
	document.getElementById("cashManagementBenefitsBtn").style.color = "black";
	document.getElementById("cashManagementHowToApplyBtn").style.color = "white";
	document.getElementById("cashManagementContactUsBtn").style.color = "black";
}

function changeCashManagementContactUsSubTabColor(){
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementBenefitsBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementHowToApplyBtn").style.backgroundColor = "white";
	document.getElementById("cashManagementContactUsBtn").style.backgroundColor = "red";
	document.getElementById("cashManagementServicesAndFeaturesBtn").style.color = "black";
	document.getElementById("cashManagementBenefitsBtn").style.color = "black";
	document.getElementById("cashManagementHowToApplyBtn").style.color = "black";
	document.getElementById("cashManagementContactUsBtn").style.color = "white";
}

/*script for businessCorporateLoans.html*/
/*hide and show sub tabs*/
function businessCorporateLoansMainSubTab(){
	document.getElementById("businessCorporateLoansMainScrollBox").style.visibility = "visible";
	document.getElementById("businessCorporateLoansWCBPFScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansBnmSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansCgcSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansContactScrollBox").style.visibility = "hidden";
	
	changeBusinessCorporateLoansMainSubTabColor();
}

function businessCorporateLoansWCBPFSubTab(){
	document.getElementById("businessCorporateLoansMainScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansWCBPFScrollBox").style.visibility = "visible";
	document.getElementById("businessCorporateLoansBnmSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansCgcSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansContactScrollBox").style.visibility = "hidden";
	
	changeBusinessCorporateLoansWCBPFSubTabColor();
}

function businessCorporateLoansBnmSchemeSubTab(){
	document.getElementById("businessCorporateLoansMainScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansWCBPFScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansBnmSchemeScrollBox").style.visibility = "visible";
	document.getElementById("businessCorporateLoansCgcSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansContactScrollBox").style.visibility = "hidden";
	
	changeBusinessCorporateLoansBnmSchemeSubTabColor();
}

function businessCorporateLoansCgcSchemeSubTab(){
	document.getElementById("businessCorporateLoansMainScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansWCBPFScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansBnmSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansCgcSchemeScrollBox").style.visibility = "visible";
	document.getElementById("businessCorporateLoansContactScrollBox").style.visibility = "hidden";
	
	changeBusinessCorporateLoansCgcSchemeSubTabColor();
}

function businessCorporateLoansContactSubTab(){
	document.getElementById("businessCorporateLoansMainScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansWCBPFScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansBnmSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansCgcSchemeScrollBox").style.visibility = "hidden";
	document.getElementById("businessCorporateLoansContactScrollBox").style.visibility = "visible";
	
	changeBusinessCorporateLoansContactSubTabColor();
}

/*change color of subtab*/
function changeBusinessCorporateLoansMainSubTabColor(){
	document.getElementById("businessCorporateLoansMainBtn").style.backgroundColor = "red";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansContactBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansMainBtn").style.color = "white";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.color = "black";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansContactBtn").style.color = "black";
}

function changeBusinessCorporateLoansWCBPFSubTabColor(){
	document.getElementById("businessCorporateLoansMainBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.backgroundColor = "red";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansContactBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansMainBtn").style.color = "black";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.color = "white";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansContactBtn").style.color = "black";
}

function changeBusinessCorporateLoansBnmSchemeSubTabColor(){
	document.getElementById("businessCorporateLoansMainBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.backgroundColor = "red";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansContactBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansMainBtn").style.color = "black";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.color = "black";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.color = "white";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansContactBtn").style.color = "black";
}

function changeBusinessCorporateLoansCgcSchemeSubTabColor(){
	document.getElementById("businessCorporateLoansMainBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.backgroundColor = "red";
	document.getElementById("businessCorporateLoansContactBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansMainBtn").style.color = "black";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.color = "black";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.color = "white";
	document.getElementById("businessCorporateLoansContactBtn").style.color = "black";
}

function changeBusinessCorporateLoansContactSubTabColor(){
	document.getElementById("businessCorporateLoansMainBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.backgroundColor = "white";
	document.getElementById("businessCorporateLoansContactBtn").style.backgroundColor = "red";
	document.getElementById("businessCorporateLoansMainBtn").style.color = "black";
	document.getElementById("businessCorporateLoansWCBPFBtn").style.color = "black";
	document.getElementById("businessCorporateLoansBnmSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansCgcSchemeBtn").style.color = "black";
	document.getElementById("businessCorporateLoansContactBtn").style.color = "white";
}


/*HLC*/
/*script for onlineBanking.html*/
/*hide and show tabs*/
function onlineBankingOnlineBankingTab(){
	document.getElementById("onlineBanking").style.visibility = "visible";
	document.getElementById("accountInquiryAndRepayments").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReload").style.visibility = "hidden";
	document.getElementById("fundTransfer").style.visibility = "hidden";
	document.getElementById("standingInstruction").style.visibility = "hidden";
	document.getElementById("otherServices").style.visibility = "hidden";
	
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingOnlineBankingBtnColor();
	onlineBankingServicesAvailableSubTab();
	
}

function onlineBankingAccountInquiryAndRepaymentsTab(){
	document.getElementById("onlineBanking").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepayments").style.visibility = "visible";
	document.getElementById("billPaymentAndPrepaidReload").style.visibility = "hidden";
	document.getElementById("fundTransfer").style.visibility = "hidden";
	document.getElementById("standingInstruction").style.visibility = "hidden";
	document.getElementById("otherServices").style.visibility = "hidden";
	
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingAccountInquiryAndRepaymentsBtnColor();
	accountInquiryAndRepaymentsAccountInquirySubTab();
	
}

function onlineBankingBillPaymentAndPrepaidReloadTab(){
	document.getElementById("onlineBanking").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepayments").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReload").style.visibility = "visible";
	document.getElementById("fundTransfer").style.visibility = "hidden";
	document.getElementById("standingInstruction").style.visibility = "hidden";
	document.getElementById("otherServices").style.visibility = "hidden";
	
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingBillPaymentAndPrepaidReloadBtnColor();
	billPaymentAndPrepaidReloadPayBillsSubTab();
	
}

function onlineBankingFundTransferTab(){
	document.getElementById("onlineBanking").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepayments").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReload").style.visibility = "hidden";
	document.getElementById("fundTransfer").style.visibility = "visible";
	document.getElementById("standingInstruction").style.visibility = "hidden";
	document.getElementById("otherServices").style.visibility = "hidden";
	
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingFundTransferBtnColor();
	fundTransferMainSubTab();
	
}

function onlineBankingStandingInstructionTab(){
	document.getElementById("onlineBanking").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepayments").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReload").style.visibility = "hidden";
	document.getElementById("fundTransfer").style.visibility = "hidden";
	document.getElementById("standingInstruction").style.visibility = "visible";
	document.getElementById("otherServices").style.visibility = "hidden";
	
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingStandingInstructionBtnColor();
	standingInstructionMainSubTab();
	
}

function onlineBankingOtherServicesTab(){
	document.getElementById("onlineBanking").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepayments").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReload").style.visibility = "hidden";
	document.getElementById("fundTransfer").style.visibility = "hidden";
	document.getElementById("standingInstruction").style.visibility = "hidden";
	document.getElementById("otherServices").style.visibility = "visible";
	
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingOtherServicesBtnColor();
	otherServicesServicesAvailableSubTab();
	
}

/*change color of tab*/
function changeOnlineBankingOnlineBankingBtnColor(){
	document.getElementById("onlineBankingOnlineBankingBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingFundTransferBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingStandingInstructionBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingOtherServicesBtn").style.backgroundColor = "#000055";
}

function changeOnlineBankingAccountInquiryAndRepaymentsBtnColor(){
	document.getElementById("onlineBankingOnlineBankingBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingFundTransferBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingStandingInstructionBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingOtherServicesBtn").style.backgroundColor = "#000055";
}

function changeOnlineBankingBillPaymentAndPrepaidReloadBtnColor(){
	document.getElementById("onlineBankingOnlineBankingBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingFundTransferBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingStandingInstructionBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingOtherServicesBtn").style.backgroundColor = "#000055";
}

function changeOnlineBankingFundTransferBtnColor(){
	document.getElementById("onlineBankingOnlineBankingBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingFundTransferBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingStandingInstructionBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingOtherServicesBtn").style.backgroundColor = "#000055";
}

function changeOnlineBankingStandingInstructionBtnColor(){
	document.getElementById("onlineBankingOnlineBankingBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingFundTransferBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingStandingInstructionBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingOtherServicesBtn").style.backgroundColor = "#000055";
}

function changeOnlineBankingOtherServicesBtnColor(){
	document.getElementById("onlineBankingOnlineBankingBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingAccountInquiryAndRepaymentsBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingBillPaymentAndPrepaidReloadBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingFundTransferBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingStandingInstructionBtn").style.backgroundColor = "#000055";
	document.getElementById("onlineBankingOtherServicesBtn").style.backgroundColor = "red";
}

/*script for online banking*/
/*hide and show sub tabs*/
function onlineBankingServicesAvailableSubTab(){
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "visible";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "hidden";
	
	changeOnlineBankingServicesAvailableSubTabColor();
}

function onlineBankingEligibilitySubTab(){
	document.getElementById("onlineBankingServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("onlineBankingEligibilityScrollBox").style.visibility = "visible";
	
	changeOnlineBankingEligibilitySubTabColor();
}

/*change color of sub tab*/
function changeOnlineBankingServicesAvailableSubTabColor(){
	document.getElementById("onlineBankingServicesAvailableBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingEligibilityBtn").style.backgroundColor = "white";
	document.getElementById("onlineBankingServicesAvailableBtn").style.color = "white";
	document.getElementById("onlineBankingEligibilityBtn").style.color = "black";
}

function changeOnlineBankingEligibilitySubTabColor(){
	document.getElementById("onlineBankingServicesAvailableBtn").style.backgroundColor = "white";
	document.getElementById("onlineBankingEligibilityBtn").style.backgroundColor = "red";
	document.getElementById("onlineBankingServicesAvailableBtn").style.color = "black";
	document.getElementById("onlineBankingEligibilityBtn").style.color = "white";
}

/*script for account inquiry & repayment*/
/*hide and show sub tabs*/
function accountInquiryAndRepaymentsAccountInquirySubTab(){
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "visible";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	
	changeAccountInquiryAndRepaymentsAccountInquirySubTabColor();
}

function accountInquiryAndRepaymentsLoanRepaymentSubTab(){
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "visible";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "hidden";
	
	changeAccountInquiryAndRepaymentsLoanRepaymentSubTabColor();
}

function accountInquiryAndRepaymentsCreditCardRepaymentSubTab(){
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentScrollBox").style.visibility = "hidden";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentScrollBox").style.visibility = "visible";
	
	changeAccountInquiryAndRepaymentsCreditCardRepaymentSubTabColor();
}
/*change color of sub tab*/
function changeAccountInquiryAndRepaymentsAccountInquirySubTabColor(){
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").style.backgroundColor = "red";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").style.backgroundColor = "white";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").style.backgroundColor = "white";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").style.color = "white";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").style.color = "black";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").style.color = "black";
}

function changeAccountInquiryAndRepaymentsLoanRepaymentSubTabColor(){
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").style.backgroundColor = "white";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").style.backgroundColor = "red";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").style.backgroundColor = "white";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").style.color = "black";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").style.color = "white";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").style.color = "black";
}

function changeAccountInquiryAndRepaymentsCreditCardRepaymentSubTabColor(){
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").style.backgroundColor = "white";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").style.backgroundColor = "white";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").style.backgroundColor = "red";
	document.getElementById("accountInquiryAndRepaymentsAccountInquiryBtn").style.color = "black";
	document.getElementById("accountInquiryAndRepaymentsLoanRepaymentBtn").style.color = "black";
	document.getElementById("accountInquiryAndRepaymentsCreditCardRepaymentBtn").style.color = "white";
}

/*script for bill payment and prepaid reload*/
/*hide and show sub tabs*/
function billPaymentAndPrepaidReloadPayBillsSubTab(){
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "visible";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "hidden";
	
	changeBillPaymentAndPrepaidReloadPayBillsSubTabColor();
}

function billPaymentAndPrepaidReloadPrepaidReloadsSubTab(){
	document.getElementById("billPaymentAndPrepaidReloadPayBillsScrollBox").style.visibility = "hidden";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsScrollBox").style.visibility = "visible";
	
	changeBillPaymentAndPrepaidReloadPrepaidReloadsSubTabColor();
}

/*change color of sub tab*/
function changeBillPaymentAndPrepaidReloadPayBillsSubTabColor(){
	document.getElementById("billPaymentAndPrepaidReloadPayBillsBtn").style.backgroundColor = "red";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsBtn").style.backgroundColor = "white";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsBtn").style.color = "white";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsBtn").style.color = "black";
}

function changeBillPaymentAndPrepaidReloadPrepaidReloadsSubTabColor(){
	document.getElementById("billPaymentAndPrepaidReloadPayBillsBtn").style.backgroundColor = "white";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsBtn").style.backgroundColor = "red";
	document.getElementById("billPaymentAndPrepaidReloadPayBillsBtn").style.color = "black";
	document.getElementById("billPaymentAndPrepaidReloadPrepaidReloadsBtn").style.color = "white";
}

/*script for fund transfer*/
/*hide and show sub tabs*/
function fundTransferMainSubTab(){
	document.getElementById("fundTransferMainScrollBox").style.visibility = "visible";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	
	changeFundTransferMainSubTabColor();
}

function fundTransferWhichServiceToUseSubTab(){
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "visible";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "hidden";
	
	changeFundTransferWhichServiceToUseSubTabColor();
}

function fundTransferReceivingBankDetailsSubTab(){
	document.getElementById("fundTransferMainScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferWhichServiceToUseScrollBox").style.visibility = "hidden";
	document.getElementById("fundTransferReceivingBankDetailsScrollBox").style.visibility = "visible";
	
	changeFundTransferReceivingBankDetailsSubTabColor();
}

/*change color of sub tab*/
function changeFundTransferMainSubTabColor(){
	document.getElementById("fundTransferMainBtn").style.backgroundColor = "red";
	document.getElementById("fundTransferWhichServiceToUseBtn").style.backgroundColor = "white";
	document.getElementById("fundTransferReceivingBankDetailsBtn").style.backgroundColor = "white";
	document.getElementById("fundTransferMainBtn").style.color = "white";
	document.getElementById("fundTransferWhichServiceToUseBtn").style.color = "black";
	document.getElementById("fundTransferReceivingBankDetailseBtn").style.color = "black";
}

function changeFundTransferWhichServiceToUseSubTabColor(){
	document.getElementById("fundTransferMainBtn").style.backgroundColor = "white";
	document.getElementById("fundTransferWhichServiceToUseBtn").style.backgroundColor = "red";
	document.getElementById("fundTransferReceivingBankDetailsBtn").style.backgroundColor = "white";
	document.getElementById("fundTransferMainBtn").style.color = "black";
	document.getElementById("fundTransferWhichServiceToUseBtn").style.color = "white";
	document.getElementById("fundTransferReceivingBankDetailseBtn").style.color = "black";
}

function changeFundTransferReceivingBankDetailsSubTabColor(){
	document.getElementById("fundTransferMainBtn").style.backgroundColor = "white";
	document.getElementById("fundTransferWhichServiceToUseBtn").style.backgroundColor = "white";
	document.getElementById("fundTransferReceivingBankDetailsBtn").style.backgroundColor = "red";
	document.getElementById("fundTransferMainBtn").style.color = "black";
	document.getElementById("fundTransferWhichServiceToUseBtn").style.color = "black";
	document.getElementById("fundTransferReceivingBankDetailseBtn").style.color = "white";
}

/*script for standing instructions*/
/*hide and show sub tabs*/
function standingInstructionMainSubTab(){
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "visible";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	
	changeStandingInstructionMainSubTabColor();
}

function standingInstructionServicesAvailableSubTab(){
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "visible";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "hidden";
	
	changeStandingInstructionServicesAvailableSubTabColor();
}

function standingInstructionHowDoISubTab(){
	document.getElementById("standingInstructionMainScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("standingInstructionHowDoIScrollBox").style.visibility = "visible";
	
	changeStandingInstructionHowDoISubTabColor();
}

/*change color of sub tab*/
function changeStandingInstructionMainSubTabColor(){
	document.getElementById("standingInstructionMainBtn").style.backgroundColor = "red";
	document.getElementById("standingInstructionServicesAvailableBtn").style.backgroundColor = "white";
	document.getElementById("standingInstructionHowDoIBtn").style.backgroundColor = "white";
	document.getElementById("standingInstructionMainBtn").style.color = "white";
	document.getElementById("standingInstructionServicesAvailableBtn").style.color = "black";
	document.getElementById("standingInstructionHowDoIBtn").style.color = "black";
}

function changeStandingInstructionServicesAvailableSubTabColor(){
	document.getElementById("standingInstructionMainBtn").style.backgroundColor = "white";
	document.getElementById("standingInstructionServicesAvailableBtn").style.backgroundColor = "red";
	document.getElementById("standingInstructionHowDoIBtn").style.backgroundColor = "white";
	document.getElementById("standingInstructionMainBtn").style.color = "black";
	document.getElementById("standingInstructionServicesAvailableBtn").style.color = "white";
	document.getElementById("standingInstructionHowDoIBtn").style.color = "black";
}

function changeStandingInstructionHowDoISubTabColor(){
	document.getElementById("standingInstructionMainBtn").style.backgroundColor = "white";
	document.getElementById("standingInstructionServicesAvailableBtn").style.backgroundColor = "white";
	document.getElementById("standingInstructionHowDoIBtn").style.backgroundColor = "red";
	document.getElementById("standingInstructionMainBtn").style.color = "black";
	document.getElementById("standingInstructionServicesAvailableBtn").style.color = "black";
	document.getElementById("standingInstructionHowDoIBtn").style.color = "white";
}

/*script for other services*/
/*hide and show sub tabs*/
function otherServicesServicesAvailableSubTab(){
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "visible";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "hidden";
	
	changeOtherServicesServicesAvailableSubTabColor();
}

function otherServicesFPXSubTab(){
	document.getElementById("otherServicesServicesAvailableScrollBox").style.visibility = "hidden";
	document.getElementById("otherServicesFPXScrollBox").style.visibility = "visible";
	
	changeOtherServicesFPXSubTabColor();
}

/*change color of sub tab*/
function changeOtherServicesServicesAvailableSubTabColor(){
	document.getElementById("otherServicesServicesAvailableBtn").style.backgroundColor = "red";
	document.getElementById("otherServicesFPXBtn").style.backgroundColor = "white";
	document.getElementById("otherServicesServicesAvailableBtn").style.color = "white";
	document.getElementById("otherServicesFPXBtn").style.color = "black";
}

function changeOtherServicesFPXSubTabColor(){
	document.getElementById("otherServicesServicesAvailableBtn").style.backgroundColor = "white";
	document.getElementById("otherServicesFPXBtn").style.backgroundColor = "red";
	document.getElementById("otherServicesServicesAvailableBtn").style.color = "black";
	document.getElementById("otherServicesFPXBtn").style.color = "white";
}




/*script for mobileBanking.html*/
/*hide and show sub tabs*/
function mobileBankingFeaturesSubTab(){
	document.getElementById("mobileBankingFeaturesScrollBox").style.visibility = "visible";
	document.getElementById("mobileBankingSecurityScrollBox").style.visibility = "hidden";
	document.getElementById("mobileBankingGetStartedScrollBox").style.visibility = "hidden";
	
	changeMobileBankingFeaturesSubTabColor();
}

function mobileBankingSecuritySubTab(){
	document.getElementById("mobileBankingFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("mobileBankingSecurityScrollBox").style.visibility = "visible";
	document.getElementById("mobileBankingGetStartedScrollBox").style.visibility = "hidden";
	
	changeMobileBankingSecuritySubTabColor();
}

function mobileBankingGetStartedSubTab(){
	document.getElementById("mobileBankingFeaturesScrollBox").style.visibility = "hidden";
	document.getElementById("mobileBankingSecurityScrollBox").style.visibility = "hidden";
	document.getElementById("mobileBankingGetStartedScrollBox").style.visibility = "visible";
	
	changeMobileBankingGetStartedSubTabColor();
}

/*change color of sub tab*/
function changeMobileBankingFeaturesSubTabColor(){
	document.getElementById("mobileBankingFeaturesBtn").style.backgroundColor = "red";
	document.getElementById("mobileBankingSecurityBtn").style.backgroundColor = "white";
	document.getElementById("mobileBankingGetStartedBtn").style.backgroundColor = "white";
	document.getElementById("mobileBankingFeaturesBtn").style.color = "white";
	document.getElementById("mobileBankingSecurityBtn").style.color = "black";
	document.getElementById("mobileBankingGetStartedBtn").style.color = "black";
}

function changeMobileBankingSecuritySubTabColor(){
	document.getElementById("mobileBankingFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("mobileBankingSecurityBtn").style.backgroundColor = "red";
	document.getElementById("mobileBankingGetStartedBtn").style.backgroundColor = "white";
	document.getElementById("mobileBankingFeaturesBtn").style.color = "black";
	document.getElementById("mobileBankingSecurityBtn").style.color = "white";
	document.getElementById("mobileBankingGetStartedBtn").style.color = "black";
}

function changeMobileBankingGetStartedSubTabColor(){
	document.getElementById("mobileBankingFeaturesBtn").style.backgroundColor = "white";
	document.getElementById("mobileBankingSecurityBtn").style.backgroundColor = "white";
	document.getElementById("mobileBankingGetStartedBtn").style.backgroundColor = "red";
	document.getElementById("mobileBankingFeaturesBtn").style.color = "black";
	document.getElementById("mobileBankingSecurityBtn").style.color = "black";
	document.getElementById("mobileBankingGetStartedBtn").style.color = "white";
}

/*script for pex.html*/
/*hide and show sub tabs*/
function pexHowPexWorksSubTab(){
	document.getElementById("pexHowPexWorksScrollBox").style.visibility = "visible";
	document.getElementById("pexWhyPexScrollBox").style.visibility = "hidden";
	document.getElementById("pexClaimYourPexScrollBox").style.visibility = "hidden";
	
	changePexHowPexWorksSubTabColor();
}

function pexWhyPexSubTab(){
	document.getElementById("pexHowPexWorksScrollBox").style.visibility = "hidden";
	document.getElementById("pexWhyPexScrollBox").style.visibility = "visible";
	document.getElementById("pexClaimYourPexScrollBox").style.visibility = "hidden";
	
	changePexWhyPexSubTabColor();
}

function pexClaimYourPexSubTab(){
	document.getElementById("pexHowPexWorksScrollBox").style.visibility = "hidden";
	document.getElementById("pexWhyPexScrollBox").style.visibility = "hidden";
	document.getElementById("pexClaimYourPexScrollBox").style.visibility = "visible";
	
	changePexClaimYourPexSubTabColor();
}

/*change color of sub tab*/
function changePexHowPexWorksSubTabColor(){
	document.getElementById("pexHowPexWorksBtn").style.backgroundColor = "red";
	document.getElementById("pexWhyPexBtn").style.backgroundColor = "white";
	document.getElementById("pexClaimYourPexBtn").style.backgroundColor = "white";
	document.getElementById("pexHowPexWorksBtn").style.color = "white";
	document.getElementById("pexWhyPexBtn").style.color = "black";
	document.getElementById("pexClaimYourPexBtn").style.color = "black";
}

function changePexWhyPexSubTabColor(){
	document.getElementById("pexHowPexWorksBtn").style.backgroundColor = "white";
	document.getElementById("pexWhyPexBtn").style.backgroundColor = "red";
	document.getElementById("pexClaimYourPexBtn").style.backgroundColor = "white";
	document.getElementById("pexHowPexWorksBtn").style.color = "black";
	document.getElementById("pexWhyPexBtn").style.color = "white";
	document.getElementById("pexClaimYourPexBtn").style.color = "black";
}

function changePexClaimYourPexSubTabColor(){
	document.getElementById("pexHowPexWorksBtn").style.backgroundColor = "white";
	document.getElementById("pexWhyPexBtn").style.backgroundColor = "white";
	document.getElementById("pexClaimYourPexBtn").style.backgroundColor = "red";
	document.getElementById("pexHowPexWorksBtn").style.color = "black";
	document.getElementById("pexWhyPexBtn").style.color = "black";
	document.getElementById("pexClaimYourPexBtn").style.color = "white";
}