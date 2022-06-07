for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage.key(i);
    localStorage.getItem(element);
    
    addElement(element);
}