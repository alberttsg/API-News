import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { GlobalProvider } from './context/GlobalState';
import { Header } from './functions/Header'


function App() {


  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header/>
        <AppRouter />
      </GlobalProvider>
   </BrowserRouter>
  );
}

export default App
