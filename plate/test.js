document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Optionally show a loader or disable button here
    // e.g., document.querySelector(".loader").style.display = "block";

    // Simulate successful upload (e.g., after AJAX or real file handling)
    // For now, wait 1 second and redirect
    setTimeout(function() {
        window.location.href = "./ThankYou.html";
    }, 1000);
});