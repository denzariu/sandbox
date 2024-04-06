import './App.css'
import Content from './components/screen/Content'
import ThemeProvider from './components/context/Theme'
import ViewProvider from './components/context/View'
import { QueryClient, QueryClientProvider } from 'react-query'
import SideBar from './components/screen/SideBar'

const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ViewProvider>
        <ThemeProvider>
          <SideBar/>
        </ThemeProvider>
      </ViewProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
