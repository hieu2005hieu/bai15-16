let arr =[1,2,3,4,5,6,7,8]
let a=prompt("Nhập ký tự");
let checked = (arr, a)=>{
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==a) {
            count++
        }
    }
    if (count!=0) {
        return count;
    }
    else{
        return "-1";
    }
}
console.log(checked(arr,a));