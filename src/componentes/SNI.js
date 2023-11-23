import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/SNI.css';

const SNI=()=> {
    return (
        <Layout>
            <div className="mundo">
            <br/>
            <div className="texto">
            <p><b>Eje 5: SNI</b></p>
            
            <p>Referencia al modo en que la academia da respuesta a la </p>
            <p>diversidad.</p>
            </div>
            <img className="superpuestasni"
          src={require("../imagenes/sni.png")}/> 


               
 
            
             
            
        </div>
        <h2>Resumen</h2>
        <h3>Eje 5.1 </h3>
        <br></br>
        <h2>Mapa</h2>
        <h3>Eje 5.2</h3>
        <br></br>
        <h2>Mapa</h2>
       

        </Layout>
         );
        }
        
        export default SNI; 