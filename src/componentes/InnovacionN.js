import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/InnovacionN.css';

const InnovacionN=()=> {
    return (
        <Layout>
          <br/><br/><br/><br/><br/>
            <div className="mundo-innon">
            <br/>
            <div className="texto">
            <p><b>Eje 1: Innovacion</b></p>
            
            <p>Toma en cuenta el desempeño de las empresas en la producción</p>
            <p>de innovación.</p>
            </div>
            <img className="superpuestainno"
          src={require("../imagenes/innovacion.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 1.1: Empresas Innovadores</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default InnovacionN; 