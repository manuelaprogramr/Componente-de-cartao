import img from './assets/image-header-desktop.jpg';
import './App.css';
import './responsividade/mobile.css';

function App() {
  return (
    <div id="container">
      <div className='conteudo'>
        <div className='escrita'>

        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p className= 'texto'>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer
          experience, and overall efficiency.
        
        </p>

        <div className='card-list'>
      
      <ul>
        <li>
          <h2>10k+</h2>
          <p>COMPANIES</p>
        </li>

        <li>
          <h2>314</h2>
          <p>TEMPLATES</p>
        </li>

        <li>
          <h2>12M+</h2>
          <p>QUERIES</p>
        </li>

      </ul>

      </div>
        </div>
      
       <picture>
        <img className='imagem' src={img} />
       </picture>
      
      </div>
      
    </div>
  );
}

export default App;
