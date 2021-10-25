/*
    * author: brooks
    * version: 1.0
    * date: --.09.2021
*/



// Массив для записи информации из конструктора
var arr = {};
arr['plugins']={};
arr['dialog']=[];
class AllMessenger{
    
    set_messenger(){
        if('messenger' in arr){
            var elem = document.querySelector<HTMLButtonElement>('#add_messenger');
            elem.classList.remove('not-btn');
            return elem.setAttribute('data-bs-dismiss', 'offcanvas');
        }
    }

    add_messenger(){
        var messenger_list = document.querySelectorAll<HTMLDivElement>('#messenger_element');

        document.querySelectorAll<HTMLDivElement>('#messenger_element')[0].onclick = function(){
            // @ переделать в декоратор
            for (var i: number = 0; i < messenger_list.length; i++){
                messenger_list[i].classList.remove('beis_card_active');
            }

            var elem = document.querySelectorAll<HTMLElement>('#messenger_element img')[0];
            arr['messenger'] = elem['alt'];
            document.querySelectorAll<HTMLElement>('#messenger_element')[0].classList.add('beis_card_active');
            return new AllMessenger().set_messenger();
        }

        document.querySelectorAll<HTMLDivElement>('#messenger_element')[1].onclick = function(){
            // @ переделать в декоратор
            for (var i: number = 0; i < messenger_list.length; i++){
                messenger_list[i].classList.remove('beis_card_active');
            }

            var elem = document.querySelectorAll<HTMLElement>('#messenger_element img')[1];
            arr['messenger'] = elem['alt'];
            document.querySelectorAll<HTMLElement>('#messenger_element')[1].classList.add('beis_card_active');
            return new AllMessenger().set_messenger();
        }

        document.querySelectorAll<HTMLDivElement>('#messenger_element')[2].onclick = function(){
            // @ переделать в декоратор
            for (var i: number = 0; i < messenger_list.length; i++){
                messenger_list[i].classList.remove('beis_card_active');
            }

            var elem = document.querySelectorAll<HTMLElement>('#messenger_element img')[2];
            arr['messenger'] = elem['alt'];
            document.querySelectorAll<HTMLElement>('#messenger_element')[2].classList.add('beis_card_active');
            return new AllMessenger().set_messenger();
        }
        
    }

    main(){
        
        this.add_messenger();
    }
}

class BotInfo{

    main(){

        document.querySelector<HTMLButtonElement>('#bot_info').onclick = function(){

            arr['bot_name'] = document.querySelector<HTMLInputElement>('#bot_name').value;
            arr['api_token'] = document.querySelector<HTMLInputElement>('#api_token').value;
            arr['admin_id'] = [
                document.querySelector<HTMLInputElement>('#admin_id').value,
            ];

            document.querySelector<HTMLButtonElement>('#bot_info').setAttribute('data-bs-dismiss', 'offcanvas');
            return document.querySelector<HTMLButtonElement>('#bot_info').click();

        }
    }
}

class Plugins{

    schema_dialog(item){}

    apply(item){
            try{
                document.querySelectorAll<HTMLButtonElement>('#apply')[item].onclick = function(e){
                    var title = document.querySelectorAll<HTMLButtonElement>('#apply')[item].title
                    // code
                    return new Plugins().schema_dialog(title);
                }
            } catch(TypeError){}
        }

    settings() {
        for (var i: number = 0; i<= document.querySelectorAll<HTMLButtonElement>('#apply').length; i++){
            this.apply(i);
        }
    }

    
    
    get_plugin(item){
        
            try{
                document.querySelectorAll<HTMLElement>('.plugin_element')[item].onclick = function(){
                    
                    var cls: string = '#plugin-'+(item)+' span';
                    var plugin_name = document.querySelector<HTMLElement>(cls);

                    // Добавление и удаление плагина
                    if (plugin_name.title in arr['plugins']){
                        delete arr['plugins'][plugin_name.title];
                        return document.querySelectorAll<HTMLElement>('.plugin_element')[item].textContent = "Выбрать";
                    } else {
                        document.querySelectorAll<HTMLElement>('.plugin_element')[item].textContent = "Отмена";
                        return arr['plugins'][plugin_name.title] = [];
                    }
                    
                } 
            } catch(TypeError){}
        
    }

