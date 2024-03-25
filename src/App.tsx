import './App.css'
import NavBar from './components/screen/NavBar'
import Content from './components/screen/Content'
import ThemeProvider from './components/context/View'


function App() {

  return (
    <>
      <ThemeProvider>
        <NavBar/>
        {/* <SideBar/> */}
        
        <Content/>
      </ThemeProvider>
    </>
  )
}

export default App
