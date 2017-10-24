require('normalize.css/normalize.css');
import style from './style.scss';

import React from 'react';
import SplitPane from 'react-split-pane'
import PieChart from 'react-svg-piechart'
import Description from './Description'

class MillerColumn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: props.selected
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.isFocused = this.isFocused.bind(this)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.selected != this.props.selected){
      this.setState({selected: nextProps.selected})
    }
  }
  handleSelect(item){
    this.setState({item, selected: item})
    const onSelect = this.props.onSelect || function(){}
    onSelect(item)
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
  completeColor(item){
    return this.isFocused(item) ? '#aaff67' : '#ccff78'
    // return this.isFocused(item) ? '#ffdd22' : '#eecc33'
    // return this.isFocused(item) ? '#ff7700' : '#ff7711'
  }
  inCompleteColor(item){
    // return this.isFocused(item) ? '#002255' : '#000'
    return this.isFocused(item) ? '#113366' : '#000'
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
                    this.value(item) == 0 ? (
                      <i className='fa fa-circle-o' aria-hidden='true'></i>
                    ):this.value(item) == 100 ? (
                      <i className='fa fa-check' aria-hidden='true'></i>
                    ):(
                      <PieChart
                          data={ [
                            {
                              label: '',
                              value: 1.2 + this.value(item),
                              color: this.completeColor(item)
                            }, {
                              label: '',
                              value: 101 - this.value(item),
                              color: this.inCompleteColor(item)
                            }
                          ] }
                          sectorStrokeWidth={1}
                          shrinkOnTouchEnd
                      />
                    )
                  ):(
                    item.value ? (
                      <i className='fa fa-check' aria-hidden='true' />
                    ):(
                      <i className='fa fa-circle-o' aria-hidden='true' />
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
            {this.state.item && this.state.item.items ? (
              <MillerColumn
                items={this.state.item.items || []}
                key={JSON.stringify(this.state.item)}
                onSelect={this.props.onSelect}
                selected={this.state.selected}
              />
            ):(
              this.state.selected && (
                <Description
                  item={this.state.selected}
                  value={this.value(this.state.selected)}
                />
              )
            )}
          </div>
      </SplitPane>
    );
  }
}

MillerColumn.defaultProps = {
};

export default MillerColumn;
