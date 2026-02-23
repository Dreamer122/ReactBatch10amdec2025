import React from 'react'

export const Child =React.memo( ({a,get}) => {
    console.log("child rendered")
  return (
   <>
   <h1> CHild component</h1>
   <h2> {a}</h2>
   <button onClick={get} className='bg-blue-600 text-white py-2 px-3'>call get function</button>
   </>
  )
}
)
