
			var one =0;
			
			function reply_click(clicked_id)
			{   var i;
				var arr=[];
				one+=1;
				var option = 0;
				if(one%2==0)
				{
					document.getElementById(clicked_id).innerHTML="X";
				}
				else
				{
					document.getElementById(clicked_id).innerHTML="0";
				}
				if(one>4){
					for(i=0;i<9;i++)
					{
						arr[i]=document.getElementById(i+1).innerHTML;
					}

					console.log(arr[0]+"-"+arr[1]+"-"+arr[2])
					console.log(arr[0]+"-"+arr[3]+"-"+arr[6])
					console.log(arr[0]+"-"+arr[4]+"-"+arr[8])
					if((arr[0]==arr[1]&&arr[0]==arr[2])||(arr[0]==arr[3]&&arr[0]==arr[6])||(arr[0]==arr[4]&&arr[0]==arr[8]))
					{

						console.log("1");
						console.log(arr[0]=="X")
						console.log(arr[0]=="0")
						if(arr[0]=="X"){
								//alert("hmm");
								option=1;

							}
							
							else if(arr[0]=="0")
							{
								option=2;
							}
					}

					else	if(arr[3]==arr[4]&&arr[3]==arr[5]||arr[1]==arr[4]&&arr[1]==arr[7]||arr[2]==arr[4]&&arr[2]==arr[6])
							{
								console.log("2");
								if(document.getElementById(5).innerHTML=="X")
								{
									option=1;
								}
								if(document.getElementById(5).innerHTML=="0")
								{
									option=2;
								}

							}
					else	if(arr[6]==arr[7]&&arr[6]==arr[8]||arr[2]==arr[5]&&arr[2]==arr[8])
							{
								console.log("3");
								if(document.getElementById(9).innerHTML=="X")
								{
									option=1;
								}
								if(document.getElementById(9).innerHTML=="0")
								{
									option=2;
								}

							}



						}

				if((one == 9)||(option != 0)){
					console.log(option)
					 switch(option)
					{
						case 1:alert("x wins");
						break;
						case 2:alert("0 wins");
						break;
						default:alert("draw");
						break;
					} 
				}
						
					}
				



				function reset()
				{ var j;
					//window.location="index.html";
					for(j=1;j<10;j++)
					{
						document.getElementById(j).innerHTML="";
					}
				}
			