  $(window).scroll(function(){

    // 브랜드 스크립트
    let sPos = $(this).scrollTop(); //세로 스크롤 값을 변수에 담는다
    // console.log(sPos);

    if(sPos>200){
      $('.b_con').css({
        'left':'0',
        'opacity':'1'
      })
      $('#brand-image').delay(300).fadeIn(1000);
    }else{
      $('#brand-image').fadeOut(1000);
    }
  });

  if(matchMedia("screen and (max-width: 767px)").matches){

  }else if(matchMedia("screen and (max-width: 1024px)").matches){

  }else if(matchMedia("screen and (min-width: 1025px)").matches){
    // 검색폼 열기/닫기 스크립트
    $('.s_btn').click(function() {
      $('#search_box').slideToggle();
    });
    $('.fa-xmark').click(function() {
      $('#search_box').slideUp();
    });

      //멤버십
    $('.mem_b li:not(.mem_tit)').hover(function(){
      $('.mem_b li img').hide();
      $(this).find('img').show();
    });
    
  }
  
  window.onresize = function(){
    document.location.reload();
  };
