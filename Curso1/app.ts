let prom1 = new Promise(function(resolver,rechazar){
    setTimeout(()=>{
        console.log("Promesa terminada");

        //termina bien
        resolver();

        //termina mal
        //rechazar();
    },1500);
});

console.log("Paso 1");

prom1.then(
    function(){
        console.log("Ejecutar cuando termina bien");
    },
    function(){
        console.error("Ejecutar cuando termina mal");
    }
);

console.log("Paso 2");