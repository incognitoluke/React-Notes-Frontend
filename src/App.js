import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPages from './pages/NotesListPages'
import NotePage from "./pages/NotePage";


function App() {
  return (
    <Router forceRefresh={true}>
      <div className="container dark">
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" exact element={<NotesListPages/>}/>
            <Route path="/note/:id" element={<NotePage/>}/>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
