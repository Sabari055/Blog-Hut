import { BrowserRouter, Route , Routes} from 'react-router-dom';
import  Navbar  from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Createpost from './screens/create/Createpost'
import Postdetail from './screens/postdetail/Postdetail'
import Editpost from './screens/edit/Editpost'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/create"element={<Createpost/>}/>
        <Route exact path="/Post/:id" element={<Postdetail/>}/>
        <Route exact path="/edit/:id" element={<Editpost/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
