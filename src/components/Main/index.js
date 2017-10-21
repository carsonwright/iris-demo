require('normalize.css/normalize.css');
import 'styles/App.scss';
import style from './style.scss';
import React from 'react';
import MillerColumns from '../MillerColumns'
import items from './items'
import SplitPane from 'react-split-pane'

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <SplitPane split='horizontal' defaultSize={59} allowResize={false}>
          <div className={style.heading}>
            <h3>
              <div className={style.iris}>Iris</div>
              &nbsp; &nbsp; Goals &nbsp; Users
            </h3>
          </div>
          <MillerColumns items={items} />
        </SplitPane>
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;
