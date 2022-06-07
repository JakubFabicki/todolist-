const btn = document.querySelector('footer');

const panel = document.querySelector('.panel');
const addBtn = document.querySelector('button');
const input = document.querySelector('input');

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
        addElement(input.value);
        input.value = null;
    }
    else
        alert("Nieodpowiednia ilość znaków!");
});