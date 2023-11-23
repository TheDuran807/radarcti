import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/Nacional.css';
import CompShowRegN from "../registros/CompShowRegN";


const Nacional=()=> {
  return (
    
      <Layout>
        <br/><br/><br/><br/><br/>
    <div className="mundo-nac">
            <br/><br/>
            <div className="texto">
            <p><b>Nacional</b></p>
            <p>Generar una herramienta tecnológica que sirva para la </p> 
            <p>toma de decisiones entorno a la política pública de </p> 
            <p>ciencia, tecnología e innovación.</p>
            </div>
        </div>
        
       
        <h2>Resumen</h2>
        <div className="content-dos">
          <br/>
          
            <p>Nota Metodológica: La construcción de este radar se elaboró con 28 variables </p> 
            <p>divididas en 10 ejes.</p> 
            
        </div>
        <div className="imagenes-nacional">
        <img
        className="imagen-logoinno"
        src={require("../imagenes/innovacion.png")}/> 
        <img
        className="imagen-logoinv"
        src={require("../imagenes/inversion.png")}/>
        <img
        className="imagen-logoedu"
        src={require("../imagenes/educacion.png")}/>
        <div className="hola">
           <Link to={"/innovacionn"}>
           <button className="btnInno">Innovación</button>
           </Link>
           <Link to={"/inversionn"}>
            <button className="btnInv">Inversión</button>
            </Link>
            <Link to={"/educacionn"}>
            <button className="btnEdu">Educación</button>
            </Link>
           </div>
          <img
          className="imagen-logoinc"
          src={require("../imagenes/inclusion.png")}/>  
          <img
          className="imagen-logosninv"
          src={require("../imagenes/sni.png")}/>
          <img
          className="imagen-logoempre"
          src={require("../imagenes/emprendimiento.png")}/>
        <div className="hola2">
        <Link to={"/inclusionn"}>
        <button className="btnInc">Inclusión</button>
        </Link>
        <Link to={"/sni"}>
        <button className="btnSninv">SNI</button>
        </Link>
        <Link to={"/emprendimienton"}>
        <button className="btnEmpre">Emprendimiento <p>y Negocios</p></button>
        </Link>

      </div>
         <img
        className="imagen-logoinfra"
        src={require("../imagenes/infraestructura.png")}/>
        <img
        className="imagen-logoprop"
        src={require("../imagenes/propiedad.png")}/> 
         <img
        className="imagen-logogen"
        src={require("../imagenes/genero.png")}/>
        <div className="hola3">
        <Link to={"/infraestructuraN"}>
        <button className="btnInfra">Infraestructura</button>
        </Link>
        <Link to={"/propiedadn"}>
        <button className="btnProp">Propiedad Intelectual</button>
        </Link>
        <Link to={"/generon"}>
        <button className="btnGen">Género</button>
        </Link>

      </div>    
        <img
        className="imagen-logotic"
        src={require("../imagenes/tics.png")}/> 
        <div className="hola4">
        <Link to={"/ticsn"}>
        <button className="btnTic">TIC's</button>
        </Link>
        </div>
        </div>
        <br></br>
        <br></br>
        <h2>Ranking</h2>
        <h3>Inserte estado o ranking a buscar</h3>
          <CompShowRegN/>
    
        

        <br/>
        <br/>


        <h5></h5>
        <table className='simb-bar'>
            <tr>
                <th>Estado con mayor <p></p>concentración de CTI</th>
                <th>Estado con <p></p>concentración media de CTI</th>
                <th>Estado con menor<p></p> concentración de CTI</th>
            </tr>

        </table>
        

     
       
  
  
  
    
    </Layout>
    
    
  );
}

export default Nacional;
