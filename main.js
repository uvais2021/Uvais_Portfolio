
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 30) {
        nav.classList.add("header-scrolled");
    }
    // else if(document.documentElement.scrollTop < 30) {
    //     nav.classList.remove("navbar")

    // }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// window.onscroll = function () {
//     if (document.documentElement.scrollTop < ) {
//           nav.classList.remove("header-scrolled");
//     } else {

//         nav.classList.add("header-scrolled");
//     }
// }

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

let hamburger = document.getElementById("ok");
hamburger.addEventListener("click", () => {
    // hamburger.textContent='X'
    hamburger.classList.toggle("uvais");
})



// let mainBody = document.getElementById('main-body');
// let hbtn = document.getElementById('hive');
// let daybtn = document.getElementById('day-btn');
// let homeBody = document.getElementById('home');
// let moon=document.getElementById('moon-btn');



const form = document.getElementById('form');
const uname = document.getElementById('name');
const uemail = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('message');



var a = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    if (a == 4) {
        alert('Message Sent Successful');
        
    } else {
        a = 0;
    }
});

function checkInputs() {
    const nameValue = uname.value.trim();
    const emailValue = uemail.value.trim();
    const msgValue = msg.value.trim();
    const phoneValue = phone.value.trim();

    if (nameValue === '') {
        setErrorFor(uname, 'Name need to fill')
    }
    else {
        setSuccessFor(uname);
    }

    if (emailValue === '') {
        setErrorFor(uemail, 'Email cannot be blank')
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(uemail, 'Invalid email')
    }
    else {
        setSuccessFor(uemail)

    }
    if (msgValue === '') {
        setErrorFor(msg, 'Message connot be blank')
    }
    else {
        setSuccessFor(msg)
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'Phone no connot be blank')
    }
    else if (phoneValue.length != 10) {
        setErrorFor(phone, 'Number should be 10 digits')
    }
    else {
        setSuccessFor(phone)

    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'error input';
    // formControl.className = 'form-control label';


    small.innerText = message;
}

function setSuccessFor(input) {
    a += 1;
    const formControl = input.parentElement;
    formControl.className = 'success input';
    // formControl.className = 'form-control label';

}
function isEmail(uemail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(uemail);
}
