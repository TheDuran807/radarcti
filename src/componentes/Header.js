import React from "react";
import {Link} from 'react-router-dom'

const Header=()=> {
    return (
        <div>
            
            <h1>Radar de ciencia, tecnología e innovación</h1>
            
            
            <nav>
            <ul>
                <li><Link to={"/"}>Principal</Link></li>
                <li><Link to={"/nacional"}>Nacional</Link></li>
                <li><Link to={"/hidalgo"}>Hidalgo</Link></li>
                <li><Link to={"#"}>Solicitar base de datos</Link></li>
                <li><Link to={"#"}>Colaboradores</Link></li>
            </ul>
        </nav>
        

        </div>

    );
    }

export default Header;
