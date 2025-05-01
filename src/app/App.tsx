import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { ROOT_ROUTES } from 'src/app/config'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'src/shared/ui'

const router = createBrowserRouter(ROOT_ROUTES)

export const App: FC = observer(() => {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
})
