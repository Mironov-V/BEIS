class MobileMenu {
    menu_open() {
        // Метод открытия меню для мобильных устройств
        document.getElementById('click_menu').onclick = function() {
            document.getElementById('app').style.overflow = 'hidden';
            return document.getElementById('mobile_menu').style.display = 'block';
        }
    }
    menu_close() {
        // Закрывает мобильное меню
        document.getElementById('close_menu').onclick = function() {
            document.getElementById('app').style.overflow = 'auto';
            return document.getElementById('mobile_menu').style.display = 'none';
        }
    }
}


var mobile_menu = new MobileMenu();
// Открытие
mobile_menu.menu_open();
// Закрытие
mobile_menu.menu_close();


class Carousel {
    // Переписать этот пиздец!!!

    // carousel_item(x) {
    //     var i = 0;
    //     var count = document.getElementsByClassName('element_navigation').length;
    //     // Закрывает все блоки
    //     while (i < count) {
    //         document.getElementsByClassName('carousel__body-item').style.display = "none";
    //         i++;
    //     }
    //     // Открывает блок x
    //     x.style.display = 'flex';

    // }

    run() {
        document.getElementsByClassName('carousel__body-item')[0].style.display = "flex";
        var carousel_lists = document.getElementsByClassName('element_navigation');
        // Карусель предназначена для 4-х элементов );

        // ############################################################################################
        carousel_lists[0].onclick = function() {
            var x = document.getElementsByClassName('carousel__body-item')[0];

            var i = 0;
            var count = document.getElementsByClassName('element_navigation').length;
            // Закрывает все блоки
            while (i < count) {
                document.getElementsByClassName('carousel__body-item')[i].style.display = "none";
                i++;
            }
            // Открывает блок x
            x.style.display = 'flex';

            // Удаление активного пункта навигации
            var rm_active = document.getElementsByClassName('element_navigation');
            var n = 0;
            while (n < rm_active.length) {
                rm_active[n].classList.remove('element_navigation-active');
                n++;
            }
            // Пункт активен
            rm_active[0].classList.add('element_navigation-active');
        }

        // ############################################################################################
        carousel_lists[1].onclick = function() {
            var x = document.getElementsByClassName('carousel__body-item')[1];

            var i = 0;
            var count = document.getElementsByClassName('element_navigation').length;
            // Закрывает все блоки
            while (i < count) {
                document.getElementsByClassName('carousel__body-item')[i].style.display = "none";
                i++;
            }
            // Открывает блок x
            x.style.display = 'flex';

            // Удаление активного пункта навигации
            var rm_active = document.getElementsByClassName('element_navigation');
            var n = 0;
            while (n < rm_active.length) {
                rm_active[n].classList.remove('element_navigation-active');
                n++;
            }
            // Пункт активен
            rm_active[1].classList.add('element_navigation-active');
        }

        // ############################################################################################
        carousel_lists[2].onclick = function() {
            var x = document.getElementsByClassName('carousel__body-item')[2];

            var i = 0;
            var count = document.getElementsByClassName('element_navigation').length;
            // Закрывает все блоки
            while (i < count) {
                document.getElementsByClassName('carousel__body-item')[i].style.display = "none";
                i++;
            }
            // Открывает блок x
            x.style.display = 'flex';

            // Удаление активного пункта навигации
            var rm_active = document.getElementsByClassName('element_navigation');
            var n = 0;
            while (n < rm_active.length) {
                rm_active[n].classList.remove('element_navigation-active');
                n++;
            }
            // Пункт активен
            rm_active[2].classList.add('element_navigation-active');
        }

        // ############################################################################################
        carousel_lists[3].onclick = function() {
            var x = document.getElementsByClassName('carousel__body-item')[3];

            var i = 0;
            var count = document.getElementsByClassName('element_navigation').length;
            // Закрывает все блоки
            while (i < count) {
                document.getElementsByClassName('carousel__body-item')[i].style.display = "none";
                i++;
            }
            // Открывает блок x
            x.style.display = 'flex';

            // Удаление активного пункта навигации
            var rm_active = document.getElementsByClassName('element_navigation');
            var n = 0;
            while (n < rm_active.length) {
                rm_active[n].classList.remove('element_navigation-active');
                n++;
            }
            // Пункт активен
            rm_active[3].classList.add('element_navigation-active');
        }
    }
}


var carousel = new Carousel();
carousel.run();