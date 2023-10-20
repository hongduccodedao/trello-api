import { MongoClient, ServerApiVersion } from "mongodb";

// khởi tạo một đối tượng trelloDatabaseInstance
let trellodbInstance = null;

// khởi tạo một đối tượng mongoClientInstance để kết nối tới mongodb
const mongoClientInstance = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();

  trellodbInstance = mongoClientInstance.db(process.env.DATABASE_NAME);
};

export const GET_DB = () => {
  if(!trellodbInstance) throw new Error("Must connect to Database first!");
  return trellodbInstance;
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};