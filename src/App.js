import React, {useState, useEffect} from 'react';
import './App.css';
import LifeCycleHooks from "./components/LifeCycleHooks/LifeCycleHooks";

function App() {
  // Creo una variabile si stato che si chiama "appCounter"
  // Per la dichiarazione si usa la sintassi ES6 decostructioin
  // "appCounter" è la variabile che conterrà il valore del contatore
  // "setAppCounter" è la funzione che occorre usare per aggiornare il valore del contatore
  // "useState(0)" inizializzare la variabile con il valore 0
  const [appCounter, setAppCounter] = useState(0);

  const handleClickApp = (sign) => {    
    if (sign === '+') {
      setAppCounter (appCounter + 1);
    } else {
      setAppCounter (appCounter - 1);
    }
  };
  
  // React Hooks: componentDidMount and componentWilUnmount
  useEffect(() => {    
      // Tutto il codice nel corpo della funzione verrà eseguito se si verifica l'evento componentDidMount
      console.log ('App.js componentDidMount'); // React Hooks: componentDidMount

      // Se voglio eseguire delle righe di codice durante l'evento componentWilUnmount devo mettere 
      // "return" e passargli una funzione.
      return () => {
        console.log ('App.js componentWillUnmount'); // React Hooks: componentWillUnmount
      }
    }, []);

   // React Hooks: componentDidUpdate
   useEffect (() => {
    console.log ('App.js componentDidUpdate');
   });


  return (
    <div className="App">
      <header className="App-header">
        <h2>Gestione useState e React Hooks</h2>

        {/**
        Inserisco i due bottoni dove in corrispondenza dell'evento "onClick" chiamo una funzione handleClickApp che riceve
        un parametro che indica se fare +1 sul contatore o -1 sul contatore.
        */}
        <button onClick={() => handleClickApp('+')}>Aggiungi 1 App.js</button>        
        <button onClick={() => handleClickApp('-')}>Sottrai 1 App.js</button>  
        <h4>Contatore App.js: {appCounter}</h4>

        <LifeCycleHooks
         text="Bottone LifeCycleHooks.js 1"
         counterProp={appCounter}
        />

        <LifeCycleHooks
         text="Bottone LifeCycleHooks.js 2"
         counterProp={appCounter}
        />
        
      </header>
    </div>
  );
}

export default App;
