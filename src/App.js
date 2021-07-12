import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import UserEditScreen from './Screens/EditUserScreen/EditUserScreen';
import UserListScreen from './Screens/UserListScreen/UserListScreen';

function App() {
    return (
        <Router>
            <Route path='/signup' component={SignUpScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/admin/user/edit' component={UserEditScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
        </Router>
    );
}

export default App;
