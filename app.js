let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const value1 = document.querySelector("#value1");
 
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increase')){
            count++;
            value1.textContent = "";
        }
        else{
            count = 0;
            value1.textContent = "";
        }
        if(count < 0){
            count = 0
            value1.textContent = "Your age can't be less than zero";
            value1.style.color = "red";
            // value.style.color = "red";
        }
        else if(count > 0){
            value.style.color = "green";
        }
        else{
            value.style.color = "black";
        }
        value.textContent = count;
    });
});