import React from 'react'
import menuImg from '../Assets/coffee.jpg'

const MenuCard = () => {
  return (
    <div className='flex'>
      <div className="w-1/5"><img className='' src={menuImg} alt="" /></div>
      <div className="w-3/5">
        <div className="font-bold">Caramel Machiatto</div>
        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div className="w-1/5 font-bold">20000</div>
    </div>
  )
}

export default MenuCard
