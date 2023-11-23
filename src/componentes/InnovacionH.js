import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/InnovacionH.css';

const InnovacionH=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 5: Innovacion</b></p>
            
            <p>Toma en cuenta el desempeño de las empresas en la producción</p>
            <p>de innovación.</p>
            </div>
            <img className="superpuestainno"
          src={require("../imagenes/innovacion.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 5.1: Empresas Innovadores</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default InnovacionH; 