require('normalize.css/normalize.css');
import style from './style.scss';

import React from 'react';
import SplitPane from 'react-split-pane'
import PieChart from 'react-svg-piechart'

class MillerColumn extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.handleSelect = this.handleSelect.bind(this)
    this.isFocused = this.isFocused.bind(this)
  }
  handleSelect(item){
    this.setState({item})
  }
  isFocused(item){
    return this.state.item && this.state.item == item
  }
  itemFocused(item){
    const classNames = [style.itemName]
    if(this.isFocused(item)){
      classNames.push(style.itemFocused)
    }
    return classNames.join(' ')
  }
  color(item){
    return this.isFocused(item) ? '#5b89c8' : '#5b89c8'
  }
  value(item){
    if(item && item.items && item.items.length != 0){
      return item.items.reduce((acc, item)=>{
        if(item.items && item.items.length != 0){
          return acc + this.value(item)
        }else{
          return item.value ? acc + 100 :  acc + 0
        }
      }, 0) / item.items.length
    }else{
      return item.value ? 100 : 0
    }
  }
  render() {
    return (
      <SplitPane split='vertical' minSize={50} defaultSize={200}>
          <div>
            {this.props.items.map((item, i)=>(
              <div
                onClick={this.handleSelect.bind(null, item)}
                className={this.itemFocused(item)}
                key={`miller-${i}`}
              >
                <div className={style.pie}>
                  {typeof item.value == 'undefined' ? (
                    <PieChart
                        data={ [{label: '', value: 1 + this.value(item), color: this.color(item)}, {label: '', value: 101 - this.value(item), color: '#202225'}] }
                        sectorStrokeWidth={1}
                        shrinkOnTouchEnd
                    />
                  ):(
                    item.value ? (
                      <i className='fa fa-check' aria-hidden='true'></i>
                    ):(
                      <i className='fa fa-circle-o' aria-hidden='true'></i>
                    )
                  )}
                </div>
                &nbsp; &nbsp;
                {item.name}
                <i
                  className={`fa fa-play ${style.open}`}
                  aria-hidden='true'
                />
              </div>
            ))}
          </div>
          <div>
            {this.state.item && (
              <MillerColumn items={this.state.item.items || []} key={JSON.stringify(this.state.item)} />
            )}
          </div>
      </SplitPane>
    );
  }
}

MillerColumn.defaultProps = {
};

export default MillerColumn;
