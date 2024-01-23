import React from 'react'
import homeIcon from '../Assets/home1.png'
import meuIcon from '../Assets/menu1.png'
import { useNavigate } from 'react-router-dom'

const NavbarComponent = () => {
    const navigate = useNavigate()

    const homeBtn = () => {
        navigate('/')
    }
    const menuBtn = () => {
        navigate('/menu')
    }
    return (
        <div style={{ bottom: '9pc' }} className='z-10 absolute w-full'>
            <div className="flex text-center self-center max-h-20 h-20 bg-white">
                <div
                    onClick={homeBtn}
                    className="w-1/2 self-center"><img className='m-auto max-w-9' src={homeIcon} alt="" />Home</div>
                <div
                    onClick={menuBtn}
                    className="w-1/2 self-center"><img className='m-auto max-w-9' src={meuIcon} alt="" />Menu</div>
            </div>
        </div>
    )
}

export default NavbarComponent
