import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Routers from './Routers'
import store, { persistor } from './Store/store'
import './index.css'
import Loading from './Assets/gif/loading.gif'

const LoadingFallback = () => {
  return (
    <div className='absolute left-0 top-0 w-screen h-screen flex bg-white justify-center items-center text-center z-[99999999999999999999999]'>
      <img src={Loading} alt="Loading" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
          {
              Routers.map((router, index) => (
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
    </PersistGate>
  </Provider>
</React.StrictMode>,
)
