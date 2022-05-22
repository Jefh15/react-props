import Saludo from "./components/Saludo";



function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Proyecto desde 0</h1>
      <hr />
      {/* le paso por props persona */}
      <Saludo persona='Jesus' edad={30} />
      <Saludo persona='Aaron' edad={50} />
      <Saludo persona='Erick' edad={80} />
    </div>
  );
}

export default App;
