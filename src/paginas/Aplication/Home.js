import BarraSelect from "../../components/BarraSelect";
import Navbar from "../../components/Navbar";
import metaenlace from '../../utils/img/metaenlace-talento-tecnologico.png';

function Home() {
    return (
      <div>
        <Navbar></Navbar>
        <BarraSelect></BarraSelect>
        <div className="d-flex justify-content-center">
          <img className="mt-5 " src={metaenlace} alt="imagen_metaenlace"></img>
        </div>
      </div>
    );
  }

 export default Home;