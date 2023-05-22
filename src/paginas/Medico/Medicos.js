import BarraSelect from "../../components/BarraSelect";
import MedicoList from "../../components/MedicoList";
import Navbar from "../../components/Navbar";
import NuevoMedico from "../../components/NuevoMedico";

function Medicos() {
    return (
      <div>
        <Navbar></Navbar>
        <BarraSelect></BarraSelect>
        <NuevoMedico></NuevoMedico>
        <MedicoList></MedicoList>
      </div>
    );
  }

 export default Medicos;