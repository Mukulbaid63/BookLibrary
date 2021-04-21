import React from 'react';
import BookItemUtil from './BookItemUtil';

const BookItem = ({ result,view,setview }) => {
    let grid=view===false?"row":"column";
    let wrap=view===false?"flex-wrap":"";

    return ( <div className = {wrap}
        style = {
            {display:'flex', overflow: 'auto',flexDirection:grid } } > {
            result.map((item, index) => (
                item.volumeInfo.readingModes.image && < BookItemUtil item = { item } view={view} setview={setview} />

            ))
        } </div>
    );
};

export default BookItem;