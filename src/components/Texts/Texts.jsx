import './Texts.css'
import { useState, useEffect } from "react" 
import { getFirestore, collection, getDocs} from "firebase/firestore"
import { db } from '../../firebase/firebase' 



export const Texts = () => {
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ author, setAuthor] = useState("");
    const [ users, setUsers] = useState([]);
    
    const usersColletionRef = collection(db, "users")
    
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersColletionRef);
    
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
            }  
            getUsers()
        }, [])

    return(
        <div>  
            {users.map((user) => {
                return(
                    <div className="texts">
                    <h1 className="title-texts">{user.title}</h1>
                    <p className='thought'>
                        {user.text}
                    </p>
                    <h2 className='author'>
                        {user.author}
                    </h2>
                </div> 
                )
            })}

        </div>
    )   
}
export default Texts