import './App.css';
import './form/Form-style.css';

import { Form } from "./form/Form";

function App() {
  return (
    <div className="body">
      <div className="Application">
        <p className="title">Contact Us:</p>
        <Form/>
      </div>
    </div>
  );
}

export default App;