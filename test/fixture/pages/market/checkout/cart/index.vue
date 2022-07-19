<template>
    <div>
        <div className='mb-4 border-b border-gray-200 dark:border-gray-700'>
            <ul className='flex flex-auto -mb-px tabs-primary' id='myTab' data-tabs-toggle='#tabs' role='tablist'>
                <li className='mr-2' role='presentation'>
                    <button
                            className='active'
                            id='cart-tab'
                            data-tabs-target='#cart'
                            type='button'
                            role='tab'
                            aria-controls='cart'
                            aria-selected='true'>سبد خرید
                    </button>
                </li>
                <li className='mr-2' role='presentation'>
                    <button
                            className=''
                            id='nextCart-tab'
                            data-tabs-target='#nextCart'
                            type='button'
                            role='tab'
                            aria-controls='nextCart'
                            aria-selected='false'>خرید بعدی
                        <span
                                className='badge-primary mr-2 hidden'>۵</span>
                    </button>
                </li>
            </ul>
        </div>
        <div id='tabs'>
            <div id='cart'
                 className='card-primary my-5 grid grid-cols-1 items-center justify-center text-center align-middle'
                 role='tabpanel' aria-labelledby='cart-tab'>
                <div className='flex w-full justify-center'>
                    <img src='/dkala/empty-cart.svg' />
                </div>
                <div className='my-5'>
                    <h1>سبد خرید شما خالی است!</h1>
                </div>
                <div>
                    <small className='text-[12px] font-light'>
                        می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                    </small>
                </div>
                <div className='my-4 flex justify-center'>
                    <Link href='/pages'>
                        <a className='text-link px-5 text-[13px]'> تخفیف‌ها و پیشنهادها</a>
                    </Link>
                    <small className='text-gray-400'>|</small>
                    <Link href='/pages'>
                        <a className='text-link px-5 text-[13px]'> محصولات پرفروش روز</a>
                    </Link>
                </div>
            </div>
            <div id='nextCart' role='tabpanel' aria-labelledby='nextCart-tab'>
                <div className='flex lg:flex-row w-full justify-between min-h-96'>
                    <div className='grow w-3/4 h-96'>
                        <div className='card-primary'>
                            <div className="items-center justify-center align-middle grid-cols-1 grid text-center">
                                <div className="flex w-full justify-center">
                                    <img src="/dkala/empty-cart.png" width="25%"/>
                                </div>
                                <div className="my-5">
                                    <h1>سبد خرید بعدی شما خالی است!</h1>
                                </div>
                                <div className="text-[12px] font-light text-gray-800 leading-loose">
                                    شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden w-1/4 lg:inline sticky top-28 pr-2 max-h-80'>
                        <div className='card-primary w-full'>
                            <h3> لیست خرید بعدی چیست؟</h3>
                            <p className='border-b text-[12px] flex-wrap text-gray-700 pb-5 leading-loose border-gray-200'>شما می‌توانید محصولاتی
                                که به سبد خرید خود افزوده اید و موقتا قصد خرید آن‌ها را ندارید،
                                در لیست خرید بعدی خود قرار داده و هر زمان مایل بودید آن‌ها را مجدداً به سبد خرید اضافه
                                کرده و خرید آن‌ها را تکمیل کنید.
                            </p>
                            <p className='text-[12px] text-gray-700 pb-5 py-1 text-center leading-loose'>
                                <span className='font-extrabold pl-1'>۵ کالا</span>
                                کالا در لیست خرید بعدی شماست
                            </p>
                            <button className='btn-primary-outlined w-full'>
                                انتقال همه به سبد خرید
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>