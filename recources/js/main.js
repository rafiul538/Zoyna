       var swiper = new Swiper('.swiper-header', {
           autoplay: true,
           loop: true,

           pagination: {
               el: '.swiper-pagination',
               dynamicBullets: true,
           },
           // Navigation arrows
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           }
       });