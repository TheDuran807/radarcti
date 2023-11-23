import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/Stem.css';

const Stem=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 1: STEM</b></p>
            
            <p>Considera la representatividad del Sistema Nacional de </p>
            <p> Investigadores en la área STEM, así como su impacto en cada </p>
                <p>municipio y la relación de ocupación.</p> 
                
                <img className="superpuestastem"
          src={require("../imagenes/stem.png")}/> 
                </div>
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 1.1: Ocupación en área STEM</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 1.2: Número de Investigadores</h3>
        <br></br>
        <h2>Mapa</h2>

        </Layout>
         );
        }
        
        export default Stem; 