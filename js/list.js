const hearts = document.querySelectorAll('.box');
const burgir = document.querySelector('.burgir');

const completed = document.querySelector('.completed');
const tasks = document.querySelector('.tasks');

const counter = document.querySelector('.completed-text');

burgir.addEventListener('click', ()=>{
    burgir.classList.toggle('burgir-anim');
});

hearts.forEach(element => {
    element.addEventListener('click', ()=>{
        if(element.className === 'box fullHeart'){
            element.classList.remove('fullHeart');
            tasks.insertBefore(element.parentElement, null);
            counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';
        }
        else{
            element.classList.add('fullHeart');
            completed.insertBefore(element.parentElement, null);
            counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';
        }
    });
});