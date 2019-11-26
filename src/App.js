import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {sendMessage} from './chat'
import FreeScrollBar from 'react-free-scrollbar';

import './App.css'
import { 
  Row, 
  Jumbotron, 
  Toast,
  ToastBody,
  ToastHeader,
  Navbar,
  NavbarBrand,
  } from 'reactstrap'

export class App extends Component {

  render() {
    const {feed, sendMessage} = this.props

    function bottom() {
      document.getElementsByClassName( 'user-message-field' )[0].scrollIntoView();
    };

    return (
      <div>
        <div>
          <Jumbotron className="header">
            <h1>Welcome to Squeezy!</h1>         
          </Jumbotron>
          <Navbar color="dark">
              <NavbarBrand href="/" className="Home">Home
              </NavbarBrand>
          </Navbar>
          <p className="tagline">SQL Made Easy For Your Convenience</p>
          
        </div>
      
        <div className="main">
          <div style={{ width: '100vw', height: '400px' }}>
            <FreeScrollBar>
              {feed.map((entry, idx) => {
                return (
                  <div>
                    <Row key={idx} className="speech-bubble-right">
                      <div className='speech-bubble-text-body'>
                        <p><strong>Demo Speech Bubble</strong></p>
                        <p>{entry.text}</p>
                        {entry.choices.length > 0 ?
                          <ol>
                            {entry.choices.map(choice => <li>{choice}</li>)}
                          </ol>
                          :
                          null
                        }
                        <div class="speech-bubble-right-arrow"></div>
                      </div>
                    </Row>
                    <br />
                  </div>
                )
              }
              )}
            </FreeScrollBar>
          </div>
    
        </div> 
        <div>
          
        </div>
           <input className='user-message-field' type="text" placeholder= "Type Response Here" onKeyDown={(e) => {
             if (e.keyCode === 13) {
              document.getElementsByClassName( 'speech-bubble-right' )[0].scrollIntoView();
               sendMessage(e.target.value)
               e.target.value = ''
             }
           }}
           />
      </div>
    )
  }
}




const mapStateToProps = state => ({
  feed: state
})

export default connect(mapStateToProps, {sendMessage})(App)
