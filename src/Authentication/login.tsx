/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/context/AuthContext";
import axios from "@/Api/axiosConfig"; 
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
   const { setAccessToken } = useAuth();
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin: (event: React.FormEvent) => Promise<void> = async (event) => {
        event.preventDefault();
        setError('');
        // try {
        //     const response = await fetch('http://localhost:8080/api/auth/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });
        //     if (!response.ok) {
        //         throw new Error('Login failed!');
        //     }
        //     const data = await response.json();
        //     setAccessToken(data.accessToken);
        //     navigate('/dashboard'); // Redirect to dashboard after successful login
        // } catch (error) {
        //     setError('Invalid email or password!');
        // }  // example one
        //example two
       
        
        try {
            const res = await axios.post('/auth/login', {
              email,
              password,
            });

        
            console.log("AccessToken", res.data.data.accessToken);

            const userData = await setAccessToken(res.data.data.accessToken);

            console.log("User👉", userData);
            console.log("User Role👉", userData?.role);


    

            navigate('/'); // Redirect after login
          } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
          }
        };

        return (
            <div className="max-w-md mx-auto mt-10">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  className="w-full border p-2"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full border p-2"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                {error && <p className="text-red-600">{error}</p>}
                <button className="w-full bg-blue-600 text-white p-2" type="submit">Login</button>
              </form>
            </div>
          );

}


export default Login;