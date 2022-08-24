let filmes= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];
console.log(filmes.length);



for (let i = 0 ; i < filmes.length; i++){
    filmes[i] = " filme "+filmes[i].toUpperCase();
}

console.log(filmes);