import React from 'react'
import { useParams } from 'react-router-dom'
import Introduction from './BlogDaily/Introduction';
import Signature from './BlogDaily/Signature';
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
import TIL0217 from './BlogDaily/TIL0217';
import TIL0218 from './BlogDaily/TIL0218';
import TIL0219 from './BlogDaily/TIL0219';
import TIL0313 from './BlogDaily/TIL0313';
import TIL0314 from './BlogDaily/TIL0314';
import TIL0220 from './BlogDaily/TIL0220';
import TIL0221 from './BlogDaily/TIL0221';
import TIL0224 from './BlogDaily/TIL0224';
import TIL0225 from './BlogDaily/TIL2025';
import TIL0226 from './BlogDaily/TIL0226';
import TIL0227 from './BlogDaily/TIL0227';
import TIL0228 from './BlogDaily/TIL0228';
import TIL0304 from './BlogDaily/TIL0304';
import TIL0305 from './BlogDaily/TIL0305';
import TIL0306 from './BlogDaily/TIL0306';
import TIL0321 from './BlogDaily/TIL0321';
import TIL0324 from './BlogDaily/TIL0324';
import TIL0325 from './BlogDaily/TIL0325';
import TIL0326 from './BlogDaily/TIL0326';
import TIL0327 from './BlogDaily/TIL0327';
import TIL0328 from './BlogDaily/TIL0328';
import TIL0331 from './BlogDaily/TIL0331';
import TIL0401 from './BlogDaily/TIL0401';
import TIL0318 from './BlogDaily/TIL0318';
import TIL0402 from './BlogDaily/TIL0402';
import TIL0402HW from './BlogDaily/TIL0402HW';
import TIL0403 from './BlogDaily/TIL0403';

const Blogpage = () => {
    const { slug } = useParams();

    return (
        <div className='blogpage'>
            {slug === "0203" && <Introduction></Introduction>}
            {slug === "0204" && <Signature></Signature>}
            {slug === "0205" && <TIL0205></TIL0205>}
            {slug === "0206" && <TIL0206></TIL0206>}
            {slug === "0207" && <TIL0207></TIL0207>}
            {slug === "0210" && <TIL0210></TIL0210>}
            {slug === "0211" && <TIL0211></TIL0211>}
            {slug === "0212" && <TIL0212></TIL0212>}
            {slug === "0213" && <TIL0213></TIL0213>}
            {slug === "0214" && <TIL0214></TIL0214>}
            {slug === "0217" && <TIL0217></TIL0217>}
            {slug === "0218" && <TIL0218></TIL0218>}
            {slug === "0219" && <TIL0219></TIL0219>}
            {slug === "0220" && <TIL0220></TIL0220>}
            {slug === "0221" && <TIL0221></TIL0221>}
            {slug === "0224" && <TIL0224></TIL0224>}
            {slug === "0225" && <TIL0225></TIL0225>}
            {slug === "0226" && <TIL0226></TIL0226>}
            {slug === "0227" && <TIL0227></TIL0227>}
            {slug === "0228" && <TIL0228></TIL0228>}
            {slug === "0304" && <TIL0304></TIL0304>}
            {slug === "0305" && <TIL0305></TIL0305>}
            {slug === "0306" && <TIL0306></TIL0306>}
            {slug === "0307" && <TIL0307></TIL0307>}
            {slug === "0312" && <TIL0312></TIL0312>}
            {slug === "0313" && <TIL0313></TIL0313>}
            {slug === "0314" && <TIL0314></TIL0314>}
            {slug === "0318" && <TIL0318></TIL0318>}
            {slug === "0321" && <TIL0321></TIL0321>}
            {slug === "0324" && <TIL0324></TIL0324>}
            {slug === "0325" && <TIL0325></TIL0325>}
            {slug === "0326" && <TIL0326></TIL0326>}
            {slug === "0327" && <TIL0327></TIL0327>}
            {slug === "0328" && <TIL0328></TIL0328>}
            {slug === "0331" && <TIL0331></TIL0331>}
            {slug === "0401" && <TIL0401></TIL0401>}
            {slug === "0402" && <TIL0402></TIL0402>}
            {slug === "0402hw" && <TIL0402HW></TIL0402HW>}
            {slug === "0403" && <TIL0403></TIL0403>}
        </div>
    );
};

export default Blogpage;