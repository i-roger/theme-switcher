import { ThemeProvider, DefaultTheme } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light';

import Header from './components/Header'
import GlobalStyle from './styles/global'
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
        <section className='section-a'>
          <h1>Algumas Curiosidades:</h1>
          <p>
          ✅ O theme esá armazenado em localStorage, para manter o tema selecionado mesmo que a página seja atualizada.<br/>
          ✅ styled-components <br/>
          ✅ react-switch <br/>
          ✅ UseEffect + UseState
          </p>  
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App
