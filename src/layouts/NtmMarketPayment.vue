<template>
    <div>
        <div class='container mt-5 mx-auto text-[14px]'>
            <div class='card-primary mx-auto'>
                <div class='mx-auto text-center flex items-center justify-center mb-10 mt-2'>
                    <NuxtLink href='/'><a><img src='/dkala/digi.svg' /></a></NuxtLink>
                </div>
                <div class='flex lg:w-1/2 mx-auto'>
                    <div class='flex items-center'>
                        <NuxtLink href='/checkout/cart'>
                            <a class='flex items-center gap-1 text-red-400'>
                                <div>
                                    <svg class='icon-primary icon-small fill-red-400'>
                                        <use href='#cartOff' />
                                    </svg>
                                </div>
                                <span>سبد خرید</span>
                            </a>
                        </NuxtLink>
                    </div>
                    <div class='grow border-b mb-3.5 lg:px-5 mx-3 border-red-200'>
                    </div>
                    <div class='flex items-center'>
                        <NuxtLink href='/checkout/shipping'>
                            <a class='flex items-center gap-1 text-red-400'>
                                <div>
                                    <svg class='icon-primary icon-small fill-red-400'>
                                        <use href='#deliveryExpress' />
                                    </svg>
                                </div>
                                <span>زمان و نحوه ارسال</span>
                            </a>
                        </NuxtLink>
                    </div>
                    <div class='grow border-b mb-3.5 lg:px-5 mx-3 border-red-200'>
                    </div>
                    <div class='flex items-center'>
                        <a class='flex items-center gap-2 text-[19px] font-bold text-red-600'>
                            <div>
                                <svg class='icon-primary w-8 h-8 fill-red-600'>
                                    <use href='#paymentWallet' />
                                </svg>
                            </div>
                            <span>پرداخت</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Flowbite />
        <TEElement />
        <NtmSvgIcons />
        <main>
            <nuxt-page />
        </main>
    </div>
</template>