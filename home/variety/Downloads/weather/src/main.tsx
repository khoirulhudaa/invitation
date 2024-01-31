import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoadingFallback from './Components/loading.tsx'
import Routers from './Routers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {
                Routers.map((router: any, index: number) => (
                  <Route 
                    key={index}
                    path={router.path}
                    element={<router.component />}
                  />
                ))
              }
            </Routes>
          </Suspense>
        </Router>
  </React.StrictMode>,
)
