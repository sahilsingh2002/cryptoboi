import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar} from './components'
import { Homepage, News,Cryptocurrencies, CryptoDetails } from './pages'
import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
              <Route path='/news' element={<News/>}/>
              
              
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Typography level={5} style={{color:'white', textAlign:'center'}}>
          CryptoBoi <br/>
          All rights reserved
        </Typography>
        <Space>
        <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/news'>News</Link>
          
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App