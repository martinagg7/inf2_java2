function crearArray(n){
    if (n<=0){
        return[]
    }
    else{
        let arr=[]
        for(let i=0;i<n;i++){
            arr[i]=i++

        }
        return arr
    }
    
}