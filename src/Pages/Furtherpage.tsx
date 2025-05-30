import { useParams } from 'react-router-dom'
import Research0311 from './FurtherResearch/Research0311';
import Research0313 from './FurtherResearch/Research0313';
import Research0530 from './FurtherResearch/Research0530';



const Furtherpage = () => {
    const { slug } = useParams();

    return (
        <div className='furtherpage'>
            {slug == "0311" && <Research0311></Research0311>}
            {slug === "0313" && <Research0313></Research0313>}
            {slug === "0530" && <Research0530></Research0530>}
        </div >
    )
}

export default Furtherpage 