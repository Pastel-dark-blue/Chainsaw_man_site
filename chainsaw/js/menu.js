/*JAVASCRIPT (�������� ��� ���������)*/
/* ����� ������������ ������������ ����, ������ ������������� ������. ����� ������������ ������������ �����, �������� ������������� ������ */

//pageYOffset - �������� ���� Window, ��������� ������ ��� ������.��� �� �� ��������, ��� � scrollY �, ��� �������,
//��� ���� ���������� ���������� ��������, �� ������� ��������� �������� �� ���������(���� ��� �����).
//�������� �������� ������ 0.0 ������� � ���, ��� � ������ ������ ������� ���� ��������� Document ��������� � ������� ����� ������� ����������� ����.

var prevScrollpos = window.pageYOffset; //��������, �� ������� ������� ��������� ���������� �� �������� ���� ������ ��������

//������� ����������� ��� ��������� (scroll) ���� (window)
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    var header = document.querySelector(".header");

    //���� ������� ���� ������, �� �������� ����� �� �����
    if (header.querySelector(".header_burger").classList.contains("active_burger") &&
        header.querySelector(".header_menu").classList.contains("active_burger")) {
        return;
    }

    //���� �������� ����, �� ������� � ������� ��� ���������� ������� ��������� �� ������ ����������� ����� (prevScrollpos), ������ ����, 
    //�� ������� ��� ���������� � ���� ��� (currentScrollPos) => ������������ �������� �������� ����� � ������ ����� ��������, ����� ������

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100%";
    }

    prevScrollpos = currentScrollPos;
}

/*JQUERY (�������� ��� ������� �� ������ ����)*/

//��� ������� �� 2 ����� ������ ���� ��� ������ �������� � �������
//�� ��� ������������� ����� �������� ����� active_burger, ������� �� ������� ������ ������� � nav � ����������
//����� ��������� body �����, ����������� ���������
$(document).ready(function () {
    $(".header_burger").click(function () {
        $(".header_burger, .header_menu").toggleClass("active_burger");
        $("body").toggleClass("lock");
    });


});

//��� ��� � ��������� ������� ������, �� ��� ������� �� ���� �� ��� �� ��������� � ������ ������ ����� ��������
//� ����� ���������, ����������� ��� ������� �� ������, ����� ������
//� ���������� ��������� body ����
$(document).ready(function () {
    $(".header_link").click(function () {
        $(".header_burger, .header_menu").toggleClass("active_burger");
        $("body").toggleClass("lock");
    });
});