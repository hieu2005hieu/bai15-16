let text ="hello world";
let text2="helowrd"
       for ( let i=0; i < text2.length; i++ ) {
        let count=0;
        for ( let j=0; j<text.length; j++){
            if (text2[i]==text[j]){
                count++;  
            }
        }console.log(` chu ${text2[i]} duoc lap lai ${count} lan` );
       }