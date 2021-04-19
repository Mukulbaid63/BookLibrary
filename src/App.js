import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import BooksList from './components/BooksList';
import { useState } from 'react';

function App() {
  const [button, setbutton] = useState(false)
  return (
    <div className="app">
      <Sidebar button={button} setbutton={setbutton}/>
      <BooksList/>
    </div>
  );
}

export default App;
