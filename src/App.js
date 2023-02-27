// import logo from './logo.svg';
// import './App.css';
import { Content } from './components/content/Content';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-md-1 col-sm-1  border-end '>
          <Sidebar />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;