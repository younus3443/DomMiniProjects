const plus=document.querySelector(".plus")
const minus=document.querySelector('.minus')
const count=document.querySelector(".count")
const input=document.querySelector('input')
const reset=document.querySelector('.reset')


plus.addEventListener("click",()=>{
    count.textContent=Number(count.textContent)+Number(input.value)
    
})
minus.addEventListener("click",()=>{
    count.textContent=Number(count.textContent)-Number(input.value)
})
reset.addEventListener("click",()=>{
    count.textContent=0
})
document.addEventListener("keydown",(e)=>{
    if(e.key==="+"){
        count.textContent=Number(count.textContent)+Number(input.value)
    }
    if(e.key==="-"){
        count.textContent=Number(count.textContent)-Number(input.value)  
    }
    if(e.key==="ArrowUp"){
        input.value++
    }
    if(e.key==="ArrowDown"){
        input.value--
    }
})

