import React from "react";
import {Link} from "react-router-dom"
import Layout from "../componentes/Layout";



function Contenido(){
  return(
    <Layout>

  <div className="contenido-descripcion">
  
 
  <img
    className="imagen-logov"
    src={require("../imagenes/radarvertical.png")}/>
    <img
    className="imagen-descripcion"
    src={require("../imagenes/imgradar.png")}/>
    
        <div class="content">
        
            <p className="titulo-descripcion"><b>Objetivo</b></p>
            <p>El objetivo del Radar CTI es ser una herramienta tecnológica que</p> 
            <p>sirva para la toma de decisiones en torno a la política pública de la</p> 
            <p>Ciencia, Tecnología e Innovación.</p>
            <p>El objetivo del Radar CTI es ser una herramienta tecnológica que</p> 
            <p>sirva para la toma de decisiones en torno a la política pública de la</p> 
            <p>Ciencia, Tecnología e Innovación.</p>
            <p>El objetivo del Radar CTI es ser una herramienta tecnológica que</p> 
            <p>sirva para la toma de decisiones en torno a la política pública de la</p> 
            <p>Ciencia, Tecnología e Innovación.</p>
            <p>El objetivo del Radar CTI es ser una herramienta tecnológica que</p> 
            <p>sirva para la toma de decisiones en torno a la política pública de la</p> 
            <p>Ciencia, Tecnología e Innovación.</p>
        

        </div>

    
    <Link to={"./nacional"}>
    <button className="btnNacional">Nacional</button>
    </Link>
    
    <Link to={"./hidalgo"}>
    <button className="btnHidalgo">Hidalgo</button>
    </Link>
    



    
    

  </div>
  </Layout>
  
  );    
}
export default Contenido