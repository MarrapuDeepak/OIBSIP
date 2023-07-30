let OP = document.getElementById("output-screen");

function display(num){
    OP.value += num;
}

function Calculate(){
    try{
        OP.value = eval(OP.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    OP.value = "";
}

function del(){
    OP.value = OP.value.slice(0,-1);
}

function log(){
    OP.value = Math.log(OP.value);
}

function pow(){
    OP.value = Math.pow(OP.value,2);
}

function pi(){
    OP.value = 3.14;
}

function sin(){
    OP.value = Math.sin(OP.value);
}

function cos(){
    OP.value = Math.cos(OP.value);
}

function tan(){
    OP.value = Math.tan(OP.value);
}

function sqrt(){
    OP.value = Math.sqrt(OP.value);
}

function e(){
    OP.value = 2.718;
}

function factorial(){
    let i, num, fact=1;
    num = OP.value;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    i = i - 1;
    OP.value = fact;
}
