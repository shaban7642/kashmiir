import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

function App() {
    return (
        <Router>
            <Route path='/signup' component={SignUpScreen} />
            <Route path='/login' component={LoginScreen} />
        </Router>
    );
}

export default App;
