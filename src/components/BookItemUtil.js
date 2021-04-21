import React from 'react';

const BookItemUtil = ({item,view,setview}) => {
    const grid=()=>{
        return(<div className="d-flex flex-column p-3 m-3 m-lg-5 m-sm-3  rounded " style={{ background:'grey',color:'white',border:'1px solid silver'}} >
        <img className="rounded " alt=""src={item.volumeInfo.imageLinks.thumbnail} style={{width:'150px',height:'210px'}}/> 
        <p className="text-truncate text-wrap">{item.volumeInfo.title.substring(0,14)}...</p>
        <p className="text-truncate text-wrap">{item.volumeInfo.authors&&item.volumeInfo.authors[0].substring(0,14) }...</p>

     </div>)
    }
    const list=()=>{
        return(<div className="d-flex row justify-content-between p-4 m-5 rounded " style={{ background:'grey',color:'white',border:'1px solid silver'}} >
        <img className="col-lg-4 col-md-4 col-sm-4 col-xs-4 rounded " alt="" src={item.volumeInfo.imageLinks.thumbnail} style={{width:'150px',height:'210px'}}/> 
        <div className="d-flex flex-column col-lg-8 col-md-8 col-sm-8 col-xs-8 ">
                    <p className="fw-bolder ">{item.volumeInfo.title}</p>
                  {item.volumeInfo.subtitle&&  <p className="fw-light ">({item.volumeInfo.subtitle})</p>}

        <i className="text-truncate text-wrap">{item.volumeInfo.authors&&item.volumeInfo.authors[0] }, {item.volumeInfo.publishedDate}</i>
        {item.volumeInfo.categories && <p className=" ">Genre: {item.volumeInfo.categories[0]}</p>}

        </div>


     </div>)
    }
   
    return (
        <>
        {view===true?list():grid()}

        </>
        
    );
};

export default BookItemUtil;