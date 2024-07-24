import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const dbInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );

    if (dbInstance.STATES.connected) {
      console.log(
        `Database successfully connect | ${dbInstance.connection.host}`
      );
      return true;
    } else {
      throw Error("Uable to connect to the Database!");
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
