kwargs = {
    bot_name: "",
    access_key: "",
    messenger: {
        telegam: false,
        vk: false,
        instagram: false,
        viber: false,
        facebook: false,
        whatsapp: false,

    },
    btn: [],
    start: [{
        text: "",
        keyboard: [],
        media: {
            img: "",
            video: ""
        }
    }],
    plugins: {
        referal: [false, []],
        statistic: [false, []],
        admin: [false, []],
        chats: [false, []],
        orders: [false, []],
        ankets: [false, []],
        sendler: [false, []],
        menejers: [false, []],
        market: [false, []],
        quiz: [false, []]
    },
    chain_msg: [{
        text: "",
        file: {
            img: "",
            video: ""
        }
    }]

}

// Часто приминяемые функции
let LibFunction = function() {}
LibFunction.prototype.strCompact = function(obj) {
    return !obj || 0 === obj.length;
}

let cls = new LibFunction;


// function newBlock(bid = null, settings = [], new_branch = null) {}


class QueryData extends LibFunction {

    /*
        Главный класс конструктора чат ботов.
        Метод monitor() собирает данные и обрабатывает с помощью вспомогательных методов
        записывая данные в массив kwargs
        По событию нажатия по кнопке срабатывает проверка на заполненность полей [ bot_name, messenger, access_key ]
        и отправка setQuery() запроса на сервер с выводом прогресса
    */


    static add_bot_name() {
        /*  
            Забор имени бота, для отображения в панели управления
            Не влияет на настоящее имя бота 
        */
        var bot_name = document.getElementById("bot_name").value;
        return kwargs.bot_name = bot_name;
    }

    static add_access_key() {
        /*  
            Забор  секретного ключа.
            Необходим для работочпособности бота. 
        */
        var access_key = document.getElementById("access_key").value;
        return kwargs.access_key = access_key;
    }

