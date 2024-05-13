import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://manihustler03:Tniqydk6JH7hMKpp@cluster0.cxhujeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;