import React from 'react';
import BookItemUtil from './BookItemUtil';

const BookItem = ({result}) => {
    return (
        <div className="d-flex flex-wrap" style={{overflow:'auto'}}>
        {result.map((item,index)=>(
        item.volumeInfo.readingModes.image&&<BookItemUtil item={item}/>
            
        ))}
        </div>
    );
};

export default BookItem;