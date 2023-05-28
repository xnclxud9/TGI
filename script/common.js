$(document).ready(function(){


  // 탑버튼  스크립트
  $(window).scroll(function(){
    let sPos = $(this).scrollTop(); //세로 스크롤 값을 변수에 담는다
    // console.log(sPos);

    if(sPos>=500){
      $('.top_btn').css('display','inline');
    }else{
      $('.top_btn').css('display','none');
    }
  });
  //탑버튼 클릭 시 화면 맨 위로 
  $('.top_btn').click(function(){
    $('html, body').animate({scrollTop:'0px'}, 300);
    return false;
  }); 
});


// 이벤트 배너 스크립트
const slide_w = document.querySelector('.e_slide-wrapper')
const slide = document.querySelector('.e_slide');
const slide_img = document.querySelectorAll('.e_slide li');
const img_n = slide_img.length;
// console.log(img_n); // 이미지 갯수
const img_w = 100;
const m = 0;
const s_con = 2;
let count = 0;

slide.style.width = (img_w+m)*img_n - m + '%';

function eslide(n){
  slide.style.left = (img_w+m)* -n  + '%';
  count = n;
  // console.log(slide.style.left);
  // console.log(count);
}

let Timer = setInterval(function(){
  if(count < img_n-s_con){
    eslide(count+2);
  }else{
    eslide(0);
  }
},3000);

  
  // sns 스크립트
  // 강사님이 짜주셔서 어케하는지 모름
  var $window = $(window),
  $document = $(document),
  $body = $('body');

  (function () {
    var instaSlider = $('#slider'),
      instaWrap = instaSlider.find('.list_wrap'),
      instaList = instaWrap.find('li'),
      currentWidth =  instaSlider.width(),
      instaSliderWidth,
      instaWrapWidth,
      posXMax;
    var SNS = {
      reset: function () {
        instaSliderWidth = instaSlider.width();
        posXMax = (instaWrapWidth - instaSliderWidth) > 0 ? (instaWrapWidth - instaSliderWidth) : 0;

        instaWrap['css']('position', (!posXMax ? 'static' : 'absolute'));
      },

      getMoveX: function (posX) {
        return -1 * posXMax * (posX / instaSliderWidth);
      },

      move: function (e) {
        if (posXMax) instaWrap.css('left', SNS.getMoveX(e.pageX) + 'px');
        return false;
      },

      init: function () {
        instaWrapWidth = instaList.width() * instaList.length;
        instaWrap.css('width', instaWrapWidth + 'px');

        this.reset();
      }
    };

    SNS.init();
    $window.on('resize', SNS.reset);
    instaSlider.on('mousemove', SNS.move);
  })();

  
  // sns 아이콘 마우스 오버
  $('.sns_btn li').hover(function() { // 마우스 오버사
    $(this).find('a').css('border','1px solid #b60000');
    $(this).find('.fa-brands').css('color','#b60000');
  }, function() { // 마우스 아웃시
    $(this).find('a').css('border','1px solid #d2d2d2');
    $(this).find('.fa-brands').css('color','#d2d2d2');
  });