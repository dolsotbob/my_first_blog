import { useParams } from 'react-router-dom'
import Research0311 from './FurtherResearch/Research0311';
import Research0313 from './FurtherResearch/Research0313';



const Furtherpage = () => {
    const { slug } = useParams();

    return (
        <div className='furtherpage'>
            {slug == "0311" && <Research0311></Research0311>}
            {slug === "0313" && <Research0313></Research0313>}
        </div >
    )
}

export default Furtherpage 