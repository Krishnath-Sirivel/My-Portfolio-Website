function changeColor() {
    document.body.style.backgroundColor = 
        '#' + Math.floor(Math.random()*16777215).toString(16);
}

function resetColor() {
    document.body.style.backgroundColor = '#' + 000000;
}
