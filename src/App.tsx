import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ThemeProvider from './components/context/Theme'
import ViewProvider from './components/context/View'
import { QueryClient, QueryClientProvider } from 'react-query'
import Main from './components/screen/Main'
import { useCookies } from 'react-cookie'

const queryClient = new QueryClient()

function App() {
  const [cookies, setCookie] = useCookies(['user'])


  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  function handleLogin(user: any) {
    setCookie('user', user, { path: '/' })
  }
  console.log({cookies})

  return (
    <>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <ViewProvider>
            <ThemeProvider>
              <Main/>
            </ThemeProvider>
          </ViewProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </>
  )
}

export default App
