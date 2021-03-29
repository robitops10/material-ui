import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/ui/header';


const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact   component={() => <div>Home </div>} />
        <Route path='/home'     component={() => <div>Home </div>} />
        <Route path='/about'    component={() => <div>About </div>} />
        <Route path='/contact'  component={() => <div>Contact </div>} />
        <Route path='/services'  component={() => <div>Services </div>} />

        <Route path='/software' component={() => <div> Custom Software Development </div>} />
        <Route path='/mobile'   component={() => <div> Mobile App Development </div>} />
        <Route path='/website'  component={() => <div> Website Development </div>} />
      </Switch>
    </div>

    </BrowserRouter>
  );
};
export default App;


