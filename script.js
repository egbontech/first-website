let navSlide = () => {
        
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav-links");
    let links = document.querySelectorAll(".nav-links li")
    //toggle the nav
    burger.addEventListener("click", () =>
     {
        nav.classList.toggle("nav-active");
         //burger animation
        
         burger.classList.toggle("toggle")
        
         //animation

  links.forEach((link, index) => { 

         
         if(link.style.animation){link.style.animation = ""}
         else {link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.5}s`}});   
        
   



  })

}
navSlide()

