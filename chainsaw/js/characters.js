/*Отображение персонажей*/

let buttons = document.querySelectorAll(".charBut");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        //--> Удаляем класс active у кнопки, которая была активной до нажатия
        //кнопка, которая до нажатия некой другой кнопки была активной
        let curActiveBut = document.querySelector(".charBut.active_char");
        curActiveBut.classList.toggle("active_char");

        let curActiveDiv = document.querySelector(".char.active_char");

        // Если в блоке активном до нажатия был открыт блок со спойлером, то, перед назначением
        // нового активного блока, сворачиваем спойлер
        let spoilerDiv = curActiveDiv.querySelector(".spoiler");
        if (spoilerDiv.style.maxHeight) {
            spoilerDiv.style.maxHeight = null;
            spoilerDiv.style.paddingTop = 0 + "vw";
            spoilerDiv.style.paddingBottom = 0 + "vw";

            // переворачиваем стрелку обратно
            curActiveDiv.querySelector(".arrow").classList.toggle("is_opened");
        }

        curActiveDiv.classList.toggle("active_char");

        //--> Добавляем класс active кнопке, по которой нажали
        this.classList.toggle("active_char");

        // Получаем id кнопки, на которою нажал пользователь
        let butId = this.id;
        //--> Ищем по атрибуту for элемент div, который привязан к кнопке
        let charDiv = document.querySelector(`.char[for="${butId}"]`)
        charDiv.classList.toggle("active_char");
    });
}

/*Раскрытие блока со спойлером*/

// Получаем все блоки, при нажатии на которые должены раскрываться блоки со спойлерами 
let spWord = document.querySelectorAll(".spoilerWord");

for (let i = 0; i < spWord.length; i++) {
    spWord[i].addEventListener("click", function () {

        this.querySelector(".arrow").classList.toggle("is_opened");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.paddingTop = 0 + "vw";
            content.style.paddingBottom = 0 + "vw";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingTop = 3 + "vw";
            content.style.paddingBottom = 3 + "vw";
        }
    })
}
