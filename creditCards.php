<html>
	<head>
		<?php
			include 'header.php';
			include 'set_session.php';
		?>
	</head>
	<body>
		<style>
			body{
				overflow : hidden;
			}
		</style>
		<div id="slider">
			<input type="radio" id="button-1" name="controls" checked />
			<input type="radio" id="button-2" name="controls" />
			<input type="radio" id="button-3" name="controls" />
			<input type="radio" id="button-4" name="controls" />
			<input type="radio" id="button-5" name="controls" />
			<input type="radio" id="button-6" name="controls" />
			<input type="radio" id="button-7" name="controls" />
			<input type="radio" id="button-8" name="controls" />
			<input type="radio" id="button-9" name="controls" />
			<input type="radio" id="button-10" name="controls" />
			<label for="button-1" class="arrows" id="arrow-1"><img src = "images/icon/next.png"></label>
			<label for="button-2" class="arrows" id="arrow-2"><img src = "images/icon/next.png"></label>
			<label for="button-3" class="arrows" id="arrow-3"><img src = "images/icon/next.png"></label>
			<label for="button-4" class="arrows" id="arrow-4"><img src = "images/icon/next.png"></label>
			<label for="button-5" class="arrows" id="arrow-5"><img src = "images/icon/next.png"></label>
			<label for="button-6" class="arrows" id="arrow-6"><img src = "images/icon/next.png"></label>
			<label for="button-7" class="arrows" id="arrow-7"><img src = "images/icon/next.png"></label>
			<label for="button-8" class="arrows" id="arrow-8"><img src = "images/icon/next.png"></label>
			<label for="button-9" class="arrows" id="arrow-9"><img src = "images/icon/next.png"></label>
			<label for="button-10" class="arrows" id="arrow-10"><img src = "images/icon/next.png"></label>
			<div id="slides">
				<div id = "image">
				<!--code to get images dynamically.-->
					<!--<?php
						/*$dir = "images/content/pfs/credit_card/";
						$i = 1;
						// Open a directory, and read its contents
						if (is_dir($dir)){
						  if ($dh = opendir($dir)){
							while (($file = readdir($dh)) !== false){
								if($file == "." || $file == ".."){
									continue;
								}
								else{
							  echo "<span id = 'image-".$i."'><img src='".$dir.$file."'/></span>";
							  $i++;
								}
							}
							closedir($dh);
						  }
						}*/
						?>-->
						<span id = "image-1"><img id = "img1" src = ""></span>
						<span id = "image-2"><img id = "img2" src = ""></span>
						<span id = "image-3"><img id = "img3" src = ""></span>
						<span id = "image-4"><img id = "img4" src = ""></span>
						<span id = "image-5"><img id = "img5" src = ""></span>
						<span id = "image-6"><img id = "img6" src = ""></span>
						<span id = "image-7"><img id = "img7" src = ""></span>
						<span id = "image-8"><img id = "img8" src = ""></span>
						<span id = "image-9"><img id = "img9" src = ""></span>
						<span id = "image-10"><img id = "img10" src = ""></span>
				</div>
				
					<div id = "info">
						<span id="info1" class = "info">
							
						</span>
						<span id ="info2" class = "info">
							
						</span>
						<span id ="info3" class = "info">
							
						</span>
						<span id="info4" class = "info">
							
						</span>
						<span id="info5" class = "info">
							
						</span>
						<span id="info6" class = "info">
							
						</span>
						<span id="info7" class = "info">
							
						</span>
						<span id="info8" class = "info">
							
						</span>
						<span id="info9" class = "info">
							
						</span>
						<span id="info10" class = "info">
							
						</span>
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
			xmlhttp.open("GET","xml/"+ver+"/"+lang+"/credit_card.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML;
			
			x = xmlDoc.getElementsByTagName("page");
			//get background
			var background = xmlDoc.getElementsByTagName("content")[0].getAttributeNode("background").nodeValue;
			document.body.style.background = "url('"+background+"') no-repeat center center fixed";
			document.body.style.backgroundSize = "cover";
			document.body.style.width = "100%";
			//get page title
			//document.getElementById("pageTitle").innerHTML = x[0].getAttributeNode("title").nodeValue;
			//get images 
			document.getElementById("img1").src = x[0].getAttributeNode("image").nodeValue;
			document.getElementById("img2").src = x[1].getAttributeNode("image").nodeValue;
			document.getElementById("img3").src = x[2].getAttributeNode("image").nodeValue;
			document.getElementById("img4").src = x[3].getAttributeNode("image").nodeValue;
			document.getElementById("img5").src = x[4].getAttributeNode("image").nodeValue;
			document.getElementById("img6").src = x[5].getAttributeNode("image").nodeValue;
			document.getElementById("img7").src = x[6].getAttributeNode("image").nodeValue;
			document.getElementById("img8").src = x[7].getAttributeNode("image").nodeValue;
			document.getElementById("img9").src = x[8].getAttributeNode("image").nodeValue;
			document.getElementById("img10").src = x[9].getAttributeNode("image").nodeValue;
			//get scroll box content
			document.getElementById("info1").innerHTML = x[0].childNodes[1].nodeValue;
			document.getElementById("info2").innerHTML = x[1].childNodes[1].nodeValue;
			document.getElementById("info3").innerHTML = x[2].childNodes[1].nodeValue;
			document.getElementById("info4").innerHTML = x[3].childNodes[1].nodeValue;
			document.getElementById("info5").innerHTML = x[4].childNodes[1].nodeValue;
			document.getElementById("info6").innerHTML = x[5].childNodes[1].nodeValue;
			document.getElementById("info7").innerHTML = x[6].childNodes[1].nodeValue;
			document.getElementById("info8").innerHTML = x[7].childNodes[1].nodeValue;
			document.getElementById("info9").innerHTML = x[8].childNodes[1].nodeValue;
			document.getElementById("info10").innerHTML = x[9].childNodes[1].nodeValue;
			
			</script>
		<style>
			body {
				margin: 0;
				padding: 0;
				font-size: 62.5%;
			}
			 
			#slider {
				display: block;
				height: 100%;
				width: 100%;
				margin: auto;
				overflow: hidden;
				margin-top : 3%;
				position: relative;
				top : 10%;
			}
			 
			#slider #slides {
				width: 100%;
				height: 100%;
				overflow: hidden;
				font-family: Arial, sans-serif;
				position: relative;
			}
			 
			div#image {
				list-style: none;
				height: 100%;
				width: 550%;
				position: relative;
				left: -4.5%;
				margin: 0;
				padding: 0;
				overflow: hidden;
				/* Set 3D perspective since we're using 3D transforms */
				transform-style: preserve-3d;
				-webkit-transform-style: preserve-3d;
				-webkit-perspective: 600px; 
				-moz-perspective: 600px; 
				perspective: 600px;
				-webkit-perspective-origin: 10% 50%; 
				-moz-perspective-origin: 10% 50%; 
				perspective-origin: 10% 50%;
			}
			 
			#slides > div#image > span {
				/* Run the transitions */
				-webkit-transition: all 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530);
				-moz-transition: all 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530);
				-o-transition: all 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530);
				transition: all 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530);
				height: 220px;
				width: 5%;
				float: left;
				border-radius: 5px;
				opacity: 1;
				overflow: hidden;
				position: relative;
				font-size: 1.6em;
				top: 20px;
				z-index: 1;
			}
			 
			/* Display none, so the user doesn't see whats happening with the radio buttons */
			#slider input[type=radio] {
				display: none;
			}
			 
			#slider #slides > div > span > img {
				margin: auto;
				height: 100%;
			}
			 
			/* Style the arrows so they look nice! */
			#slider .arrows {
				position: absolute;
				top: 290px;
				display: none;
				z-index: 9999;
			}
			 
			#slider .arrows:hover {
				box-shadow: 0 0 20px rgba(200, 235, 248, 0.98), inset 0px -11px 24px -8px rgba(255,255,255,0.4);    
			}
			 
			/* The info boxes */
			div .info{
				width: 40%;
				height : 35%;
				padding: 20px 20px 25px 20px;
				position : absolute;
				top: 350px;
				margin-left: 2.5%;
				border-radius: 5px 5px 5px 5px;
				box-sizing: border-box;
				color: #fff;
				font-weight: bold;
				font-size : 16px;
				background-color: rgb(30, 30, 30);
				box-shadow: 0 0 20px rgba(0,0,0,0.3);
				line-height: 20px;
				opacity : 0.7;
			}
			 
			/* This is for positioning the arrows */
			#button-1:checked ~ #arrow-2, #button-2:checked ~ #arrow-3, #button-3:checked ~ #arrow-4, #button-4:checked ~ #arrow-5, #button-5:checked ~ #arrow-6, #button-6:checked ~ #arrow-7, #button-7:checked ~ #arrow-8, #button-8:checked ~ #arrow-9, #button-9:checked ~ #arrow-10 {
				right: 27%;
				display : block;
			}
			 
			/* Since there is no previous sibling selector in CSS, we have to select the correct arrow, reposition it and rotate it 180deg so it appears as though it's a back arrow */
			#button-2:checked ~ #arrow-1, #button-3:checked ~ #arrow-2, #button-4:checked ~ #arrow-3, #button-5:checked ~ #arrow-4, #button-6:checked ~ #arrow-5, #button-7:checked ~ #arrow-6, #button-8:checked ~ #arrow-7, #button-9:checked ~ #arrow-8, #button-10:checked ~ #arrow-9 {
				left: 27%;
				display: block;
				-webkit-transform: rotateZ(180deg);
				-o-transform: rotateZ(180deg);
				transform: rotateZ(180deg);
				//box-shadow: 0 0 20px rgba(200, 235, 248, 0.98), inset 0px -11px 24px -8px rgba(255,255,255,0.4);
			}
			 
			#button-2:checked ~ #arrow-1:hover, #button-3:checked ~ #arrow-2:hover, #button-4:checked ~ #arrow-3:hover, #button-5:checked ~ #arrow-4:hover, #button-6:checked ~ #arrow-5:hover, #button-7:checked ~ #arrow-6:hover, #button-8:checked ~ #arrow-7:hover, #button-9:checked ~ #arrow-8:hover, #button-10:checked ~ #arrow-9:hover {
				box-shadow: 0 0 20px rgba(200, 235, 248, 0.98), inset 0px 11px 24px -8px rgba(255,255,255,0.4);
			}
			 
			/* Positions the slides at either side of the selected slide */
			   /*moves right*/
			#slider #button-1:checked ~ #slides > div #image-2, #slider #button-1:checked ~ #slides > div #image-3, 
			#slider #button-1:checked ~ #slides > div #image-4, #slider #button-1:checked ~ #slides > div #image-5,
			#slider #button-1:checked ~ #slides > div #image-6, #slider #button-1:checked ~ #slides > div #image-7,
			#slider #button-1:checked ~ #slides > div #image-8, #slider #button-1:checked ~ #slides > div #image-9,
			#slider #button-1:checked ~ #slides > div #image-10, #slider #button-2:checked ~ #slides > div #image-3,
			#slider #button-2:checked ~ #slides > div #image-4, #slider #button-2:checked ~ #slides > div #image-5, 
			#slider #button-2:checked ~ #slides > div #image-6, #slider #button-2:checked ~ #slides > div #image-7,
			#slider #button-2:checked ~ #slides > div #image-8, #slider #button-2:checked ~ #slides > div #image-9,
			#slider #button-2:checked ~ #slides > div #image-10, #slider #button-3:checked ~ #slides > div #image-4,
			#slider #button-3:checked ~ #slides > div #image-5, #slider #button-3:checked ~ #slides > div #image-6,
			#slider #button-3:checked ~ #slides > div #image-7, #slider #button-3:checked ~ #slides > div #image-8,
			#slider #button-3:checked ~ #slides > div #image-9, #slider #button-3:checked ~ #slides > div #image-10,
			#slider #button-4:checked ~ #slides > div #image-5, #slider #button-4:checked ~ #slides > div #image-6,
			#slider #button-4:checked ~ #slides > div #image-7, #slider #button-4:checked ~ #slides > div #image-8,	
			#slider #button-4:checked ~ #slides > div #image-9, #slider #button-4:checked ~ #slides > div #image-10,
			#slider #button-5:checked ~ #slides > div #image-6, #slider #button-5:checked ~ #slides > div #image-7,
			#slider #button-5:checked ~ #slides > div #image-8, #slider #button-5:checked ~ #slides > div #image-9,
			#slider #button-5:checked ~ #slides > div #image-10, #slider #button-6:checked ~ #slides > div #image-7,
			#slider #button-6:checked ~ #slides > div #image-8, #slider #button-6:checked ~ #slides > div #image-9,
			#slider #button-6:checked ~ #slides > div #image-10, #slider #button-7:checked ~ #slides > div #image-8,
			#slider #button-7:checked ~ #slides > div #image-9, #slider #button-7:checked ~ #slides > div #image-10,
			#slider #button-8:checked ~ #slides > div #image-9, #slider #button-8:checked ~ #slides > div #image-10,
			#slider #button-9:checked ~ #slides > div #image-10	{
				-webkit-transform: rotateY(-30deg) scale(0.8) translateX(-5%);
				transform: rotateY(-30deg) scale(0.8) translateX(-5%);
				z-index: 0;
			}
			 
			 /*moves left*/
			#slider #button-2:checked ~ #slides > div #image-1, #slider #button-3:checked ~ #slides > div #image-2,
			#slider #button-3:checked ~ #slides > div #image-1, #slider #button-4:checked ~ #slides > div #image-3, 
			#slider #button-4:checked ~ #slides > div #image-2, #slider #button-4:checked ~ #slides > div #image-1, 
			#slider #button-5:checked ~ #slides > div #image-4, #slider #button-5:checked ~ #slides > div #image-3,
			#slider #button-5:checked ~ #slides > div #image-2, #slider #button-5:checked ~ #slides > div #image-1,
			#slider #button-6:checked ~ #slides > div #image-5, #slider #button-6:checked ~ #slides > div #image-4,
			#slider #button-6:checked ~ #slides > div #image-3, #slider #button-6:checked ~ #slides > div #image-2,
			#slider #button-6:checked ~ #slides > div #image-1, #slider #button-7:checked ~ #slides > div #image-6,
			#slider #button-7:checked ~ #slides > div #image-5, #slider #button-7:checked ~ #slides > div #image-4,
			#slider #button-7:checked ~ #slides > div #image-3, #slider #button-7:checked ~ #slides > div #image-2,
			#slider #button-7:checked ~ #slides > div #image-1, #slider #button-8:checked ~ #slides > div #image-7,
			#slider #button-8:checked ~ #slides > div #image-6, #slider #button-8:checked ~ #slides > div #image-5,
			#slider #button-8:checked ~ #slides > div #image-4, #slider #button-8:checked ~ #slides > div #image-3,
			#slider #button-8:checked ~ #slides > div #image-2, #slider #button-8:checked ~ #slides > div #image-1,
			#slider #button-9:checked ~ #slides > div #image-8, #slider #button-9:checked ~ #slides > div #image-7,
			#slider #button-9:checked ~ #slides > div #image-6, #slider #button-9:checked ~ #slides > div #image-5,
			#slider #button-9:checked ~ #slides > div #image-4, #slider #button-9:checked ~ #slides > div #image-3,
			#slider #button-9:checked ~ #slides > div #image-2, #slider #button-9:checked ~ #slides > div #image-1,
			#slider #button-10:checked ~ #slides > div #image-9, #slider #button-10:checked ~ #slides > div #image-8,
			#slider #button-10:checked ~ #slides > div #image-7, #slider #button-10:checked ~ #slides > div #image-6,
			#slider #button-10:checked ~ #slides > div #image-5, #slider #button-10:checked ~ #slides > div #image-4,	
			#slider #button-10:checked ~ #slides > div #image-3, #slider #button-10:checked ~ #slides > div #image-2,
			#slider #button-10:checked ~ #slides > div #image-1	{
				-webkit-transform: rotateY(30deg) scale(0.8) translateX(5%);
				transform: rotateY(30deg) scale(0.8) translateX(5%);
				z-index: 0;
			}

			 
			/* .. and finally, move the slides into the correct position when the user clicks the arrow, so the right
			   slide is selected */
			 
			#slider #button-1:checked ~ #slides > div > span { left: 7.6% }
			 
			#slider #button-2:checked ~ #slides > div > span { left: 2.6% }
			 
			#slider #button-3:checked ~ #slides > div > span { left: -2.4% }
			 
			#slider #button-4:checked ~ #slides > div > span { left: -7.4% }
			 
			#slider #button-5:checked ~ #slides > div > span { left: -12.4% }
			
			#slider #button-6:checked ~ #slides > div > span { left: -17.4% }
			
			#slider #button-7:checked ~ #slides > div > span { left: -22.4% }
			
			#slider #button-8:checked ~ #slides > div > span { left: -27.4% }
			
			#slider #button-9:checked ~ #slides > div > span { left: -32.4% }
			
			#slider #button-10:checked ~ #slides > div > span { left: -37.4% }
			
			@media screen and (max-width: 960px){
				#slider{
					right : 15%;
				}
				
				#slides > div#image > span{
					width : 8%;
				}
				
				#slider #slides > div > span > img{
					width : 100%;
				}
				
				div .info{
					height : 38%;
					width: 55%;
				}
				
				#button-1:checked ~ #arrow-2, #button-2:checked ~ #arrow-3, #button-3:checked ~ #arrow-4, #button-4:checked ~ #arrow-5, #button-5:checked ~ #arrow-6, #button-6:checked ~ #arrow-7, #button-7:checked ~ #arrow-8, #button-8:checked ~ #arrow-9, #button-9:checked ~ #arrow-10{
					right : 12%;
				}
				
				#slider #button-1:checked ~ #slides > div > span { left: 7.6% }
			 
				#slider #button-2:checked ~ #slides > div > span { left: -0.6% }
				 
				#slider #button-3:checked ~ #slides > div > span { left: -8.6% }
				 
				#slider #button-4:checked ~ #slides > div > span { left: -16.6% }
				 
				#slider #button-5:checked ~ #slides > div > span { left: -24.6% }
				
				#slider #button-6:checked ~ #slides > div > span { left: -32.6% }
				
				#slider #button-7:checked ~ #slides > div > span { left: -40.6% }
				
				#slider #button-8:checked ~ #slides > div > span { left: -48.6% }
				
				#slider #button-9:checked ~ #slides > div > span { left: -56.6% }
				
				#slider #button-10:checked ~ #slides > div > span { left: -64.6% }
			}
		</style>
		<?php
			include 'menuBtn.php';
		?>
		<script>
			triggerPfsList();
			highlightCreditCards();
		</script>
		<script>
			$(document).ready( setInterval(function() {
				if(document.getElementById("button-1").checked){
					document.getElementById("info1").style.visibility = "visible";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info1").style.left = "27.5%";
				}
				else if(document.getElementById("button-2").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "visible";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info2").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-3").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "visible";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info3").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-4").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "visible";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info4").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-5").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "visible";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info5").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-6").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "visible";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info6").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-7").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "visible";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info7").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-8").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "visible";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info8").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-9").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "visible";
					document.getElementById("info10").style.visibility = "hidden";
					
					document.getElementById("info9").style.left = "27.5%";
				}
				
				else if(document.getElementById("button-10").checked){
					document.getElementById("info1").style.visibility = "hidden";
					document.getElementById("info2").style.visibility = "hidden";
					document.getElementById("info3").style.visibility = "hidden";
					document.getElementById("info4").style.visibility = "hidden";
					document.getElementById("info5").style.visibility = "hidden";
					document.getElementById("info6").style.visibility = "hidden";
					document.getElementById("info7").style.visibility = "hidden";
					document.getElementById("info8").style.visibility = "hidden";
					document.getElementById("info9").style.visibility = "hidden";
					document.getElementById("info10").style.visibility = "visible";
					
					document.getElementById("info10").style.left = "27.5%";
				}
			},30));
			
		</script>
	</body>
</html>