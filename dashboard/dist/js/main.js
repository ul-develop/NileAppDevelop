$(document).ready(function () {
  // var $range = $('.range');

  // $range.each(function () {
  //   var $thumb = $(this).next('.range-thumb');
  //   var max = parseInt(this.max, 10);
  //   var tw = -16; // Thumb width. See CSS

  //   $(this).on('input input.range', function () {
  //     var w = $(this).width();
  //     var val = parseInt(this.value, 10);
  //     var txt = val >= max ? '500000' : val;
  //     var xPX = val * (w - tw) / max; // Position in PX
  //     // var xPC = xPX * 100 / w;     // Position in % (if ever needed)

  //     $thumb.css({ left: xPX }).attr('data-val', txt);
  //   });
  // });

  // $range.trigger('input.range'); // Calc on load
  // $(window).on('resize', () => $range.trigger('input.range')); // and on resize

  /*
var update1 = function() {
    $("#info1").toggleClass('reveal_hiddens');
};

$("#set1 input[type='radio']").change(update1);

var update2 = function() {
    $("#info2").toggleClass('reveal_hiddens');
};

$("#set2 input[type='radio']").change(update2);

var update3 = function() {
    $("#info3").toggleClass('reveal_hiddens');
};

$("#set3 input[type='radio']").change(update3);

var update4 = function() {
    $("#info4").toggleClass('reveal_hiddens');
};

$("#set4 input[type='radio']").change(update4);

$('#radio51').click(function () {
    $("#info5").removeClass('reveal_hiddens');
    $("#info8").addClass('reveal_hiddens');
});

$('#radio52').click(function () {
    $("#info8").removeClass('reveal_hiddens');
    $("#info5").addClass('reveal_hiddens');
});

var update6 = function() {
    $("#info6").toggleClass('reveal_hiddens');
    $("#info7").toggleClass('reveal_hiddens');
};

$("#set6 input[type='radio']").change(update6);
*/

  var coll = document.getElementsByClassName('read_more');
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var content = this.previousElementSibling;
      if (content.style.maxHeight) {
        $(this).text('READ MORE >');
        content.style.maxHeight = null;
      } else {
        $(this).text('CLOSE X');

        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }

  var coll2 = document.getElementsByClassName('view_more');
  var i;

  for (i = 0; i < coll2.length; i++) {
    coll2[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var content = this.previousElementSibling;
      if (content.style.maxHeight) {
        $('.vm', this).text('View More');
        $('.down_arrow', this).removeClass('rotated');
        content.style.maxHeight = null;
      } else {
        $('.vm', this).text('Close');
        $('.down_arrow', this).addClass('rotated');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }

//   var x, i, j, selElmnt, a, b, c;
//   /* Look for any elements with the class "custom-select": */
//   x = document.getElementsByClassName('custom-select');
//   for (i = 0; i < x.length; i++) {
//     selElmnt = x[i].getElementsByTagName('select')[0];
//     /* For each element, create a new DIV that will act as the selected item: */
//     a = document.createElement('DIV');
//     a.setAttribute('class', 'select-selected');
//     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//     x[i].appendChild(a);
//     /* For each element, create a new DIV that will contain the option list: */
//     b = document.createElement('DIV');
//     b.setAttribute('class', 'select-items select-hide');
//     for (j = 1; j < selElmnt.length; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//       c = document.createElement('DIV');
//       c.innerHTML = selElmnt.options[j].innerHTML;
//       c.addEventListener('click', function (e) {
//         /* When an item is clicked, update the original select box,
//         and the selected item: */
//         var y, i, k, s, h;
//         s = this.parentNode.parentNode.getElementsByTagName('select')[0];
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < s.length; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName('same-as-selected');
//             for (k = 0; k < y.length; k++) {
//               y[k].removeAttribute('class');
//             }
//             this.setAttribute('class', 'same-as-selected');
//             break;
//           }
//         }
//         h.click();
//       });
//       b.appendChild(c);
//     }
//     x[i].appendChild(b);
//     a.addEventListener('click', function (e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle('select-hide');
//       this.classList.toggle('select-arrow-active');
//     });
//   }

//   function closeAllSelect (elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//     var x; var y; var i; var arrNo = [];
//     x = document.getElementsByClassName('select-items');
//     y = document.getElementsByClassName('select-selected');
//     for (i = 0; i < y.length; i++) {
//       if (elmnt == y[i]) {
//         arrNo.push(i);
//       } else {
//         y[i].classList.remove('select-arrow-active');
//       }
//     }
//     for (i = 0; i < x.length; i++) {
//       if (arrNo.indexOf(i)) {
//         x[i].classList.add('select-hide');
//       }
//     }
//   }

//   /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
//   document.addEventListener('click', closeAllSelect);

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top + 100;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('#hownile').each(function () {
      if ($(this).isInViewport()) {
        $('.rights').removeClass('hiddens');
        setTimeout(function () {
          $('.top_frame .filler').removeClass('hide_left');
          $('.top_frame .filler').removeClass('hide_right');
        }, 400);
        setTimeout(function () {
          $('.left_frame .filler').removeClass('hide_top');
          $('.right_frame .filler').removeClass('hide_top');
        }, 800);
        setTimeout(function () {
          $('.bottom_frame .filler').removeClass('hide_left');
          $('.bottom_frame .filler').removeClass('hide_right');
        }, 1100);
        setTimeout(function () {
          $('.fr_texts').removeClass('hiddens');
        }, 1200);
      }
    });

    $('#howe').each(function () {
      if ($(this).isInViewport()) {
        $('.headers').removeClass('hiddens');
        setTimeout(function () {
          $('#di1').removeClass('hiddens_ups');
        }, 300);
        setTimeout(function () {
          $('#di2').removeClass('hiddens_ups');
        }, 600);
        setTimeout(function () {
          $('#di3').removeClass('hiddens_ups');
        }, 900);
        setTimeout(function () {
          $('#di4').removeClass('hiddens_ups');
        }, 1200);
      }
    });

    $('.fourth_section').each(function () {
      if ($(this).isInViewport()) {
        $('.rights2').removeClass('hiddens');
        setTimeout(function () {
          $('.lefts2').removeClass('hiddens');
        }, 400);
        setTimeout(function () {
          $('.fourth_section .img_header').removeClass('hiddens');
        }, 500);
      }
    });

    $('.ender').each(function () {
      if ($(this).isInViewport()) {
        $('.e_header').removeClass('hiddens');
        setTimeout(function () {
          $('.end_right').removeClass('hiddens');
        }, 400);
        setTimeout(function () {
          $('.end_type').removeClass('hiddens');
        }, 600);
      }
    });

    $('.final_section').each(function () {
      if ($(this).isInViewport()) {
        $('.final_img').removeClass('hiddens');
        setTimeout(function () {
          $('.final_info').removeClass('hiddens');
        }, 400);
        setTimeout(function () {
          $('.img_header2').removeClass('hiddens');
        }, 600);
      }
    });

    $('.third_section').each(function () {
      if ($(this).isInViewport()) {
        $('.fees').removeClass('hiddens');
        setTimeout(function () {
          $('#pr1').removeClass('hiddens_ups');
        }, 400);
        setTimeout(function () {
          $('#pr2').removeClass('hiddens_ups');
        }, 700);
        setTimeout(function () {
          $('#pr3').removeClass('hiddens_ups');
        }, 1000);
      }
    });

    $('.list_lbock').each(function () {
      if ($(this).isInViewport()) {
        $(this).removeClass('hiddens');
      }
    });
  });

  setTimeout(function () {
    $('.se-pre-con').fadeOut('slow');
    $('.main_img').removeClass('hiddens');
    setTimeout(function () {
      $('.main_texts').removeClass('hiddens');
	        }, 800);
  }, 500);

  // $('.cal_fills').click(function () {
  //   $('.c_green').removeClass('c_actives');
  //   $('.c_green', this).addClass('c_actives');
  // });

  /* $('.next_btn, .prev_btn, .step_btn').click(function () {
		$('.steppers').fadeOut(100);
		$('.step_btn').removeClass('step_active');
    	$("html, body").animate({ scrollTop: "0px" });
    }); */

  /*
	$('#st1, #step2 .prev_btn').click(function () {
		$('#step1').fadeIn(300);
		$('#st1').addClass('step_active');
	});

	$('#st2, #step1 .next_btn, #step3 .prev_btn').click(function () {
		$('#step2').fadeIn(300);
		$('#st2').addClass('step_active');

	});

	$('#st3, #step2 .next_btn, #step4 .prev_btn').click(function () {
		$('#step3').fadeIn(300);
		$('#st3').addClass('step_active');
	});

	$('#st4, #step3 .next_btn, #step5 .prev_btn').click(function () {
		$('#step4').fadeIn(300);
		$('#st4').addClass('step_active');
	});

	$('#st5, #step4 .next_btn, #step6 .prev_btn').click(function () {
		$('#step5').fadeIn(300);
		$('#st5').addClass('step_active');
	});

	$('#st6, #step5 .next_btn, #step7 .prev_btn').click(function () {
		$('#step6').fadeIn(300);
		$('#st6').addClass('step_active');
	});

	$('#st7, #step6 .next_btn, #step8 .prev_btn').click(function () {
		$('.steppers').fadeOut(400);
		$('#step7').fadeIn(300);
		$('#st7').addClass('step_active');
	});

	$('#st8, #step7 .next_btn, #step9 .prev_btn').click(function () {
		$('#step8').fadeIn(300);
		$('#st8').addClass('step_active');
	});

	$('#st9, #step8 .next_btn').click(function () {
		$('#step9').fadeIn(300);
		$('#st9').addClass('step_active');
	});
	*/

  $('#f1').click(function () {
		 $('.cycle-slideshow').cycle('goto', 0);
    return false;
  });
  $('#f2').click(function () {
		 $('.cycle-slideshow').cycle('goto', 1);
    return false;
  });
  $('#f3').click(function () {
		 $('.cycle-slideshow').cycle('goto', 2);
    return false;
  });
  $('#f4').click(function () {
		 $('.cycle-slideshow').cycle('goto', 3);
    return false;
  });
  $('#list1').click(function () {
    $('#fullmap').addClass('desktop');
    $('.right_side').removeClass('desktop');
  });
  $('#list2').click(function () {
    $('#fullmap').removeClass('desktop');
    $('.right_side').addClass('desktop');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.switch').addClass('move_down');
    } else {
      $('.switch').removeClass('move_down');
    }
  });

  $('#submit_this').click(function () {
    $('#thankyou').fadeIn(300);
    $('#st4').addClass('step_active');
  });
  $('.f_btn').click(function () {
    $('.f_btn').removeClass('f_actives');
    $(this).addClass('f_actives');
  });

  $('.date_block').click(function () {
    $('.date_block').removeClass('date_active');
    $(this).addClass('date_active');
  });
  $('.enlarge').click(function () {
    $('.overlay_slides').removeClass('hiddens');
  });

  $('.overlay_backing, .close').click(function () {
    $('.overlay_slides').addClass('hiddens');
  });

  var map_lists_closed = false;

  $('.closer_arrow').click(function () {
    if (map_lists_closed === false) {
      $('.right_side').addClass('right_side_over');
      $('.searcher').addClass('right_side_over');
      $('.closer_arrow').addClass('arrow_over');
      $('.c_arrow img').addClass('rotated');
      map_lists_closed = true;
		    return false;
    }
    if (map_lists_closed === true) {
      $('.right_side').removeClass('right_side_over');
      $('.searcher').removeClass('right_side_over');
      $('.closer_arrow').removeClass('arrow_over');
      $('.c_arrow img').removeClass('rotated');
		    map_lists_closed = false;
		    return false;
    }
	    });

  var menu_open = false;

  $('#hamburger').click(function () {
    if (menu_open === false) {
      $('#nav-icon').toggleClass('open');
      $('.mobile_menu').toggleClass('off_to_side');
      setTimeout(function () {
		    $('.mobile_menu .logo').removeClass('hider');
		    }, 150);
      menu_open = true;
		    return false;
    }
    if (menu_open === true) {
      setTimeout(function () {
        $('#nav-icon').toggleClass('open');
        $('.mobile_menu').toggleClass('off_to_side');
		    }, 150);
		    $('.mobile_menu .logo').addClass('hider');
		    menu_open = false;
		    return false;
    }
	    });

	 $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('#add2').removeClass('hiddens2');
    } else {
      $('#add2').addClass('hiddens2');
    }
  });

  $('#signthis').click(function () {
    $('.xx').hide();
    $('.sig').show();
  });

  if ($('#listing-page').length > 0) {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
        $('.header_backing').removeClass('hiddens');
        $('.over_logo').removeClass('hiddens');
        $('.menu_btn').removeClass('m_other');
        $('.menu_btn_2').removeClass('m_other2');
      } else {
        $('.header_backing').addClass('hiddens');
        $('.over_logo').addClass('hiddens');
        $('.menu_btn').addClass('m_other');
        $('.menu_btn_2').addClass('m_other2');
      }
    });
  }
});// JavaScript Document
