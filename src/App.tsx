import './App.css'
import NavBar from './components/screen/NavBar'
import Content from './components/screen/Content'
import ThemeProvider from './components/context/Theme'
import ViewProvider from './components/context/View'


function App() {

  return (
    <>
      <ViewProvider>
        <ThemeProvider>
          <NavBar/>
          <Content/>
        </ThemeProvider>
      </ViewProvider>
    </>
  )
}

export default App
