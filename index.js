function insert(num){
    var numero = document.getElementById('resp').innerHTML;
    document.getElementById('resp').innerHTML = numero + num;
    
}

function clean(){
    document.getElementById('resp').innerHTML ='';
}

function back(){
    var resp = document.getElementById('resp').innerHTML;
    document.getElementById('resp').innerHTML = resp.substring(0, resp.length -1);
}

function calcular(){
    var resp = document.getElementById('resp').innerHTML;
    if(resp){
        document.getElementById('resp').innerHTML = eval(resp);
    } else{
        document.getElementById('resp').innerHTML = 'Nada...'
    }
}