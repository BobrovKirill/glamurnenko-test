$(document).ready(function () {
  // BURGER MENU

  const burgerMenu = $('.burger-menu');
  const menuBody = $('.header__nav');
  if (burgerMenu) {
    $(burgerMenu).click((e) => {
      $(burgerMenu).toggleClass('active');
      $(menuBody).toggleClass('active');
      if ($(burgerMenu).hasClass('active')) {
        $(document).click(({ target }) => {
          if (!target.closest('.navbar')) {
            $(burgerMenu).removeClass('active');
            $(menuBody).removeClass('active');
          }
        });
      }
    });
  }

  //CREATE ADAPTIVE HEADER

  const header = document.querySelector('.header');
  //const windowHeight = document.documentElement.clientHeight;
  const wellcomeHeight = $('.wellcome').height();
  $(document).scroll((e) => {
    if (window.scrollY > wellcomeHeight) {
      $(header).addClass('fixed-top');
    } else {
      $(header).removeClass('fixed-top');
    }
  });

  // BUTTON TOUP

  $('.footer__btn').click(() => {
    $('body').animate({ scrollTop: 0 }, 5);
  });
});
