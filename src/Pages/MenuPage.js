import React, { useEffect, useState } from 'react'
import MenuCard from '../Components/MenuCard'
import NavbarComponent from '../Components/NavbarComponent'
import axios from 'axios'


const MenuPage = () => {
    const [form, setForm] = useState({
        show_all: 1
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const userAccessToken = localStorage.getItem('user')
        const accessToken = userAccessToken.replace(/['"]+/g, '')
        const token = accessToken
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }

        axios.post(`https://soal.staging.id/api/menu`, form, { headers })
            .then((res) => {
                const response = res.data.result
                setDatas(response)
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [categories] = datas.categories
    // console.log(categories)
    return (
        <div className='flex-row w-screen h-screen'>
            <div className='header max-h-fit '>
                <h3 className='font-bold text-center text-3xl'>Menu</h3>
            </div>
            {/* {datas.map((data, index) = (
                    ))} */}
            <div className='category p-3'>
                <div className="flex font-semibold">
                    <div className='mx-1'></div>
                    <div className='mx-1'>Best Seller</div>
                    <div className='mx-1'>Coffee</div>
                    <div className='mx-1'>Cold Brew</div>
                </div>
            </div>
            <div className='mainMenu px-4 bg-blue-200 overflow-y-scroll'>
                Coffee
                <MenuCard />
            </div>
            <div className='navbar'>
                <NavbarComponent />
            </div>
        </div>
    )
}

export default MenuPage
