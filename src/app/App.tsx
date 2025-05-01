import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { ROOT_ROUTES } from 'src/app/config'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(ROOT_ROUTES)

export const App: FC = observer(() => {
  return <RouterProvider router={router} />
})
