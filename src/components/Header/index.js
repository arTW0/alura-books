import Logo from './../../components/Header/Logo';
import Opcoes from './../../components/Header/Opcoes';
import Icones from './../../components/Header/Icones';

function Header() {
  return <header className='App-header'>
    <Logo />
    <Opcoes />
    <Icones />
  </header>
}

export default Header