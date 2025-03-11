import React from 'react'
import { useParams } from 'react-router-dom'
import Introduction from './BlogDaily/Introduction';
import Signature from './BlogDaily/Signature';
import Research from './BlogDaily/Research';

const Blogpage = () => {
    const { date } = useParams();

    return (
        <div> 
            {date === "0202" && <Introduction></Introduction>}
            {date === "0204" && <Signature></Signature>}
            {date === "0311" && <Research></Research>}
        </div>
    );
};

export default Blogpage;