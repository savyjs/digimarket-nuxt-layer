<template>
    <div>
        <div class='mb-4 border-b border-gray-200 dark:border-gray-700'>
            <ul class='flex flex-auto -mb-px tabs-primary' id='myTab' data-tabs-toggle='#tabs' role='tablist'>
                <li class='mr-2' role='presentation'>
                    <button
                            class='active'
                            id='cart-tab'
                            data-tabs-target='#cart'
                            type='button'
                            role='tab'
                            aria-controls='cart'
                            aria-selected='true'>سبد خرید
                    </button>
                </li>
                <li class='mr-2' role='presentation'>
                    <button
                            class=''
                            id='nextCart-tab'
                            data-tabs-target='#nextCart'
                            type='button'
                            role='tab'
                            aria-controls='nextCart'
                            aria-selected='false'>خرید بعدی
                        <span
                                class='badge-primary mr-2 hidden'>۵</span>
                    </button>
                </li>
            </ul>
        </div>
        <div id='tabs'>
            <div id='cart'
                 class='card-primary my-5 grid grid-cols-1 items-center justify-center text-center align-middle'
                 role='tabpanel' aria-labelledby='cart-tab'>
                <div class='flex w-full justify-center'>
                    <img src='/public/dkala/empty-cart.svg' />
                </div>
                <div class='my-5'>
                    <h1>سبد خرید شما خالی است!</h1>
                </div>
                <div>
                    <small class='text-[12px] font-light'>
                        می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                    </small>
                </div>
                <div class='my-4 flex justify-center'>
                    <NuxtLink href='/pages'>
                        <a class='text-NuxtLink px-5 text-[13px]'> تخفیف‌ها و پیشنهادها</a>
                    </NuxtLink>
                    <small class='text-gray-400'>|</small>
                    <NuxtLink href='/pages'>
                        <a class='text-NuxtLink px-5 text-[13px]'> محصولات پرفروش روز</a>
                    </NuxtLink>
                </div>
            </div>
            <div id='nextCart' role='tabpanel' aria-labelledby='nextCart-tab'>
                <div class='flex lg:flex-row w-full justify-between min-h-96'>
                    <div class='grow w-3/4 h-96'>
                        <div class='card-primary'>
                            <div class="items-center justify-center align-middle grid-cols-1 grid text-center">
                                <div class="flex w-full justify-center">
                                    <img src="/public/dkala/empty-cart.png" width="25%"/>
                                </div>
                                <div class="my-5">
                                    <h1>سبد خرید بعدی شما خالی است!</h1>
                                </div>
                                <div class="text-[12px] font-light text-gray-800 leading-loose">
                                    شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='hidden w-1/4 lg:inline sticky top-28 pr-2 max-h-80'>
                        <div class='card-primary w-full'>
                            <h3> لیست خرید بعدی چیست؟</h3>
                            <p class='border-b text-[12px] flex-wrap text-gray-700 pb-5 leading-loose border-gray-200'>شما می‌توانید محصولاتی
                                که به سبد خرید خود افزوده اید و موقتا قصد خرید آن‌ها را ندارید،
                                در لیست خرید بعدی خود قرار داده و هر زمان مایل بودید آن‌ها را مجدداً به سبد خرید اضافه
                                کرده و خرید آن‌ها را تکمیل کنید.
                            </p>
                            <p class='text-[12px] text-gray-700 pb-5 py-1 text-center leading-loose'>
                                <span class='font-extrabold pl-1'>۵ کالا</span>
                                کالا در لیست خرید بعدی شماست
                            </p>
                            <button class='btn-primary-outlined w-full'>
                                انتقال همه به سبد خرید
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>