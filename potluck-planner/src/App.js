import './App.css';

import Login from './components/Login';
import MemberPage from './components/MemberPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the Potluck Planner App! Welcome!</h1>
      </header>
        <MemberPage />
    </div>
  );
}

export default App;
