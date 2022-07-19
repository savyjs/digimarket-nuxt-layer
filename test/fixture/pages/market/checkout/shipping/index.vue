<template>
  <div>
    <div>
      <div class=''>
        <div class='flex lg:flex-row w-full justify-between gap-5'>
          <div
              class='grow w-3/4 space-y-5'>
            <div class='address-cart card-primary px-0'>
              <div class='grid grid-cols-12 gap-y-3'>
                <div class='col-start-2 col-span-11'>
                  <h4 class='text-gray-500 text-[12px]'>آدرس تحویل سفارش</h4>
                </div>
                <div class='col-start-1 col-span-12'>
                  <div class='grid grid-cols-12'>
                    <div class='col-start-1 col-span-1 justify-end px-2 items-start flex'>
                      <svg class='icon-small icon-gray w-7 h-7'>
                        <use href='#pin'/>
                      </svg>
                    </div>
                    <small
                        class='text-gray-700 col-start-2 col-span-8 font-bold text-[15px]'>
                      تهران،مرزداران غربی، خ. ناهید، خ. طالقانی، ساختمان متاورس - طبقه ۳
                    </small>
                    <div class='col-start-11 col-span-3'>
                      <div class='justify-center flex'>
                        <button
                            class='text-link text-blue-400 text-[14px] font-bold flex items-center'
                            type='button' data-modal-toggle='editAddressModal'>
                          <span>تغییر | ویرایش</span>
                          <span>
            <svg class='icon-small icon-gray fill-blue-400'>
                <use href='#chevronLeft'/>
            </svg>
        </span>
                        </button>

                        <div id='editAddressModal' aria-hidden='true'
                             class='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'>
                          <div class='relative px-4 w-full max-w-2xl h-full md:h-auto'>
                            <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                              <div
                                  class='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600'>
                                <h3 class='text-md grow font-semibold text-gray-900'>
                                  انتخاب آدرس
                                </h3>
                                <button type='button'
                                        class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                                        data-modal-toggle='editAddressModal'>
                                  <svg class='w-5 h-5' fill='currentColor'
                                       viewBox='0 0 20 20'
                                       xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule='evenodd'
                                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                          clipRule='evenodd'>
                                    </path>
                                  </svg>
                                </button>
                              </div>
                              <div class='flex flex-col p-2 border-b-2 border-gray-100'>
                                <button
                                    class='w-full my-5 flex items-center'>
                                  <div class='grow flex gap-2 items-center font-bold'>
                                    <svg class='icon-small icon-gray w-6 h-6'>
                                      <use href='#newAddress'/>
                                    </svg>
                                    افزودن‌ آدرس جدید
                                  </div>
                                  <div class=''>
                                    <svg class='icon-small icon-gray w-6 h-6'>
                                      <use href='#chevronLeft'/>
                                    </svg>
                                  </div>
                                </button>
                                <div id='createAddressModal' aria-hidden='true'
                                     class='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'>
                                  <div class='relative px-4 w-full max-w-2xl h-full md:h-auto'>
                                    <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                                      <div
                                          class='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600'>
                                        <h3 class='text-md grow font-semibold text-gray-900'>
                                          انتخاب آدرس
                                        </h3>
                                        <button type='button'
                                                class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                                                data-modal-toggle='createAddressModal'>
                                          <svg class='w-5 h-5'
                                               fill='currentColor'
                                               viewBox='0 0 20 20'
                                               xmlns='http://www.w3.org/2000/svg'>
                                            <path fillRule='evenodd'
                                                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                                  clipRule='evenodd'>
                                            </path>
                                          </svg>
                                        </button>
                                      </div>
                                      <div class='flex flex-col p-2 border-b-2 border-gray-100'>
                                        <small>
                                          موقعیت مکانی آدرس را مشخص کنید.
                                        </small>
                                      </div>
                                      <div class='p-6 space-y-6'>
                                        map
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class='p-6 space-y-6'>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-start-2 col-span-11 text-gray-600'>
                  احسان افشاری
                </div>
              </div>
            </div>

            <div class='card-primary p-6 py-0 gap-5 pt-10'>
              <div class='flex items-center gap-3'>
                <div class='text-right'>
                  <div>
                    <svg
                        class='icon-primary w-8 h-8 fill-red-600'>
                      <use
                          href='#deliveryExpress'/>
                    </svg>
                  </div>
                </div>
                <div class='text-right space-y-2'>
                  <div class='flex gap-2 items-center'>
                    <h2>ارسال عادی</h2>
                    <span
                        class='p-2 text-[11px] rounded bg-gray-100 text-gray-800'>۵ کالا</span>
                  </div>
                  <div class='text-gray-700 text-[12px]'>۱ روز</div>
                </div>
              </div>

              <div class='products-sweeper w-full'>

                <NtmSwiper :slidesPerView="5">
                  <NtmSwiperSlide v-for="i in 8">
                    <div class='product-carousel gap-1 mx-1'>
                      <div class='image inline-block justify-center grow w-full flex-row'>
                        <img src='/dkala/products/product-1.jpg'/>
                        <div class='flex justify-between'>
                          <div>
                            <svg class='icon-small icon-small icon-gray fill-orange-600'>
                              <use href='#deliveryInPerson'/>
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
                  </NtmSwiperSlide>
                </NtmSwiper>

              </div>
              <div class='w-full'>
                <NtmTimeTable />
              </div>
              <div class='text-[14px]'>
                <div class='flex gap-2 my-2'>
                  <span class='text-gray-400'>زمان ارسال </span>
                  <span>جمعه - </span>
                  <span>۱۸ تا ۲۱</span>
                </div>
                <div class='flex gap-2'>
                  <span>هزینه ارسال</span>
                  <div class='text-gray-400 flex gap-2'>
                    <s>۱۷,۰۰۰</s>
                    <svg class='icon-small icon-gray fill-gray-400'>
                      <use href='#toman'/>
                    </svg>
                  </div>
                  <span class='font-bold'>
                      رایگان
                    </span>
                </div>
              </div>
              <div class='card-primary my-4 text-[11px] flex justify-between'>
                <div class='text-gray-500'>
                  با مراجعه حضوری به مرکز دیجی‌کالا هم می‌توانید سفارش خود را دریافت کنید
                </div>
                <div>
                  <button class='text-link flex font-bold text-blue-400 text-[13px]' type='button'
                          data-modal-toggle='selfDeliveryModal'>
                    دریافت با مراجعه حضوری
                    <svg class='icon-small fill-blue-400'>
                      <use href='#chevronLeft'/>
                    </svg>
                  </button>
                  <div id='selfDeliveryModal' aria-hidden='true'
                       class='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'>
                    <div class='relative px-4 w-full max-w-2xl h-full md:h-auto'>
                      <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
                          <h3 class='grow text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                            آدرس مراکز تحویل حضوری
                          </h3>
                          <button type='button'
                                  class='text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                                  data-modal-toggle='selfDeliveryModal'>
                            <svg class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'
                                 xmlns='http://www.w3.org/2000/svg'>
                              <path fill-rule='evenodd'
                                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                    clip-rule='evenodd'></path>
                            </svg>
                          </button>
                        </div>
                        <div class='p-6 space-y-6'>
                          <div
                              class='card-primary border-gray-600 alert bg-gray-50 text-gray-600 text-sm px-5 py-4'>
                            <svg class='icon-small icon-gray fill-gray-600'>
                              <use href='#infoOutline'/>
                            </svg>
                            با انتخاب یکی از این مراکز، سفارش را با مراجعه حضوری دریافت
                            کنید.
                          </div>
                          <ul>
                            <li class='border-b-2 mb-3 border-gray-200'>
                              <button class='flex gap-5 cursor-pointer' type='button'>
                                <div class='pt-3'>
                                  <input id='option-2' type='radio' name='time'
                                         value='1'
                                         class='radio-option'
                                         aria-labelledby='country-option-2'
                                         aria-describedby='country-option-2'/>
                                </div>
                                <div>
                                  <label htmlFor='country-option-2'
                                         class='block text-right ml-2 text-[14px] text-sm font-medium text-gray-900 dark:text-gray-300'>
                                    خیابان ۱۷ شهریور (شهربانی)،رو به روی مجتمع تجاری
                                    سیتی سنتر ،جنب اداره پست،مرکز
                                    لجستیک دیجی کالا
                                  </label>
                                  <div class='flex gap-2 py-4'>
                                    <svg class='icon-small icon-gray fill-gray-400'>
                                      <use href='#street'/>
                                    </svg>
                                    <p class='text-gray-400'>مرکز تهران</p>
                                  </div>
                                </div>
                              </button>
                            </li>
                            <li>
                              <button class='flex gap-5 cursor-pointer' type='button'>
                                <div class='pt-3'>
                                  <input id='option-2' type='radio' name='time'
                                         value='1'
                                         class='radio-option'
                                         aria-labelledby='country-option-2'
                                         aria-describedby='country-option-2'/>
                                </div>
                                <div>
                                  <label htmlFor='country-option-2'
                                         class='block text-right ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                    خیابان ۱۷ شهریور (شهربانی)،رو به روی مجتمع تجاری
                                    سیتی سنتر ،جنب اداره پست،مرکز
                                    لجستیک دیجی کالا
                                  </label>
                                  <div class='flex gap-2 py-4'>
                                    <svg class='icon-small icon-gray fill-gray-400'>
                                      <use href='#street'/>
                                    </svg>
                                    <p class='text-gray-400'>مرکز تهران</p>
                                  </div>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <svg class='icon-small icon-gray' fill='gray'>
                          <use href='#toman'/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                      class='flex my-5 border-t border-gray-300 space-y-2 pt-5 justify-between text-gray-900 text-[13px] w-full'>
                    <div class='grow flex gap-1 items-center'>
                      <h5 class='font-bold'>هزینه ارسال</h5>
                      <button data-tooltip-target='deliveryPrice' data-tooltip-placement='bottom'
                              type='button'
                              class='bg-sky-50 text-blue-500 flex rounded-lg p-1 text-[10px]'>
                        ۳ مرسوله
                        <div>
                          <svg class='icon-small icon-gray fill-blue-500'>
                            <use href='#chevronDown'/>
                          </svg>
                        </div>
                      </button>
                      <div id='deliveryPrice' role='tooltip'
                           data-tooltip-placement='bottom'
                           class='gap-y-3 w-64 inline-block absolute space-y-3 gap-y-3 invisible z-10 py-2 px-3 font-medium shadow-lg rounded-sm bg-white opacity-0 tooltip'>
                        <div class='w-full flex text-red-600 gap-2 my-2 text-[11px]'>
                          <div>
                            <svg class='icon-small icon-gray fill-red-600'>
                              <use href='#deliveryExpress'/>
                            </svg>
                          </div>
                          <div class='grow'>ارسال عادی</div>
                          <div class='text-gray-700'>رایگان</div>
                        </div>
                        <hr/>
                        <div class='w-full flex text-green-500 gap-2 py-2my-2 text-[11px]'>
                          <div>
                            <svg class='icon-small icon-gray fill-green-500'>
                              <use href='#deliveryFastFmcg'/>
                            </svg>
                          </div>
                          <div class='grow'>ارسال سریع سوپرمارکتی</div>
                          <div class='text-gray-700'>رایگان</div>
                        </div>
                        <hr/>
                        <div class='w-full flex text-orange-500 gap-2  py-2my-2 text-[11px]'>
                          <div>
                            <svg class='icon-small icon-gray fill-orange-500'>
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
                      <div class='grow-1 text-gray-800'>۸۹,۵۰۰</div>
                      <div class='grow-0'>
                        <svg class='icon-small icon-gray fill-gray-800'>
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
                        <svg class='icon-small icon-gray'>
                          <use href='#toman'/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link href='/checkout/shipping'>
                    <a class='btn-primary-outlined font-bold py-3.5 my-5 w-full'>
                      انتخاب زمان ارسال
                    </a>
                  </Link>
                </div>
                <div class='text-[13px] bg-gray-100 place-self-end object-bottom py-5 px-4 rounded-b w-full'>
                  <div class='flex justify-between'>
                    <div class='flex align-middle items-center justify-between gap-1 text-gray-400'>
          <span class=''>
            <img src='/dkala/club-point.svg' class='w-4'/>
          </span>
                      <span class=''>دیجی کلاب</span>
                      <span class='flex items-end'>
            <button data-tooltip-placement='bottom' data-tooltip-target='tooltip-no-arrow'
                    class=''>
              <svg class='icon-small icon-gray h-4'>
                <use href='#infoOutline'/>
              </svg>
            </button>
