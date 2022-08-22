import '../Menu/Menu.css'

function Menu(){
    var text = "Leia e Reflita :)"
    return(
    <>
        <div className="header">
            <div className='title'>
                <h1>{text}</h1>
            </div>
            <a href="http://localhost:5173/create"><img src="https://img.icons8.com/ios-glyphs/452/pencil--v1.png" className='pencil'/></a>
            {/* <img src='https://boletando.com/wp-content/uploads/avatars/1355/avatar-bpfull.jpg' className='avatar'/> */}
        </div>
    </>
)
}

export default Menu