'use client'
import { useState } from 'react';

function GradientButton({ text}) {
  return (
      <button className="p-4 font-bold text-white bg-red-400 rounded-2xl hover:bg-red-500 hover:shadow-xl">
      {text}
    </button>
  );
}

export default GradientButton;
