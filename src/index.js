import React from 'react'
import ReactDOM from 'react-dom'
import AntCard from './components/AntCard/_antCard';
import './index.scss'

const App = () => 
  <div>
    <AntCard />
  </div>

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
