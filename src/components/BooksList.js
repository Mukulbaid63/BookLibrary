import React, { useEffect, useState } from 'react';
import '../styles/BooksList.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';
import BookItem from './BookItem';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';

const BooksList = ({button,view,setview,clickHandler,changeHandler}) => {
    const [selectState, setSelectState] = useState(false);
    const [result, setresult] = useState([]);
    const [query, setquery] = useState("")
    let darkBack=button===false?'white':'black'
    let darkFont=button===true?'white':'black'
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

    const changeHandler1=(evt)=>{
        setquery(()=>evt.target.value);
    }
    return (
        <div className="bookslist p-3 d-flex flex-column" style={{background:`${darkBack}`}}>
            
            <div className="d-flex justify-content-between">
            <h2 style={{color:`${darkFont}`}}>Book Library</h2>
            <div className="d-flex justify-content-around">
            <div className=" d-lg-none d-md-none " onClick={changeHandler}><InvertColorsIcon style={{cursor:'pointer',color:`${darkFont}`,fontSize:'36px'}} /></div>

                <div onClick={clickHandler}>
               {view? <ViewComfyRoundedIcon style={{fontSize:'36px',marginRight:'5px',cursor:'pointer'}} />:
                <ReorderIcon style={{fontSize:'36px',marginRight:'5px',cursor:'pointer'}} />}
                </div>
                
                <input value={query} style={{width:'18vw',height:'5vh'}} onChange={changeHandler1} placeholder="Type here to Search..."></input>
            </div>
            </div>
            {selectState&&<BookItem view={view} setview={setview} result={result}/>}
            
        </div>
    );
};

export default BooksList;