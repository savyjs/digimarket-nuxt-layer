<template>
  <footer class="border-n-200 w-full border-t bg-white pt-2">
    <div class="container-4xl-w mx-auto ">
      <div class="px-5">
        <div class="flex select-none items-center justify-between">
          <div class="ml-4">
            /public/dkala/logo-fa.svg
          </div>
          <button
              onclick="window.scrollTo({top: 0,behavior: 'smooth',})"
              class="btn-gray-outlined mx-1 flex h-10 text-[12px]"
          >
            <span class="flex-auto pl-2 font-bold">بازگشت به بالا</span>
            <div>
              <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div class="mt-3-md mb-0-md flex-nowrap-lg color-700 mb-8 flex flex-wrap items-center text-[12px] font-light">
          <p class="shrink-0">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <div class="color-400 d-none d-block-md px-5">|</div>
          <p class="w-auto-md mt-0-md mt-1">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </p>
        </div>
        <div class="my-8 hidden items-center justify-between text-[12px] font-light md:flex">

          <a
              class="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
              href=""
          >
            /public/dkala/express-delivery.svg
            <span class="">امکان تحویل اکسپرس</span>
          </a>


          <a
              class="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
              href=""
          >
            /public/dkala/cash-on-delivery.svg
            <span class="">امکان پرداخت در محل</span>
          </a>


          <a
              class="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
              href=""
          >
            public/dkala/support.svg
            <span class=""> ۷ روز هفته، ۷ ساعته</span>
          </a>


          <a
              class="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
              href=""
          >
            /public/dkala/days-return.svg
            <span class="">هفت روز ضمانت بازگشت</span>
          </a>


          <a
              class="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
              href=""
          >
            /public/dkala/original-products.svg
            <span class="">ضمانت اصل بودن کالا</span>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-4 items-start justify-between gap-4 text-[12px] font-light ">
        <div class="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
          <p>با دیجی‌کالا</p>

          <a>اتاق خبر دیجی‌کالا</a>


          <a>فروش در دیجی‌کالا</a>


          <a>فرصت‌های شغلی</a>


          <a>تماس با دیجی‌کالا</a>


          <a>درباره دیجی‌کالا</a>

        </div>
        <div class="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
          <p class="text_h5">خدمات مشتریان</p>

          <a>
            پاسخ به پرسش‌های متداول
          </a>


          <a>
            رویه‌های بازگرداندن کالا
          </a>


          <a>شرایط استفاده</a>


          <a>حریم خصوصی </a>


          <a>گزارش باگ</a>

        </div>
        <div class="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
          <p>راهنمای خرید از دیجی‌کالا</p>

          <a>نحوه ثبت سفارش</a>


          <a>رویه ارسال سفارش</a>


          <a>شیوه‌های پرداخت</a>

        </div>
        <div class="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
          <p>همراه ما باشید</p>
          <div class="flex pt-4">
            <a href="" class="ml-5 text-gray-400">

            </a>
            <a href="" class="ml-5 text-gray-400">

            </a>
            <a href="" class="ml-5 text-gray-400">

            </a>
          </div>
          <p>
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </p>

          <form class="flex w-full">
            <label class="grow-1">
              <div class="bg-100 radius-medium flex items-center px-2">
                <div class="grow-1">
                  <input
                      class="text-md w-100 rounded-lg border-none bg-gray-200 px-2 text-gray-500"
                      type="email"
                      name="email"
                      placeholder="شماره"
                  />
                </div>
              </div>
            </label>
            <button
                id="emailSubmitBtn"
                class="mr-2 flex min-w-[40px] items-center justify-center rounded-lg bg-gray-500 text-white"
                type="button"
            >
              <div class="grow-1">ثبت</div>
            </button>
          </form>
        </div>
      </div>

      <div class="border-t px-3 py-3">
        <p class="font-bold">
          فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین
        </p>
        <p class="text-[12px] font-light">
          دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از
          یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت
          بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
          معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
          ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه
          که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
const options = '';
</script>