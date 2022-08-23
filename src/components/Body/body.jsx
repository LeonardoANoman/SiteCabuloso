import "./body.css";
import Fumar1 from "../../img/fumar1.jpeg";
import Fumar2 from "../../img/fumar2.jpeg";

const Body = () => {
  const getDiasSemFumar = () => {
    const ultimoDia = new Date(2022, 7, 20, 22, 3, 0);
    const hoje = new Date();
    const diasSemFumar = hoje.getTime() - ultimoDia.getTime();
    const dias = new Date(diasSemFumar).getDate();
    return dias;
  };

  const getRecorde = () => {
    const recorde = 0;
    const diasSemFumar = getDiasSemFumar();
    if (diasSemFumar > recorde) {
      return diasSemFumar;
    } else {
      return recorde;
    }
  };

  return (
    <div className="fumarEBom">
      <div>
        <img src={Fumar1} alt="Camisa foda 1" />
      </div>
      <div className="separadorFodase">
        <div className="contador">
          <h1>Estou há </h1>
          <h1 className="vermelho">{getDiasSemFumar()} dias</h1>
          <h1>sem fumar 🚬</h1>
        </div>
        <div className="recorde">
          <h1>Meu recorde é</h1>
          <h1 className="vermelho">{getRecorde()} dias</h1>
          <h1>🤭</h1>
        </div>
      </div>
      <div>
        <img src={Fumar2} alt="Camisa foda 2" />
      </div>
    </div>
  );
};

export default Body;
