const input = document.getElementsByTagName('input');
const item = document.getElementsByClassName('item');
const alert_par = document.getElementsByClassName('alert');
const alert_icon = document.getElementsByClassName('icon-alert');
const btn = document.getElementsByTagName('button')[0];

for(i = 0; i < input.length; i++){
    input[i].addEventListener('focus', function(i){
        item[i].classList.add('focus');
        for(j = 0; j < item.length; j++){
            if(i != j) item[j].classList.remove('focus');
        }
    }.bind(null, i));
}

btn.addEventListener('click', function(){
    for(i = 0; i < input.length; i++){
        if(input[i].value.trim() == ""){
            alert_par[i].classList.remove('hidden');
            alert_icon[i].classList.remove('hidden');
            item[i].classList.add('err')
        }
        else{
            alert_par[i].classList.add('hidden');
            alert_icon[i].classList.add('hidden');
            item[i].classList.remove('err')
        }
    }

    if(input[2].value.indexOf('@') > 0) a = true;
    else a = false;
    if(input[2].value.indexOf('.') > 0) b = true;
    else b = false;
    if(a && b){
        alert_par[2].classList.add('hidden');
        alert_icon[2].classList.add('hidden');
        item[2].classList.remove('err');
    }
    else{
        alert_par[2].classList.remove('hidden');
        alert_icon[2].classList.remove('hidden');
        item[2].classList.add('err');
    }
})