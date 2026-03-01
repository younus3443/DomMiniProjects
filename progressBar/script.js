


const start=document.querySelector(".b1")
const stop=document.querySelector(".b2")
const reset=document.querySelector(".b3")
const progress=document.querySelector(".progress")

let timer=null
let count=0

start.addEventListener("click",()=>{
    if(timer!==null) return 
    timer=setInterval(()=>{
        count++
        progress.style.width=count+"%"
        if(count>=100){
            clearInterval(timer)
            // timer=null
        }
        
    },100)


})
stop.addEventListener("click",()=>{
    clearInterval(timer)
    timer=null
})
reset.addEventListener("click",()=>{
    clearInterval(timer)
    timer=null
    count=0
    progress.style.width="0%"

})