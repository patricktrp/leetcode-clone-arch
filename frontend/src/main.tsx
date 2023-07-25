import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MainPage from './routes/MainPage'
import ProblemDetailPage, { loader as problemDetailLoader } from './routes/ProblemDetailPage'
import ProblemOverviewPage, { loader as problemsLoader } from './routes/ProblemOverviewPage'
import ProfilePage from './routes/ProfilePage'
import Root from './routes/Root'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})

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
        element: <ProblemOverviewPage />,
        loader: problemsLoader(queryClient)
      },
      {
        path: "problems/:problemId",
        element: <ProblemDetailPage />,
        loader: problemDetailLoader(queryClient)
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="leetcode-clone.eu.auth0.com"
      clientId="j1Um3LosPi47lO6tK5f4zLaxqNRQlquG"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/problems`
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode >,
)
