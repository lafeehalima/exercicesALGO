// demo


function trouveLePlusGrand(nb1, nb2, nb3){
    if (nb1 > nb2){
       if (nb1 > nb3){
           return nb1;
       }
    }
    if (nb2 > nb3){
        return nb2;
    }
    return nb3;
}

// console.log(trouveLePlusGrand(20, 21, 19));

function avoirLaTableDe(table){
    for (let i = 0; i <= 10; i++){
        console.log(table + " x " + i + " = " + table*i);
    }
}

avoirLaTableDe(4);
avoirLaTableDe(6);