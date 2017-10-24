require('normalize.css/normalize.css');
import 'styles/App.scss';
import style from './style.scss';
import React from 'react';
import Goals from '../Goals'
import MyGoals from '../MyGoals'
import items from './items'
import SplitPane from 'react-split-pane'
import image from '../../images/me.jpg'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(item){
    window.console.log(item)
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <SplitPane split='horizontal' defaultSize={59} allowResize={false}>
            <div className={style.heading}>
              <h3>
                <div className={style.iris}>Iris</div>
                <ul className={style.nav}>
                  <li><Link to="/goals">Goals</Link></li>
                  <li><Link to="/my-goals">My Goals</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li>
                    <div className={style.profile}>
                      <img src={image} />
                    </div>
                  </li>
                </ul>
              </h3>
            </div>
            <Switch>
              <Route path="/goals" exact render={()=>(
                <Goals items={items} onSelect={this.handleSelect} />
              )}/>
              <Route path="/my-goals" exact render={()=>(
                <MyGoals items={items} />
              )}/>
            </Switch>
          </SplitPane>
        </div>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
};

export default App;
