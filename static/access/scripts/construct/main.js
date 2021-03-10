kwargs = {
    bot_name: "1",
    messenger: {
        telegam: true,
        vk: false,
        instagram: false,
        viber: false,
        facebook: false,
        whatsapp: false,

    },
    access_key: "1",
    btn: [],
    start: [{
        text: "",
        keyboard: [],
        media: {
            img: "",
            video: ""
        }
    }],
    plugins: [{
        referal: [],
        statistic: [],
        admin: [],
        chats: [],
        orders: [],
        ankets: [],
        sendler: [],
        menejers: [],
        market: [],
        quiz: []
    }],
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

document.getElementById("plugins_ok").onclick = function() {
    // Разрешить добавление плагинов

    return document.getElementById("widget_plugin").style.display = "none";
}


class QueryData extends LibFunction {

    /*
    Главный класс конструктора чат ботов.
    Метод monitor() собирает данные и обрабатывает с помощью вспомогательных методов
    записывая данные в массив kwargs
    По событию нажатия по кнопке срабатывает проверка на заполненность полей [ bot_name, messenger, access_key ]
    и отправка setQuery() запроса на сервер с выводом прогресса
    */



    // static add_messenger() {}

    // static add_plugins() {}

    // static newPath() {}

    // static getComplect() {}

    static setQuery() {
        // AJAX запрос на отправку массива
        return success.onclick = function() {
            // Проверка на заполненность имени бота
            if (cls.strCompact(kwargs.bot_name) == false) {

                // Проверка на наличие секретного ключа
                if (cls.strCompact(kwargs.access_key) == false) {
                    var x = 0;
                    for (var i in kwargs.messenger) {
                        if (kwargs.messenger[i] == true) {
                            x += 1;
                        }
                    }

                    if (x == 1) {
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

}



QueryData.setQuery();