import logo from './logo.svg';

import './/style.css' ;

import './/test'

function App() {
 
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && (
        <>
          <img src="logo192.png" alt="logo192"/>
          <img src={logo} alt="logo"/>
        </>
      )}
    </div>
  );
}


export default App;
