import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/Educacion.css';

const Educacion=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 2: Educación</b></p>
            
            <p>Se integra por diversos elementos sobre la educación superior</p>
                <p>estableciendo un vínculo directo con las áreas STEM.</p>
 
            
                </div>
                <img className="superpuestaedu"
          src={require("../imagenes/educacion.png")}/> 
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 2.1: Carreras en el área STEM</h3><h3>Eje 2.2: Titulados en el área STEM</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 2.3: Egresados en el área STEM</h3><h3>Eje 2.4: Becados en el área STEM</h3>
        <br></br>
        <h2>Mapa</h2>

        </Layout>
         );
        }
        
        export default Educacion; 