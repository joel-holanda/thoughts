import '../Boxs/Boxs.css'

function Boxs(){
    return(
        <div className='container-box'>
            <input type="text" placeholder="Titulo (não é obrigatorio)" className='box-title'/>
            <input type="text" placeholder="Seu pensamento..." className='box-text'/>
            <input type="text" placeholder="Autor (não é obrigatorio)" className='box-author'/>
            <button className='submit'>Enviar</button>
        </div>
    )
}

export default Boxs 