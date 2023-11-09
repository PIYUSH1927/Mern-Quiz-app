import mongoose from 'mongoose';

export default async function connect(){
    await mongoose.connect('mongodb+srv://padiapiyush12:newpassword12@cluster0.jhxrht3.mongodb.net/contactdata?retryWrites=true&w=majority',{useNewUrlParser:true})
    console.log("database connected");
}

