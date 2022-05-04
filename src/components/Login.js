import {auth, provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserAuth }) => {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
       signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem('userAuth', true)
            setUserAuth(true);
            navigate("/");
        })
    }
    return (
      <div className="loginPage">
        <p>Sign In with Google to see your own Posts</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In with Google
        </button>
      </div>
    );
}

export default Login;