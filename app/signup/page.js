import React from 'react'
import Image from 'next/image'
import GradientButton from '@components/GradientButton'

const SignupPage = () => {
  return (
    <div className="flex flex-col content-center min-h-screen">
      <div className="flex justify-center">
        <Image
          src="/images/landing-page.png"
          alt="Landing Page"
          height={300}
          width={300}
          quality={100}
        />
      </div>
      <div className="flex justify-center pt-[1em]">
        <div className='w-[80%] flex flex-col p-10 text-center'>
            <h1 className='flex flex-wrap text-2xl font-bold'>
                Find Your Legacy With Us
            </h1>
            <p>Join with us and socialize across generations.</p>
            <GradientButton text="Get Started"/>
        </div>
      </div>
    </div>
  )
}

export default SignupPage