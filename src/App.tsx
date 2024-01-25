import './App.css'
import { UncontrolledForm } from './components/UncontrolledForm';
import { ControlledForm } from './components/ControlledForm';

function App() {

  return (
    <div className="app">
      <div className="form-wrapper">
        <h2 className="title">Controlled component</h2>
        <ControlledForm />
      </div>

      <div className="form-wrapper">
        <h2 className="title">Uncontrolled component</h2>
        <UncontrolledForm/>
      </div>
    </div>
  )
}

export default App;
