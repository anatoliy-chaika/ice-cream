!function(){function o(o){function e(e){e?(o.backdrop.classList.remove("visually-hidden"),o.modal.classList.remove("visually-hidden"),null!=o.autofocus&&o.autofocus.focus()):(o.backdrop.classList.add("visually-hidden"),o.modal.classList.add("visually-hidden"))}o.modal.classList.add("visually-hidden"),o.openModalBtn.addEventListener("click",(function(){return e(!0)})),o.closeModalBtn.addEventListener("click",(function(){return e(!1)}))}$(".gallery-js").slick({dots:!1,infinite:!0,arrows:!1,speed:300,fade:!0,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3,cssEase:"ease-in"}),$(".customer").slick({dots:!0,prevArrow:!1,nextArrow:!1,infinite:!0,speed:850,cssEase:"ease-in",autoplay:!0,autoplaySpeed:3e3}),function(){var o={customer__dots:document.querySelector(".slick-dots"),customer__dot:document.querySelectorAll(".slick-dots li"),customer__button:document.querySelectorAll(".slick-dots button")};length=o.customer__dots.children.length,o.customer__dots.classList.add("customer__dots"),o.customer__dots.removeAttribute("style");for(var e=0;e<length;e++)o.customer__dot[e].classList.add("customer__dot"),o.customer__button[e].style.display="none";window.setInterval((function(){for(var e=0;e<length;e++)o.customer__dot[e].classList.contains("slick-active")?o.customer__dot[e].classList.add("customer__dot--active"):o.customer__dot[e].classList.remove("customer__dot--active")}),100)}(),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector("[data-modal-franches-open]"),closeModalBtn:document.querySelector("[data-modal-franches-close]"),modal:document.querySelector("[data-modal-franches]"),autofocus:document.querySelector("[data-modal-franches-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector(".hero__btn__modal-outside"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]"),autofocus:document.querySelector("[data-modal-buy-now-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector(".hero__btn__modal"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]"),autofocus:document.querySelector("[data-modal-buy-now-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]"),autofocus:document.querySelector("[data-modal-location-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector("[data-modal-about-open]"),closeModalBtn:document.querySelector("[data-modal-about-close]"),modal:document.querySelector("[data-modal-about]"),autofocus:document.querySelector("[data-modal-about-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector(".data-modal-products-open"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]"),autofocus:document.querySelector("[data-modal-products-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector(".data-modal-products-open-1"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]"),autofocus:document.querySelector("[data-modal-products-autofocus]")}),o({backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector(".data-modal-products-open-2"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]"),autofocus:document.querySelector("[data-modal-products-autofocus]")});var e=document.querySelectorAll(".hero__company-info picture");e[0].classList.add("visually-hidden");var t=0;function d(o){return $("html, body").animate({scrollTop:$(o).offset().top-0},1e3),!1}setTimeout((function(){e[1].classList.add("visually-hidden"),e[0].classList.remove("visually-hidden"),console.log("start")}),500),setTimeout((function(){e[1].classList.remove("visually-hidden"),e[0].classList.add("visually-hidden")}),900),window.onscroll=function(){return function(){var o=document.querySelector(".container.hero").offsetHeight/1.5,d=window.pageYOffset;t>o&&d<o&&(setTimeout((function(){e[1].classList.add("visually-hidden"),e[0].classList.remove("visually-hidden")}),180),setTimeout((function(){e[1].classList.remove("visually-hidden"),e[0].classList.add("visually-hidden")}),750));t=d}()},document.querySelectorAll(".nav__link")[0].addEventListener("click",(function(){d("#home")})),document.querySelectorAll(".nav__link")[1].addEventListener("click",(function(){d("#how")})),document.querySelectorAll(".nav__link")[2].addEventListener("click",(function(){d("#products")})),document.querySelectorAll(".nav__link")[3].addEventListener("click",(function(){d("#contacts")})),document.querySelector(".hero__link.hero__anchor-products").addEventListener("click",(function(){d("#products")})),document.querySelector(".hero__link.hero__anchor-how.how-its-made").addEventListener("click",(function(){d("#how")}))}();
//# sourceMappingURL=index.0b37c917.js.map
