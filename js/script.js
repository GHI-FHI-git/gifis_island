const subPills = document.querySelectorAll(".sub-pill");

subPills.forEach(function (subPill) {

    subPill.addEventListener("click", function() {

        const newColor = subPill.dataset.color;
        document.body.style.background = newColor;
    });
});

console.log("Website loaded.");