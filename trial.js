let slideIndex =1;
showslides(slideIndex);

//next and prev buttons
function plusSlides(n){
    showslides(slideIndex+=n);
}
//current slide
function currentSlide(n){
    showslides(slideIndex=n);
}

function showslides(n){
    let i;
    const slides = document.getElementsByClassName('slide'); 
    const dots =document.getElementsByClassName('dot') ;  
    if(n>slides.length){slideIndex=1}
    if(n<1){slideIndex=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }

    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display='block';
    dots[slideIndex-1].className += ' active';


}
