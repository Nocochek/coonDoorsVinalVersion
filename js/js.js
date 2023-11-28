const burger = document.querySelector('#burger')
const NavHeader =document.querySelector('.nav-header')
const navLinks = document.querySelectorAll('.header-link')

burger.addEventListener('click',()=>{
    NavHeader.classList.toggle('open')
    navLinks.forEach(function(item){
        item.classList.toggle('link-none')
    })
        
    })

    AOS.init();
