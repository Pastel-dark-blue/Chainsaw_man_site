window.onresize = function () {
    let flex_cont = document.querySelectorAll(".flex_cont");
    let descHeight = document.querySelector(".desc").style.scrollHeight;

    console.log("~~~" + descHeight);

    for (let i = 0; i < flex_cont.lenght; i++) {
        flex_cont[i].style.height = descHeight + "px";
        console.log(descHeight);
        console.log(flex_cont[i].style.height);
    }
}