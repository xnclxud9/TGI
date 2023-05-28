$(function(){

  if(matchMedia("screen and (max-width: 767px)").matches){

  }else if(matchMedia("screen and (max-width: 1024px)").matches){
  
  }else if(matchMedia("screen and (min-width: 1025px)").matches){
    // 멤버십 배너 슬라이드
    let n = $('.log_mem_b li').index();
  
    function autoSlide(n){
      n = -(n*$('.log_mem_b img').width());
      $('.log_mem_b').stop().animate({'left':n}, 500);
    }
    let Timer = setInterval(function(){
      if(n==2){
        n=0;
      }else{
        n++;
      }
      autoSlide(n);
    }, 3000);
  
    
  }
  
  window.onresize = function(){
    document.location.reload();
  };


});


