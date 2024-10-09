/* Typing Text Code */

var sliderCounter = 0;
var sliderCounter = [
    "Developer",
    "Designer",
    "Youtube",
    "Code",
];

var sliderValue = document.querySelector("#SliderValue");

function slider() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";
    sliderValue.classList.remove("holder-animation")
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation")

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start")
        letterDiv.classList.add("animation")
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);

    }
sliderCounter++;
}
slide();
setInterval(slide, 2000);

/* toggle menu */

$('.menu-btn').click(function(){
    $('.menu').toggleclass("active");
    $('.menu-btn i').toggleclass("active");
});

/*Scroll Animation */
const sr = ScrollReveal({
    origin: "top",
    disance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".featured-text" ,{});
sr.reveal(".home-img" ,{ delay: 200 });

sr.reveal(".heading", {});
