import BarraSelect from "../../components/BarraSelect";
import Navbar from "../../components/Navbar";
import NuevoPaciente from "../../components/NuevoPaciente";
import PacienteList from "../../components/PacienteList";

function Pacientes() {
    return (
      <div>
        <Navbar></Navbar>
        <BarraSelect></BarraSelect>
        <NuevoPaciente></NuevoPaciente>
        <PacienteList></PacienteList>
      </div>
    );
  }

 export default Pacientes;