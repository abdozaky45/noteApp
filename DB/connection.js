import mongoose from "mongoose";
const connectDB = async () => {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/MissngFinder") // localhost -->127.0.0.1
    .then(result=>{
        console.log("connect DB -------->");
      //  console.log(result);
    }).catch(err=>{console.log(`Fail to connectDB----> ${err}`);});
};
export default connectDB;