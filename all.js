const swiper = new Swiper('.swiper', {
  
    slidesPerView: 3,
    
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1
      }
    },

    spaceBetween: 16,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    
  
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  
 
  });