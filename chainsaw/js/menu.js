/*JAVASCRIPT (действия при прокрутке)*/
/* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */

//pageYOffset - свойство окна Window, доступное только для чтения.Это то же свойство, что и scrollY и, как таковое,
//оно тоже возвращает количество пикселей, на которое прокручен документ по вертикали(вниз или вверх).
//Значение свойства равное 0.0 говорит о том, что в данный момент верхний край документа Document совпадает с верхним краем области содержимого окна.

var prevScrollpos = window.pageYOffset; //значение, на которое область видимости опустилась от верхнего края полной страницы

//событие срабатывает при прокрутке (scroll) окна (window)
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    var header = document.querySelector(".header");

    //Если открыто меню бургер, то скрывать шапку не нужно
    if (header.querySelector(".header_burger").classList.contains("active_burger") &&
        header.querySelector(".header_menu").classList.contains("active_burger")) {
        return;
    }

    //если значение того, на сколько в прошлый раз опустилась область видимости со своего предыдущего места (prevScrollpos), больше того, 
    //на сколько она опустилась в этот раз (currentScrollPos) => пользователь промотал страницу вверх и панель нужно показать, иначе скрыть

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100%";
    }

    prevScrollpos = currentScrollPos;
}

/*JQUERY (действия при нажатии на бургер меню)*/

//при нажатии на 2 линии бургер меню они должны сложится в крестик
//за эту трансформацию будет отвечать класс active_burger, который мы добавим самому бургеру и nav с навигацией
//также добавляем body класс, блокирующий прокрутку
$(document).ready(function () {
    $(".header_burger").click(function () {
        $(".header_burger, .header_menu").toggleClass("active_burger");
        $("body").toggleClass("lock");
    });


});

//так как в навигации якорные ссылки, то при нажатии на одну из них мы сместимся в нужную секцию одной страницы
//и тогда навигацию, появившуюся при нажатии на бургер, нужно убрать
//и блокировку прокрутки body тоже
$(document).ready(function () {
    $(".header_link").click(function () {
        $(".header_burger, .header_menu").toggleClass("active_burger");
        $("body").toggleClass("lock");
    });
});