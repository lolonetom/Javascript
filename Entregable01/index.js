let entrada = prompt("¿Qué fue lo último que hizo Napoleón?");

while((entrada !== "Morirse" ) && (entrada !== "morirse")){
    alert("Tu respuesta fue: "+ entrada);
    entrada = prompt("Intenta de nuevo. ¿Qué fue lo último que hizo Napoleón? pista: morirse");
}