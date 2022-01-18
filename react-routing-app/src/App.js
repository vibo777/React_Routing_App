// import Login from './Login';
import './App.css';
// import Registration from './Registration';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Videos from './VIdeos';

function App() {
  return (
    <div className="App">
         {/* <BrowserRouter>
          
          <Routes>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
          
          </Routes>
        
        </BrowserRouter> */}
      <Videos/>

    </div>
  );
}

export default App;
