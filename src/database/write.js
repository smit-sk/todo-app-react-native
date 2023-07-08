import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
    console.log('save database', data);

    try {
        const dbCollection = collection(db, 'tasks');
        const docRef = await addDoc(dbCollection, data);
        console.log("Document Id ", docRef.id)
        return docRef.id;
    } catch (e) {
        console.error("Error =>", e)
    }



}

export async function update(id, updatedData) {
    try {
        const docRef = doc(db, 'tasks', id)
        await updateDoc(docRef, updatedData)
        console.log('update database');
        return true;
    } catch (error) {
        console.log('failed to update database');
        return false
    }
}

export async function deleteTask(id){
    try {
        const docRef = doc(db, 'tasks', id)
        await deleteDoc(docRef)
        console.log('Delete task Successfully');
        return true;
    } catch (error) {
        console.log('failed to delete task');
        return false
    }
}