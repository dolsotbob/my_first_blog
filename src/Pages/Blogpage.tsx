import React from 'react'
import { useParams } from 'react-router-dom'
import Introduction from './BlogDaily/Introduction';
import Signature from './BlogDaily/Signature';

const Blogpage = () => {
    const { date } = useParams();

    return (
        <div> 
            {date === "0202" && <Introduction></Introduction>}
            {date === "0204" && <Signature></Signature>}
        </div>
    );
};

export default Blogpage;