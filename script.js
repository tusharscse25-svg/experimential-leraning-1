function showPage(pageId) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

let rating = document.getElementById("rating");
let ratingValue = document.getElementById("ratingValue");

rating.oninput = function () {
    ratingValue.innerText = this.value;
};

document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault();
    showPage("thankyou");
});
