import '../Boxs/Boxs.css'
import { useState, useEffect } from "react" 
import { getFirestore, collection, getDocs, addDoc} from "firebase/firestore"
import { db } from '../../firebase/firebase' 




function Boxs(){
    const [ title, setTitle] = useState("");
    const [ text, setText ] = useState("");
    const [ author, setAuthor] = useState("");
    const [ users, setUsers] = useState([]);
    
    const usersColletionRef = collection(db, "users")

    async function criarDado() {
        try {
          const user = await addDoc(collection(db, "users"), {
            title,
            text,
            author,
          });

          alert("enviado com sucesso :)")    
          console.log("dados salvos com sucessos", user);

        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

    return(
        <div className='container-box'>
            <input 
            type="text"
            placeholder="Titulo (não é obrigatorio)" className='box-title'
            value={title} 
            onChange={(e) => setTitle(e.target.value)}/>

            <textarea
            placeholder="Seus pensamentos..." 
            className='box-text'
            value={text}
            onChange={(e) => setText(e.target.value)} />

            <input 
            type="text"
            placeholder="Autor (não é obrigatorio)" className='box-author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}/>

            <button className='submit' onClick={criarDado}>Enviar</button>
        </div>
    )
}

export default Boxs 