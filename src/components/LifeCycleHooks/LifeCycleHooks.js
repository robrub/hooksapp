// Importo useState e useEffect per usare variabili e Hooks
import React, {useState, useEffect} from 'react'; 

const LifeCycleHooks = (props) => {
  const [counter, setCounter] = useState (props.counterProp);

  const handleClick = () => {
    setCounter (counter + 1);
  };

  // React Hooks: componentDidMount and componentWilUnmount
  useEffect (() => {
    console.log ('LifeCycleHooks.js componentDidMount'); // React Hooks: componentDidMount
    return () => console.log ('LifeCycleHooks.js  componentWillUnmount'); // React Hooks: componentWillUnmount
  }, []);

  // React Hooks: componentWillReceiveProps
  useEffect (() => {
      setCounter (props.counterProp);
    }, [props.counterProp]
  );

  // React Hooks: componentDidUpdate
  useEffect (() => {
    console.log ('LifeCycleHooks.js  componentDidUpdate');
  });

  return (
    <div>
      <button onClick={handleClick}>{props.text}</button>
      <h4>Contatore LifeCycleHooks.js: {counter}</h4>
    </div>
  );
}

export default LifeCycleHooks;
