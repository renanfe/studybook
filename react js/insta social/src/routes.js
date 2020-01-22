import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Feed from './pages/feed';
import News from './pages/news';

export default class Routes extends React.Component {
  render(){
    return(
      <Switch>
        <Route path="/" exact component={Feed}></Route>
        <Route path="/news" component={News}></Route>
      </Switch>
    )
  }
}
