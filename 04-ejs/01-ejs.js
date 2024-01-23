function cualEsMayor(a,b){
    if (a>b){
        console.log("a es mayor")
    }
    else if(a<b){
        console.log("b es mayor")
    }else{
        console.log("son iguales")
    }
}


/*otra manera de hacer*/
function cualEsMayor2(a,b){
    return (a>b)?a:b;
}
