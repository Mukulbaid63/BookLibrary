import React, { useEffect, useState } from 'react';
import '../styles/BooksList.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';
import BookItem from './BookItem';
const BooksList = () => {
    const [selectState, setSelectState] = useState(false);
    const [result, setresult] = useState([]);
    const [query, setquery] = useState("")

    const fetchQuery = () => {
        const finalQ=query==""?{}:query
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${finalQ}`
      )
        .then((response) => response.json())
        .then((r) => {

          setresult((p) => {
              console.log(r.items)
            return r.items;
          });
        });
    };
    useEffect(()=>{
        fetchQuery()
    },[query])
    useEffect(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q={}`)
        .then((response) => response.json())
        .then((r) => {
            
          setresult((p) => {
            console.log(r.items)
            return r.items;
          });
          setSelectState(true)
        });
    }, []);

    const changeHandler=(evt)=>{
        setquery(()=>evt.target.value);
    }
    return (
        <div className="bookslist d-flex flex-column">
            
            <div className="d-flex justify-content-between">
            <h2>Book Library</h2>
            <div className="d-flex justify-content-around">
                <button>
                <AppsIcon/>
                </button>
                <button>
                <ReorderIcon/>
                </button>
                <input value={query} onChange={changeHandler}></input>
            </div>
            </div>
            {selectState&&<BookItem result={result}/>}
            
        </div>
    );
};

export default BooksList;