    close_plugin_list(){
        for (var i: number = 0; i <= document.querySelectorAll<HTMLElement>('#plugin_info').length; i++){
            try{
                document.querySelectorAll<HTMLElement>('#plugin_info')[i].onclick = function(){
                document.querySelector<HTMLElement>('#plugin_info_close').click();
                }
            } catch(TypeError){}
            
        }
    }

    set_plugin(){
        // Запуск окна настроек
        // var settings = settings();
        
        document.querySelector<HTMLElement>('#add_plugins').onclick = function(){
            document.getElementById('plugin_settings').style.display = "block";
            return document.querySelector<HTMLElement>('#plugin_info_close').click();
        }
    }

    main(){
        var plugin_list = document.querySelectorAll<HTMLElement>('.plugin_element');
        for (var i: number = 0; plugin_list.length >= i; i++){
            this.get_plugin(i);
        }
        this.close_plugin_list();
        this.set_plugin();
        this.settings();
    }
}


class Template{}

/*
Классы отвечающие за построение 
схемы обращения\взаимодействия с ботом
*/

class Button{
    create(){
        var btn = document.querySelector<HTMLButtonElement>('#create_button');
        var add = document.querySelector<HTMLButtonElement>('#add_button');
        
        btn.onclick = function(){
            var find = '<div class="mb-3"> \
                            <label for="textKeyboard" class="form-label">Надпись на кнопке</label> \
                            <input type="text" class="form-control" id="textKeyboard" value> \
                        </div>'
            document.querySelector<HTMLElement>('#add_find_to_button').innerHTML += find;
        }

        add.onclick = function(){
            var btn_lists = document.querySelectorAll<HTMLInputElement>('#textKeyboard');
            if (btn_lists.length > 0){
                arr['dialog'] = {'buttons': {}}

                var i = btn_lists.length - btn_lists.length;
                var btn = [];

                for (var i:number=0; btn_lists.length >= i; i++){
                    try{
                        btn.push(btn_lists[i].value);
                    } catch(TypeError){}
                }

                if (document.querySelector<HTMLInputElement>('#btn_inline').checked){
                    arr['dialog']['buttons'] = {'inline_buttons': btn}
                }

                if (document.querySelector<HTMLInputElement>('#btn_text').checked){
                    arr['dialog']['buttons'] = {'text_buttons': btn}
                }
            }

        }

    }

    delete(){

    }
}
class CardInfo extends Button{

    button(){
        this.create();
        this.delete();
    }

    dialog_type(){
        // dialog_btn_active
        document.getElementById('option1').onclick = function(){
            var val = document.querySelector<HTMLDivElement>('#plugin_variable');
            val.style.display = "none";
            document.querySelector<HTMLElement>('.as2').classList.remove('dialog_btn_active');
            document.querySelector<HTMLElement>('.as1').classList.add('dialog_btn_active');
            return document.querySelector<HTMLDivElement>('#dialog_variable').style.display = "block";
        }

        document.getElementById('option2').onclick = function(){
            var val = document.querySelector<HTMLDivElement>('#dialog_variable');
            val.style.display = "none";
            document.querySelector<HTMLElement>('.as1').classList.remove('dialog_btn_active');
            document.querySelector<HTMLElement>('.as2').classList.add('dialog_btn_active');
            return document.querySelector<HTMLDivElement>('#plugin_variable').style.display = "block";
        }
    }

    attachment(){
        var data_file = document.getElementById('data-file_dialog');

        data_file.onclick = function(){
            arr['dialog'] = {'attachment': {}}
            var img = document.querySelector<HTMLInputElement>('#file_img-dialog').value;
            var doc = document.querySelector<HTMLInputElement>('#file_doc-dialog').value;
            var move = document.querySelector<HTMLInputElement>('#file_move-dialog').value;

            if(img.length > 0){
                arr['dialog']['attachment']['img'] = img;
            }

            if(doc.length > 0){
                arr['dialog']['attachment']['doc'] = doc;
            }

            if(move.length > 0){
                arr['dialog']['attachment']['move'] = move;
            }
        }
    }
    

    main(){
        this.dialog_type();
        this.attachment();
        this.button();
    }
}



class CreateBot{
    settings_validate(){}

    request(data){}

    run(){
        var request = this.request;
        document.querySelector<HTMLElement>('.play_create').onclick = function(set_request){
            document.querySelector<HTMLElement>('.process').style.display = "flex";
            request(arr);
        }
    }
}

new AllMessenger().main();
new BotInfo().main();
new Plugins().main();

new CardInfo().main();
new CreateBot().run();