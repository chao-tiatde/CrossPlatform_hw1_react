import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header className="header">
            <h1 className="header-left">Vegetables</h1>
            <div className="header-right">
                <img src="img/facebook.png" alt="Facebook icon"/>
                <img src="img/instagram.png" alt="Instagram icon" className="instagram"/>
                <hr className="line"/>
                <p className="login">LOGIN</p>
                <p className="join">JOIN</p>
            </div>
        </header>
            <div className="container">
                
                <nav className="nav">
                    <h2 className="home">Home</h2>
                    <h2 className="aboutus">About Us</h2>
                    <h2 className="vegetables">Vegetables</h2>
                    <h2 className="online">Online</h2>
                    <h2 className="contact">Contact</h2>        
                </nav>
                
                <img src="img/pumpkin.png" alt="pumpkin" width="1120px" height="448px"/>
                <div className="aside">
                    
                    <div className="aside-left">
                        <div className="aside-left-bg">
                            <h3 className="aside-left-header">Vegetables</h3>
                        </div>
                            <div className="aside-left-content">
                                <img src="img/carrot.png" alt="carrot" width="165px" height="140px"/>
                                <img src="img/corn.png" alt="corn" width="165px" height="140px"/>
                                <img src="img/pepper.png" alt="pepper" width="165px" height="140px"/>
                            </div>
                    </div>
                    
                    <div className="aside-right">
                        <div className="aside-right-bg">
                            <h3 className="aside-right-header">Contact</h3>
                        </div>
                            <div className="aside-right-content">
                            <p style={{ height: '54px', margin: 0 }}>For any questions or suggestions about 
                                  Vegetables, Vegetables Club or your online <br/>order you can contact Vegetables Customer Service by phone, email or post and we'll be <br/>happy to help.</p>
                                <hr/>
                                <p style={{margin: 0 }}>E-mail: Vegetables@aaabbccc.com</p>
                                <p style={{margin: 0 }}>PHONE: +886-123-456-789</p>
                            </div>
                    </div> 
                </div>     
            </div>
        
        <footer className="footer">
            <p>Copyrights 2017 Vegetables cise / Design by Vegetables</p>
        </footer>     
      </div>
    </>
  )
}

export default App
