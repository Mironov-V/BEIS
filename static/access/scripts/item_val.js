session = 0;

function rm_active(item) {
    x = 0;
    while (x <= 3) {
        document.getElementsByClassName("content__card")[x].style.display = "none";
        x++;
    }
    return item.classList.remove("active-item")
}

function add_active(item) {
    return item.classList.add("active-item")
}

// Отлов событий нажатия на кнопки с ID == Item 
var item1 = item[0];
var item2 = item[1];
var item3 = item[2];
var item4 = item[3];

item1.onclick = function() {
    rm_active(item = item2)
    rm_active(item = item3)
    rm_active(item = item4)

    add_active(item = item1)

    return document.getElementsByClassName("content__card")[0].style.display = "block";
}

item2.onclick = function() {
    rm_active(item = item1)
    rm_active(item = item3)
    rm_active(item = item4)

    add_active(item = item2)

    return document.getElementsByClassName("content__card")[1].style.display = "block";
}

item3.onclick = function() {
    rm_active(item = item1)
    rm_active(item = item2)
    rm_active(item = item4)

    add_active(item = item3)

    return document.getElementsByClassName("content__card")[2].style.display = "block";
}

item4.onclick = function() {
    rm_active(item = item1)
    rm_active(item = item2)
    rm_active(item = item3)

    add_active(item = item4)

    return document.getElementsByClassName("content__card")[3].style.display = "block";
}



let p = prev;
let n = next;

p.onclick = function() {
    i = session; // index session

    x = 0;
    while (x <= 3) {
        document.getElementsByClassName("content__card")[x].style.display = "none";
        x++;
    }

    try {
        document.getElementsByClassName("content__card")[i + 1].style.display = "block";
        session += 1;
        return session;
    } catch (err) {
        document.getElementsByClassName("content__card")[3].style.display = "block";
        session = 4;
        return session;
    }
}


n.onclick = function() {
    i = session; // index session

    x = 0;
    while (x <= 3) {
        document.getElementsByClassName("content__card")[x].style.display = "none";
        x++;
    }

    try {
        document.getElementsByClassName("content__card")[i - 1].style.display = "block";
        session -= 1;
        return session;
    } catch (err) {
        document.getElementsByClassName("content__card")[0].style.display = "block";
        session = 0;
        return session;
    }
}