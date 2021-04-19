import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import BooksList from './components/BooksList';
import { useState } from 'react';

function App() {
  const [button, setbutton] = useState(false)
  const changeHandler=()=>{
    setbutton(()=>!button)
  }
  return (
    <div className="app">
      <Sidebar button={button} setbutton={setbutton} changeHandler={changeHandler}/>
      <BooksList button={button} setbutton={setbutton}/>
    </div>
  );
}

export default App;
