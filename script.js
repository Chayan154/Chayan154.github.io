window.onload = function() {

let navclk = true;
const brgbtn = document.querySelector('.navbtn');
const navbar = document.querySelector('.navmenu');

brgbtn.addEventListener('click',() => {
    if(navclk) {
        navclk = false;
        brgbtn.classList.add("navopn");
        navbar.style.right = '0px';
        
    }
    else{
        navclk = true;
        brgbtn.classList.remove("navopn");
        navbar.style.right = '-60%';
    }
});

}
