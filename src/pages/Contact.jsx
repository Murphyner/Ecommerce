import React from 'react'
import { FaPhoneAlt, FaStore } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import ContactForm from '../components/formik/ContactForm'

function Contact() {
    return (
        <main>
            <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                <div className='px-8 md:px-0'>
                    <div className='pt-10'>
                        <div className='mb-8'>
                            <h2 className='text-[1.25em] text-[#121212] font-medium text-center'>Contact Us</h2>
                        </div>
                        <div className='flex flex-wrap mb-6'>
                            <div className='w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-6'>
                                <div className='bg-[#F3F5F7] py-4 px-20 md:px-8 xl:h-auto md:h-[160px]'>
                                    <div className='flex-col w-full flex items-center'>
                                        <div className='mb-4'>
                                            <FaStore className='text-[#FE5196] text-[1.5em]' />
                                        </div>
                                        <p className='font-bold mb-4 text-[1em] text-[#6C7275]'>Address</p>
                                        <p className='font-semibold text-[1em] text-center'>234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-6/12 lg:w-4/12 lg:mb-0 md:pl-6 lg:px-6 mb-6'>
                                <div className='bg-[#F3F5F7] py-4 px-20 xl:h-auto md:h-[160px]'>
                                    <div className='flex-col w-full flex items-center'>
                                        <div className='mb-4'>
                                            <FaPhoneAlt className='text-[#FE5196] text-[1.5em]' />
                                        </div>
                                        <p className='font-bold mb-4 text-[1em] text-[#6C7275]'>Contact Us</p>
                                        <p className='font-semibold text-[1em] text-center'>+84 234 567 890</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-6/12 lg:w-4/12'>
                                <div className='bg-[#F3F5F7] py-4 px-20 xl:h-auto md:h-[160px]'>
                                    <div className='flex-col w-full flex items-center'>
                                        <div className='mb-4'>
                                            <FiMail className='text-[#FE5196] text-[1.5em]' />
                                        </div>
                                        <p className='font-bold mb-4 text-[1em] text-[#6C7275]'>Email</p>
                                        <p className='font-semibold text-[1em] text-center'>hello@3legant.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap mb-20'>
                            <div className='w-full md:w-6/12 mb-6 md:mb-0 md:order-1 md:pl-3'>
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3442434528038!2d49.844190475825364!3d40.379062471445664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2s28%20Mall!5e0!3m2!1sen!2saz!4v1725208637349!5m2!1sen!2saz"
                                        className='w-full'
                                        height={400}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className='w-full md:w-6/12 md:pr-3'>
                                <div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F9F9F9] py-20'>
                <div className="container 2xl:w-[1280px] mx-auto md:px-4">
                    <div className='px-8 md:px-0'>
                        <div className='flex flex-wrap'>
                            <div className='w-7/12 mb-4 md:mb-8 lg:w-3/12 lg:mb-0'>
                                <div className='flex gap-2 flex-col'>
                                    <div className='mb-2'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={44}
                                            height={40}
                                            viewBox="0 0 44 40"
                                            fill="none">
                                            <path
                                                d="M26 34V10M26 34H30M26 34H16M26 10C26 5.58172 22.4183 2 18 2H10C5.58172 2 2 5.58172 2 10V26C2 29.7304 4.55333 32.8645 8.00769 33.7499M26 10H32.4182C33.4344 10 34.4126 10.3868 35.154 11.0819L40.7358 16.3148C41.5424 17.071 42 18.1273 42 19.2329V30C42 32.2091 40.2091 34 38 34M38 34C38 36.2091 36.2091 38 34 38C31.7909 38 30 36.2091 30 34M38 34C38 31.7909 36.2091 30 34 30C31.7909 30 30 31.7909 30 34M16 34C16 36.2091 14.2091 38 12 38C9.79086 38 8 36.2091 8 34C8 33.916 8.00259 33.8326 8.00769 33.7499M16 34C16 31.7909 14.2091 30 12 30C9.87484 30 8.13677 31.6573 8.00769 33.7499"
                                                stroke="#DC375F"
                                                strokeWidth="2.5"
                                            />
                                        </svg>
                                    </div>
                                    <p className='text-[0.875em] lg:text-[1.25em] lg:font-medium font-semibold'>Free Shipping</p>
                                    <p className='text-[#6C7275] text-[0.875em] font-normal'>Order above $200</p>
                                </div>
                            </div>
                            <div className='w-5/12 mb-4 md:mb-8 lg:w-3/12 lg:mb-0'>
                                <div className='flex gap-2 flex-col'>
                                    <div className='mb-2'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={48}
                                            height={40}
                                            viewBox="0 0 48 48"
                                            fill="none"
                                        >
                                            <rect
                                                x={4}
                                                y={8}
                                                width={40}
                                                height={32}
                                                rx={4}
                                                stroke="#DC375F"
                                                strokeWidth="2.5"
                                            />
                                            <circle
                                                cx={4}
                                                cy={4}
                                                r={4}
                                                transform="matrix(1 0 0 -1 20 28)"
                                                stroke="#DC375F"
                                                strokeWidth="2.5"
                                            />
                                            <circle
                                                cx={2}
                                                cy={2}
                                                r={2}
                                                transform="matrix(1 0 0 -1 34 26)"
                                                fill="#DC375F"
                                            />
                                            <circle
                                                cx={2}
                                                cy={2}
                                                r={2}
                                                transform="matrix(1 0 0 -1 10 26)"
                                                fill="#DC375F"
                                            />
                                        </svg>
                                    </div>
                                    <p className='text-[0.875em] lg:text-[1.25em] lg:font-medium font-semibold'>Money-back</p>
                                    <p className='text-[#6C7275] text-[0.875em] font-normal'>30 days guarantee</p>
                                </div>
                            </div>
                            <div className='w-7/12 mb-4 md:mb-8 lg:w-3/12 lg:mb-0'>
                                <div className='flex gap-2 flex-col'>
                                    <div className='mb-2'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={48}
                                            height={40}
                                            viewBox="0 0 48 48"
                                            fill="none"
                                        >
                                            <path
                                                d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28"
                                                stroke="#DC375F"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className='text-[0.875em] lg:text-[1.25em] lg:font-medium font-semibold'>Secure Payments</p>
                                    <p className='text-[#6C7275] text-[0.875em] font-normal'>Secured by Stripe</p>
                                </div>
                            </div>
                            <div className='w-5/12 mb-4 md:mb-8 lg:w-3/12 lg:mb-0'>
                                <div className='flex gap-2 flex-col'>
                                    <div className='mb-2'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={48}
                                            height={40}
                                            viewBox="0 0 48 48"
                                            fill="none"
                                        >
                                            <path
                                                d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z"
                                                stroke="#DC375F"
                                                strokeWidth="2.5"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className='text-[0.875em] lg:text-[1.25em] lg:font-medium font-semibold'>24/7 Support</p>
                                    <p className='text-[#6C7275] text-[0.875em] font-normal'>Phone and Email support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact