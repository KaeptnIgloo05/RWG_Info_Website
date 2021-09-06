function darkToggle() {
    var element = document.body;
    var elementTwo = document.getElementsByClassName("design");
    var elementThree = document.getElementById("access-btn")
    var elementFour = document.getElementsByClassName("design-i");
    var elementFive = document.getElementById("footer");
    element.classList.toggle("dark-mode");
    elementThree.classList.toggle("btn__access--dark");
    elementFive.classList.toggle("paper");
    elementFive.classList.toggle("paper__dark");
    for(let i = 0; i < elementTwo.length; i += 1) {
        elementTwo.item(i).classList.toggle("btn__shadow--dark");
        elementTwo.item(i).classList.toggle("btn__shadow");
    }
    for(let i = 0; i < elementFour.length; i += 1) {
        elementFour.item(i).classList.toggle("btn__shadow--inset--dark");
        elementFour.item(i).classList.toggle("btn__shadow--inset");
    }

 }