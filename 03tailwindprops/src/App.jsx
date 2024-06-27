import "./App.css";
import Card from './components/Card.jsx'
function App() {

  // let myObj = {
  //   username:"Tejas",
  //   age:21
  // }
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black mb-4">Tailwind Test</h1>
      <Card username = "Tejas" btnText = "Best" />
      <Card username = "Archie" btnText = "Bestie" />
      <Card username = "Sham"  />
    </>
  );
}

export default App;
