import './whats.css'
import back from '../assets/whatsback2.jpg'
import React from 'react'
import { Avatar, Icon, IconButton } from '@material-ui/core'
import DountLargeIcon from '@material-ui/icons/DonutLargeOutlined'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFileOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticonOutlined'
import MicIcon from '@material-ui/icons/MicNoneOutlined'
import SendArrow from '@material-ui/icons/SendOutlined'
import { useState, useEffect } from 'react'

function Whatsapp() {
  const [msg, setMsg] = useState('')

  return (
    <div className='app_body'>
      <div className='app'>
        <div className='side-bar'>
          <div className='side-bar-header'>
            <div
              className='side-bar-headerLeft'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Avatar />
            </div>
            <div className='side-bar-headerRight'>
              <IconButton>
                <DountLargeIcon
                  style={{ color: '#a0a2a4', fontSize: '28px' }}
                />
              </IconButton>
              <IconButton>
                <ChatIcon style={{ color: '#a0a2a4', fontSize: '28px' }} />
              </IconButton>
              <IconButton>
                <MoreVertIcon style={{ color: '#a0a2a4', fontSize: '28px' }} />
              </IconButton>
            </div>
          </div>
          <div className='side-bar-search'>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '30px',
                background: '#323739',
                width: '100%',
              }}
            >
              <SearchIcon
                style={{ fontSize: '18px', color: 'gray', paddingLeft: '10px' }}
              />
              &nbsp;
              <input
                style={{
                  border: 'none',
                  outline: 'none',
                  background: '#323739',
                  paddingLeft: '30px',
                  fontSize: '15px',
                  caretColor: 'whitesmoke',
                }}
                type='text'
                placeholder='Search or start new chat'
              />
            </div>
          </div>
          <div style={{ overflow: 'scroll', height: '85vh' }}>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Praneeth</h3>
                <span>Hahahah</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Ranganna</h3>
                <span>okay</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Arjun</h3>
                <span>Bye..</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Praneeth</h3>
                <span>Hahahah</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Ranganna</h3>
                <span>okay</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Arjun</h3>
                <span>Bye..</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Praneeth</h3>
                <span>Hahahah</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Ranganna</h3>
                <span>okay</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Arjun</h3>
                <span>Bye..</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Praneeth</h3>
                <span>Hahahah</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Ranganna</h3>
                <span>okay</span>
              </div>
            </div>
            <div className='inboxes'>
              <Avatar />
              &nbsp;&nbsp;&nbsp;
              <div>
                <h3>Arjun</h3>
                <span>Bye..</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className='side-bar-messages'
          style={{ background: `url(${back})`, backgroundSize: '500px 750px' }}
        >
          <div className='chat-bar-header'>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: '1',
              }}
            >
              <Avatar />
              &nbsp; &nbsp;
              <h3>Praneeth</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SearchIcon
                style={{
                  color: '#a0a2a4',
                  fontSize: '28px',
                  paddingRight: '20px',
                }}
              />
              <MoreVertIcon style={{ color: '#a0a2a4', fontSize: '28px' }} />
            </div>
          </div>
          <div className='chat-bar-footer'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <InsertEmoticonIcon
                  style={{
                    color: '#a0a2a4',
                    fontSize: '28px',
                  }}
                />
              </IconButton>
              <IconButton>
                <AttachFile
                  style={{
                    color: '#a0a2a4',
                    fontSize: '28px',
                    transform: 'rotate(50deg)',
                  }}
                />
              </IconButton>
            </div>
            <div style={{ flex: '1', padding: '0px 10px 0px 10px' }}>
              <div
                style={{
                  background: '#33383b',
                  padding: '15px',
                  borderRadius: '30px',
                }}
              >
                <input
                  type='text'
                  style={{
                    background: '#33383b',
                    border: 'none',
                    outline: 'none',
                    caretColor: 'whitesmoke',
                    fontSize: '16px',
                    paddingLeft: '5px',
                    color: 'white',
                    width: '100%',
                  }}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder='Type a message'
                />
              </div>
            </div>
            <div>
              {msg === '' ? (
                <IconButton>
                  <MicIcon
                    style={{
                      color: '#a0a2a4',
                      fontSize: '28px',
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton>
                  <SendArrow
                    style={{
                      color: '#a0a2a4',
                      fontSize: '28px',
                    }}
                  />
                </IconButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp
