const form = document.getElementById("signupForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            alert("Please fill all required fields.");
            return;
        }

        alert("🎉 Registration Successful!");
        this.reset();
    });
}