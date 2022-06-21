import Link from 'next/link'
import Image from 'next/image'
import classes from './Footer.module.scss'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { ElementRef } from 'react'
const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const checkValditiy = (e: any) => {
    const element = document.getElementById('emailSubmitBtn')
    console.log(e)
    const isValid = e?.target?.value
      ?.toString()
      .toLowerCase()
      .match('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')

    if (isValid) {
      element?.classList.replace('bg-gray-500', 'bg-red-500')
    } else {
      element?.classList.replace('bg-red-500', 'bg-gray-500')
    }
  }

  return (
    <footer className="border-n-200 mt-10 w-full border-t bg-white pt-2">
      <div className="container-4xl-w mx-auto">
        <div className="px-5">
          <div className="flex select-none items-center justify-between">
            <div className="ml-4">
              <Link href="/">
                <a className="text-link px-0.5">
                  <img
                    width="100"
                    height="30"
                    src="/dkala/logo-fa.svg"
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
            <button
              className="btn-gray-outlined mx-1 flex h-10 text-[12px]"
              onClick={scrollTop}
            >
              <span className="flex-auto pl-2 font-bold"> بازگشت به بالا</span>
              <div>
                <svg
                  className="h-4 w-4"
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
          <div className="mt-3-md mb-0-md flex-nowrap-lg color-700 mb-8 flex flex-wrap items-center text-[12px] font-light">
            <p className="shrink-0">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
            <div className="color-400 d-none d-block-md px-5">|</div>
            <p className="w-auto-md mt-0-md mt-1">
              ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
            </p>
          </div>
          <div className="my-8 hidden items-center justify-between text-[12px] font-light md:flex">
            <Link href="/login">
              <a
                className="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
                href=""
              >
                <img
                  width="56"
                  height="56"
                  src="/dkala/express-delivery.svg"
                  alt="express-delivery"
                  className="mx-auto"
                />
                <span className="">امکان تحویل اکسپرس</span>
              </a>
            </Link>
            <Link href="/login">
              <a
                className="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
                href=""
              >
                <img
                  width="56"
                  height="56"
                  src="/dkala/cash-on-delivery.svg"
                  alt="cash-on-delivery"
                  className="mx-auto"
                />
                <span className="">امکان پرداخت در محل</span>
              </a>
            </Link>
            <Link href="/login">
              <a
                className="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
                href=""
              >
                <img
                  width="56"
                  height="56"
                  src="/dkala/support.svg"
                  alt="support"
                  className="mx-auto"
                />
                <span className=""> ۷ روز هفته، ۷ ساعته</span>
              </a>
            </Link>
            <Link href="/login">
              <a
                className="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
                href=""
              >
                <img
                  width="56"
                  height="56"
                  src="/dkala/days-return.svg"
                  alt="days-return"
                  className="mx-auto"
                />
                <span className="">هفت روز ضمانت بازگشت</span>
              </a>
            </Link>
            <Link href="/login">
              <a
                className="flex-column grow-1 flex-auto items-center justify-between py-3 text-center"
                href=""
              >
                <img
                  width="56"
                  height="56"
                  src="/dkala/original-products.svg"
                  alt="original-products"
                  className="mx-auto"
                />
                <span className="">ضمانت اصل بودن کالا</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-4 items-start justify-between gap-4 text-[12px] font-light ">
          <div className="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
            <p className={classes.text_h5}>با دیجی‌کالا</p>
            <Link href="/">
              <a className={classes.footer_text_link}>اتاق خبر دیجی‌کالا</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>فروش در دیجی‌کالا</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>فرصت‌های شغلی</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>تماس با دیجی‌کالا</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>درباره دیجی‌کالا</a>
            </Link>
          </div>
          <div className="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
            <p className={classes.text_h5}>خدمات مشتریان</p>
            <Link href="/">
              <a className={classes.footer_text_link}>
                پاسخ به پرسش‌های متداول
              </a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>
                رویه‌های بازگرداندن کالا
              </a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>شرایط استفاده</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>حریم خصوصی </a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>گزارش باگ</a>
            </Link>
          </div>
          <div className="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
            <p className={classes.text_h5}>راهنمای خرید از دیجی‌کالا</p>
            <Link href="/">
              <a className={classes.footer_text_link}>نحوه ثبت سفارش</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>رویه ارسال سفارش</a>
            </Link>
            <Link href="/">
              <a className={classes.footer_text_link}>شیوه‌های پرداخت</a>
            </Link>
          </div>
          <div className="col-span-4 mb-2 items-center px-5 md:col-span-2 lg:col-span-1">
            <p className={classes.text_h5}>همراه ما باشید</p>
            <div className="flex pt-4">
              <a href="" className="ml-5 text-gray-400">
                <FaInstagram size="2rem" />
              </a>
              <a href="" className="ml-5 text-gray-400">
                <FaTwitter size="2rem" />
              </a>
              <a href="" className="ml-5 text-gray-400">
                <FaLinkedin size="2rem" />
              </a>
            </div>
            <p className={`${classes.text_h5} mt-4`}>
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>

            <form className="flex w-full">
              <label className="grow-1">
                <div className="bg-100 radius-medium flex items-center px-2">
                  <div className="grow-1">
                    <input
                      className="text-md w-100 rounded-lg border-none bg-gray-200 px-2 text-gray-500"
                      type="email"
                      name="email"
                      onKeyUp={checkValditiy}
                      placeholder="ایمیل شما"
                    />
                  </div>
                </div>
              </label>
              <button
                id="emailSubmitBtn"
                className="mr-2 flex min-w-[40px] items-center justify-center rounded-lg bg-gray-500 text-white"
                type="button"
              >
                <div className="grow-1">ثبت</div>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t px-3 py-3">
          <p className="font-bold">
            فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین
          </p>
          <p className="text-[12px] font-light">
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
  )
}

export default Footer
