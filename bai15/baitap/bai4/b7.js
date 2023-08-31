function namNhuan(nam){
    if(nam%100==0){
        if(nam%400==0){
          console.log("day la nam nhuan");
        }else {
            console.log("k la nam nhuan");
        }
    }else{
        if(nam%4==0){
            console.log("day la nam nhuan");
        } else{
             console.log("k la nam nhuan");
        }
    }
}namNhuan(2020) 