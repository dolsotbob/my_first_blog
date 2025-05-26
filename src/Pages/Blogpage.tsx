import React from 'react'
import { useParams } from 'react-router-dom'
import TIL0307 from './BlogDaily/TIL0307';
import TIL0312 from './BlogDaily/TIL0312';
import TIL0313 from './BlogDaily/TIL0313';
import TIL0314 from './BlogDaily/TIL0314';
import TIL0321 from './BlogDaily/TIL0321';

import TIL0318 from './BlogDaily/TIL0318';


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

        </div>
    );
};

export default Blogpage;