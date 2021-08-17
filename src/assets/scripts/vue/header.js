const header = Vue.createApp({});

header.component('app_header', {
    template: '<div class="container container_sa container_bg-blue"> \
                <!--  --> \
                <h1 class="container__logo"><a class="logo" href="#">BEIS</a></h1> \
                <!-- --> \
                <ul class="container__menu container_sa container_ai"> \
                  <li class="container__menu-item"><a href="#">Главная</a></li></li> \
                  <li class="container__menu-item"><a href="#">Блог</a></li> \
                  <li class="container__menu-item"><a href="#">FAQ</a></li> \
                  <li class="container__menu-item"><a href="#">Тех. поддержка</a></li> \
                </ul> \
                <!-- --> \
                <button class="btn container_w8" type="button">Войти</button> \
                <button class="btn_menu container_w8" type="button"><i class="fas fa-bars"></i></button> \
              </div>'
});


header.mount('#main_header');