function scrolling(mode){
    var main = document.getElementById('sl');
    var slides = main.getElementsByClassName('slider');
    for (var i = 0; i < slides.length; i++){
        if (slides[i].classList.contains('slide-active')){
            slides[i].classList.remove('slide-active');
            slides[i].classList.add('slide-inactive');
            if (mode == 'right'){
                if (i == slides.length - 1){
                    i = 0;
                }
                else{
                    i++;
                }
            }   
            else{
                if (i == 0){
                    i = slides.length - 1;
                }
                else{
                    i--;
                }
            }
            slides[i].classList.remove('slide-inactive');
            slides[i].classList.add('slide-active');
            break;
        }
    }
}
