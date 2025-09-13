let textarea=document.querySelector("textarea");
if(localStorage.getItem("note")){
    textarea.value=localStorage.getItem("note");
}
let submit= document.querySelector("#submit");
let reset= document.querySelector("#reset");

const animation=(url,element,color)=>{
    element.style.background = `${color} url('./assets/svg/check.svg') center center / contain no-repeat`;
    let i=0;
    let compteur=setInterval(() => {
        i++;
        if(i<2){
            element.style.background = `${color} url(${url}) center center / contain no-repeat`;
            clearInterval(compteur)
        }
    }, 1000);
}
textarea.addEventListener("keyup",()=>{
    let content=textarea.value;
    localStorage.setItem("note",content);
})

submit.addEventListener("click",()=>{
    navigator.clipboard.writeText(textarea.value)
    animation("./assets/svg/copy.svg",submit,"white")
})
reset.addEventListener("click",()=>{
    navigator.clipboard.writeText(textarea.value)
    animation("./assets/svg/bin.svg",reset,"rgba(255, 0, 0, 0.682)")
})