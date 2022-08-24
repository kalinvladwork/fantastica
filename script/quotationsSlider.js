jQuery(document).ready(function(){
 function htmSlider(){
  /* Зададим следующие параметры */
  /* обертка слайдера */
  var slideWrap = jQuery('.quotations_container ul');
  /* кнопки вперед/назад и старт/пауза */
  var nextLink = jQuery('.quotations_forward');
  var prevLink = jQuery('.quotations_back');
  /* Проверка на анимацию */
  var is_animate = false;
  /* ширина слайда с отступами */
  var slideWidth = jQuery('.quotations_container ul li').outerWidth();
  /* смещение слайдера */
  var scrollSlider = slideWrap.position().left - slideWidth;
 
  /* Клик по ссылке на следующий слайд */
  nextLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap.animate({left: scrollSlider}, 500, function(){
     slideWrap
      .find('.quotations_container ul li:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   }
  });
 
  /* Клик по ссылке на предыдующий слайд */
  prevLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap
     .css({'left': scrollSlider})
     .find('.quotations_container li:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   }
  });
  }

 /* иницилизируем функцию слайдера */
 htmSlider();
});