import { Schema } from 'mongoose';


const inputNode = new Schema({
    id:String,
    controller_id: String
});


export const inputNodeSchema = inputNode;