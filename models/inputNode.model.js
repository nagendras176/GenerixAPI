import { mongoose } from 'mongoose';

import { inputNodeSchema } from '../schema/inputNode.schema';

const inputNodeMongoose = mongoose.model('Controller',inputNodeSchema);


export async function getInputNodeById(id) {
    return new Promise((resolve,reject)=>{
        inputNodeSchema.find({id:id}).exec((error,result)=>{
            if(error){
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export async function getAllInputNodesOfController(controller_id) {
    return new Promise((resolve,reject)=>{
            inputNodeMongoose.find({controller_id: controller_id}).exec((error,result)=>{
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
    });
}