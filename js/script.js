let hide = document.getElementById("hidden");
let show = document.getElementById("show");
let rate = document.getElementById("rate");

hide.style.display = 'none';
let number_rate = 0;

function rate_number(num){
    number_rate = num;
    return number_rate;
}

function submit_rate(){
    console.log(number_rate);
    if(number_rate === 0){
        window.alert("You need to choose a rate.");
    }else if(number_rate === 1){
        showing_rate();
        return number_rate;
    }else if(number_rate === 2){
        showing_rate();
        return number_rate;
    }else if(number_rate === 3){
        showing_rate();
        return number_rate;
    }else if(number_rate === 4){
        showing_rate();
        return number_rate;
    }else if(number_rate === 5){
        showing_rate();
        return number_rate;
    }
}

function showing_rate(){
    const rate_div = document.createElement("span");
    rate_div.textContent = number_rate;
    rate.appendChild(rate_div);
    hide.style.display = '';
    show.style.display = 'none';
}