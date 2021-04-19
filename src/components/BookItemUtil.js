import React from 'react';

const BookItemUtil = ({item}) => {
    const grid=()=>{
        return(<div className="d-flex flex-column p-4 m-5 rounded " style={{ background:'grey',color:'white',border:'1px solid silver'}} >
        <img className="rounded " src={item.volumeInfo.imageLinks.thumbnail} style={{width:'150px',height:'210px'}}/> 
        <p className="text-truncate text-wrap">{item.volumeInfo.title.substring(0,14)}...</p>
        <p className="text-truncate text-wrap">{item.volumeInfo.authors&&item.volumeInfo.authors[0].substring(0,14) }...</p>

     </div>)
    }
    return (
        <>
        {grid()}
        </>
        
    );
};

export default BookItemUtil;