    static add_messenger() {
        document.getElementById("mjr_telegram").onclick = function() {
            // Выбор телеграмма
            if (kwargs.messenger.vk == true) {
                kwargs.messenger.vk = false;
                document.getElementById("mjr_vk").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.instagram == true) {
                kwargs.messenger.instagram = false;
                document.getElementById("mjr_instagram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.viber == true) {
                kwargs.messenger.viber = false;
                document.getElementById("mjr_viber").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.facebook == true) {
                kwargs.messenger.facebook = false;
                document.getElementById("mjr_facebook").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.whatsapp == true) {
                kwargs.messenger.whatsapp = false;
                document.getElementById("mjr_whatsapp").classList.remove("messenger__item-active");
            }

            kwargs.messenger.telegam = true;
            return document.getElementById("mjr_telegram").classList.add("messenger__item-active");

        }

        // Выбор ВК
        document.getElementById("mjr_vk").onclick = function() {

            if (kwargs.messenger.telegram == true) {
                kwargs.messenger.telegram = false;
                document.getElementById("mjr_telegram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.instagram == true) {
                kwargs.messenger.instagram = false;
                document.getElementById("mjr_instagram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.viber == true) {
                kwargs.messenger.viber = false;
                document.getElementById("mjr_viber").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.facebook == true) {
                kwargs.messenger.facebook = false;
                document.getElementById("mjr_facebook").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.whatsapp == true) {
                kwargs.messenger.whatsapp = false;
                document.getElementById("mjr_whatsapp").classList.remove("messenger__item-active");
            }

            kwargs.messenger.vk = true;
            return document.getElementById("mjr_vk").classList.add("messenger__item-active");
        }

        // Выбор инстаграмма
        document.getElementById("mjr_instagram").onclick = function() {

            if (kwargs.messenger.telegram == true) {
                kwargs.messenger.telegram = false;
                document.getElementById("mjr_telegram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.vk == true) {
                kwargs.messenger.vk = false;
                document.getElementById("mjr_vk").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.viber == true) {
                kwargs.messenger.viber = false;
                document.getElementById("mjr_viber").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.facebook == true) {
                kwargs.messenger.facebook = false;
                document.getElementById("mjr_facebook").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.whatsapp == true) {
                kwargs.messenger.whatsapp = false;
                document.getElementById("mjr_whatsapp").classList.remove("messenger__item-active");
            }

            kwargs.messenger.instagram = true;
            return document.getElementById("mjr_instagram").classList.add("messenger__item-active");
        }

        // Выбор вайбера
        document.getElementById("mjr_viber").onclick = function() {

            if (kwargs.messenger.telegram == true) {
                kwargs.messenger.telegram = false;
                document.getElementById("mjr_telegram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.vk == true) {
                kwargs.messenger.vk = false;
                document.getElementById("mjr_vk").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.instagram == true) {
                kwargs.messenger.instagram = false;
                document.getElementById("mjr_instagram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.facebook == true) {
                kwargs.messenger.facebook = false;
                document.getElementById("mjr_facebook").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.whatsapp == true) {
                kwargs.messenger.whatsapp = false;
                document.getElementById("mjr_whatsapp").classList.remove("messenger__item-active");
            }

            kwargs.messenger.viber = true;
            return document.getElementById("mjr_viber").classList.add("messenger__item-active");
        }

        // Выбор фейсбука
        document.getElementById("mjr_facebook").onclick = function() {

            if (kwargs.messenger.telegram == true) {
                kwargs.messenger.telegram = false;
                document.getElementById("mjr_telegram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.vk == true) {
                kwargs.messenger.vk = false;
                document.getElementById("mjr_vk").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.instagram == true) {
                kwargs.messenger.instagram = false;
                document.getElementById("mjr_instagram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.viber == true) {
                kwargs.messenger.viber = false;
                document.getElementById("mjr_viber").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.whatsapp == true) {
                kwargs.messenger.whatsapp = false;
                document.getElementById("mjr_whatsapp").classList.remove("messenger__item-active");
            }

            kwargs.messenger.facebook = true;
            return document.getElementById("mjr_facebook").classList.add("messenger__item-active");
        }

        // Выбор вацапа
        document.getElementById("mjr_whatsapp").onclick = function() {

            if (kwargs.messenger.telegram == true) {
                kwargs.messenger.telegram = false;
                document.getElementById("mjr_telegram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.vk == true) {
                kwargs.messenger.vk = false;
                document.getElementById("mjr_vk").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.instagram == true) {
                kwargs.messenger.instagram = false;
                document.getElementById("mjr_instagram").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.viber == true) {
                kwargs.messenger.viber = false;
                document.getElementById("mjr_viber").classList.remove("messenger__item-active");
            }
            if (kwargs.messenger.facebook == true) {
                kwargs.messenger.facebook = false;
                document.getElementById("mjr_facebook").classList.remove("messenger__item-active");
            }

            kwargs.messenger.whatsapp = true;
            return document.getElementById("mjr_whatsapp").classList.add("messenger__item-active");
        }

        document.getElementById("close_widget_messenger").onclick = function() {
            // Смена активного значения в массиве на неактивное
            for (var item in kwargs.messenger) {
                item = false;
            }
            // Удаление класса активного пункта
            document.getElementById("mjr_telegram").classList.remove("messenger__item-active");
            document.getElementById("mjr_vk").classList.remove("messenger__item-active");
            document.getElementById("mjr_instagram").classList.remove("messenger__item-active");
            document.getElementById("mjr_viber").classList.remove("messenger__item-active");
            document.getElementById("mjr_facebook").classList.remove("messenger__item-active");
            document.getElementById("mjr_whatsapp").classList.remove("messenger__item-active");

            return document.getElementById("widget_messenger").style.display = "none";
        }
        document.getElementById("add_messenger").onclick = function() {
            // Счётчик выбора, дефолтное значение равное нулю означает, что ничего не выбрано
            var x = 0;

            for (var item of Object.values(kwargs.messenger)) {
                if (item === true) {
                    x = x + 1;
                }
            }
            // Проверка счётчика
            if (x > 0) {
                return document.getElementById("widget_messenger").style.display = "none";
            } else {
                alert("Выберите один из мессенджеров.");
            }

        }

    }

    static settings_plugin() {
        /* Сделать квиз виджет для прохода по всем выбранным плагинам и настроить их */
    }

    static add_plugins() {
        // Метод добавления плагинов в массив
        document.getElementById("referal").onclick = function() {
            if (kwargs.plugins.referal[0] == false) {
                kwargs.plugins.referal[0] = true;
                document.getElementById("referal").classList.add("plugin_active");
            } else if (kwargs.plugins.referal[0] == true) {
                kwargs.plugins.referal[0] = false;
                document.getElementById("referal").classList.remove("plugin_active");
            }
        }

        document.getElementById("statistic").onclick = function() {
            if (kwargs.plugins.statistic[0] == false) {
                kwargs.plugins.statistic[0] = true;
                document.getElementById("statistic").classList.add("plugin_active");
            } else if (kwargs.plugins.statistic[0] == true) {
                kwargs.plugins.statistic[0] = false;
                document.getElementById("statistic").classList.remove("plugin_active");
            }
        }

        document.getElementById("admin").onclick = function() {
            if (kwargs.plugins.admin[0] == false) {
                kwargs.plugins.admin[0] = true;
                document.getElementById("admin").classList.add("plugin_active");
            } else if (kwargs.plugins.admin[0] == true) {
                kwargs.plugins.admin[0] = false;
                document.getElementById("admin").classList.remove("plugin_active");
            }
        }

        document.getElementById("chats").onclick = function() {
            if (kwargs.plugins.chats[0] == false) {
                kwargs.plugins.chats[0] = true;
                document.getElementById("chats").classList.add("plugin_active");
            } else if (kwargs.plugins.chats[0] == true) {
                kwargs.plugins.chats[0] = false;
                document.getElementById("chats").classList.remove("plugin_active");
            }
        }

        document.getElementById("orders").onclick = function() {
            if (kwargs.plugins.orders[0] == false) {
                kwargs.plugins.orders[0] = true;
                document.getElementById("orders").classList.add("plugin_active");
            } else if (kwargs.plugins.orders[0] == true) {
                kwargs.plugins.orders[0] = false;
                document.getElementById("orders").classList.remove("plugin_active");
            }
        }

        document.getElementById("ankets").onclick = function() {
            if (kwargs.plugins.ankets[0] == false) {
                kwargs.plugins.ankets[0] = true;
                document.getElementById("ankets").classList.add("plugin_active");
            } else if (kwargs.plugins.ankets[0] == true) {
                kwargs.plugins.ankets[0] = false;
                document.getElementById("ankets").classList.remove("plugin_active");
            }
        }

        document.getElementById("sendler").onclick = function() {
            if (kwargs.plugins.sendler[0] == false) {
                kwargs.plugins.sendler[0] = true;
                document.getElementById("sendler").classList.add("plugin_active");
            } else if (kwargs.plugins.sendler[0] == true) {
                kwargs.plugins.sendler[0] = false;
                document.getElementById("sendler").classList.remove("plugin_active");
            }
        }

        document.getElementById("menejers").onclick = function() {
            if (kwargs.plugins.menejers[0] == false) {
                kwargs.plugins.menejers[0] = true;
                document.getElementById("menejers").classList.add("plugin_active");
            } else if (kwargs.plugins.menejers[0] == true) {
                kwargs.plugins.menejers[0] = false;
                document.getElementById("menejers").classList.remove("plugin_active");
            }
        }

        document.getElementById("market").onclick = function() {
            if (kwargs.plugins.market[0] == false) {
                kwargs.plugins.market[0] = true;
                document.getElementById("market").classList.add("plugin_active");
            } else if (kwargs.plugins.market[0] == true) {
                kwargs.plugins.market[0] = false;
                document.getElementById("market").classList.remove("plugin_active");
            }
        }

        document.getElementById("plugins_ok").onclick = function() {
            // Проверка на выбранные плагины

            return document.getElementById("widget_plugin").style.display = "none";
        }

    }

    // static newPath() {}

    // static getComplect() {}

    static setQuery() {
        /* 
            AJAX запрос на отправку массива
            ...
            ...
        */

        // Проверка на заполненность имени бота
        if (cls.strCompact(kwargs.bot_name) == false) {

            // Проверка на наличие секретного ключа
            if (cls.strCompact(kwargs.access_key) == false) {
                console.log(kwargs.messenger)
                var x = 0; // Счётчик

                // Проверка каждого мессенджера по отельности
                switch (kwargs.messenger.telegam) {
                    case kwargs.messenger.telegam == true:
                        x = 1;
                        document.getElementById("widget_success").style.display = "block";
                        break;
                }

                switch (kwargs.messenger.vk) {
                    case kwargs.messenger.vk == true:
                        x = 1;
                        document.getElementById("widget_success").style.display = "block";
                        break;
                }
                switch (kwargs.messenger.instagram) {
                    case kwargs.messenger.instagram == true:
                        x = 1;
                        document.getElementById("widget_success").style.display = "block";
                        break;
                }
                switch (kwargs.messenger.viber) {
                    case kwargs.messenger.viber == true:
                        x = 1;
                        document.getElementById("widget_success").style.display = "block";
                        break;
                }
                switch (kwargs.messenger.facebook) {
                    case kwargs.messenger.facebook == true:
                        x = 1;
                        document.getElementById("widget_success").style.display = "block";
                        break;
                }
                switch (kwargs.messenger.whatsapp) {
                    case kwargs.messenger.whatsapp == true:
                        x = 1;
                        document.getElementById("widget_success").style.display = "block";
                        break;
                }


                if (x == 1) {
                    //  ОТПРАВКА ЗАПРОСА
                    return document.getElementById("widget_success").style.display = "block";
                } else {
                    alert("Выберите мессенджер.");
                }

            } else {
                alert("Укажите access-key");
            }
        } else {
            alert("Введите имя бота, для нормального отображения в панели управления ботами.");
        }

    }
}


QueryData.add_messenger();
QueryData.add_plugins();

success.onclick = function() {
    QueryData.add_bot_name();
    QueryData.add_access_key();
    QueryData.setQuery();
    // console.log(kwargs)
}