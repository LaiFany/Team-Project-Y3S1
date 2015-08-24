$(document).ready(function (){
				$(document).keypress(function(event){
					var x = event.keyCode;
					if(x==109){
						$('body').css({cursor: 'none'});
						$('button').css({cursor: 'none'});
						$('a').css({cursor: 'none'});
					}
					else if(x==110){
						$('body').css({cursor: 'default'});
						$('button').css({cursor: 'default'});
						$('a').css({cursor: 'default'});
					}
					});
			});