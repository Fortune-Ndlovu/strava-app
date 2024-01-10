import { useState, useEffect } from "react";
import {db} from "../../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const MyActivitiesList = () => { 
    const [newActivity, setNewActivity] = useState("")
    const [newDistance, setNewDistance] = useState(0)

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")
    
    const createActivity = async () => {
        await addDoc(usersCollectionRef, {Activity: newActivity, Distance: newDistance})
     }

    useEffect(() => {
        const getUsers =  async () => { 
            const data = await getDocs(usersCollectionRef);
            console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        }
        getUsers();
    }, [])

    return (
        <div>
            <h1>Hello users</h1>
            
            <input type="text" onChange={(e) => { setNewActivity(e.target.value)}}/>
            <input type="number" onChange={(e) => { setNewDistance(e.target.value)}}/>
            <button onClick={createActivity}>Create Activity</button>

            {users.map((users) => {
                return (
                    <div>
                        <h1>Activity: {users.Activity}</h1>
                        <h1>Distance: {users.Distance}</h1>
                    </div>
                );
            })}
        </div>
    )
}

export default MyActivitiesList;