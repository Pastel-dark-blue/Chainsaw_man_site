/*Открытие и закрытие модального окна с видео*/

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // data-атрибуты позволяют связать модальное окно и блок для открытия этого окна
        // так как у модального окна значение атрибута data-modal-window такое же как и значение
        // атрибута data-modal-btn у блока открытия окна

        let name = btns[i].getAttribute("data-modal-btn");

        let modal = document.querySelector(`[data-modal-window = "${name}"]`);

        modal.style.top = 0;
        modal.style.opacity = 1;

        // закрытие модального окна при клике по крестику
        let close = modal.querySelector(".cross");
        close.addEventListener("click", function () {
            modal.style.top = 150 + "%";
            modal.style.opacity = 0;

            // при закрытии модального окна нужно остановить видео
            // смысл следующих двух строк в том чтобы перегрузить src для iframe
            let vidSrc = modal.querySelector("iframe").getAttribute("src");
            modal.querySelector("iframe").setAttribute("src", vidSrc);
        })
    })
}

// при клике по затемненной области (то есть вне контента окна) окно так же закрывается
// а видео останавливается
window.onclick = function (event) {
    if (event.target.hasAttribute("data-modal-window")) {
        event.target.style.top = 150 + "%";
        event.target.style.opacity = 0;

        let vidSrc = event.target.querySelector("iframe").getAttribute("src");
        event.target.querySelector("iframe").setAttribute("src", vidSrc);
    }
}

// в зависимости от ширины экрана устанавливаем размер iframe
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

document.querySelectorAll("iframe").forEach(ifr => ifr.style.width = width / 1.5 + "px");

// высота зависит от ширины
// при копировании кода вставки видео с ютуба в iframe было прописано: width="560" height="315"
// значит ширина относится к высоте как 560/315
document.querySelectorAll("iframe").forEach(ifr => ifr.style.height = width * (315 / 560) / 1.5 + "px");

// меняем размер iframe при событии resize смены размера окна
window.addEventListener("resize", function() {
    let width = document.documentElement.clientWidth;

    document.querySelectorAll("iframe").forEach(ifr => ifr.style.width = width / 1.5 + "px");
    document.querySelectorAll("iframe").forEach(ifr => ifr.style.height = width * (315 / 560) / 1.5 + "px");
});
