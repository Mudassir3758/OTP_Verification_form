// only number allowed
const otpInputs = document.querySelectorAll(".otp-field");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, "").slice(0, 1); // allow only numbers

        if (input.value !== "" && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();  // move to next input
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            otpInputs[index - 1].focus(); // move to previous input
        }
    });

});



//  timer 
const resendBtn = document.getElementById("resendBtn");
const timerText = document.getElementById("timerText");

function startTimer() {
    let timeLeft = 30; 
    resendBtn.disabled = true;
    resendBtn.classList.add("disabled");

    let countdown = setInterval(() => {
        timeLeft--;
        timerText.innerHTML = `Resend in <strong>${timeLeft}s</strong>`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerText.innerHTML = "Didn't receive the code?";
            resendBtn.disabled = false;
            resendBtn.classList.remove("disabled");
            resendBtn.innerText = "Resend";
        }
    }, 1000);
}

startTimer();

resendBtn.addEventListener("click", function() {
    resendBtn.innerText = "Sending...";
    
    setTimeout(() => {
        startTimer();
    }, 1000);
});