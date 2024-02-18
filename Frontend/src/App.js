import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import { SnackbarProvider } from 'notistack';
import Result from './components/Result/Result';

function App() {

  return (
    <div className="App">
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
