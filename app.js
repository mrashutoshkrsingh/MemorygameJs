let cards=document.querySelectorAll('.memory-card');
let hasFlipCard=false,
firstCard,secondCard,lockBoard=false;
function flipcard(){
    if(lockBoard||this===firstCard)
    return;
    this.classList.add('flip')
   if(!hasFlipCard){
    firstCard=this;
    hasFlipCard=true;
    return;
   }
   else{
       hasFlipCard=false;
        secondCard=this;
        lockBoard=true;
        console.log(firstCard,secondCard);
        if(firstCard.dataset.framework===secondCard.dataset.framework)
        {
            firstCard.removeEventListener('click',flipcard);
            secondCard.removeEventListener('click',flipcard);
            lockBoard=false;
        }
        else{
            setTimeout(()=>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockBoard=false;
            },1000);
        }
   }
}

cards.forEach(card=> card.addEventListener('click',flipcard));