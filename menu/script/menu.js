$(document).ready(function(){

  // 탭메뉴 스크립트
  let n = $('.menu_lnb a').index();

  
  $('.menu_lnb a').click(function(){
    n = $(this).index();
    $('.menu_lnb a').removeClass('on');
    $(this).addClass('on');
  });

});