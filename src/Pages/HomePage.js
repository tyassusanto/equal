import React, { useEffect, useState } from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import logo from '../Assets/logo technopartner.png'
import axios from 'axios'
import qrIcon from '../Assets/qr-code-icon.svg'
// import ImageSlider from '../Components/ImageSlider'

const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const userAccessToken = localStorage.getItem('user')
        const accessToken = userAccessToken.replace(/['"]+/g, '')
        const token = accessToken
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios.get(`https://soal.staging.id/api/home`, { headers })
            .then((res) => {
                const response = res.data.result
                setData(response)
                // console.log(response.banner)
                // console.log(headers)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const formatRupiah = (amount) => {
        if (amount === null || amount === undefined) {
            return "";
        }
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const saldo = data.saldo;


    // const banner = data.banner

    // const slides = [
    //     { url: banner[0], title: "logo" },
    //     { url: banner[1], title: "logo" },
    //     { url: banner[2], title: "logo" },
    // ];   
    // const containerStyles = {
    //     width: "100%",
    //     height: "10rem",
    //     margin: "0 auto",
    // };
    return (
        <div className='h-screen w-screen overflow-hidden'>
            <div className="">
                <img className='h-20 m-2' src={logo} alt="" />
            </div>
            <div className='p-5'
                style={{
                    width: '100vw',
                    backgroundImage: `url(${require('../Assets/motif.png')})`
                }}>

                <div className='block p-6 border border-gray-200 rounded-xl shadow hove:bg-gray-100 bg-white'>
                    <div className=""><p>{data.greeting},</p><p className='font-semibold'>{data.name}</p></div>
                    <div className="flex">
                        <div className="w-1/4">
                            <div className="shadow-xl border-gray-50 border-2 rounded-full">
                                <img className='max-w m-4' src={qrIcon} alt="" />
                            </div>
                        </div>
                        <div className="w-3/4 ps-2 self-center">
                            <div className="flex justify-between">
                                <div className="">Saldo</div>
                                <div className="font-bold">Rp. {formatRupiah(saldo)}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">Points</div>
                                <div className="font-bold text-green-300">{data.point}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                {/* <div style={containerStyles}> */}
                <div>
                    Slider
                    {/* <ImageSlider slides={slides}/> */}
                </div>
            </div>
            <div className="">
                <NavbarComponent />
            </div>
        </div>
    )
}

export default HomePage
