const initSlider = () => {
    const imgList = document.querySelector(".slider-wrapper  .img-list ");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button ");


    slideButtons.forEach (button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "first-button" ? -1 : 1;
            const scrollAmount = imgList.clientWidth * direction;
            imgList.scrollBy({left: scrollAmount, behavior: "smooth" }) ;
        })
    })

    
}

window.addEventListener("load", initSlider);


const dropdown = document.querySelector(".drop-down");

const list = document.querySelector(".list");

const selected = document.querySelector(".selected")

dropdown.addEventListener("click" , () =>{
    list.classList.toggle("show")
})


const dropdown1 = document.querySelector(".drop-down1");

const list1 = document.querySelector(".list1");

const selected1 = document.querySelector(".selected1")

dropdown1.addEventListener("click" , () =>{
    list1.classList.toggle("show1")
})


const dropdown2 = document.querySelector(".drop-down2");

const list2 = document.querySelector(".list2");

const selected2 = document.querySelector(".selected2")

dropdown2.addEventListener("click" , () =>{
    list2.classList.toggle("show2")
})

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar=document.querySelector(".nav-list_box");
    navBar.classList.toggle('active');
}