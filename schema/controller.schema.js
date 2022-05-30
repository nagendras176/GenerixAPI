import { Schema } from 'mongoose';


const ControllerSchema = new Schema({
     id: String,
     controllerName: String
});


export const controllerSchema = ControllerSchema;