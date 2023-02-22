import { useRoutes } from 'react-router-dom';
import { ListNews } from "./pages/ListNews"
import { Form } from './pages/Form'
import { Home } from './pages/Home'

function AppRouter() {

  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Form />,
        path: '/form',
      },
      {
        element: <ListNews />,
        path: '/news',
      }
    ]
  );
}

export  { AppRouter }