const next=document.querySelector(".next")
const previous=document.querySelector(".previous")
const progress=document.querySelector(".progress")
const p=document.querySelector("p")


let steps=["Add contact details for further communications.","Add shipping address for successful delivery.",
    "Complete Payment to complete the order.","Ready to get delivered!","Order Delivered successfully!🎉"
]


let currentStep=0

const circles=document.querySelectorAll(".btns button")
function updateStep(){
    p.textContent=steps[currentStep]

    circles.forEach((circle,index)=>{
        circle.classList.remove("completed","active")
        if(index<currentStep){
            circle.classList.add("completed")
        }
        else if(index===currentStep){
            circle.classList.add("active")
        }
        

    })
    const percentage=Math.min(currentStep,circles.length-1)/(circles.length-1)*100
    progress.style.width=percentage+"%"
    previous.disabled=currentStep===0
    next.disabled=currentStep===steps.length-1
}

next.addEventListener("click",()=>{
    if(currentStep<steps.length-1){
        currentStep++
        updateStep()

    }
})

previous.addEventListener("click",()=>{
    if(currentStep>0){
        currentStep--
        updateStep()
    }
    
})