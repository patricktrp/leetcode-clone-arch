import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ProblemOverview from './routes/ProblemOverview'
import { Auth0Provider } from '@auth0/auth0-react'
import MainPage from './routes/MainPage'
import ProblemDetail from './routes/ProblemDetail'
import { loader as problemsLoader } from './routes/ProblemOverview'
import { loader as problemDetailLoader } from './routes/ProblemDetail'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
        element: <ProblemOverview />,
        loader: problemsLoader(queryClient)
      },
      {
        path: "problems/:problemId",
        element: <ProblemDetail />,
        loader: problemDetailLoader(queryClient)
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode >,
)
