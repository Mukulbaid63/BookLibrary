import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <BooksList/>
    </div>
  );
}

export default App;
