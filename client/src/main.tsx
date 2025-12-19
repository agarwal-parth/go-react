import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "@/components/ui/color-mode"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { system } from './chakra/theme.ts'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>  
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
)