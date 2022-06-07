const btn = document.querySelector('footer');
const panel = document.querySelector('.panel');
const addBtn = document.querySelector('button');
const input = document.querySelector('input');
//const tasksInput = document.querySelector('tasks');

btn.addEventListener('click', ()=>{
    if(panel.className === 'panel panel-display panel-active' || panel.className === 'panel panel-active panel-display'){
        panel.classList.toggle('panel-active');
        setTimeout(()=>{
            panel.classList.toggle('panel-display');
        }, 2000);
    }
    else if(panel.className === 'panel'){
        panel.classList.toggle('panel-display');
        setTimeout(()=>{
            panel.classList.toggle('panel-active');
        }, 1);
    }
});

addBtn.addEventListener('click', ()=>{
    if(input.value.length > 0 && input.value.length < 33){
        let item = document.createElement('div');
        item.classList.add('item');
    
        let box = document.createElement('div');
        box.classList.add('box');
        
        let span = document.createElement('span');
        span.innerHTML = input.value;
        input.value = null;
        
        let remove = document.createElement('div');
        remove.classList.add('remove');
            
        item.appendChild(box);
        item.appendChild(span);
        item.appendChild(remove);
        
        tasks.appendChild(item);
        
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

        remove.addEventListener('click', ()=>{
            item.remove();
            localStorage.removeItem(span.innerHTML);
            counter.innerHTML = 'COMPLETED (' + (completed.children.length-1) + ')';
        });
    
        localStorage.setItem(span.innerHTML, 'no');
    }
});