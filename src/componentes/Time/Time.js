import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = ({ time, colaboradores }) => {
    const css = { backgroundColor: time.corSecundaria }

    return (
        (colaboradores.length > 0) &&
        <section className='time' style={css}>
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador
                        corDeFundo={time.corPrimaria} key={colaborador.nome}
                        nome={colaborador.nome} cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                }
                )}
            </div>
        </section>
    )
}


export default Time