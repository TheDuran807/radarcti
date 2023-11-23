import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/TicsH.css';

const TicsH=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 6: Disponibilidad de Tic's</b></p>
            
            <p>Módulo sobre Disponibilidad y Uso de Tecnologías de la  </p>
            <p>Información en la población.</p>
            </div>
            <img className="superpuestatics"
          src={require("../imagenes/tics.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 6.1: Computadoras</h3>
        <h3>Eje 6.2: Línea telefónica fija</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 6.3: Telefonía celular</h3>
        <h3>Eje 6.4: Internet</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 6.5: Televisión de paga</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default TicsH; 