import React from 'react'
import { useParams } from 'react-router-dom'
import Introduction from './BlogDaily/Introduction';
import Signature from './BlogDaily/Signature';
import Research from './BlogDaily/Research';
import TIL0205 from './BlogDaily/TIL0205';
import TIL0206 from './BlogDaily/TIL0206';
import TIL0307 from './BlogDaily/TIL0307';
import TIL0312 from './BlogDaily/TIL0312';

const Blogpage = () => {
    const { date } = useParams();

    return (
        <div>
            {date === "0202" && <Introduction></Introduction>}
            {date === "0204" && <Signature></Signature>}
            {date === "0205" && <TIL0205></TIL0205>}
            {date === "0206" && <TIL0206></TIL0206>}
            {date === "0307" && <TIL0307></TIL0307>}
            {date === "0311" && <Research></Research>}
            {date === "0312" && <TIL0312></TIL0312>}
        </div>
    );
};

export default Blogpage;