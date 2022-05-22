import Comentario from "./components/Comentario";
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
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Jesus'
        texto='ffffffffffffffffffffffff'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Aaron'
        texto='dddddddddddddddddddddddd'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Erick'
        texto='wwwwwwwwwwwwwwwwwwwwwwww'
      />

    </div>
  );
}

export default App;
