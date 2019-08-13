console.log("Hello! I\"m Crios😊.")

if (document.querySelectorAll(".nav-menu").length > 0) {
    var nav = document.querySelector(".nav-menu");
    var buttonMenu = document.querySelector(".button-menu");
    var navList = document.querySelector(".nav-menu__list");

    buttonMenu.addEventListener("click", function() {
        var listHeight = navList.offsetHeight;

        if (nav.classList.contains("nav-menu--opened")) {
            nav.classList.remove("nav-menu--opened");
            buttonMenu.classList.add("button-menu--opened");
            buttonMenu.classList.remove("button-menu--closed");
            nav.style.height = "0px";

        }

        else {
            nav.classList.add("nav-menu--opened");
            buttonMenu.classList.remove("button-menu--opened");
            buttonMenu.classList.add("button-menu--closed");
            nav.style.height = listHeight + "px";
        }
    })
}
