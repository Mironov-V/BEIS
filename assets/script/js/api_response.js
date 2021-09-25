/*
    * author: brooks
    * version: 1.0
    * date: --.09.2021
*/
// Массив для записи информации из конструктора
var arr = {};
arr['plugins'] = {};
// arr['plugins'] = [];
class AllMessenger {
    set_messenger() {
        if ('messenger' in arr) {
            var elem = document.querySelector('#add_messenger');
            elem.classList.remove('not-btn');
            return elem.setAttribute('data-bs-dismiss', 'offcanvas');
        }
    }
    add_messenger() {
        var messenger_list = document.querySelectorAll('#messenger_element');
        document.querySelectorAll('#messenger_element')[0].onclick = function () {
            // @ переделать в декоратор
            for (var i = 0; i < messenger_list.length; i++) {
                messenger_list[i].classList.remove('beis_card_active');
            }
            var elem = document.querySelectorAll('#messenger_element img')[0];
            arr['messenger'] = elem['alt'];
            document.querySelectorAll('#messenger_element')[0].classList.add('beis_card_active');
            return new AllMessenger().set_messenger();
        };
        document.querySelectorAll('#messenger_element')[1].onclick = function () {
            // @ переделать в декоратор
            for (var i = 0; i < messenger_list.length; i++) {
                messenger_list[i].classList.remove('beis_card_active');
            }
            var elem = document.querySelectorAll('#messenger_element img')[1];
            arr['messenger'] = elem['alt'];
            document.querySelectorAll('#messenger_element')[1].classList.add('beis_card_active');
            return new AllMessenger().set_messenger();
        };
        document.querySelectorAll('#messenger_element')[2].onclick = function () {
            // @ переделать в декоратор
            for (var i = 0; i < messenger_list.length; i++) {
                messenger_list[i].classList.remove('beis_card_active');
            }
            var elem = document.querySelectorAll('#messenger_element img')[2];
            arr['messenger'] = elem['alt'];
            document.querySelectorAll('#messenger_element')[2].classList.add('beis_card_active');
            return new AllMessenger().set_messenger();
        };
    }
    main() {
        this.add_messenger();
    }
}
class BotInfo {
    main() {
        document.querySelector('#bot_info').onclick = function () {
            arr['bot_name'] = document.querySelector('#bot_name').value;
            arr['api_token'] = document.querySelector('#api_token').value;
            arr['admin_id'] = [
                document.querySelector('#admin_id').value,
            ];
            document.querySelector('#bot_info').setAttribute('data-bs-dismiss', 'offcanvas');
            return document.querySelector('#bot_info').click();
        };
    }
}
class Plugins {
    get_plugin(item) {
        try {
            document.querySelectorAll('.plugin_element')[item].onclick = function () {
                var cls = '#plugin-' + (item) + ' span';
                var plugin_name = document.querySelector(cls);
                // Добавление и удаление плагина
                if (plugin_name.title in arr['plugins']) {
                    delete arr['plugins'][plugin_name.title];
                    return document.querySelectorAll('.plugin_element')[item].textContent = "Выбрать";
                }
                else {
                    document.querySelectorAll('.plugin_element')[item].textContent = "Отмена";
                    return arr['plugins'][plugin_name.title] = [];
                }
            };
        }
        catch (TypeError) { }
    }
    close_plugin_list() {
        for (var i = 0; i <= document.querySelectorAll('#plugin_info').length; i++) {
            try {
                document.querySelectorAll('#plugin_info')[i].onclick = function () {
                    document.querySelector('#plugin_info_close').click();
                };
            }
            catch (TypeError) { }
        }
    }
    set_plugin() {
        document.querySelector('#add_plugins').onclick = function () {
            return document.querySelector('#plugin_info_close').click();
        };
    }
    main() {
        var plugin_list = document.querySelectorAll('.plugin_element');
        for (var i = 0; plugin_list.length >= i; i++) {
            this.get_plugin(i);
        }
        this.close_plugin_list();
        this.set_plugin();
    }
}
class Template {
}
/*
Классы отвечающие за построение
схемы обращения\взаимодействия с ботом
*/
class Cards {
}
class CardInfo {
}
class CreateBot {
    settings_validate() { }
    request(data) { }
    run() {
        var request = this.request;
        document.querySelector('.play_create').onclick = function (set_request) {
            document.querySelector('.process').style.display = "flex";
            request(arr);
        };
    }
}
new AllMessenger().main();
new BotInfo().main();
new Plugins().main();
// ...
new CreateBot().run();
