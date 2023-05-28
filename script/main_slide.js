$(function(){
    // 1. 변수를 몇개 선언해야 할지 생각
    
    const slide = document.querySelector('.slide');
    const slide_img = document.querySelectorAll('.slide li');
    const l_btn = document.getElementById('prev_btn');
    const r_btn = document.getElementById('next_btn');
    const btn = document.querySelectorAll('.button');
    
    const img_n = slide_img.length; // 목록의 갯수
    
    // console.log(img_n); // 5
    
    const img_w = 100;
    const s_con = 1;
    
    let count = 0;
    
    
    // 감싸는 부모요소의 너비를 구하기
    
    slide.style.width = img_w * img_n + '%';
    
    // 300 + 30 * 5 - 30 = 1620px
    
    // 3초마다 반복해서 호출되며, 왼쪽으로 움직이는 슬라이드 함수
    
    function mslide(n) {
        slide.style.left = img_w *- n + '%';
        count = n;
        // console.log(slide.style.left); // -330, -660, 0
        // console.log(count);
        $('.bs_btn li').removeClass('bs_active'); //콘트롤 버튼의 모든 서식을 제거
        $('.bs_btn li').eq(n).addClass('bs_active'); //해당하는 버튼에 서식을 적용
    }
    
    
    //  왼쪽 버튼 클릭시 왼쪽 방향으로 움직이게 한다.
    l_btn.addEventListener('click', function() {
        if(count > 0) {
            mslide(count - 1);
        } else {
            mslide(img_n-s_con); 
        }
    clearInterval(Timer1);
    })
    
    // 오른쪽 버튼 클릭 시 오른쪽 방향으로 움직이게 된다.
    
    r_btn.addEventListener('click', function() {
        if (count < img_n-s_con) {
            mslide(count+1); 
        } else {
            mslide(0);
        }
        clearInterval(Timer1);
    })
    
    // 매 3초마다 자동으로 함수를 호출하여 움직이게 한다.
    // 시간 객체 setinterval(함수명, 시간)
    
    let Timer1 = setInterval(function() {
        if (count < img_n-s_con) {
            mslide(count+1); 
        } else {
            mslide(0);
        }
    }, 5000);
    
    //1. 인덱스값을 저장하기 위한 변수선언;
        let n  = $('.bs_btn li').index();
        //  console.log(n); //0이 나온다.
        
          //2. 사용자가 콘트롤 버튼을 클릭시 해당 index값 구해보기
        $('.bs_btn li').click(function(){
            n = $(this).index();
            console.log(n); //0, 1, 2, 3............
    
            //이미지 너비값 구하기
            let img_w = -($('.slide img').width()*n);
    
           // console.log(img_w); //0, 250, 500, 750............
    
            $('.slide').animate({'left':img_w},500);
    
            $('.bs_btn li').removeClass('bs_active'); //콘트롤 버튼 전체 서식을 변경하고
            $(this).addClass('bs_active');//사용자가 선택한 콘트롤 버튼만 서식을 적용
        });
        
          //3초마다 반복호출하여 슬라이드가 자동으로 움직이게 한다.
        function autoSlide(n){
            n = -(n*$('.slide img').width());
            $('.slide').animate({'left':n},500);
        }
    
        $('.bs_btn li').hover(function(){
            clearInterval(Timer1);
            }, function(){ //다시 마우스 빼면 시간을 넣어서 움직이게 한다.
            Timer1 = setInterval(function() {
                if (count < img_n-s_con) {
                    mslide(count+1); 
                } else {
                    mslide(0);
                }
            }, 5000);
        });    
    });