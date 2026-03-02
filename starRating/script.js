
const result=document.querySelector(".result")
const stars=document.querySelectorAll('.star')

let selectedRating=0

stars.forEach((star)=>{
    star.addEventListener("click",()=>{
        selectedRating=star.dataset.value
        console.log(selectedRating)
        updateStars(selectedRating)
        result.textContent="Rating: "+selectedRating

    })
})


function updateStars(rating){
    stars.forEach((star)=>{
        if(star.dataset.value<=rating){
            star.classList.add("active")
        }else{
            star.classList.remove("active")
        }
    })
}
