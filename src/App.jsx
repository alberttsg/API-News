import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { GlobalProvider } from './context/GlobalState';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header'


function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header/>
        <AppRouter />
        <Footer/>
      </GlobalProvider>
   </BrowserRouter>
  );
}

export default App
