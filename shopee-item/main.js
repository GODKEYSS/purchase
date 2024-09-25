let count = 0; 
function increase(){
    count++;
    document.getElementById('quan').value = count
}

function decrease(){
    if(count > 0){
        count--;
        document.getElementById('quan').value = count;
    }
}
