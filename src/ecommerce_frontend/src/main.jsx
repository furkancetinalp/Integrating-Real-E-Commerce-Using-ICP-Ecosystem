import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './reset.css'
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { AuthProvider } from './contexts/AuthContext';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>

  </React.StrictMode>,
);
