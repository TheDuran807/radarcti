import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/EducacionN.css';

const InnovacionH=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 3: Educacion</b></p>
            
            <p>Se integra por diversos elementos sobre la educación superior</p>
                <p>estableciendo un vínculo directo con las áreas STEM.</p>
            </div>
            <img className="superpuestaedu"
          src={require("../imagenes/educacion.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 3.1: Empresas Innovadores</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default InnovacionH; 