import { mongoose } from 'mongoose';

import { controllerSchema as ControllerSchema } from '../schema/controller.schema';

const ControllerModel = mongoose.model('Controller',ControllerSchema);


export async function getControllerById(id) {
    return new Promise((resolve,reject)=>{
        ControllerModel.find({id:id}).exec((error,result)=>{
            if(error){
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}