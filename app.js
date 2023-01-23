//element selectors

let faqContainers = document.querySelectorAll(".faq-container");

//Add Event Listener
faqContainers.forEach(faqContainer => faqContainer.addEventListener("click", () => {
    let faqAnswer = faqContainer.querySelector(".faq-answer");
    let downArrow = faqContainer.querySelector(".down-arrow");

    faqAnswer.classList.toggle("show-faq-answer");
    downArrow.classList.toggle("up-arrow");
    //console.log("good");
}));