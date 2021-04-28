document.getElementById("leftArrow").addEventListener("click",prevImage);
document.getElementById("rightArrow").addEventListener("click",nextImage);
document.getElementById("rightArrow").addEventListener("mouseover",function(){hoverImage('right');});
document.getElementById("rightArrow").addEventListener("mouseout",function(){restoreImage('right');});
document.getElementById("leftArrow").addEventListener("mouseover",function(){hoverImage('left');});
document.getElementById("leftArrow").addEventListener("mouseout",function(){restoreImage('left');});
Images = ["media/cover.png","media/page2.png","media/page3.png"]
imgIndex = 0
function hoverImage(direction){
	if (direction === 'right'){
		document.getElementById("rightArrow").setAttribute("src","media/rightHighlight.png");
	}
	else{
		document.getElementById("leftArrow").setAttribute("src","media/leftHighlight.png");
	}
}
function restoreImage(direction){
	if (direction === 'right'){
		document.getElementById("rightArrow").setAttribute("src","media/arrowRight.png");
	}
	else{
		document.getElementById("leftArrow").setAttribute("src","media/arrowLeft.png");
	}
}
function prevImage(){
	if (imgIndex === 0){
		return;
	}
	else{
		imgIndex = imgIndex - 1;
		document.getElementById("mainImage").setAttribute("src", Images[imgIndex]);
		return;
	}
	
}
function nextImage(){
	if(imgIndex === Images.length-1){
		return;
	}
	else{
		imgIndex = imgIndex + 1;
		document.getElementById("mainImage").setAttribute("src", Images[imgIndex]);
		return;
	}
}