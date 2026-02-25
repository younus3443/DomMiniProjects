const next = document.querySelector(".b2")
const previous = document.querySelector('.b1')
const text = document.querySelector("p")
const progress = document.querySelector(".progress")

const steps = [
    "Add contact details for further communications.",
    "Add shipping address for successful delivery.",
    "Complete Payment to complete the order.",
    "Ready to get delivered!",
    "Order Delivered successfully!🎉"
]

let cs = 0

const circles = document.querySelectorAll('.c button')

function updateStep() {
    text.innerText = steps[cs]

    circles.forEach((circle, index) => {
    // remove all states first
    circle.classList.remove(
        "bg-blue-500","bg-green-500","bg-gray-300","text-white","scale-110","shadow-lg"
    )

    if(index < cs){

        circle.classList.add("bg-green-500","text-white")
    }
    else if(index === cs){

        circle.classList.add("bg-blue-500","text-white","scale-110","shadow-lg")
    }
    else{
        circle.classList.add("bg-gray-300")
    }
})

    const percent = Math.min(cs, circles.length - 1) / (circles.length - 1) * 100
    progress.style.width = percent + "%"

    previous.disabled = cs === 0
    next.disabled = cs === steps.length - 1
}

next.addEventListener("click", () => {
    if (cs < steps.length - 1) {
        cs++
        updateStep()
    }
})

previous.addEventListener("click", () => {
    if (cs > 0) {
        cs--
        updateStep()
    }
})

updateStep()