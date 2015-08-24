<html !DOCTYPE>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<div id = "sideImage"><img id = "sideImage1" src = ""/></div>
		
		<div class = "container" id = "main">	
			<h1 id = "pageTitle"></h1>
			<div class = "scrollBox dragscroll" id = "scrollBox"></div>
		</div>
		
		<script>
			if(window.XMLHttpRequest){
				xmlhttp = new XMLHttpRequest();
			}
			<?php
				echo 'var ver = "'.$_SESSION['ver'].'";';
				echo 'var lang = "'.$_SESSION['lang'].'";';
			?>
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/about.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML;
			
			x = xmlDoc.getElementsByTagName("page");
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
			document.getElementById("scrollBox").innerHTML = x[0].childNodes[1].nodeValue;
			
		</script>
			
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerAboutList();
			highlightStory();
		</script>
	</body>
</html>