import React from 'react'
import style from './style.scss'
import moment from 'moment'

export default (props)=>(
  <div>
    <h2 className={style.title}>{props.item.name}</h2>
    <div className={style.info}>
      <table style={{textAlign: 'left', margin: '0px auto'}}>
        <tbody>
          <tr>
            <td style={{padding: '1em'}}>
              <b style={{color: '#aacdff'}}>Assigned To:</b>
              <br />
              Carson Wright
            </td>
            <td style={{padding: '1em'}}>
              <b style={{color: '#aacdff'}}>Status:</b>
              {!props.item.items ? (
                <div>
                  {props.item.value ? (
                    <i className='fa fa-check' aria-hidden='true' style={{color: '#92f2a2'}} />
                  ):(
                    <i className='fa fa-circle-o' aria-hidden='true' style={{color: '#0d0d0e'}} />
                  )}
                  &nbsp;&nbsp;
                  {props.item.value ? (
                    'Complete'
                  ):(
                    'Incomplete'
                  )}
                </div>
              ):(
                <div>
                  {props.value == 100 ? (
                    <span>
                      <i className='fa fa-check' aria-hidden='true' style={{color: '#92f2a2'}} />
                      &nbsp; Complete
                    </span>
                  ):props.value == 0 ? (
                    <span>
                      <i className='fa fa-circle-o' aria-hidden='true' style={{color: '#0d0d0e'}} />
                      &nbsp; Incomplete
                    </span>
                  ):(
                    <span>
                      <b style={{color: '#92f2a2'}}>{Math.round(props.value)}%</b>
                      &nbsp; Complete
                    </span>
                  )}
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table style={{textAlign: 'left', margin: '0px auto'}}>
        <tbody>
          <tr>
            <td>
            </td>
            <td>
              <b style={{color: '#92f2a2'}}>5 pts</b>
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right', color: '#aacdff'}}>
              <b>Created At</b>
            </td>
            <td>
              {moment().format('M/DD/YY h:mm a')}
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right', color: '#aacdff'}}>
              <b>Last Modified on</b>
            </td>
            <td>
              {moment().format('M/DD/YY h:mm a')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={style.description}>
      As {
        'aeio'.match(props.item.description.noun[0]) ? 'an' : 'a'
      } <b>{props.item.description.noun}</b> you should be able to <b>{props.item.description.verb}</b>
    </div>
  </div>
)