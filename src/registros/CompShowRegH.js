import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";



const url ='http://localhost:8000/estatal/'
const CompShowRegH=()=>{
    const [registros,setRegistros]=useState([]);
    useEffect(()=>{
        getRegistros()
    },[])
    const getRegistros =async()=>{
        try {
            const res= await axios.get(url)
            console.log("Respuesta de la API:", res.data);
            setRegistros(res.data);
            
    
            }
            catch(error)
            {
                console.error("Error al obtener datos:", error);
            }
    

    }
     return(<div className="cnt" >
        <div className="fil">
            <div className="col">
                <table className="tabla">
                    <thead className="tabla-prim">
                        <tr>
                            <th>#</th>
                            <th>Estado</th>
                        </tr>

                    </thead>
                    <tbody>
                       { registros.map((campo)=>(
                        <tr key={campo.id}>
                            <td>{campo.id}</td>
                            <td>{campo.nac_estado}</td>

                        </tr>

                       )
                        )} 
                    </tbody>

                </table>

            </div>

        </div>

     </div>)
    

}
export default CompShowRegH