let starName = prompt("Nhập tên ngôi sao");
let arrStarOne = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arrStarTwo = ["Ursa Minor", " Tarurus", "Cygnus", " Lyra", "Aquila", "Ursa Major", "Leo"];
let checkStarName = a => {
    let number = 0;
    number = arrStarOne.indexOf(a) ;
    if (number == -1) {
        console.log("ko có ngôi sao trong bài");
    }
    else {
        console.log(arrStarTwo[number]);
    }
}
checkStarName(starName);