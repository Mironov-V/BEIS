const footer = Vue.createApp({});

footer.component('app_footer', {
    template: '<div class="footer__container"> \
                <a class="footer__link logo" href="#"><h1>BEIS</h1></a> \
                <nav> \
                  <ul> \
                    <li><a class="footer__link" href="#">Тех. поддержка</a></li> \
                    <li><a class="footer__link" href="#">Разработчикам</a></li> \
                    <li><a class="footer__link" href="#">Политика конфеденциальности</a></li> \
                  </ul> \
                </nav> \
              </div>'
});

footer.mount('#main_footer')