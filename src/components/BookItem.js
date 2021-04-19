import React from 'react';

const BookItem = ({result}) => {
    return (
        <div>
        {result.map((item,index)=>(
        item.volumeInfo.readingModes.image&&<img src={item.volumeInfo.imageLinks.thumbnail}/>
            
        ))}
        </div>
    );
};

export default BookItem;