jQuery(document).ready(function(){
 function htmSlider(){
  /* ������� ��������� ��������� */
  /* ������� �������� */
  var slideWrap = jQuery('.quotations_container ul');
  /* ������ ������/����� � �����/����� */
  var nextLink = jQuery('.quotations_forward');
  var prevLink = jQuery('.quotations_back');
  /* �������� �� �������� */
  var is_animate = false;
  /* ������ ������ � ��������� */
  var slideWidth = jQuery('.quotations_container ul li').outerWidth();
  /* �������� �������� */
  var scrollSlider = slideWrap.position().left - slideWidth;
 
  /* ���� �� ������ �� ��������� ����� */
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
 
  /* ���� �� ������ �� ����������� ����� */
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

 /* ������������� ������� �������� */
 htmSlider();
});