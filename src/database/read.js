import { collection, getDocs, query, where, getDoc  } from 'firebase/firestore';
import { db } from './config';


export  async function load(){
    const newTask = [] ;
    console.log('load database');
    const dbCollection = collection(db,'tasks');
    const querySnapshot = await getDocs(dbCollection);  
    return processQuerySnapshot(querySnapshot);

}

export async function publishedData(){

    const newTask = [] ;
    console.log('load published data ');

    const dbCollection = collection(db,'tasks');
    const q =  query(dbCollection, where('done' , '==' , true))

    const querySnapshot = await getDocs(q);
    return processQuerySnapshot(querySnapshot);

}

export async function getDataById(id){

    const newTask = [] ;

    const docRef = doc(db,'tasks' , id);
    const docSnap =  await getDoc(docRef);
   
   if(docSnap.exists()){
   return docSnap.data(); 
   }else{
    return null;
   }

}

function processQuerySnapshot(querySnapshot){
    const newTask =[ ];
    querySnapshot.forEach((element)=>{
        const task = {
            ...element.data(),
            id: element.id
        }
        console.log(task);

        newTask.push(task);
    })

    return newTask;
}