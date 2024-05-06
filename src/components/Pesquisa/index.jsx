import { useEffect, useState } from 'react'
import styles from './Pesquisa.module.css'
import { livros } from './dadosPesqusa'

const Pesquisa = () => {
    const [livrosPesquisado, setLivrosPesquisado ] = useState([])
    
    const PesquisarLivro = (evento) => {
        const textoDigitado = evento.target.value.toLowerCase()  //toLowerCase => usado para não haver diferenciação de letra maiúscula digitado pelo usuário
        const listaLivros = livros 
        if (textoDigitado === "") {
            setLivrosPesquisado([]); // Se o texto estiver vazio, mostrar nada, caso esteja usando o onChange ao invés de onBlur
        } else {
            setLivrosPesquisado(listaLivros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado)));
        }
     
    }
 

    return (
        <section className={styles.pesquisa} >
            <h2>
                Já sabe por onde começar?
            </h2>
            <h3>
                Encontre seu livro em nossa estante.
            </h3>
            <input placeholder='Escreva sua próxima leitura' onBlur={evento => PesquisarLivro(evento)}/>
            {livrosPesquisado.map(livro => (
                <div className={styles.divLivros} key={livro.id}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='capa do livro'/>
                </div>
            ))}
            
            
        </section>
    )
}

export default Pesquisa