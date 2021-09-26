import './App.css';
import Festival from './components/Festival/Festival';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
      <Header></Header>
      <Festival></Festival>
    </div>
  );
}

export default App;
