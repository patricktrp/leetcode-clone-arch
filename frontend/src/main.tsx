import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import QuestionOverview from './routes/QuestionOverview'
import { Auth0Provider } from '@auth0/auth0-react'
import MainPage from './routes/MainPage'

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
        path: "questions",
        element: <QuestionOverview />
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
        redirect_uri: import.meta.env.MODE === 'development' ? `${window.location.origin}/questions` : 'https://leetcode.treppmann.dev/questions'
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
