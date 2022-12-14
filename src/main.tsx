import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {store} from './app/store/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </ChakraProvider>
)
