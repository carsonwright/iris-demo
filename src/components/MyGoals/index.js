import React, {Component} from 'react'
import style from './style.scss'
import SplitPane from 'react-split-pane';
import moment from 'moment'

class MyGoals extends Component {
  constructor(){
    super()
    this.state = {}
    this.recordTime = this.recordTime.bind(this)
  }
  recordTime(){
    if(this.timer){
      clearInterval(this.timer)
      this.setState({time: false})
      delete this.timer
    }else{
      this.timer = setInterval(()=>{
        const time = (this.state.time || 0) + 1
        this.setState({
          time
        })
      }, 1000)
    }
  }
  render(){
    return (
      <SplitPane split='vertical' defaultSize={300}>
        <div className={style.backContainer}>
          <div className={style.backItem}>
            <table className={style.backBurnerPositions}>
              <tbody>
                <tr>
                  <td>
                    <b>Back Burner Slot</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Back Burner Slot</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Back Burner Slot</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Back Burner Slot</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <SplitPane split='vertical' defaultSize={310}>
          <div className={style.feedContainer}>
            <div className={style.workLabel}>
              Current Work
              <br />
              and
              <br />
              Upcoming Work
            </div>
            <div className={style.feed}>
              {this.props.items[0].items[0].items.filter(item => !item.value).map((item, i)=>(
                <div className={style.feedItem} key={i}>
                  {this.props.items[0].name}
                  &nbsp;
                  <i
                    className={`fa fa-chevron-right ${style.open}`}
                    aria-hidden='true'
                  />
                  &nbsp;
                  {this.props.items[0].items[0].name}
                  &nbsp;
                  <i
                    className={`fa fa-chevron-right ${style.open}`}
                    aria-hidden='true'
                  />
                  &nbsp;
                  <b>{item.name}</b>
                </div>
              ))}
              <div className={style.currentItem}>
                <i
                  className={`fa fa-chevron-left ${style.backBurnerArrow}`}
                  aria-hidden='true'
                />
                <div className={style.currentName}>
                  {this.props.items[1].name}
                  &nbsp;
                  <i
                    className={`fa fa-chevron-right ${style.open}`}
                    aria-hidden='true'
                  />
                  &nbsp;
                  {this.props.items[1].items[0].name}
                  &nbsp;
                  <i
                    className={`fa fa-chevron-right ${style.open}`}
                    aria-hidden='true'
                  />
                  &nbsp;
                  <b>{this.props.items[1].items[0].items[0].name}</b>
                  <br />
                  <br />
                  <div
                    className={`fa fa-check-circle ${style.complete}`}
                    aria-hidden='true'
                  /> Mark as Completed
                  <br />
                  <br />
                  <div
                    className={`fa fa-info-circle ${style.getInfo}`}
                    aria-hidden='true'
                  /> &nbsp;
                  Need Something?
                  <br />
                  <br />
                  <div className={style.recordTimeContainer}>
                    {this.state.time ? (
                      <span>
                        <div
                          className={`fa fa-square ${style.stopRecordingTime}`}
                          aria-hidden='true'
                          onClick={this.recordTime}
                        />
                        &nbsp; Record Time
                      </span>
                    ):(
                      <span>
                        <div
                          className={`fa fa-circle ${style.recordTime}`}
                          aria-hidden='true'
                          onClick={this.recordTime}
                        />
                        &nbsp; Record Time
                      </span>
                    )}
                    &nbsp; {
                      moment().hour(0)
                        .minutes(0)
                        .seconds(this.state.time || 0)
                        .format('H:mm:ss')
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.currentDescription}>
            As a <b>{this.props.items[1].items[0].description.noun}</b> you
            should be able
            to <b>{this.props.items[1].items[0].description.verb}</b>
          </div>
        </SplitPane>
      </SplitPane>
    )
  }
}
export default MyGoals;