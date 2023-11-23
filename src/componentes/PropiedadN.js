import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/PropiedadN.css';

const PropiedadN=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 8: Propiedad Intelectual</b></p>
            
            <p>Se enfoca a la infraestructura que es clave para el ecosistema </p>
            <p>de la CTI.</p>
            <img className="superpuestapropiedad"
          src={require("../imagenes/propiedad.png")}/> 


               
 
            </div>
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 8.1: Universidades</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 8.2: Centros de Investigación </h3>
        <br></br>
        <h2>Mapa</h2>

        </Layout>
         );
        }
        
        export default PropiedadN; 