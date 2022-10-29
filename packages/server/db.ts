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
  await UserTable.sync({ force: false }); 
  await TopicTable.sync({ force: false }); 
  await CommentTable.sync({ force: false });
}

const connectTables = () => {
  UserTable.hasMany(TopicTable, { foreignKey: 'owner' })
  TopicTable.belongsTo(UserTable, { foreignKey: 'owner' })

  UserTable.hasMany(CommentTable, { foreignKey: 'owner' })
  CommentTable.belongsTo(UserTable, { foreignKey: 'owner' })

  TopicTable.hasMany(CommentTable, { foreignKey: 'topic' })
  CommentTable.belongsTo(TopicTable, { foreignKey: 'topic' })

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
