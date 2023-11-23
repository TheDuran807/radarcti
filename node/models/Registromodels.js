//Importar la conexion a la bd
import db from "../database/db.js";

import {DataTypes} from "sequelize";

const Registromodel= db.define('nacionals',{
    nac_estado: { type: DataTypes.TEXT},
    nac_puntaje: {type: DataTypes.FLOAT},
    createdAt: {
        field: 'createAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
    
});


export default  Registromodel