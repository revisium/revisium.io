import { RouteObject } from 'react-router-dom'
import { MainPage } from 'src/pages/Main'
import { ROOT_ROUTE } from 'src/shared/configs'

export const ROOT_ROUTES: RouteObject[] = [
  {
    path: ROOT_ROUTE,
    element: <MainPage />,
  },
]
