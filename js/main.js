$(function() {
// Второе меню при aдаптиве 700px 
$('.button-list').on('click', function() {
  $('.header-menu__list').slideToggle();
});

//Новые поступления (Index Page)   
$('.product__objects').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

//Специальные предложения (Index Page)   
$('.product__slider-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
    
//Tabs(Card Page)    
$('.wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
  });

//Tabs(Cabinet Page)   
$('.cabinet__wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.cabinet__wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.cabinet__wrapper .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });
});

 //Show the dropdown Menu (Caterofy and Favorites Pages)
 function myFunction() { 
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown Menu (Category and Favorites Pages)
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('remove');
      }
  }
}

// Favorites Pаge (Бренды)
let brandColl = document.getElementsByClassName("brand");
// let i;

for (i = 0; i < brandColl.length; i++) {
    brandColl[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

//Переключалка цвет в cabinet.html
$('.block-btns').ready(function(){
    $('.btn').click(function(){
      $('.btn').removeClass('active').addClass('inactive');
       $(this).removeClass('inactive').addClass('active');
      });
})