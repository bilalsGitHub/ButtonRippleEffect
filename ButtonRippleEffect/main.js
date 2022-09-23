const buttoms = document.querySelectorAll("button");

buttoms.forEach((button) => {
    button.addEventListener("click", function(e) {
        const x = e.clientX; //Windowda
        const y = e.clientY;

        const buttonTop = button.offsetTop;
        const buttonLeft = button.offsetLeft; //Button yerleri değişmez

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.left = xInside + "px";
        circle.style.top = yInside + "px";

        button.appendChild(circle);
        setTimeout(() => circle.remove(), 300);
    });
});