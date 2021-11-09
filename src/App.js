import './styles/App.sass';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react/cjs/react.development';

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
}, [theme]);

  return (
    <div className="container">
      
      <Header theme={theme} setTheme={setTheme}/>
      <Main />
      
    </div>
  );
}

export default App;
