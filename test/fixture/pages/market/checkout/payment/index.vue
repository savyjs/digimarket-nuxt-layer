<template>
    <div>
        <div>
            <div class=''>
                <div class='flex lg:flex-row w-full justify-between gap-5'>
                    <div
                            class='grow w-3/4 space-y-5'>
                        <div class='card-primary p-6 py-0 gap-5 pt-10'>
                            <div class='mx-1 list-options'>
                                <div class='w-full flex gap-3'>
                                    <div class='gap-1 flex items-center'>
                                        <div class='text-[16px] font-bold'>انتخاب روش پرداخت</div>
                                    </div>
                                </div>
                                <div class='w-full p-0'>
                                    <div class=''>
                                        <ul class='options flex flex-col justify-center'>
                                            <li class='align-top py-5 border-b border-gray-100 items-center active'>
                                                <div class='flex align-top gap-5 grow'>
                                                    <input id='country-option-1' type='radio' name='time' value='2'
                                                           class='radio-option mt-2'
                                                           aria-labelledby='country-option-1'
                                                           aria-describedby='country-option-1'/>
                                                    <label htmlFor='country-option-1'
                                                           class='block ml-2 items-center text-sm font-medium text-gray-900 dark:text-gray-300'>
                                                        <div class='flex align-top gap-3'>
                                                            <div>
                                                                <svg class='icon-main icon-large'>
                                                                    <use href='#paymentWallet'/>
                                                                </svg>
                                                            </div>
                                                            <div class='text-[18px] text-gray-700'>
                                                                <div> کیف پول</div>
                                                                <div class='flex text-[11px] gap-2 py-3  fill-gray-900'>
                                                                    موجودی
                                                                    <div class='flex gap-2'>
                                                                        ۰
                                                                        <svg class='icon-small'>
                                                                            <use href='#toman'/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </li>
                                            <li class='flex items-center py-5 border-b border-gray-100 items-center'>
                                                <div class='flex items-center gap-5 grow'>
                                                    <input id='country-option-3' type='radio' name='time' value='3'
                                                           class='radio-option'
                                                           aria-labelledby='country-option-3'
                                                           aria-describedby='country-option-3'/>
                                                    <label htmlFor='country-option-3'
                                                           class='block ml-2 items-center text-sm font-medium text-gray-900 dark:text-gray-300'>

                                                        <div class='flex items-center gap-3'>
                                                            <div>
                                                                <svg class='icon-main icon-large'>
                                                                    <use href='#cardCredit'/>
                                                                </svg>
                                                            </div>
                                                            <div class='text-[18px] text-gray-700'>
                                                                پرداخت اینترنتی
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </li>
                                            <li class='flex items-center py-5 border-b border-gray-100 items-center'>
                                                <div class='flex items-center gap-5 grow'>
                                                    <input id='country-option-2' type='radio' name='time' value='1'
                                                           class='radio-option'
                                                           aria-labelledby='country-option-2'
                                                           aria-describedby='country-option-2'/>
                                                    <label htmlFor='country-option-2'
                                                           class='block ml-2 items-center text-sm font-medium text-gray-900 dark:text-gray-300'>

                                                        <div class='flex items-center gap-3'>
                                                            <div>
                                                                <svg class='icon-main icon-large'>
                                                                    <use href='#digipay'/>
                                                                </svg>
                                                            </div>
                                                            <div class='text-[18px] text-gray-700'>
                                                                پرداخت اعتباری
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='card-primary p-6 py-0 gap-5 pb-10 pt-10'>
                            <h3 class='text-[16px] '>
                                خلاصه سفارش
                            </h3>
                            <div class='flex items-center gap-3 py-3'>
                                <div class='text-right'>
                                    <div>
                                        <svg
                                                class='icon-primary w-8 h-8 fill-red-600'>
                                            <use
                                                    href='#deliveryExpress'/>
                                        </svg>
                                    </div>
                                </div>
                                <div class='text-right space-y-2 w-full'>
                                    <div class='flex w-full gap-2 items-center'>
                                        <h2>پنج‌شنبه ۱۱ فروردین - بازه ۱۵-۱۸</h2>
                                        <span
                                                class='p-2 text-[11px] rounded bg-gray-100 text-gray-800'>۵ کالا</span>
                                        <div class='grow text-left justify-end '>
                                            <a
                                                    class='inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out'
                                                    data-bs-toggle='collapse' href='#order1collapse' role='button'
                                                    aria-expanded='false'
                                                    aria-controls='order1collapse'>
                                                <div class="open flex gap-2">
                                                    <div>جزئیات مرسوله</div>
                                                    <div>
                                                        <svg class="icon-gray icon-small">
                                                            <use href="#chevronDown"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="close flex gap-2">
                                                    <div>بستن</div>
                                                    <div>
                                                        <svg class="icon-gray icon-small">
                                                            <use href="#chevronUp"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="close"></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class='text-gray-700 text-[12px]'>
                                        ارسال عادی - هزینه ارسال رایگان: رایگان
                                    </div>
                                </div>
                            </div>
                            <div class='collapse w-full overflow-hidden' id='order1collapse'>
                                <div class='products-sweeper w-full'>
                                     <div v-for="i in 8">
                                         <div class='product-carousel gap-1 mx-1'>
                                             <div class='image inline-block justify-center grow w-full flex-row'>
                                                 <img src='/dkala/products/product-1.jpg' />
                                                 <div class='flex justify-between'>
                                                     <div>
                                                         <svg class='icon-gray fill-orange-600'>
                                                             <use href='#deliveryInPerson' />
                                                         </svg>
                                                     </div>
                                                     <span class='bg-gray-200 text-gray-900 px-2 text-[11px] rounded-md'>۱</span>
                                                 </div>
                                             </div>
                                             <div class='grow'>
                                                 <div class='flex items-center gap-1 my-1'>
                                                     <div class='bg-slate-300 border border-gray-50 w-3 h-3 rounded-8p'></div>
                                                     <span class='text-gray-600 text-[10px]'>نوک مدادی</span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div class='card-primary my-4 text-[14px] flex justify-between'>
                            <div class='text-gray-500 flex gap-3 items-center'>
                                <svg class="icon-gray icon-medium">
                                    <use href="#infoOutline"/>
                                </svg>
                                برای دریافت فاکتور، بعد از دریافت سفارش به حساب کاربری و صفحه جزئیات سفارش سر بزنید
                            </div>
                        </div>
                    </div>
                    <div class='hidden w-1/4 lg:inline lg:h-screen sticky top-3 bottom-0'>
                        <div class=''>
                            <div class='card-primary grid grid-cols-1 object-cover p-0 w-full'>
                                <div class='p-5 w-full'>
                                    <div class='flex justify-between text-gray-500 text-[13px] w-full'>
                                        <div class='w-1/2'>
                                            <h5 class=''>قیمت کالاها (۳)</h5>
                                        </div>
                                        <div class='font-bold text-[15px] w-1/2 flex justify-end'>
                                            <div class='grow-1'>۱,۰۸۸,۸۰۰</div>
                                            <div class='grow-0'>
                                                <svg class='icon-gray icon-small' fill='gray'>
                                                    <use href='#toman'/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                            class='flex my-5 border-t border-gray-300 space-y-2 pt-5 justify-between text-gray-500 text-[13px] w-full'>
                                        <div class='grow flex gap-1 items-center'>
                                            <h5 class='font-bold'>هزینه ارسال</h5>
                                            <button data-tooltip-target='deliveryPrice' data-tooltip-placement='bottom'
                                                    type='button'
                                                    class='bg-sky-50 text-blue-500 flex rounded-lg p-1 text-[10px]'>
                                                ۳ مرسوله
                                                <div>
                                                    <svg class='icon-gray icon-small fill-blue-500'>
                                                        <use href='#chevronDown'/>
                                                    </svg>
                                                </div>
                                            </button>
                                            <div id='deliveryPrice'
                                                 role='tooltip'
                                                 data-tooltip-placement='bottom'
                                                 class='gap-y-3 w-64 inline-block absolute space-y-3 gap-y-3 invisible z-10 py-2 px-3 font-medium shadow-lg rounded-sm bg-white opacity-0 tooltip'>
                                                <div class='w-full flex text-red-600 gap-2 my-2 text-[11px]'>
                                                    <div>
                                                        <svg class='icon-gray icon-small fill-red-600'>
                                                            <use href='#deliveryExpress'/>
                                                        </svg>
                                                    </div>
                                                    <div class='grow'>ارسال عادی</div>
                                                    <div class='text-gray-700'>رایگان</div>
                                                </div>
                                                <hr/>
                                                <div class='w-full flex text-green-500 gap-2 py-2my-2 text-[11px]'>
                                                    <div>
                                                        <svg class='icon-gray icon-small fill-green-500'>
                                                            <use href='#deliveryFastFmcg'/>
                                                        </svg>
                                                    </div>
                                                    <div class='grow'>ارسال سریع سوپرمارکتی</div>
                                                    <div class='text-gray-700'>رایگان</div>
                                                </div>
                                                <hr/>
                                                <div class='w-full flex text-orange-500 gap-2  py-2my-2 text-[11px]'>
                                                    <div>
                                                        <svg class='icon-gray icon-small fill-orange-500'>
                                                            <use href='#deliveryShipBySeller'/>
                                                        </svg>
                                                    </div>
                                                    <div class='grow'>ارسال فروشنده</div>
                                                    <div class='text-gray-700'>۳۰،۰۰۰ تومان</div>
                                                </div>
                                                <div class='tooltip-arrow' data-popper-arrow></div>
                                            </div>
                                        </div>
                                        <div class='font-bold text-[15px] w-1/3 flex justify-end'>
                                            <div class='grow-1 text-gray-500'>۸۹,۵۰۰</div>
                                            <div class='grow-0'>
                                                <svg class='icon-gray icon-small fill-gray-500'>
                                                    <use href='#toman'/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p class='text-[11px] flex-wrap text-gray-600 pb-5 leading-loose'>
                                        هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود
                                    </p>
                                    <hr/>
                                    <div class='flex my-5 justify-between text-red-600 fill-red-600 text-bold text-[13px] w-full'>
                                        <div class='w-1/2'>
                                            <h5 class=''>سود شما از خرید</h5>
                                        </div>
                                        <div class='font-bold text-[15px] w-1/2 flex justify-end'>
                                            <div class='grow-1'>(۲۰٪) ۸۹,۵۰۰</div>
                                            <div class='grow-0'>
                                                <svg class='icon-primary icon-small'>
                                                    <use href='#toman'/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='flex my-3 justify-between text-gray-500 fill-red-600 text-bold text-[12px] w-full'>
                                        <div class='w-1/2'>
                                            <h5 class=''>قابل پرداخت</h5>
                                        </div>
                                        <div class='font-bold text-[15px] w-1/2 flex justify-end'>
                                            <div class='grow-1'>۵۸۹,۵۰۰</div>
                                            <div class='grow-0'>
                                                <svg class='icon-gray icon-small'>
                                                    <use href='#toman'/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href='/checkout/shipping'>
                                        <a class='btn-primary font-bold py-3.5 my-5 w-full'>
                                            پرداخت
                                        </a>
                                    </Link>
                                </div>
                                <div class='text-[13px] bg-gray-100 place-self-end object-bottom py-5 px-4 rounded-b w-full'>
                                    <div class='flex justify-between'>
                                        <div class='flex align-middle items-center justify-between gap-1 text-gray-400'>
          <span class=''>
            <img src='ntmRoot/dkala/club-point.svg' class='w-4'/>
          </span>
                                            <span class=''>دیجی کلاب</span>
                                            <div class='flex items-end'>
                                                <button data-tooltip-placement='bottom'
                                                        data-tooltip-target='tooltip-no-arrow'
                                                        class=''>
                                                    <svg class='icon-gray icon-small h-4'>
                                                        <use href='#infoOutline'/>
                                                    </svg>
                                                </button>
                                                <div id='tooltip-no-arrow' role='tooltip'
                                                     class='text-[11px] leading-4 inline-block absolute invisible z-10 py-2 px-3 text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'>
                                                    بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صفحه ماموریت‌های
                                                    کلابی سر بزنید.
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span class='text-[13px] font-bold mx-1'>۹</span>
                                            امتیاز
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>