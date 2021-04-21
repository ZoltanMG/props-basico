import React from 'react';
import Cards from './components/Cards'

function App() {
  return (
    <div>
      <h1>Propiedades de los componentes</h1>
        <div className="row">
          <div className="col">
            <Cards
              imagen="https://www.freshcommerce.es/wp-content/uploads/2019/03/comercio-electronico-login-seguridad.jpg"
              titulo=" Titulo Card 1"
              texto="texto card 1"
            />
          </div>
          <div className="col">
            <Cards
              imagen="https://www.freshcommerce.es/wp-content/uploads/2019/03/comercio-electronico-login-seguridad.jpg"
              titulo=" Titulo Card 2"
              texto="texto card 2"
            />
          </div>
          <div className="col">
            <Cards
              imagen="https://www.freshcommerce.es/wp-content/uploads/2019/03/comercio-electronico-login-seguridad.jpg"
              titulo=" Titulo Card 3"
              texto="texto card 3"
            />
          </div>
        </div>
    </div>
  );
}

export default App;
