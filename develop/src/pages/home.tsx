import React from 'react';
import { Link } from 'react-router-dom';
import '../components/DesignDevelop/home.css'

const Home: React.FC = () => {
    
    return (

        <body className='intro'>
          <header className="header">
            <nav className='nez'>
              <h2 className='Logo'>
                Amauri Brown <br /><span>Technical Designer <br />Programmer</span>
              </h2>
              <h1>
                Welcome to my website!
              </h1>
            </nav>
          </header>
  
          <div className="content">
            <article className="left">
            <h1><Link to="/program">Programming</Link></h1>
            </article>
            <article className="right">
                <h1><Link to="/design">Technical Designer</Link></h1>
            </article>
          </div>
        </body>

    )
  }

export default Home;