const btns = document.querySelectorAll(".filter");
const natures = document.querySelectorAll(".nature");
const cars = document.querySelectorAll(".car");
const people = document.querySelectorAll(".people");
const items = [...natures, ...cars, ...people];
items.forEach((item) => {
      item.style.display = "none";
})
for(let  i = 0; i < btns.length; i++){
      btns[i].addEventListener("click", (e) => {
           const activeBtn = document.querySelector(".active");
           activeBtn.className = activeBtn.className.replace(" active", "");
           e.target.className += " active";
           const id = e.target.dataset.id;
           filterItems(id);           
      });
}
filterItems("all");
function filterItems(c){
     if(c === "all"){
           c = "";
     }
     for(let i = 0; i < items.length; i++){
          removeClass(items[i], "show");
          if(items[i].className.indexOf(c) > -1){
               addClass(items[i], "show");
          }
     }
}
function removeClass(element, class_name){
     let arr1, arr2;
     arr1 = element.className.split(" "); // string se substring create karta and then usko ek array me daal ek array return karta hain.....
     arr2 = class_name.split(" ");
     for(let i = 0; i < arr2.length; i++){
          while(arr1.indexOf(arr2[i]) > -1){
                arr1.splice(arr1.indexOf(arr2[i]), 1); 
          }
     }     
     element.className = arr1.join(" "); // if there is only one item in an array then the separator doesn't have any impact over the array and it returns as it is but in the form string..... 
}
function addClass(element, class_name){
      let arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = class_name.split(" ");
      for(let i = 0; i < arr2.length; i++){
          if(arr1.indexOf(arr2[i]) == -1){
               element.className += " " + arr2[i];
          } 
      }
};
