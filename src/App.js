import logo from './logo.svg';
import './App.css';
import HelloReact from './HelloReact';
// import PhotoCard from './PhotoCard';
import PhotoGallery from './PhotoGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src="/logo192.png" alt="logo"/> */}
        <h1>Hello React</h1>
          <HelloReact/>
        <p>wow that is cool</p>
        <PhotoGallery/>

      </header>
    </div>
  );
}

export default App;
