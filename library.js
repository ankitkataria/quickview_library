
function showQview(n){
	
	$(".container").fadeTo(1000,0.7);
	var i=0;
	document.getElementsByClassName("qview")[0].style.zIndex=999; 
	var ele=$(".qviewele");
	for(i=0;i<ele.length;i++){
	   ele[i].style.opacity=0;
	}
	document.getElementsByClassName("outfocus")[0].style.zIndex=99;
    document.getElementsByClassName("outfocus")[0].style.opacity=1;
	

    ele[n].style.height="50%";
	ele[n].style.opacity=1;

}

function hideQview(n){
	var i=0;
	document.getElementsByClassName("qview")[0].style.zIndex=-1; 
	var ele=$(".qviewele");
//	ele[n].style.height="100%";
	//ele[n].style.opacity=0;
	for(i=0;i<ele.length;i++){
	   ele[i].style.height="100%";
	   ele[i].style.opacity=0;
	}
	document.getElementsByClassName("outfocus")[0].style.zIndex=-1;
    document.getElementsByClassName("outfocus")[0].style.opacity=0;
	
	$(".container").fadeTo(1000,1);

    
}
