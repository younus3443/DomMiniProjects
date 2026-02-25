

const leftBtn=document.querySelector(".b1")
const rightBtn=document.querySelector(".b3")
const dleftBtn=document.querySelector(".b2")
const drightBtn=document.querySelector(".b4")
const left=document.querySelector(".left")
const right=document.querySelector(".right")

leftBtn.addEventListener("click",()=>{
    
    const checked=document.querySelectorAll(".right .list input:checked ")
    if(checked.length===0) return 
    checked.forEach((item)=>{
        const li =item.closest(".list")
        left.appendChild(li)
        item.checked=false

    })
    
})

rightBtn.addEventListener("click",()=>{
    const checked=document.querySelectorAll(".left .list input:checked")
    if(!checked) return
    checked.forEach((item)=>{
        const li=item.closest(".list")
        right.appendChild(li)
        item.checked=false
    })
    
})

dleftBtn.addEventListener("click",()=>{
    const items=document.querySelectorAll('.right .list')
    items.forEach((item)=>{
        left.appendChild(item)
    })
})
drightBtn.addEventListener("click",()=>{
    const items=document.querySelectorAll(".left .list")
    items.forEach((item)=>{
        right.appendChild(item)
    })
})
