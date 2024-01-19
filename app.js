const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn){


btn.addEventListener('click',function(e){
    if (e.currentTarget.classList.contains("decrease")){
        value.textContent--;
    } else if(e.currentTarget.classList.contains("increase")){
        value.textContent++;
    } else {
        value.textContent=0;
    }
    if (value.textContent>0){
        value.style.color= "green";
    }else if(value.textContent<0){
        value.style.color="red";
    }else {
        value.style.color="black";
    }


});
});