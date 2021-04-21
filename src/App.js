import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import BooksList from './components/BooksList';
import { useState } from 'react';

function App() {
  const [button, setbutton] = useState(false)
  const [view, setview] = useState(false)

  const clickHandler=()=>{
    setview(()=>!view)

  }

  const changeHandler=()=>{
    setbutton(()=>!button)
  }
  return (
    <div className="app ">
      <Sidebar button={button} className="content-to-hide d-sm-none d-xs-none " setbutton={setbutton} changeHandler={changeHandler}/>
      <BooksList button={button}  className="" clickHandler={clickHandler} setbutton={setbutton} changeHandler={changeHandler} view={view} setview={setview}/>
    </div>
  );
}

export default App;
