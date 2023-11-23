import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";



const url ='http://localhost:8000/nacionals/'
const CompShowRegN=()=>{
    const [registros, setCampos]=useState([])
    useEffect(()=>{
        getCampos()
    },[])
    const getCampos =async()=>{
        try {
            const res= await axios.get(url)
            console.log("Respuesta de la API:", res.data);
            setCampos(res.data);
            
    
            }
            catch(error)
            {
                console.error("Error al obtener datos:", error);
            }
    

    }

     //Procedimiento para cambiar de color la celda del ID basado en el puntaje
   const getColor = nac_puntaje => {
    if (nac_puntaje >= 10 && nac_puntaje <=25) {
      return '#238900'; // Ejemplo: si el puntaje es >=30, la fila tendrá un color de fondo 
    } else if (nac_puntaje >= 30 && nac_puntaje <=40) {
      return '#599602'; 
    }
    else if (nac_puntaje >= 45 && nac_puntaje <=55) {
        return '#8EB404'; 
      }
      else if (nac_puntaje >= 60 && nac_puntaje <=70) {
        return '#C4C906'; 
      }
      else if (nac_puntaje >= 75 && nac_puntaje <=85) {
        return '#E4C607'; 
      }
      else if (nac_puntaje >= 90 && nac_puntaje <=100) {
        return '#E9A805'; 
      }
      else if (nac_puntaje >= 105 && nac_puntaje <=110) {
        return '#EF8904'; 
      }
      else if (nac_puntaje >= 120 && nac_puntaje <=135) {
        return '#F46B02'; 
      }
      else if (nac_puntaje >= 140 && nac_puntaje <=150) {
        return '#FA4C01'; 
      }
      else if (nac_puntaje >= 155 && nac_puntaje <=170) {
        return '#FF2E00'; 
      }
      
    
    return ''; // Clase por defecto (sin estilos)
  }

    return( //Los estilos de la tabla están en Nacional.css
    <div className='cnt'>
        <div className='fil'>
            <div className='colu'>
                <table className='tabla'>
                    <thead className='tabla-prim'>
                        <tr>
                          <th> # </th>
                          <th>Estado </th>  
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map ((registro )=> (
                            <tr key={registro.id}>
                            <td style={{ backgroundColor: getColor(registro.nac_puntaje) }}>{registro.id}</td>
                                <td>{registro.nac_estado}</td>


                            </tr>
                        )
                        )}

                    </tbody>

                </table>

            </div>

        </div>
        
    </div>)
    

}
export default CompShowRegN