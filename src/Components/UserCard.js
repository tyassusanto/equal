import React from 'react'
import qrIcon from '../Assets/qr-code-icon.svg'
const UserCard = () => {
    return (
        <div className='block p-6 border border-gray-200 rounded-xl shadow hove:bg-gray-100 bg-white'>
            <div className=""><p>Good Afternoon,</p><p className='font-semibold'>Guntur Saputro</p></div>
            <div className="flex">
                <div className="w-1/4">
                    <div className="shadow-xl border-gray-50 border-2 rounded-full">
                        <img className='max-w m-4' src={qrIcon} alt="" />
                    </div>
                </div>
                <div className="w-3/4 ps-2 self-center">
                    <div className="flex justify-between">
                        <div className="">Saldo</div>
                        <div className="font-bold">Rp. 20000</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Points</div>
                        <div className="font-bold text-green-300">2500</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
