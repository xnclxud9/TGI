const $jQ = jQuery.noConflict();
$jQ(function(){
  let m_img_w=$('.slide_box img').width(); //이미지 너비 자동으로 구해줌

  $jQ(window).resize(function(){ //브라우저 창의 크기가 변하면
    //이미지 크기를 다시 계산해 변수에 대입
    m_img_w=$jQ('.slide_box img').width(); 

    // console.log(-m_img_w);
  }); 

  let n = $jQ('.m_c_btn li').index(); //콘트롤 버튼에 따른 index 값

  document.getElementById('page').innerHTML = n+1 + ' / 6';

  document.getElementById('tab_page').innerHTML = n+1 + ' / 6'

  
  //5번 이미지를 1번의 앞쪽으로 자리를 재배치한다
  $jQ('.menu_slide li:last-child').insertBefore('.menu_slide li:first-child');
  $jQ('.menu_slide').css('margin-left',-m_img_w);

  

  //움직이는 함수 
  function moveLeft(){
    // console.log('왼쪽 이동');
    
    $jQ('.menu_slide').animate({'margin-left':-m_img_w*2}, 500, function(){
      //왼쪽 첫 번째 li 태그를 마지막 li 태그의 뒤쪽에다 자리를 옮긴다
      $jQ('.menu_slide li:first-child').insertAfter('.menu_slide li:last-child');
      $jQ('.menu_slide').css('margin-left',-m_img_w);

      if(n==5){
        n=0;
        $jQ('.m_c_btn li').removeClass('m_on');
        $jQ('.m_c_btn li').eq(n).addClass('m_on')
      }else{
        n++;
        $jQ('.m_c_btn li').removeClass('m_on');
        $jQ('.m_c_btn li').eq(n).addClass('m_on')
      }

      document.getElementById('page').innerHTML = n+1 + ' / 6';
      document.getElementById('tab_page').innerHTML = n+1 + ' / 6'
  });
  }


  //시간 객체로 3초마다 함수 호출하기
    let Timer = setInterval(moveLeft, 3000);

  
  

  

  //i의 클래스가 pause면 1 아니면 0 을.. 함수로.. 어떻게 가지고 와야 함 ㅋ?? ㅠ 으아ㅏ아아ㅏ악 훗 ㅋ 해결 ㅋ
  let c_i = $jQ('i.fa-pause');

  $jQ('.m_c_btn i.pause').click(function(){
    if(c_i!==0){
      clearInterval(Timer);
      $jQ(this).removeClass('fa-pause');
      $jQ(this).addClass('fa-play');
      $jQ(this).css('color','#B60000');
      c_i = 0; 
    }else{      
      /*Timer = setInterval(function(){
        moveLeft(n);
      }, 3000);*/
      $jQ(this).removeClass('fa-play');
      $jQ(this).addClass('fa-pause');
      $jQ(this).css('color','#242422');
      c_i=1;
    }
  });



  // 마우스 오버 시 일시 정지
  $jQ('.menu_slide a, .m_c_btn').hover(function(){
    clearInterval(Timer);
  }, function(){
    if(c_i==0){
      clearInterval(Timer);
    }else{
      Timer = setInterval(function(){
        moveLeft(n);
      }, 3000);
    } 
  });

  // 사용자가 콘트롤 버튼 클릭하면 슬라이드 멈추고 해당 버튼으로 이동, 색 변경
  $jQ('.m_c_btn li').click(function(){

    clearInterval(Timer);
    n_btn = $(this).index();
    // console.log(n_btn); //0, 1, 2, 3 

    //$('.menu_slide li:first-child').insertAfter('.menu_slide li:last-child');

    if(n_btn==0){
      $jQ('.menu_slide').html('<li><a href="../menu/menu.html" title="메뉴슬라이드6"><img src="./img/menu_slide_6.jpg" alt="가든 샐러드"><figcaption><p>가든 샐러드 플래터<br><br><span>18,800</span></p></figcaption><p class="name">가든 샐러드 플래터<br><span>18,800</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_1.jpg" alt="프라이데이스 글레이즈드 버거"><figcaption><p>프라이데이스<br>글레이즈드 버거<br><br><span>17,900</span></p></figcaption><p class="name">프라이데이스 글레이즈드 버거<br><span>17,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_2.jpg" alt="시그니처 글레이즈드 립"><figcaption><p>시그니처<br>글레이즈드 립<br><br><span>46,500</span></p></figcaption><p class="name">시그니처 글레이즈드 립<br><span>46,500</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드3"><img src="./img/menu_slide_3.jpg" alt="쉐차안 시그니처 파스타"><figcaption><p>쉐차안<br>시그니처 파스타<br><br><span>23,900</span></p></figcaption><p class="name">쉐차안 시그니처 파스타<br><span>23,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드4"><img src="./img/menu_slide_4.jpg" alt="뉴욕 스트립 스테이크"><figcaption><p>뉴욕 스트립<br>스테이크<br><br><span>39,900</span></p></figcaption><p class="name">뉴욕 스트립 스테이크<br><span>39,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드5"><img src="./img/menu_slide_5.jpg" alt="휠렛 미뇽"><figcaption><p>휠렛 미뇽<br><br><span>47,000</span></p></figcaption><p class="name">휠렛 미뇽<br><span>47,000</span></p></a></li>');
    }else if(n_btn==1){
      $jQ('.menu_slide').html('<li><a href="../menu/menu.html" title="메뉴슬라이드6"><img src="./img/menu_slide_6.jpg" alt="가든 샐러드"><figcaption><p>가든 샐러드 플래터<br><br><span>18,800</span></p></figcaption><p class="name">가든 샐러드 플래터<br><span>18,800</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_1.jpg" alt="프라이데이스 글레이즈드 버거"><figcaption><p>프라이데이스<br>글레이즈드 버거<br><br><span>17,900</span></p></figcaption><p class="name">프라이데이스 글레이즈드 버거<br><span>17,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_2.jpg" alt="시그니처 글레이즈드 립"><figcaption><p>시그니처<br>글레이즈드 립<br><br><span>46,500</span></p></figcaption><p class="name">시그니처 글레이즈드 립<br><span>46,500</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드3"><img src="./img/menu_slide_3.jpg" alt="쉐차안 시그니처 파스타"><figcaption><p>쉐차안<br>시그니처 파스타<br><br><span>23,900</span></p></figcaption><p class="name">쉐차안 시그니처 파스타<br><span>23,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드4"><img src="./img/menu_slide_4.jpg" alt="뉴욕 스트립 스테이크"><figcaption><p>뉴욕 스트립<br>스테이크<br><br><span>39,900</span></p></figcaption><p class="name">뉴욕 스트립 스테이크<br><span>39,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드5"><img src="./img/menu_slide_5.jpg" alt="휠렛 미뇽"><figcaption><p>휠렛 미뇽<br><br><span>47,000</span></p></figcaption><p class="name">휠렛 미뇽<br><span>47,000</span></p></a></li>');
    }else if(n_btn==2){
      $jQ('.menu_slide').html('<li><a href="../menu/menu.html" title="메뉴슬라이드6"><img src="./img/menu_slide_6.jpg" alt="가든 샐러드"><figcaption><p>가든 샐러드 플래터<br><br><span>18,800</span></p></figcaption><p class="name">가든 샐러드 플래터<br><span>18,800</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_1.jpg" alt="프라이데이스 글레이즈드 버거"><figcaption><p>프라이데이스<br>글레이즈드 버거<br><br><span>17,900</span></p></figcaption><p class="name">프라이데이스 글레이즈드 버거<br><span>17,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_2.jpg" alt="시그니처 글레이즈드 립"><figcaption><p>시그니처<br>글레이즈드 립<br><br><span>46,500</span></p></figcaption><p class="name">시그니처 글레이즈드 립<br><span>46,500</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드3"><img src="./img/menu_slide_3.jpg" alt="쉐차안 시그니처 파스타"><figcaption><p>쉐차안<br>시그니처 파스타<br><br><span>23,900</span></p></figcaption><p class="name">쉐차안 시그니처 파스타<br><span>23,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드4"><img src="./img/menu_slide_4.jpg" alt="뉴욕 스트립 스테이크"><figcaption><p>뉴욕 스트립<br>스테이크<br><br><span>39,900</span></p></figcaption><p class="name">뉴욕 스트립 스테이크<br><span>39,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드5"><img src="./img/menu_slide_5.jpg" alt="휠렛 미뇽"><figcaption><p>휠렛 미뇽<br><br><span>47,000</span></p></figcaption><p class="name">휠렛 미뇽<br><span>47,000</span></p></a></li>');
    }else if(n_btn==3){
      $jQ('.menu_slide').html('<li><a href="../menu/menu.html" title="메뉴슬라이드6"><img src="./img/menu_slide_6.jpg" alt="가든 샐러드"><figcaption><p>가든 샐러드 플래터<br><br><span>18,800</span></p></figcaption><p class="name">가든 샐러드 플래터<br><span>18,800</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_1.jpg" alt="프라이데이스 글레이즈드 버거"><figcaption><p>프라이데이스<br>글레이즈드 버거<br><br><span>17,900</span></p></figcaption><p class="name">프라이데이스 글레이즈드 버거<br><span>17,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_2.jpg" alt="시그니처 글레이즈드 립"><figcaption><p>시그니처<br>글레이즈드 립<br><br><span>46,500</span></p></figcaption><p class="name">시그니처 글레이즈드 립<br><span>46,500</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드3"><img src="./img/menu_slide_3.jpg" alt="쉐차안 시그니처 파스타"><figcaption><p>쉐차안<br>시그니처 파스타<br><br><span>23,900</span></p></figcaption><p class="name">쉐차안 시그니처 파스타<br><span>23,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드4"><img src="./img/menu_slide_4.jpg" alt="뉴욕 스트립 스테이크"><figcaption><p>뉴욕 스트립<br>스테이크<br><br><span>39,900</span></p></figcaption><p class="name">뉴욕 스트립 스테이크<br><span>39,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드5"><img src="./img/menu_slide_5.jpg" alt="휠렛 미뇽"><figcaption><p>휠렛 미뇽<br><br><span>47,000</span></p></figcaption><p class="name">휠렛 미뇽<br><span>47,000</span></p></a></li>');
    }else if(n_btn==4){
      $jQ('.menu_slide').html('<li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_1.jpg" alt="프라이데이스 글레이즈드 버거"><figcaption><p>프라이데이스<br>글레이즈드 버거<br><br><span>17,900</span></p></figcaption><p class="name">프라이데이스 글레이즈드 버거<br><span>17,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_2.jpg" alt="시그니처 글레이즈드 립"><figcaption><p>시그니처<br>글레이즈드 립<br><br><span>46,500</span></p></figcaption><p class="name">시그니처 글레이즈드 립<br><span>46,500</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드3"><img src="./img/menu_slide_3.jpg" alt="쉐차안 시그니처 파스타"><figcaption><p>쉐차안<br>시그니처 파스타<br><br><span>23,900</span></p></figcaption><p class="name">쉐차안 시그니처 파스타<br><span>23,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드4"><img src="./img/menu_slide_4.jpg" alt="뉴욕 스트립 스테이크"><figcaption><p>뉴욕 스트립<br>스테이크<br><br><span>39,900</span></p></figcaption><p class="name">뉴욕 스트립 스테이크<br><span>39,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드5"><img src="./img/menu_slide_5.jpg" alt="휠렛 미뇽"><figcaption><p>휠렛 미뇽<br><br><span>47,000</span></p></figcaption><p class="name">휠렛 미뇽<br><span>47,000</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드6"><img src="./img/menu_slide_6.jpg" alt="가든 샐러드"><figcaption><p>가든 샐러드 플래터<br><br><span>18,800</span></p></figcaption><p class="name">가든 샐러드 플래터<br><span>18,800</span></p></a></li>');
    }else{
      $jQ('.menu_slide').html('<li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_2.jpg" alt="시그니처 글레이즈드 립"><figcaption><p>시그니처<br>글레이즈드 립<br><br><span>46,500</span></p></figcaption><p class="name">시그니처 글레이즈드 립<br><span>46,500</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드3"><img src="./img/menu_slide_3.jpg" alt="쉐차안 시그니처 파스타"><figcaption><p>쉐차안<br>시그니처 파스타<br><br><span>23,900</span></p></figcaption><p class="name">쉐차안 시그니처 파스타<br><span>23,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드4"><img src="./img/menu_slide_4.jpg" alt="뉴욕 스트립 스테이크"><figcaption><p>뉴욕 스트립<br>스테이크<br><br><span>39,900</span></p></figcaption><p class="name">뉴욕 스트립 스테이크<br><span>39,900</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드5"><img src="./img/menu_slide_5.jpg" alt="휠렛 미뇽"><figcaption><p>휠렛 미뇽<br><br><span>47,000</span></p></figcaption><p class="name">휠렛 미뇽<br><span>47,000</span></p></a></li><li><a href="../menu/menu.html" title="메뉴슬라이드6"><img src="./img/menu_slide_6.jpg" alt="가든 샐러드"><figcaption><p>가든 샐러드 플래터<br><br><span>18,800</span></p></figcaption><p class="name">가든 샐러드 플래터<br><span>18,800</span></p></a></li><li><a href="../menu/menu.html" title="메뉴 보러 가기"><img src="./img/menu_slide_1.jpg" alt="프라이데이스 글레이즈드 버거"><figcaption><p>프라이데이스<br>글레이즈드 버거<br><br><span>17,900</span></p></figcaption><p class="name">프라이데이스 글레이즈드 버거<br><span>17,900</span></p></a></li>');
    }

    //클릭하면 이미지 이동 함수 넣어야 함 ㅋ ㅠㅠ 
    let move_img_w = -($('.slide_box img').width()*n_btn+3);
    console.log(move_img_w);


    if(n_btn<4){
      $jQ('.menu_slide').animate({'left':move_img_w}, 500);  
    }else{
      $jQ('.menu_slide').animate({'left':'-1206px'}, 500);
    }

    $jQ('#page').text(n_btn+1 + ' / 6');

    $jQ('.m_c_btn li').removeClass('m_on'); //콘트롤 버튼 전체 서식 변경
    $jQ(this).addClass('m_on'); //사용자가 선택한 콘트롤 버튼만 서식 적용
  });

});