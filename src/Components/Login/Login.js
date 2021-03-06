import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Images/google.svg'



const Login = () => {
    const [login, setLogin] = useState(true)

    const [confirmError, setConfirmError] = useState('');

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

    //for user creation
    const [
        createUserWithEmailAndPassword,
        createUser,
        creteLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    //for user  login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //sign in with google..................




    const [loginUser, loginloading, loginerror] = useAuthState(auth);

    const handleFormInput = (event) => {
        userInfo[event.target.name] = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!login) {


            if (userInfo.password !== userInfo.confirmPass) {
                setConfirmError('password can not match');
                return;
            }

            setConfirmError("")
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }

        console.log(userInfo)
    }
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (loginUser) {
        navigate(from, { replace: true });
    }



    return (
        <div className='container'>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <h2>
                    {login ? 'Login' : "Register"}
                </h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event) => handleFormInput(event)} type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event) => handleFormInput(event)} type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>

                {
                    !login && <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input onBlur={(event) => handleFormInput(event)} type="password" name='confirmPass' className="form-control" id="exampleInputPassword1" />
                    </div>
                }


                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input bg-secondary" id="exampleCheck1" onChange={() => setLogin(!login)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">{



                        login ? 'Check me  if you do not have an account.' : 'Uncheck me  if you have an account.'


                    }</label>
                </div>


                <button type="submit" className="btn btn-primary">{login ? "Login" : "Register"}</button>
                <p className='text-danger mt-4'>{confirmError}</p>
                {
                    createError && <p className='text-danger'>{createError.message}</p>
                }
                {
                    createUser && <p className='text-success'>User Created Successfully</p>
                }
                {
                    user && <p className='text-success'>User Login Successfully</p>
                }
            </form>
            <div className='container d-flex align-items-center w-50 mx-auto'>
                <div className='bg-success w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-3 p-2'>OR</p>
                <div className='bg-success w-50 ' style={{ height: '1px' }}></div>

            </div>
            <div className=''>
                <button className='btn btn-primary w-40 d-block mx-auto'><img src={GoogleLogo} alt="" /> <span>Continue With Google</span></button>
            </div>
        </div>
    )
}

export default Login