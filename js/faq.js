document.addEventListener("DOMContentLoaded", function () {

    const faqQuestion = document.getElementById("faqQuestion");
    const faqAnswer = document.getElementById("faqAnswer");

    if (!faqQuestion || !faqAnswer) {
        return;
    }

    faqQuestion.addEventListener("click", function () {

        const isOpen = faqQuestion.classList.contains("active");

        if (isOpen) {

            faqQuestion.classList.remove("active");
            faqQuestion.setAttribute("aria-expanded", "false");

            faqAnswer.classList.remove("open");
            faqAnswer.setAttribute("aria-hidden", "true");

        } else {

            faqQuestion.classList.add("active");
            faqQuestion.setAttribute("aria-expanded", "true");

            faqAnswer.classList.add("open");
            faqAnswer.setAttribute("aria-hidden", "false");

        }

    });

});