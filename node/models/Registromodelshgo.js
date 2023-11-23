import db from "../database/db.js";

import {DataTypes} from "sequelize";

const Registromodelhgo= db.define('estatal',{
    est_municipio: { type: DataTypes.TEXT},
    est_puntaje: {type: DataTypes.FLOAT},
    createdAt: {
        field: 'createAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updateAt',
        type: DataTypes.DATE,
    },
    
});


export default  Registromodelhgo