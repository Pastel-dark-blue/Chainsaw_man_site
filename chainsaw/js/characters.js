/*����������� ����������*/

let buttons = document.querySelectorAll(".charBut");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        //--> ������� ����� active � ������, ������� ���� �������� �� �������
        //������, ������� �� ������� ����� ������ ������ ���� ��������
        let curActiveBut = document.querySelector(".charBut.active_char");
        curActiveBut.classList.toggle("active_char");

        let curActiveDiv = document.querySelector(".char.active_char");

        // ���� � ����� �������� �� ������� ��� ������ ���� �� ���������, ��, ����� �����������
        // ������ ��������� �����, ����������� �������
        let spoilerDiv = curActiveDiv.querySelector(".spoiler");
        if (spoilerDiv.style.maxHeight) {
            spoilerDiv.style.maxHeight = null;
            spoilerDiv.style.paddingTop = 0 + "vw";
            spoilerDiv.style.paddingBottom = 0 + "vw";

            // �������������� ������� �������
            curActiveDiv.querySelector(".arrow").classList.toggle("is_opened");
        }

        curActiveDiv.classList.toggle("active_char");

        //--> ��������� ����� active ������, �� ������� ������
        this.classList.toggle("active_char");

        // �������� id ������, �� ������� ����� ������������
        let butId = this.id;
        //--> ���� �� �������� for ������� div, ������� �������� � ������
        let charDiv = document.querySelector(`.char[for="${butId}"]`)
        charDiv.classList.toggle("active_char");
    });
}

/*��������� ����� �� ���������*/

// �������� ��� �����, ��� ������� �� ������� ������� ������������ ����� �� ���������� 
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
