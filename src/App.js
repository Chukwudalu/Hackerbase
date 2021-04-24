import Home from './pages/home';
import Detail from './pages/detail'
import GlobalStyle from './styles/globalStyles';
import Contact from './pages/contact'
import Nav from './components/nav';
import { Switch, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Home}/>
          <Route path='/instructor/:id' component={Detail} />
          <Route path='/contact' component={Contact}/>
        </Switch>
      </AnimatePresence>
     
    </div>
  );
}

export default App;
