function so(){
    let arr=[1,2,3,4,5,6,7,8,9,10]
    for(let i=0;i<10;i++){
        for(let j=i+1;j<arr.length-1;j++){
           if(arr[i]+arr[j]==10){
            console.log(arr[i],arr[j]);
           }
        }
    }
}so()