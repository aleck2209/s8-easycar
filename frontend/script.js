const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");


burger.addEventListener("click", ()=>{

    navigation.classList.toggle("active");

});

const element = document.querySelector(".badge-vert");

if (window.innerWidth <= 990) {
    element.classList.remove(".badge-vert");
}