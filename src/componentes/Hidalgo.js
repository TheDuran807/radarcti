import Layout from "./Layout";
import { Link } from "react-router-dom";
import '../styles/Hidalgo.css';

const Hidalgo=()=> {
    return (
        <Layout>
          <br/><br/><br/><br/><br/>
        <div className="mundohgo">
            <br/>
            <div className="texto">
              <br/>
            <p><b>Hidalgo</b></p>
         
            <p>La construcción de este indicador se hizo a través de la selección de 21 variables</p> 
            <p>divididas en 8 ejes, basados en las metodologías del Foro Económico Mundial y la </p>
            <p>Organización Mundial de la Propiedad Intelectual. toma de decisiones entorno a la </p>
            <p>política pública de ciencia, tecnología e innovación.</p>
            </div>
        </div>
        
       
        <h2>Resumen</h2>
        <div className="content-dos">
          <br/>
          
            <p>Nota Metodológica: La construcción de este radar se elaboró con 21 variables </p> 
            <p>divididas en 8 ejes.</p> 
            
        </div>
        <div className="imagenes-hgo">
        <img
        className="imagen-logostem"
        src={require("../imagenes/stem.png")}/> 
        <img
        className="imagen-logoeducacion"
        src={require("../imagenes/educacion.png")}/>
        <img
        className="imagen-logoinfraestructura"
        src={require("../imagenes/infraestructura.png")}/>
        <div className="hola">
           <Link to={"/stem"}>
           <button className="btnStem">STEM</button>
           </Link>
           <Link to={"/educacionh"}>
            <button className="btnEducacion">Educación</button>
            </Link>
            <Link to={"/infraestructurah"}>
            <button className="btnInfraestructura">Infraestructura</button>
            </Link>
           </div>
          <img
          className="imagen-logoemprendimiento"
          src={require("../imagenes/emprendimiento.png")}/>  
          <img
          className="imagen-logoinnovacion"
          src={require("../imagenes/innovacion.png")}/>
          <img
          className="imagen-logotics"
          src={require("../imagenes/tics.png")}/>
        <div className="hola2">
        <Link to={"/emprendimientoh"}>
        <button className="btnEmprendimiento">Emprendimiento <p>y Negocios</p></button>
        </Link>
        <Link to={"/innovacionh"}>
        <button className="btnInnovacion">Innovación</button>
        </Link>
        <Link to={"/ticsh"}>
        <button className="btnTics">TIC's</button>
        </Link>

      </div>
         <img
        className="imagen-logogenero"
        src={require("../imagenes/genero.png")}/>
        <img
        className="imagen-logoinclusion"
        src={require("../imagenes/inclusion.png")}/> 
         
        <div className="hola3">
        <Link to={"/generoh"}>
        <button className="btnGenero">Genero</button>
        </Link>
        <Link to={"/inclusionh"}>
        <button className="btnInclusion">Inclusión</button>
        </Link>
        

      </div>    
        
        </div>
        <br></br>
        <br></br>
        <h2>Ranking</h2>
        <h3>Inserte municipio o ranking a buscar</h3>
        


        </Layout>
        
    );
  }
  
  export default Hidalgo;