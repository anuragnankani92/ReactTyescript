import React from 'react'

function AddTailwind() {
  return (
    <>
    <div>AddTailwind</div>
    <div  className='h-[1000px] absolute ' >
        <div className=' border-2 h-[100px] w-[100px] bg-red-300 static' > Box 1 </div>
        <div className=' border-2 h-[100px] w-[100px] bg-slate-600 relative  ' > Box 2 </div>
        <div className=' border-2 h-[100px] w-[100px] bg-neutral-800 absolute inherit left-[100px] top-10  ' > Box 3 </div>
        <div className=' border-2 h-[100px] w-[100px] bg-red-600 fixed  left-[500px] ' > Box 4 </div>
        <div className=' border-2 h-[100px] w-[100px] bg-red-800 sticky top-[20px] left-96 ' > Box 5 </div>
    </div>
    <div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime facere ea fugiat. Qui nisi asperiores harum ipsam optio rem unde doloribus beatae dolor quisquam nulla at, ipsa maxime tenetur. </div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime facere ea fugiat. Qui nisi asperiores harum ipsam optio rem unde doloribus beatae dolor quisquam nulla at, ipsa maxime tenetur. </div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime facere ea fugiat. Qui nisi asperiores harum ipsam optio rem unde doloribus beatae dolor quisquam nulla at, ipsa maxime tenetur. </div>

    </div>
    </>
  )
}

export default AddTailwind