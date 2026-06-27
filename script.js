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

// --- YAHAN SE API KA CODE HAI ---
document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault(); // Page ko automatic reload hone se rokne ke liye
    
    let formData = new FormData(this); // Saara data ek sath pack karne ke liye
    
    // ⚠️ APNA ID YAHAN CHANGE KARO
    let formspreeId = "YOUR_FORMSPREE_ID"; 
    let apiUrl = "https://formspree.io/f/" + formspreeId;

    // API ko data send karna
    fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showPage("thankyou"); // Data submit hote hi Thank You page dikhao
            document.getElementById("feedbackForm").reset(); // Form khali karne ke liye
        } else {
            alert("Oops! Kuch gadbad ho gayi. Kripya dobara try karein.");
        }
    })
    .catch(error => {
        alert("Network Error! Internet check karein.");
    });
});
