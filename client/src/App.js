import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MapPage from './components/MapPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path='/' exact element={<RegistrationForm/>} />
          <Route path='/login' exact element={<LoginForm/>} />
          <Route path='/map' element={<MapPage/>} />
      </Routes>
      </div>
</Router>
  )}

  export default App;