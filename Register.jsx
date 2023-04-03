import React,{useState} from "react";

export const Register = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass]= useState('');
    const [name,setName]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name}  placeholder="Enter your name" id="name" name="name"></input>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your Password" id="password" name="password"></input>
                <button type="submit"> Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already registered? Login here</button>
        </div>
    )
}