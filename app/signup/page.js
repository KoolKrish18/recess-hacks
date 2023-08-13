'use client';

import React from 'react';
import Image from 'next/image';
import HandsHolding from 'public/handsholding.png';
import GradientButton from '@components/GradientButton';

const SignupPage = () => {
    const [userData, setUserData] = React.useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        type: 'youth',
        age: 0,
        bio: '',
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
        {
            type: 'text',
            label: 'First Name',
            inputData: userData.firstName,
            dataField: 'firstName',
        },
        {
            type: 'text',
            label: 'Last Name',
            inputData: userData.lastName,
            dataField: 'lastName',
        },
        {
            type: 'text',
            label: 'Bio',
            inputData: userData.bio,
            dataField: 'bio',
        },
        {
            type: 'number',
            label: 'Age',
            inputData: userData.age,
            dataField: 'age',
        },
    ];

    function sendData() {
        fetch('./api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then(async (res) => {
            if (res.status === 201) {
                let data = await res.json();
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                localStorage.setItem('email', data.email);
                localStorage.setItem('password', data.password);
            } else {
                //TODO Show some toast with an error or smth
            }
        });
    }

    return (
        <div className="flex flex-col content-center min-h-screen">
            <div className="flex justify-center">
                <Image
                    src={HandsHolding}
                    alt="Landing Page"
                    width="100%"
                    quality={100}
                />
            </div>
            <div className="flex justify-center pt-[1em]">
                <div className="w-[80%] flex flex-col p-10 text-center">
                    <h1 className="flex flex-wrap text-5xl font-bold">
                        Find Your Legacy
                    </h1>
                    <p>Join with us and socialize across generations.</p>
                    <GradientButton onClick={sendData} text="Get Started" />
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-5 p-5">
                {inputs.map((key) => (
                    <Input
                        key={key.dataField}
                        userData={userData}
                        setData={setUserData}
                        {...key}
                    />
                ))}
                <div className="flex flex-col flex-1">
                    <label htmlFor="age-group" className="text-xl">
                        Age Group
                    </label>
                    <select
                        id="age-group"
                        className="p-2 bg-gray-100 rounded-md outline-none"
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                type: e.target.value,
                            })
                        }
                        value={userData.type}
                    >
                        <option value="youth">Youth</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
export default SignupPage;

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
