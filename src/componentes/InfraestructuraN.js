import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/InfraestructuraN.css'

const InfraestructuraN=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 7: Infraestructura</b></p>
            
            <p>Se enfoca a la infraestructura que es clave para el ecosistema </p>
            <p>de la CTI.</p>
            <img className="superpuestainfra"
          src={require("../imagenes/infraestructura.png")}/> 


               
 
            </div>
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 7.1: Universidades</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 7.2: Centros de Investigación </h3>
        <br></br>
        <h2>Mapa</h2>

        </Layout>
         );
        }
        
        export default InfraestructuraN; 