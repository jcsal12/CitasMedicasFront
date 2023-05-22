import BarraSelect from "../../components/BarraSelect";
import CitaList from "../../components/CitaList";
import Navbar from "../../components/Navbar";
import NuevaCita from "../../components/NuevaCita";

function Citas() {
    return (
      <div>
        <Navbar></Navbar>
        <BarraSelect></BarraSelect>
        <NuevaCita></NuevaCita>
        <CitaList></CitaList>
      </div>
    );
  }

 export default Citas;