const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// =========================
// Seller Registration
// =========================
app.post("/register", (req, res) => {

    res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Registration Successful</title>

<style>

body{
    font-family:Arial,sans-serif;
    background:#0d1117;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.box{
    background:#161b22;
    padding:40px;
    border-radius:12px;
    text-align:center;
    box-shadow:0 0 20px rgba(0,0,0,.4);
}

h1{
    color:#00d26a;
}

a{
    display:inline-block;
    margin-top:20px;
    padding:12px 25px;
    background:#0066ff;
    color:white;
    text-decoration:none;
    border-radius:8px;
}

</style>

</head>

<body>

<div class="box">

<h1>✅ Registration Successful!</h1>

<p>Your car has been registered successfully.</p>

<a href="/">Go Back Home</a>

</div>

</body>
</html>
    `);

});


// =========================
// Buyer Registration
// =========================
app.post("/buyer-register", (req, res) => {

    res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Buyer Registration</title>

<style>

body{
    font-family:Arial;
    background:#0d1117;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.box{
    background:#161b22;
    padding:40px;
    border-radius:12px;
    text-align:center;
}

h1{
    color:#00d26a;
}

a{
    display:inline-block;
    margin-top:20px;
    padding:12px 25px;
    background:#0066ff;
    color:white;
    text-decoration:none;
    border-radius:8px;
}

</style>

</head>

<body>

<div class="box">

<h1>🎉 Registration Successful!</h1>

<p>Thank you for registering with <b>Proud To Be A Second Owner</b>.</p>

<p>Our smart recommendation system will help you find your dream car.</p>

<h3>🚗 Happy Car Hunting!</h3>

<a href="/">🏠 Back to Home</a>

</div>

</body>
</html>
    `);

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});