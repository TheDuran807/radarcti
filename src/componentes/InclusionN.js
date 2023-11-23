import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/InclusionN.css';

const InclusionN=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 4: Inclusión</b></p>
            
            <p>Referencia al modo en que la academia da respuesta a la </p>
            <p>diversidad.</p>
            </div>
            <img className="superpuestainclusion"
          src={require("../imagenes/inclusion.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 4.1: Nuevo ingreso</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 4.2: Tiulado</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default InclusionN; 