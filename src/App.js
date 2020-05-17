import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='head'>
        <img src='https://avatars.mds.yandex.net/get-pdb/1368870/4b7c46bc-08b3-4296-98a0-4a969e101280/s1200?webp=false' />
      </header>

      <nav className='navigation'>
        <div>
          <a href=''>Profile</a>
        </div>
        <div>
          <a href=''>Messages</a>
        </div>
      </nav>

      <div className='content'>
        <img src='https://avatars.mds.yandex.net/get-pdb/985790/453d00bf-6999-41ed-b0bf-a8bc310ac9ca/s1200?webp=false' />
        <img src='https://avatars.mds.yandex.net/get-pdb/1789050/85fb3978-b7cb-4f26-833a-3079cdb98906/s1200' />
      </div>
    </div>
  )
}

export default App;
