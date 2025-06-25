let skills = document.getElementById("skills");

let spans = document.querySelectorAll(".skills .progress span");

let year = document.querySelector("footer .year");

let up = document.querySelector(".up");

let bar = document.querySelector(".bar");

let mobileMenu = document.querySelector(".mobile-menu");

let closeButton = document.querySelector(".close-button");

// Show Progress
window.onscroll = function() {

    if (window.scrollY >= skills.offsetTop - 200) {

        spans.forEach(span => {

            span.style.width = `${span.parentElement.dataset.width}%`;

        });

    }

}

// Copyright
year.innerHTML = new Date().getFullYear();

// Show Arrow Up
window.addEventListener("scroll", () => {

    if (window.scrollY >= 300) {

        up.style.opacity = 1;

    } else {

        up.style.opacity = 0;

    }

});

up.onclick = function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Dropdown Menu
bar.onclick = function() {

    this.classList.toggle("complete");

    mobileMenu.classList.toggle("show");

}

document.onclick = function(e) {

    if (!e.target.closest(".mobile-menu") && !e.target.closest(".bar")) {

        bar.classList.remove("complete");

        mobileMenu.classList.remove("show");

    }

}

closeButton.onclick = function () {

    bar.classList.remove("complete");
    
    mobileMenu.classList.remove("show");

};
