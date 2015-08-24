
<?php
	echo '
		<div id = "menuList">
			<ul>
				<li><button id = "about" onClick = "triggerAboutList()"></button></li>
				<li><button id = "pfs" onClick = "triggerPfsList()"></button></li>
				<li><button id = "bcb" onClick = "triggerBcbList()"></button></li>
				<li><button id = "hlc" onClick = "triggerHlcList()"></button></li>
			</ul>
		</div>
		<div id = "aboutList">
			<ul>
				<li><button id = "aboutTitle" class = "title" href = "#"></button></li>
				<li><a href = "" id = "1"></a></li>
			</ul>
		</div>
		<div id = "pfsList">
			<ul>
				<li><button id = "pfsTitle" class = "title"></button></li>
				<li><a href = "" id = "2"></a></li>
				<li><a href = "" id = "3"></a></li>
				<li><a href = "" id = "4"></a></li>
				<li><a href = "" id = "5"></a></li>
				<li><a href = "" id = "6"></a></li>
				<li><a href = "" id = "7"></a></li>
				<li><a href = "" id = "8"></a></li>
				<li><a href = "" id = "9"></a></li>
			</ul>
		</div>
		<div id = "bcbList">
			<ul>
				<li><button id = "bcbTitle" class = "title"></button></li>
				<li><a href = "" id = "10"></a></li>
				<li><a href = "" id = "11"></a></li>
				<li><a href = "" id = "12"></a></li>
				<li><a href = "" id = "13"></a></li>
				<li><a href = "" id = "14"></a></li>
			</ul>
		</div>
		<div id = "hlcList">
			<ul>
				<li><button id = "hlcTitle" class = "title" ></button></li>
				<li><a href = "" id = "15"></a></li>
				<li><a href = "" id = "16"></a></li>
				<li><a href = "" id = "17"></a></li>
				<li><a href = "" id = "18"></a></li>
			</ul>
		</div>
		<div id = "langList">
			<ul>
				<li><button id = "langTitle" class = "title"></button></li>
				<li><a id = "eng" href = "" onClick = "changeLangToEng();changeEngColor()"></a></li>
				<li><a id = "bm" href = "" onClick = "changeLangToBM();changeBmColor()"></a></li>
			</ul>
		</div>
		<div>
			<button id = "exploreBtn" onClick = "changeBtnToClose()"><img src = "images/icon/icon_plus.png" /><span id = "explore"></span></button>
			<button id = "closeBtn" onClick = "changeBtnToExplore()"><img src = "images/icon/icon_close.png" /><span id = "close"></span></button>
			<button id = "backBtn" onClick = "changeBtnToClose()"><img src = "images/icon/icon_arrow_right.png" /><span id = "back"></span></button>
		</div>		
		<div>
			<button id = "lang" onClick = "changeBtnToCloseLang()"><img src = "images/icon/icon_plus.png" /><span id = "langText"></span></button>
			<button id = "closeLang" onClick = "changeBtnToLang()"><img src = "images/icon/icon_close.png" /><span id = "closeText"></span></button>
		</div>

		<script>
			if(window.XMLHttpRequest){
				xmlhttp = new XMLHttpRequest();
			}
			var ver = "'.$_SESSION["ver"].'";
			var lang = "'.$_SESSION["lang"].'";
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/menu.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML;
			
			x = xmlDoc.getElementsByTagName("menu");
			//get menu labels
			document.getElementById("explore").innerHTML = x[0].getAttributeNode("states").nodeValue;
			document.getElementById("close").innerHTML = x[0].getAttributeNode("states1").nodeValue;
			document.getElementById("back").innerHTML = x[0].getAttributeNode("states2").nodeValue;
			document.getElementById("langText").innerHTML = x[0].getAttributeNode("states3").nodeValue;
			document.getElementById("closeText").innerHTML = x[0].getAttributeNode("states1").nodeValue;
			//get main menu list
			document.getElementById("about").innerHTML = x[1].getAttributeNode("label").nodeValue;
			document.getElementById("pfs").innerHTML = x[3].getAttributeNode("label").nodeValue;
			document.getElementById("bcb").innerHTML = x[12].getAttributeNode("label").nodeValue;
			document.getElementById("hlc").innerHTML = x[18].getAttributeNode("label").nodeValue;
			//document.getElementById("ver").innerHTML = x[23].getAttributeNode("label").nodeValue;
			//document.getElementById("lang").innerHTML = x[26].getAttributeNode("label").nodeValue;
			//get list titles
			document.getElementById("aboutTitle").innerHTML = x[1].getAttributeNode("label").nodeValue;
			document.getElementById("pfsTitle").innerHTML = x[3].getAttributeNode("label").nodeValue;
			document.getElementById("bcbTitle").innerHTML = x[12].getAttributeNode("label").nodeValue;
			document.getElementById("hlcTitle").innerHTML = x[18].getAttributeNode("label").nodeValue;
			//document.getElementById("verTitle").innerHTML = x[23].getAttributeNode("label").nodeValue;
			document.getElementById("langTitle").innerHTML = x[26].getAttributeNode("label").nodeValue;
			//get about list
			document.getElementById("1").innerHTML = x[2].getAttributeNode("label").nodeValue;
			//get pfs list
			document.getElementById("2").innerHTML = x[4].getAttributeNode("label").nodeValue;
			document.getElementById("3").innerHTML = x[5].getAttributeNode("label").nodeValue;
			document.getElementById("4").innerHTML = x[6].getAttributeNode("label").nodeValue;
			document.getElementById("5").innerHTML = x[7].getAttributeNode("label").nodeValue;
			document.getElementById("6").innerHTML = x[8].getAttributeNode("label").nodeValue;
			document.getElementById("7").innerHTML = x[9].getAttributeNode("label").nodeValue;
			document.getElementById("8").innerHTML = x[10].getAttributeNode("label").nodeValue;
			document.getElementById("9").innerHTML = x[11].getAttributeNode("label").nodeValue;
			//get bcb list
			document.getElementById("10").innerHTML = x[13].getAttributeNode("label").nodeValue;
			document.getElementById("11").innerHTML = x[14].getAttributeNode("label").nodeValue;
			document.getElementById("12").innerHTML = x[15].getAttributeNode("label").nodeValue;
			document.getElementById("13").innerHTML = x[16].getAttributeNode("label").nodeValue;
			document.getElementById("14").innerHTML = x[17].getAttributeNode("label").nodeValue;
			//get hlc list
			document.getElementById("15").innerHTML = x[19].getAttributeNode("label").nodeValue;
			document.getElementById("16").innerHTML = x[20].getAttributeNode("label").nodeValue;
			document.getElementById("17").innerHTML = x[21].getAttributeNode("label").nodeValue;
			document.getElementById("18").innerHTML = x[22].getAttributeNode("label").nodeValue;
			//get ver list
			//document.getElementById("normal").innerHTML = x[24].getAttributeNode("label").nodeValue;
			//document.getElementById("islamic").innerHTML = x[25].getAttributeNode("label").nodeValue;
			//get lang list
			document.getElementById("eng").innerHTML = x[27].getAttributeNode("label").nodeValue;
			document.getElementById("bm").innerHTML = x[28].getAttributeNode("label").nodeValue;
			
			//set anchor links
			//about list
			document.getElementById("1").href = x[2].getAttributeNode("data").nodeValue;
			//pfs list
			document.getElementById("2").href = x[4].getAttributeNode("data").nodeValue;
			document.getElementById("3").href = x[5].getAttributeNode("data").nodeValue;
			document.getElementById("4").href = x[6].getAttributeNode("data").nodeValue;
			document.getElementById("5").href = x[7].getAttributeNode("data").nodeValue;
			document.getElementById("6").href = x[8].getAttributeNode("data").nodeValue;
			document.getElementById("7").href = x[9].getAttributeNode("data").nodeValue;
			document.getElementById("8").href = x[10].getAttributeNode("data").nodeValue;
			document.getElementById("9").href = x[11].getAttributeNode("data").nodeValue;
			//bcb list
			document.getElementById("10").href = x[13].getAttributeNode("data").nodeValue;
			document.getElementById("11").href = x[14].getAttributeNode("data").nodeValue;
			document.getElementById("12").href = x[15].getAttributeNode("data").nodeValue;
			document.getElementById("13").href = x[16].getAttributeNode("data").nodeValue;
			document.getElementById("14").href = x[17].getAttributeNode("data").nodeValue;
			//hlc list
			document.getElementById("15").href = x[19].getAttributeNode("data").nodeValue;
			document.getElementById("16").href = x[20].getAttributeNode("data").nodeValue;
			document.getElementById("17").href = x[21].getAttributeNode("data").nodeValue;
			document.getElementById("18").href = x[22].getAttributeNode("data").nodeValue;
			//ver list
			//document.getElementById("normal").href = x[24].getAttributeNode("data").nodeValue;
			//document.getElementById("islamic").href = x[25].getAttributeNode("data").nodeValue;
			//lang list
			document.getElementById("eng").href = x[27].getAttributeNode("data").nodeValue;
			document.getElementById("bm").href = x[28].getAttributeNode("data").nodeValue;
			
		</script>
		
		<script>
				<!--highlight session based on session-->
				var lang = "'.$_SESSION["lang"].'";
				if(lang == "bm"){
					changeBmColor();
				}
				else if(lang == "eng"){
					changeEngColor();
				}
				
				<!--highlight version based on session-->
				var ver = "'.$_SESSION["ver"].'";
				if(ver == "islamic"){
					changeIslamicColor();
				}
				else if(ver == "normal"){
					changeNormalColor();
				}
		</script>
		
		';
?>
