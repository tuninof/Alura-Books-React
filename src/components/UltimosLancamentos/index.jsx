import Card from '../Card'
import imagemLivro from '../../image/livro2.png'
import styles from './UltimosLancamentos.module.css'
import { livros } from './dadosultimosLancamentos'


const UltimosLancamentos = () => {
    return (
        <section className={styles.container}>
            <h2>ÚLTIMOS LANÇAMENTOS</h2>
            <section className={styles.novosLivros}>
                {livros.map(livro => (
                    <img key={livro.id} src={livro.src} />
                ))}
            </section>
            <Card 
            titulo={'Talvez você se interesse por...'}
            subtitulo={'Angular 11'}
            descricao={'Construindo uma aplicação com a plataforma Google.'}
            imagem={imagemLivro}
            />
        </section>
    )
}

export default UltimosLancamentos