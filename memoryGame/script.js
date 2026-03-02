const cards = document.querySelectorAll(".card")
const moves=document.querySelector("p")
const reset=document.querySelector(".btn")

let firstCard = null
let secondcard = null
let pairs=0
let lockcard=false
let count=0

cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        if(lockcard) return 
        if(card===firstCard) return

    card.innerHTML = `<i class="${card.dataset.icon}"></i>`
    card.classList.add("flipped")

    if(!firstCard){
        firstCard=card
        count++
        moves.textContent="Total moves: "+count
        return 
    }
    secondcard=card
    count++
    moves.textContent="Total moves: "+count
    

    checkMatch()
    })
})

function resetBoard(){
    firstCard=null
    secondcard=null
    lockcard=false
}

function checkMatch(){
    if(firstCard.dataset.icon===secondcard.dataset.icon){
        pairs++
        resetBoard()

        if(pairs==cards.length/2){
            alert("Congraatulations you won")
        }
        
    }else{
        lockcard=true

        setTimeout(() => {
            firstCard.textContent=""
            secondcard.textContent=""
            firstCard.classList.remove("flipped")
            secondcard.classList.remove("flipped")
            resetBoard()

            
        },600);
    }
}

reset.addEventListener('click',()=>{
    cards.forEach((card)=>{
        card.textContent=""
        card.classList.remove("flipped") 
    })
    count=0
    firstCard=null;
    secondcard=null
    lockcard=false
    pairs=0
     moves.textContent="Total moves: 0"
})
