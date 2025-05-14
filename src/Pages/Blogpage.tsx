import React from 'react'
import { useParams } from 'react-router-dom'
import TIL0307 from './BlogDaily/TIL0307';
import TIL0312 from './BlogDaily/TIL0312';
import TIL0313 from './BlogDaily/TIL0313';
import TIL0314 from './BlogDaily/TIL0314';
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
import TIL0404 from './BlogDaily/TIL0404';
import TIL0407 from './BlogDaily/TIL0407';
import TIL0408 from './BlogDaily/TIL0408';
import TIL0410 from './BlogDaily/TIL0410';
import TIL0414 from './BlogDaily/TIL0414';
import TIL0421 from './BlogDaily/TIL0421';
import TIL0422 from './BlogDaily/TIL0422';
import TIL0423 from './BlogDaily/TIL0423';
import TIL0429 from './BlogDaily/TIL0429';
import TIL0430 from './BlogDaily/TIL0430';
import TIL0507 from './BlogDaily/TIL0507';
import TIL0509 from './BlogDaily/TIL0509';
import TIL0512 from './BlogDaily/TIL0512';
import TIL0513 from './BlogDaily/TIL0513';

const Blogpage = () => {
    const { slug } = useParams();

    return (
        <div className='blogpage'>
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
            {slug === "0404" && <TIL0404></TIL0404>}
            {slug === "0407" && <TIL0407></TIL0407>}
            {slug === "0408" && <TIL0408></TIL0408>}
            {slug === "0410" && <TIL0410></TIL0410>}
            {slug === "0414" && <TIL0414></TIL0414>}
            {slug === "0421" && <TIL0421></TIL0421>}
            {slug === "0422" && <TIL0422></TIL0422>}
            {slug === "0423" && <TIL0423></TIL0423>}
            {slug === "0429" && <TIL0429></TIL0429>}
            {slug === "0430" && <TIL0430></TIL0430>}
            {slug === "0507" && <TIL0507></TIL0507>}
            {slug === "0509" && <TIL0509></TIL0509>}
            {slug === "0512" && <TIL0512></TIL0512>}
            {slug === "0513" && <TIL0513></TIL0513>}
        </div>
    );
};

export default Blogpage;