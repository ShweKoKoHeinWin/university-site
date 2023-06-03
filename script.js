const   navbarToggler = document.querySelector('.navbar-toggler'),
        navbarAuto = document.querySelector('.navbar-nav'),
        navbarMainItems = document.querySelectorAll('.header .navbar-nav .nav-item');

// Navbar-nav
window.addEventListener('resize', ()=>{
    navbarAuto.classList.remove('slide');
    navbarToggler.firstChild.classList.replace('fa-close', 'fa-bars');
})

    navbarToggler.addEventListener("click", autoChangeNav);
    function autoChangeNav() {
        navbarAuto.classList.toggle('slide'); 
        
        if(navbarAuto.classList.contains('slide')) {
            this.firstChild.classList.replace('fa-bars', "fa-close");
        }
        else {
            this.firstChild.classList.replace('fa-close', "fa-bars");
        }
    }
    navbarMainItems.forEach(navbarMainItem => {
        navbarMainItem.addEventListener("click", addActive);
    })
    addActive();
    function addActive(e) {
        //for(let x = 0; x < this.parentNode.children.length; x++) {
            //this.parentNode.children[x].classList.remove('active');
        //}
        for(let x = 0; x < navbarMainItems.length; x++){
            navbarMainItems[x].classList.remove('active');
        }
        this.classList.add('active');
    }