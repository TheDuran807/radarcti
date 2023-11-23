import {Sequelize} from 'sequelize'

const db= new Sequelize('radar', 'root', '', {
    host:'localhost',
    dialect: 'mysql',
    timestamps: false, 
    define:{freezeTableName:true},
    
    
});
export default db