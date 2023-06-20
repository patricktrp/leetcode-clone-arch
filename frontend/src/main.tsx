import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ProblemOverview from './routes/ProblemOverview'
import { Auth0Provider } from '@auth0/auth0-react'
import MainPage from './routes/MainPage'
import ProblemDetail from './routes/ProblemDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "problems",
        element: <ProblemOverview />
      },
      {
        path: "problems/:problemId",
        element: <ProblemDetail />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="leetcode-clone.eu.auth0.com"
      clientId="TfVhTSMnMyVY252wORSSe6C0l8AyBxf8"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/problems`
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
