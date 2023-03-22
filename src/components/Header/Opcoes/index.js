import './styles.css'

const opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return <ul className='opcoes'>
    {opcoes.map((texto) => {
      return <li className='opcao'>
        <p>{texto}</p>
      </li>
    })}
  </ul>
}

export default OpcoesHeader