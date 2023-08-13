'use client';
import { useState } from 'react';

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const inputs = [
        {
            type: 'email',
            label: 'Email',
            inputData: userData.email,
            dataField: 'email',
        },
        {
            type: 'password',
            label: 'Password',
            inputData: userData.password,
            dataField: 'password',
        },
    ];
    function submitData() {
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
            }),
        }).then((response) => {
            if (response.status === 200) {
                let body = response.json();
                localStorage.setItem('email', body.email);
                localStorage.setItem('password', data.password);
                window.location.href = '/';
            } else {
                alert('Invalid Credentials');
            }
        });
    }

    return (
        <>
            <div className="flex flex-col gap-5 p-5">
                {inputs.map((input) => (
                    <Input
                        key={input.label}
                        userData={userData}
                        setData={setUserData}
                        {...input}
                    />
                ))}
                <input
                    type="submit"
                    value="Login"
                    className="p-2 bg-gray-200 rounded-md outline-none"
                    onClick={submitData}
                />
            </div>
        </>
    );
};

const Input = ({ userData, setData, label, type, inputData, dataField }) => {
    return (
        <div className="flex flex-col flex-1">
            <label className="text-xl">{label}</label>
            <input
                type={type}
                value={inputData}
                onChange={(e) =>
                    setData({ ...userData, [dataField]: e.target.value })
                }
                className="p-2 bg-gray-100 rounded-md outline-none"
            />
        </div>
    );
};

export default LoginPage;
