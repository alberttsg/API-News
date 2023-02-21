import { useRoutes } from 'react-router-dom';
import { ListNews } from "./functions/ListNews"
import { Form } from './functions/Form'
import { Home } from './functions/Home'

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