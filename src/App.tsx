import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ThemeProvider from './components/context/Theme'
import ViewProvider from './components/context/View'
import { QueryClient, QueryClientProvider } from 'react-query'
import Main from './components/screen/Main'
import { useCookies } from 'react-cookie'
import { __DEV__ } from '@apollo/client/utilities/globals'
import ContentProvider from './components/screen/ContentSwitch'

const queryClient = new QueryClient()

function App() {
  const [cookies, setCookie] = useCookies(['user'])


  const client = new ApolloClient({
    uri: "https://backend-vbvs.onrender.com/graphql",
    // uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  function handleLogin(user: any) {
    setCookie('user', user, { path: '/' })
  }

  if (__DEV__)
    console.log({cookies, handleLogin})

  return (
    <>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <ContentProvider>
            <ViewProvider>
              <ThemeProvider>
                <Main/>
              </ThemeProvider>
            </ViewProvider>
          </ContentProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </>
  )
}

export default App
