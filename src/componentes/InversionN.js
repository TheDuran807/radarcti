import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/InversionN.css';

const InversionN=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 2: Inversión</b></p>
            
            <p>Toma en cuenta el desempeño de las empresas en la inversión</p>
            <p>a nivel nacional.</p>
            </div>
            <img className="superpuestainv"
          src={require("../imagenes/inversion.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 2.1</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default InversionN; 