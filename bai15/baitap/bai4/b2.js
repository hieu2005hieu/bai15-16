/* let numbers=prompt("nhap so");
let count=0;
function soNguyen(){
    if(numbers<2){
         console.log("k la so nguyen to");
    }else{
        for(let i=0;i<=numbers;i++){
            if(numbers%i==0){
                count+=i;
            }
            if(count==numbers){
                console.log(`${numbers}la so nguyen to`);
            }else{
                console.log(`${numbers} k la so nguyen to}`);
            }
        }
    }
}soNguyen();
    */
let num = +prompt("moi nhap vao 1 so");
      function kiemtra(num) {
        if (num < 2) {
          return false;
        } else if (num == 2) {
          return true;
        } else num > 2;
        {
          for (let i = 2; i < num; i++) {
            if (num % i == 0) {
              return false;
            }
          }
          return true;
        }
      }
      let result = kiemtra(num);
      console.log(result);
