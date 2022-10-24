import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { userModel } from './models/user';
import { topicModel } from './models/topic';
import { commentModel } from './models/comment';
const { 
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PORT,
} =  process.env;


const sequelizeOptions: SequelizeOptions = {
    host: POSTGRES_HOST || 'localhost',
    port: Number(POSTGRES_PORT) || 5477,
    username: POSTGRES_USER || 'postgres',
    password: POSTGRES_PASSWORD || 'newPassword',
    database: POSTGRES_DB || 'packman_db',
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions); 

export const UserTable = sequelize.define('User', userModel, { timestamps: true, tableName: 'User' });
export const TopicTable = sequelize.define('Topic', topicModel, { timestamps: true, tableName: 'Topic' });
export const CommentTable = sequelize.define('Comment', commentModel, { timestamps: true, tableName: 'Comment' });

const syncTables = async () => {
  await UserTable.sync({ force: true }); 
  await TopicTable.sync({ force: true }); 
  await CommentTable.sync({ force: true });
}

const connectTables = () => {
  UserTable.hasOne(TopicTable);
  // UserTable.belongsTo(TopicTable); 
  UserTable.hasOne(CommentTable); 
  
  // UserTable.belongsTo(CommentTable);
}


export async function dbConnect() {
    try {
        await sequelize.authenticate() 
        await syncTables()
        connectTables()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
