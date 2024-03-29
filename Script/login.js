const login_btn = document.querySelector(".login-button");


login_btn.addEventListener("click", ()=>{
    const email = document.getElementById("email").value;
    const pswd = document.getElementById("pswd").value;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email === ""){
        document.getElementById("msg1").innerHTML = "please Enter your email address.";
        return false;
    }
   
    if(!emailRegex.test(email)){
        document.getElementById("msg1").innerHTML = "Please enter a valid email address.";
        return false;
    }
    if(pswd === ""){
        document.getElementById("msg2").innerHTML = "please Enter your password.";
        return false;
    }
    Swal.fire({
            title: "Good job!",
            text: "login SuccessFully!",
            icon: "success"
    });
});
