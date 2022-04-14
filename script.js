let addBtn = document.querySelector(".addbutton");
let input = document.querySelector(".input");
let list = document.querySelector("ul")
let closeBtn = document.querySelector(".closeBtn");
let sort = document.querySelector(".drop");
let img = document.querySelector(".img")
let arr = [];
let storage=localStorage.getItem("arr");
if(storage===null){
    arr=[]
}else{
    arr=JSON.parse(localStorage.getItem("arr"));
    let space = "";
    arr.forEach((element, index) => {
        space += `
    <li><p>${element}</p> <button class="closeBtnList" onclick="del(${index})"><img src="./images/xbutton.svg" /></button> </li>
    `
    })
    list.innerHTML = space;
}
addBtn.addEventListener("click", () => {
    arr.push(input.value);
    if(input.value==""){
        alert("Daxil edin.")
    }else{
    let space = "";
    arr.forEach((element, index) => {
        space += `
    <li><p>${element}</p> <button class="closeBtnList" onclick="del(${index})"><img src="./images/xbutton.svg" /></button> </li>
    `
    })
    list.innerHTML = space;
    list.style.border = " 1px solid #C4C4C4"
    input.value = "";
localStorage.setItem("arr",JSON.stringify(arr))
    }
})

function del(index) {
    arr.splice(index, 1)
    let space = "";
    arr.forEach((element, index) => {
        space += `
    <li><p>${element}</p> <button class="closeBtnList" onclick="del(${index})"><img src="./images/xbutton.svg" /></button> </li>
    `
    })
    list.innerHTML = space;

    if (space == "") {
        list.style.border = "none"
    }
localStorage.setItem("arr",JSON.stringify(arr))
 
}
closeBtn.addEventListener("click", () => {
    input.value = ""
})

sort.addEventListener("click", (e) => {
    if (e.target.getAttribute("src") == "./images/sort.svg") {
        arr.sort();
        let space = "";
        arr.forEach((element, index) => {
            space += `
    <li><p>${element}</p> <button class="closeBtnList" onclick="del(${index})"><img src="./images/xbutton.svg" /></button> </li>
    `
        })
        list.innerHTML = space;
        list.style.border = " 1px solid #C4C4C4"
        input.value = ""
        e.target.src = "./images/sortback.svg"
    }
    else if(e.target.getAttribute("src") == "./images/sortback.svg"){
        arr.sort().reverse()
        let space = "";
        arr.forEach((element, index) => {
            
            space += `
    <li><p>${element}</p> <button class="closeBtnList" onclick="del(${index})"><img src="./images/xbutton.svg" /></button> </li>
    `
        })
        list.innerHTML = space;
        list.style.border = " 1px solid #C4C4C4"
        e.target.src = "./images/sort.svg"
    }
}
)