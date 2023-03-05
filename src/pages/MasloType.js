import React from "react";
import {Link} from 'react-router-dom'

const MasloType = () => {
    return ( 
        <>
        <h1>Wybierz typ masła</h1>
        <Link to="/paper" element={<h1>Wpapierze</h1>}>W papierze</Link>
        <br/>
        <Link to="/cube" element={<h1>W kupku</h1>}>W kupku</Link>
        </>
     );
}
 
export default MasloType;