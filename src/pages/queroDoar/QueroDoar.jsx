import iconeLivro from '../../assets/iconeLivroForm.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from "axios"

export default function QueroDoar() {

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_Url,setImage_Url] = useState("")

    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)

    }

        const capturarAutor = (e) => {
            setAutor(e.target.value)
        }

            const capturarImagem = (e) => {
                setImage_Url(e.target.value)

    }

    const enviarDados = async()=>{

        const endpoint = "https://api-biblioteca-duyo.onrender.com/doar"

        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            image_Url
        }

        await axios.post(endpointApi,dadosAEnviar)
    }

    return (
        <section className={s.queroDoarSection}>
            <h3>Por favor, preencha o formulário com suas informações e as informações do Livro</h3>

            <form onSubmit={(e) => e.preventDefault()}>

                <div className={s.tituloFormulario}>
                    <img src={iconeLivro} alt="Logo azul em formato de um livro aberto " />
                    <h3>Informações do Livro</h3>
                </div>
                <form className={s.forms} action="">
           </form>
                        
            <input type="text" placeholder='Título' onChange={capturarTitulo}/>
            <input type="text" placeholder='Categoria' onChange={capturaCategoria}/>
            <input type="text" placeholder='Autor' onChange={capturaAutor}/>
            <input type="text" placeholder='Link da Imagem' onChange={capturarImagem}/>
            <input type="submit" value="Doar" className={s.buttonDoar} onClick={enviarDados}/>

                </form>
            </section>

        
    )
}
