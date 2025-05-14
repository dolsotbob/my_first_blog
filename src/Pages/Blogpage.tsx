import React from 'react'
import { useParams } from 'react-router-dom'
import TIL0307 from './BlogDaily/TIL0307';
import TIL0312 from './BlogDaily/TIL0312';
import TIL0313 from './BlogDaily/TIL0313';
import TIL0314 from './BlogDaily/TIL0314';
import TIL0321 from './BlogDaily/TIL0321';

import TIL0318 from './BlogDaily/TIL0318';

import TIL0407 from './BlogDaily/SolidityAdv/TIL0407';
import TIL0408 from './BlogDaily/SolidityAdv/TIL0408';
import TIL0410 from './BlogDaily/SolidityAdv/TIL0410';
import TIL0414 from './BlogDaily/SolidityAdv/TIL0414';
import TIL0421 from './BlogDaily/SolidityAdv/TIL0421';
import TIL0422 from './BlogDaily/SolidityAdv/TIL0422';
import TIL0423 from './BlogDaily/SolidityAdv/TIL0423';
import TIL0429 from './BlogDaily/SolidityAdv/TIL0429';
import TIL0430 from './BlogDaily/SolidityAdv/TIL0430';
import TIL0507 from './BlogDaily/SolidityAdv/TIL0507';

const Blogpage = () => {
    // 다이내믹 라우팅 
    // const { postId } = useParams();
    const { slug } = useParams();

    return (
        <div className='blogpage'>
            {/* 현재 포스트 ID: {postId} */}
            {slug === "0307" && <TIL0307></TIL0307>}
            {slug === "0312" && <TIL0312></TIL0312>}
            {slug === "0313" && <TIL0313></TIL0313>}
            {slug === "0314" && <TIL0314></TIL0314>}
            {slug === "0318" && <TIL0318></TIL0318>}
            {slug === "0321" && <TIL0321></TIL0321>}

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
        </div>
    );
};

export default Blogpage;