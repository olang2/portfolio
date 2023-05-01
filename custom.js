$(document).ready(function(){
	// fullpage 
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
    navigation:true,
    responsiveWidth: 768,
    anchors: ['section01', 'section02', 'section03','section04','section05'],
    menu: 'ul',
    responsiveWidth: 1025,
	});
  //trigger click addclass 'on'
  $('.trigger>div').click(function(){
    $('.trigger>div>span').toggleClass('on');
    $('.sub_nav,.dimmed,header nav').toggleClass('on');
  })
  //skills hover span opacity 추가 삭제
  $('.skills img').mouseover(function(){
    $('.skills span:not(:first-child)').css('opacity','0');
    $(this).next().css('opacity','1');
  });
  //각 아이콘 호버시 bubble 해당클래스 추가 
  let $bb = $('.bubble')
  $('.ps').mouseover(function(){
    $($bb).addClass('ps');
  ;})
  $('.ps').mouseleave(function(){
    $($bb).removeClass('ps');
  });
  $('.xd').mouseover(function(){
    $($bb).addClass('xd');
  });
  $('.xd').mouseleave(function(){
    $($bb).removeClass('xd');
  });
  $('.html').mouseover(function(){
    $($bb).addClass('html');
  });
  $('.html').mouseleave(function(){
    $($bb).removeClass('html');
  });
  $('.css').mouseover(function(){
    $($bb).addClass('css');
  });
  $('.css').mouseleave(function(){
    $($bb).removeClass('css');
  });
  $('.js').mouseover(function(){
    $($bb).addClass('js');
  });
  $('.js').mouseleave(function(){
    $($bb).removeClass('js');
  });
  //swiper
  let swiper_main = new Swiper(".portfolio_slide", {
    centeredSlides: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  //accordion
  $(window).resize(function(){ 
    if (window.innerWidth > 700) {  //창 크기가 700px 이상일때
      //accordion 첫번째 dd 를 제외하고 모든 dd 숨기기
      $('dd:not(:first)').css("width","0");
      //클래스 추가
      $('dt:first span').addClass('on');
      //클릭 이벤트
      $('dt').click(function(){
        $('dt:has(.on)+dd').animate({width:"0"});
        $('+dd',this).animate({width:"1500px"});
        $('span').removeClass('on');
        $('span',this).addClass('on');
      }); 
    } else {//창 크기가 700px 이하일때
      $('dd:not(:first)').css("height","0px");
      //클래스 추가
      $('dt:first span').addClass('on');
      //클릭 이벤트
      $('dt').click(function(){
        $('dt:has(.on)+dd').animate({height:"0"});
        $('+dd',this).animate({height:"800px"});
        $('span').removeClass('on');
        $('span',this).addClass('on');
      });
    }
}).resize();
  $(window).resize(function(){document.location.reload();})
});