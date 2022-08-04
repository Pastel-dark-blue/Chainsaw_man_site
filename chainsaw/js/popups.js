/*�������� � �������� ���������� ���� � �����*/

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // data-�������� ��������� ������� ��������� ���� � ���� ��� �������� ����� ����
        // ��� ��� � ���������� ���� �������� �������� data-modal-window ����� �� ��� � ��������
        // �������� data-modal-btn � ����� �������� ����

        let name = btns[i].getAttribute("data-modal-btn");

        let modal = document.querySelector(`[data-modal-window = "${name}"]`);

        modal.style.top = 0;
        modal.style.opacity = 1;

        // �������� ���������� ���� ��� ����� �� ��������
        let close = modal.querySelector(".cross");
        close.addEventListener("click", function () {
            modal.style.top = 150 + "%";
            modal.style.opacity = 0;

            // ��� �������� ���������� ���� ����� ���������� �����
            // ����� ��������� ���� ����� � ��� ����� ����������� src ��� iframe
            let vidSrc = modal.querySelector("iframe").getAttribute("src");
            modal.querySelector("iframe").setAttribute("src", vidSrc);
        })
    })
}

// ��� ����� �� ����������� ������� (�� ���� ��� �������� ����) ���� ��� �� �����������
// � ����� ���������������
window.onclick = function (event) {
    if (event.target.hasAttribute("data-modal-window")) {
        event.target.style.top = 150 + "%";
        event.target.style.opacity = 0;

        let vidSrc = event.target.querySelector("iframe").getAttribute("src");
        event.target.querySelector("iframe").setAttribute("src", vidSrc);
    }
}

// � ����������� �� ������ ������ ������������� ������ iframe
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

document.querySelectorAll("iframe").forEach(ifr => ifr.style.width = width / 1.5 + "px");

// ������ ������� �� ������
// ��� ����������� ���� ������� ����� � ����� � iframe ���� ���������: width="560" height="315"
// ������ ������ ��������� � ������ ��� 560/315
document.querySelectorAll("iframe").forEach(ifr => ifr.style.height = width * (315 / 560) / 1.5 + "px");

// ������ ������ iframe ��� ������� resize ����� ������� ����
window.addEventListener("resize", function() {
    let width = document.documentElement.clientWidth;

    document.querySelectorAll("iframe").forEach(ifr => ifr.style.width = width / 1.5 + "px");
    document.querySelectorAll("iframe").forEach(ifr => ifr.style.height = width * (315 / 560) / 1.5 + "px");
});
