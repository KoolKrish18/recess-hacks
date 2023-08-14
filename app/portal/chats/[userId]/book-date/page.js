'use client';

import Link from 'next/link';
import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

const options = {
    title: 'Book A Date',
    autoHide: true,
    todayBtn: true,
    defaultDate: new Date(),
    language: 'en',
    theme: {
        background: 'bg-gray-100',
        icons: 'bg-gray-200',
        clearBtn: 'bg-gray-100',
    },
};

const DemoComponent = () => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (selectedDate) => {
        setSelectedDate(selectedDate);
    };
    const handleClose = (state) => {
        setShow(state);
    };

    return (
        <div className=" flex flex-col h-full justify-center items-center gap-4 relative pb-48">
            <Link href="./">
                <svg
                    className="absolute top-6 left-6 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </Link>
            <h1 className="text-medium text-3xl">Select a Date to Talk! </h1>
            <div className="relative">
                <Datepicker
                    classNames="max-w-xs"
                    options={options}
                    onChange={handleChange}
                    show={show}
                    setShow={handleClose}
                />
            </div>
            <button className="bg-gray-500 text-white text-xl px-8 py-2 rounded-lg">
                Confirm
            </button>
        </div>
    );
};

export default DemoComponent;
