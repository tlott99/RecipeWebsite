import './App.css'
import PagesHandler from './PagesHandler';
import {BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <PagesHandler/>
    </BrowserRouter>
  )
}