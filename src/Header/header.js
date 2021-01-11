import headerimg from '../images/header-img2.png';
import Typing from 'react-typing-animation'; 

function Header() {
  return (
      <header className="App-header"
      style={{ backgroundImage: `url(${headerimg})` }}>
            <Typing speed={100}>
              <p>Hello, I'm <span style={{color: 'yellow'}}>Alec Owens</span> and I'm a software developer.</p>
            </Typing>
      </header>
  );
}

export default Header;



