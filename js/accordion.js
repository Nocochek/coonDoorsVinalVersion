const items = document.querySelectorAll('.question-item')

items.forEach(function(event){
    event.addEventListener('click',(event)=>{
        const itemHeader = event.target.closest('.one-block-content')
        const content = itemHeader.querySelector('.question-item-content')
       content.classList.toggle('hidden')
    })
})
