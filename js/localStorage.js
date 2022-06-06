for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i);
    localStorage.getItem(element);
    
    let item = document.createElement('div');
    item.classList.add('item');
    
    let box = document.createElement('div');
    box.classList.add('box');
        
    let span = document.createElement('span');
    span.innerHTML = element;
        
    item.appendChild(box);
    item.appendChild(span);
        
    tasks.appendChild(item);

    if(localStorage.getItem(element) === 'yes'){
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

            //add to localStorage
            localStorage.setItem(span.innerHTML, 'no');
        }
        else{
            box.classList.add('fullHeart');
            completed.insertBefore(box.parentElement, null);
            counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';

            //add to localStorage
            localStorage.setItem(span.innerHTML, 'yes');
        }
    });
}