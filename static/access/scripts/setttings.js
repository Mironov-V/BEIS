class Theme {
    // Состояние темы

    static save_status() {
        // Состояние false - означает активная светлая тема
        // Состояние  true - означает активная тёмная тема
    }

    static nights() {
        return document.getElementById("color_night_activate").onclick = function() {
            document.getElementById("color_night_activate").style.display = "none";
            document.getElementById("color_days_activate").style.display = "block";
            // Ajax запрос для сохранения статуса темы для каждого пользователя
            return document.getElementById("theme_active").href = "static/access/css/color_nights.css";
        }
    }

    static days() {
        return document.getElementById("color_days_activate").onclick = function() {
            document.getElementById("color_night_activate").style.display = "block";
            document.getElementById("color_days_activate").style.display = "none";
            // Ajax запрос для сохранения статуса темы для каждого пользователя
            return document.getElementById("theme_active").href = "static/access/css/color_days.css";
        }
    }
}



Theme.nights();
Theme.days();