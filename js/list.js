const hearts = document.querySelectorAll('.box');
const burgir = document.querySelector('.burgir');

const completed = document.querySelector('.completed');
const tasks = document.querySelector('.tasks');

const counter = document.querySelector('.completed-text');

burgir.addEventListener('click', ()=>{
    burgir.classList.toggle('burgir-anim');
});

const addElement = (name)=>{
    let item = document.createElement('div');
    item.classList.add('item');
    
    let box = document.createElement('div');
    box.classList.add('box');
        
    let span = document.createElement('span');
    span.innerHTML = name;

    let remove = document.createElement('div');
    remove.classList.add('remove');
        
    item.appendChild(box);
    item.appendChild(span);
    item.appendChild(remove);
        
    tasks.appendChild(item);

    if(localStorage.getItem(name) === 'yes'){
        box.classList.add('fullHeart');
        completed.insertBefore(box.parentElement, null);
        counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';
    }
    else{
        tasks.appendChild(item);
    }

    box.addEventListener('click', ()=>{
        if(box.className === 'box fullHeart'){
            box.classList.remove('fullHeart');
            tasks.insertBefore(box.parentElement, null);
            counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';

            localStorage.setItem(span.innerHTML, 'no');
        }
        else{
            box.classList.add('fullHeart');
            completed.insertBefore(box.parentElement, null);
            counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';

            localStorage.setItem(span.innerHTML, 'yes');
        }
    });

    remove.addEventListener('click', ()=>{
        item.remove();
        localStorage.removeItem(span.innerHTML);
        counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';
    });
    
    localStorage.setItem(name, 'no');
};