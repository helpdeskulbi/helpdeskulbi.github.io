document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions = document.querySelectorAll(".faq-question");

    if (!faqQuestions.length) {
        return;
    }

    faqQuestions.forEach(function (faqQuestion) {
        const answerId = faqQuestion.getAttribute("aria-controls");
        const faqAnswer = document.getElementById(answerId);

        if (!faqAnswer) {
            return;
        }

        faqQuestion.addEventListener("click", function () {
            const isOpen = faqQuestion.classList.contains("active");

            faqQuestion.classList.toggle("active", !isOpen);
            faqQuestion.setAttribute("aria-expanded", String(!isOpen));

            faqAnswer.classList.toggle("open", !isOpen);
            faqAnswer.setAttribute("aria-hidden", String(isOpen));
        });
    });

});