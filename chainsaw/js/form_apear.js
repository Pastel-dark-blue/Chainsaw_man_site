let input_blocks = document.querySelectorAll(".input_block");
let block = input_blocks[0].innerHTML;
let sends = document.querySelectorAll(".send");

for (let i = 0; i < input_blocks.length; i++) {
    sends[i].addEventListener("click", function () {
        //удаляем содержимое блока, где находиться блок send
        input_blocks[i].innerHTML = "";


        let form = document.createElement("form");
        form.action = "mail.php";
        form.method = "POST";

        let input = document.createElement("input");
        input.type = "email";
        input.placeholder = "my_mail@mail.ru";
        input.required = true;
        input.name = "email";
        input.classList.add("input_email");


        let button = document.createElement("input");
        button.type = "submit";
        button.classList.add("input_send");

        form.append(input);
        form.append(button);

        input_blocks[i].append(form);
    })
}
