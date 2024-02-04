import React from 'react'

export default function CctvComponent() {
  return (
    <div>
        <header>CCTV Access</header>

        <form>
        <div>
            <lable>Enter your Mobile Number: </lable>
            <input 
            type = 'number'
            placeholder='0983323456'
            maxLength={10}
            />
            <button>Send</button>
        </div>
        <div>
            <lable>Please Enter the OTP number: </lable>
            <input 
            type = 'number'
            placeholder='0983323456'
            maxLength={10}
            />
            <button>Send OTP</button>
        </div>

        </form>
    </div>
  )
}
