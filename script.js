// const signBtn= document.querySelector(".signBtn");
// const loginBtn= document.querySelector(".loginBtn");
// const moveBtn= document.querySelector(".moveBtn");



// loginBtn.addEventListener("click",() => {
//     moveBtn.classlist.add("rightBtn");
// });


 const singnBtn = document.querySelector(".signBtn");
 const loginBtn = document.querySelector(".loginBtn");
 const movBtn = document.querySelector(".moveBtn");
 const singup = document.querySelector(".singup");
 const login = document.querySelector(".login");

   loginBtn.addEventListener("click",() =>{
    movBtn.classList.add( "rightBtn");
    login.classList.add("loginform");
    singup.classList.remove("singupform");
    movBtn.innerHTML = "Login";


  });
 singnBtn.addEventListener("click",() =>{
    movBtn.classList.remove( "rightBtn");
    login.classList.remove("loginform");
    singup.classList.add("singupform");
    movBtn.innerHTML = "SignUp";
 });
