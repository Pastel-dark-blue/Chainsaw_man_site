const coin = document.querySelector(".img_container");

coin.addEventListener("mousemove", function (event) {
    const img = this.querySelector("img");
    let imgHalfHeight = img.offsetHeight / 2;
    let imgHalfWidth = img.offsetWidth / 2;

    img.style.transform =
        "rotateX(" + -(event.offsetY - imgHalfHeight) / 3 + "deg)" +
        " rotateY(" + (event.offsetX - imgHalfWidth) / 3 + "deg)";
});

coin.addEventListener("mouseout", function (event) {
    const img = this.querySelector("img");

    img.style.transform = "rotate(0)";

})
