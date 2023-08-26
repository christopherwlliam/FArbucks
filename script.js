const toggleButton = document.getElementById('toggle_button');
const navList = document.getElementById('nav_list');

toggleButton.addEventListener('click', () =>{
    navList.classList.toggle('active2');
})

document.getElementById("form").addEventListener("submit", (e) => { e.preventDefault();

    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var checkBox = document.getElementById("agree");

    if(fullName.length < 6)
    {
        alert("Full name must be atleast 6 characters!"); return;
    }

    if(!emailValidation(email))
    {
        alert("Please enter a valid email!"); return; 
    }

    if(password.length < 8)
    {
        alert("Password must be atleast 8 characters!"); return;
    }

    if(!addressValidation(address))
    {
        alert("Please include \"Street\" in your address!"); return; 
    }

    if(!checkBox.checked)
    {
        alert("You must accept the terms & conditions!");
        return;
    }

    var confirmation = confirm("Are you sure you want to register?");

    if(confirmation){
        alert("Your account has been created!");
        setInterval('refresh()', 500);
    } else {
        alert("You cancelled your registration"); 
        setInterval('refresh()', 500);
    }


})

function refresh(){
    location.reload();
}

function emailValidation(email){
    return(email.indexOf("@") != -1) && (email.endsWith(".com"))
}

function addressValidation(email){
    return(email.indexOf("Street") != -1)
}