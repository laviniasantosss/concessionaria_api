import { Sequelize } from 'sequelize';


const conn = new Sequelize( {
dialect: 'sqlite', 
storage: './database.sqlite'
});

export default conn;