<div id='tooltip-no-arrow' role='tooltip'
     class='text-[11px] leading-4 inline-block absolute invisible z-10 py-2 px-3 text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'>
    بعد از پایان مهلت مرجوعی، برای دریافت امتیاز به صفحه ماموریت‌های کلابی سر بزنید.
</div>
          </span>
                    </div>
                    <div>
                      <span class='text-[13px] font-bold mx-1'>۹</span>
                      امتیاز
                    </div>
                  </div>
                </div>
              </div>
              <div class='text-gray-600 my-5 text-[11px]'>
                هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
              </div>
              <Link href='/pages/plus'><a>
                <div class='card-primary my-5'>
                  <div class='flex justify-between text-[12px] mb-3'>
                    <div class='flex gap-2'><span>
          <svg class='icon-small icon-gray fill-purple-600'>
            <use href='#plus'></use>
          </svg>
        </span>
                      <span>مزایای پلاس برای این سفارش</span>
                    </div>
                    <span>
          <svg class='icon-small icon-gray'><use href='#chevronLeft'></use></svg>
        </span>
                  </div>
                  <div class='text-[11px] text-gray-400 space-y-1'>
                    <div class='flex gap-2'>
          <span class='flex items-center'>
            <div>
              <svg class='icon-primary h-1 fill-purple-600'><use
                  href='#variationColor'></use></svg>
            </div>
          </span>
                      <span>بازگشت تا ۳۰ روز پس از تحویل</span>
                    </div>
                    <div class='flex gap-2'>
          <span class='flex items-center'>
            <div>
              <svg class='icon-primary h-1 fill-purple-600'><use
                  href='#variationColor'></use></svg>
            </div>
          </span>
                      <span>ارسال رایگان</span>
                    </div>
                    <div class='flex gap-2'>
          <span class='flex items-center'>
            <div>
              <svg class='icon-primary h-1 fill-purple-600'>
                <use href='#variationColor'></use>
              </svg>
            </div>
          </span>
                      <span>امکان ارسال فوری برای کالاهای زیر:</span>
                    </div>
                  </div>
                  <div class='flex my-2 gap-2 space-y-2 items-center'>
                    <img src='/dkala/products/product-1.jpg' class='w-8 max-h-8'/>
                    <img src='/dkala/products/product-2.jpg' class='w-8 max-h-8'/>
                    <img src='/dkala/products/product-3.jpg' class='w-8 max-h-8'/>
                    <img src='/dkala/products/product-4.jpg' class='w-8 max-h-8'/>
                  </div>
                </div>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>