import logo from './logo.svg';
import './App.css';
import Card from './card';
import Nav from './nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Card title={"Spaghetti with Tomato Sauce"} image={"https://www.allrecipes.com/thmb/QFG50B-NKSOEhlFassqkORq6IwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/999096-3458e9f33928457e8d48a776a29ee57e.jpg"} desc={"A classic Italian dish with pasta and tomato sauce. Add meatballs or other toppings as desired."} />
      <Card title={"Chicken Stir-Fry"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMZhQ6kT7iigDGGJ0MIv0uGoS354LfCwF5Q&usqp=CAU"} desc={"A quick and easy dish with chicken, vegetables, and soy sauce. Serve over rice for a complete meal."} />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
