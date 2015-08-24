$(document).ready(function (){
				$(document).keypress(function(event){
					var x = event.keyCode;
					if(x==99){
						var ver = "normal";
						var xmlhttp;
						if (window.XMLHttpRequest)
						  {// code for IE7+, Firefox, Chrome, Opera, Safari
						  xmlhttp=new XMLHttpRequest();
						  }
						else
						  {// code for IE6, IE5
						  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
						  }
						  xmlhttp.onreadystatechange=function()
						  {
						  if (xmlhttp.readyState==4 && xmlhttp.status==200)
							{
							// Reload the page
							window.location.assign("index.php");
							}
						  }
						xmlhttp.open("POST","set_session.php?ver=" + ver,true);
						xmlhttp.send();
					}
					else if(x==105){
						
						var ver = "islamic";
						var xmlhttp;
						if (window.XMLHttpRequest)
						  {// code for IE7+, Firefox, Chrome, Opera, Safari
						  xmlhttp=new XMLHttpRequest();
						  }
						else
						  {// code for IE6, IE5
						  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
						  }
						  xmlhttp.onreadystatechange=function()
						  {
						  if (xmlhttp.readyState==4 && xmlhttp.status==200)
							{
							// Reload the page
							window.location.assign("islamIndex.php");
							}
						  }
						xmlhttp.open("POST","set_session.php?ver=" + ver,true);
						xmlhttp.send();
					
					}
					});
			});