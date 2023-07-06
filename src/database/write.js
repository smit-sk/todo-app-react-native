import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";

export async function save(data){
    console.log('save database', data);
   
    try{    
        const dbCollection = collection(db,'tasks');
        const docRef = await addDoc(dbCollection,data);
        console.log("Document Id ", docRef.id)
        return docRef.id;
    }catch(e){
        console.error("Error =>", e)
    }

    
    
}

export function update(){
    console.log('update database');
}