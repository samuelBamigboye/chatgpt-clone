'use client'
import { page } from '../src/app/page'

function Login() {
  return (
      <div className="bg-[#12d2a2] h-screen flex flex-col items-center justify-center text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbjCMu8Z0KvrJHXE1gOIKQ_X-EW7E1LJmng&usqp=CAU" alt="ChatGPT" />
          <button onClick={() => page('/page', { replace: true })} className="text-white font-bold text-3xl animate-pulse">
              Sign In to use ChatGPT
          </button>
    </div>
  )
}

export default Login
