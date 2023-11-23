import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/EmprendimientoN.css';

const EmprendimientoN=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 6: Emprendimiento y Negocios</b></p>
            
            <p>Considera el ecosistema emprendedor en general, así como su </p>
            <p>relación con la CTI.</p>
            </div>
            <img className="superpuestaempre"
          src={require("../imagenes/emprendimiento.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 6.1: Incubadoras</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default EmprendimientoN; 