import img1 from '../../assets/test1.png'
import img2 from '../../assets/test2.png'
import img3 from '../../assets/test3.png'
import CustomPaging from '../slider/CustomPaging'

function Testimonials() {
    const data = [
        {
            name: 'Rhomas Williams',
            description: 'Barly pleasure rationally encounter consequences that extremely painful desires to obtain pain of itself porro quisquam est, qui dolorem ipsum quia simple way dolor sit amet, consectetur, adipisci velit, sed quia non numquam',
            image: img1
        },
        {
            name: 'Anna James',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut ex molestiae repellendus dolor nam numquam corporis deleniti et veritatis. Porro magni soluta praesentium, blanditiis dolorem dolor quo ipsa cupiditate?',
            image: img2
        },
        {
            name: 'Alisha Lehmann',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro consequatur magni neque, beatae blanditiis. Harum nisi facere nam ex maxime, laborum inventore culpa molestiae pariatur soluta est nobis reiciendis. Deserunt?',
            image: img3
        }
    ]

    return (
        <section className='py-10'>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className='flex justify-center mb-6'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={60}
                            height={50}
                            viewBox="0 0 60 50"
                            fill="none"
                        >
                            <path
                                d="M54.6729 45.6898C58.1392 41.6904 60 37.2048 60 29.9334C60 17.1381 51.7319 5.67011 39.7084 0L36.7032 5.03757C47.926 11.6325 50.1199 20.1909 50.995 25.5867C49.1879 24.5704 46.8223 24.2158 44.5036 24.4498C38.4331 25.0603 33.6479 30.4745 33.6479 37.2048C33.6479 40.5983 34.8886 43.8528 37.0975 46.2524C39.3063 48.6519 42.3021 50 45.4256 50C49.0365 50 52.4891 48.2087 54.6729 45.6898ZM21.0219 45.6898C24.4879 41.6904 26.3489 37.2048 26.3489 29.9334C26.3489 17.1381 18.0808 5.67011 6.0572 0L3.05217 5.03757C14.2748 11.6325 16.4689 20.1909 17.3438 25.5867C15.5367 24.5704 13.1711 24.2158 10.8525 24.4498C4.78183 25.0603 0 30.4745 0 37.2048C2.52384e-06 40.5983 1.24088 43.8528 3.44967 46.2524C5.65846 48.6519 8.6542 50 11.7779 50C15.3887 50 18.8413 48.2087 21.0252 45.6898H21.0219Z"
                                fill="#DC375F"
                            />
                        </svg>
                    </div>
                    <div className='pb-20' id='test-slider'>
                        <CustomPaging data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials