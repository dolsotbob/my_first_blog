import React from 'react'
import { useParams } from 'react-router-dom'
import Introduction from './BlogDaily/Introduction';
import Signature from './BlogDaily/Signature';
import Research from './BlogDaily/Research';
import TIL0205 from './BlogDaily/TIL0205';
import TIL0206 from './BlogDaily/TIL0206';
import TIL0307 from './BlogDaily/TIL0307';
import TIL0312 from './BlogDaily/TIL0312';
import TIL0207 from './BlogDaily/TIL0207';
import TIL0210 from './BlogDaily/TIL0210';
import TIL0211 from './BlogDaily/TIL0211';
import TIL0212 from './BlogDaily/TIL0212';
import TIL0213 from './BlogDaily/TIL0213';
import TIL0214 from './BlogDaily/TIL0214';

const Blogpage = () => {
    const { date } = useParams();

    return (
        <div>
            {date === "0203" && <Introduction></Introduction>}
            {date === "0204" && <Signature></Signature>}
            {date === "0205" && <TIL0205></TIL0205>}
            {date === "0206" && <TIL0206></TIL0206>}
            {date === "0207" && <TIL0207></TIL0207>}
            {date === "0210" && <TIL0210></TIL0210>}
            {date === "0211" && <TIL0211></TIL0211>}
            {date === "0212" && <TIL0212></TIL0212>}
            {date === "0213" && <TIL0213></TIL0213>}
            {date === "0213" && <TIL0214></TIL0214>}
            {date === "0307" && <TIL0307></TIL0307>}
            {date === "0311" && <Research></Research>}
            {date === "0312" && <TIL0312></TIL0312>}
        </div>
    );
};

export default Blogpage;