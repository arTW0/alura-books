import './App.css';
import Logo from './components/Logo/index.js';
import perfil from './images/perfil.svg';
import sacola from './images/sacola.svg';

const opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [perfil, sacola]

function App() {
  return <div className='App'>
    <header className='App-header'>
      <Logo />
      <ul className='opcoes'>
        {opcoes.map((texto) => {
          return <li className='opcao'>
            <p>{texto}</p>
          </li>
        })}
      </ul>
      <ul className='icones'>
        {icones.map((icone) => {
          return <li className='icone'>
            <img src={icone} alt='icone' />
          </li>
        })}
      </ul>
    </header>
  </div>
}

export default App;
