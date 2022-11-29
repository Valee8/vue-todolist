// Descrizione:
// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe.

// Bonus possibili (qualche idea ma sperimentate che volete):
// curare l’interfaccia e renderla più carina e/o funzionale;
// gestire anche lo stato “done” del task;
// far succedere qualcosa al completamento del caricamento dell’applicazione;
// etc..

const {createApp } = Vue;

createApp({
    data() {
      return {
        tasks: [
            { 
                text: 'Fare i compiti',
                done: false
            }, 

            { 
                text: 'Fare la spesa', 
                done: true 
            }, 
            
            { 
                text: 'Fare il bucato', 
                done: false
            }
        ]
    }
}
}).mount('#app')