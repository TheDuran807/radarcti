 import './styles/App.css';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contenido from './Vistas/Contenido';
import Nacional from './componentes/Nacional';
import Hidalgo from './componentes/Hidalgo';
import Stem from './componentes/Stem';
import Educacion from './componentes/Educacionhidalgo';
import InfraestructuraH from './componentes/Infraestructurahidalgo';
import EmprendimientoH from './componentes/EmprendimientoH';
import InnovacionH from './componentes/InnovacionH';
import TicsH from './componentes/Ticsh';
import GeneroH from './componentes/GeneroH';
import InclusionH from './componentes/InclusionH';
import InnovacionN from './componentes/InnovacionN';
import InversionN from './componentes/InversionN';
import EducacionN from './componentes/EducacionN';
import InclusionN from './componentes/InclusionN';
import SNI from './componentes/SNI';
import EmprendimientoN from './componentes/EmprendimientoN';
import InfraestructuraN from './componentes/InfraestructuraN';
import PropiedadN from './componentes/PropiedadN';
import GeneroN from './componentes/GeneroN';
import TicsN from './componentes/TicsN';

function App() {
  return (
    <BrowserRouter>
   
     <div className="App">
     
      

      
      <Routes>

      <Route path={"/"} element={<Contenido/>}/>
    <Route path={"/nacional"} element={<Nacional/>}/>
    <Route path={"/hidalgo"} element={<Hidalgo/>}/>
    <Route path={"/stem"} element={<Stem/>}/>
    <Route path={"/educacionh"} element={<Educacion/>}/>
    <Route path={"/infraestructurah"} element={<InfraestructuraH/>}/>
    <Route path={"/emprendimientoh"} element={<EmprendimientoH/>}/>
    <Route path={"/innovacionh"} element={<InnovacionH/>}/>
    <Route path={"/ticsh"} element={<TicsH/>}/>
    <Route path={"/generoh"} element={<GeneroH/>}/>
    <Route path={"/inclusionh"} element={<InclusionH/>}/>
    <Route path={"/innovacionn"} element={<InnovacionN/>}/>
    <Route path={"/inversionn"} element={<InversionN/>}/>
    <Route path={"/educacionn"} element={<EducacionN/>}/>
    <Route path={"/inclusionn"} element={<InclusionN/>}/>
    <Route path={"/sni"} element={<SNI/>}/>
    <Route path={"/emprendimienton"} element={<EmprendimientoN/>}/>
    <Route path={"/infraestructuraN"} element={<InfraestructuraN/>}/>
    <Route path={"/propiedadn"} element={<PropiedadN/>}/>
    <Route path={"/generon"} element={<GeneroN/>}/>
    <Route path={"/TICSN"} element={<TicsN/>}/>













    
    
    
      </Routes>
      
    
    </div>
    </BrowserRouter> 
    
    
   
  );
}

export default App;
