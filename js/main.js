const swiper = new Swiper('.channel-slider', {
   
    loop: true,  
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    }

  });


  const swiper1 = new Swiper('.recommended-slider', {
   
    loop: true,  
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    }

  });


  const swiper2 = new Swiper('.recommended-channel-slider', {
   
    loop: true,  
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-channel-button-next',
      prevEl: '.recommended-channel-button-prev',
    }

  });