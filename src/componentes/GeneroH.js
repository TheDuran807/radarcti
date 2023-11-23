import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/GeneroH.css';

const GeneroH=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 7: Género  </b></p>
            
            <p>Estima la participación y división por género en diversas áreas  </p>
            <p>directamente vinculadas con la CTI.</p>
            </div>
            <img className="superpuestagenero"
          src={require("../imagenes/genero.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 7.1: Relación de género SNI</h3>
        <h3>Eje 7.2: Relación de género becas</h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 7.3: Relación de género egresados</h3>
        <h3>Eje 7.4: Relación de género titulados</h3>
        <br></br>
        <h2>Mapa</h2>
        
       

        </Layout>
         );
        }
        
        export default GeneroH; 