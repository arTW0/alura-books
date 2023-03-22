import perfil from '../../../images/perfil.svg';
import sacola from '../../../images/sacola.svg';
import './styles.css'

const icones = [perfil, sacola]

function Icones() {
  return <ul className='icones'>
    {icones.map((icone) => {
      return <li className='icone'>
        <img src={icone} alt='icone' />
      </li>
    })}
  </ul>
}

export default Icones