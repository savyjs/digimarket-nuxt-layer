import Link from 'next/link';
import classes from './Categories.module.scss';

const Categories = () => {
  const categories = [
    {
      key: '01digital',
      title: 'کالای دیجیتال',
      src: '/assets/img/landing/category/01digital.png',
    },
    {
      key: '02tools',
      title: 'خودرو، ابزار و تجهیزات صنعتی',
      src: '/assets/img/landing/category/02tools.png',
    },
    {
      key: '03pooshak',
      title: 'مد و پوشاک',
      src: '/assets/img/landing/category/03pooshak.png',
    },
    {
      key: '04kidtoy',
      title: 'اسباب بازی، کودک و نوزاد',
      src: '/assets/img/landing/category/04kidtoy.png',
    },
    {
      key: '05supermarket',
      title: 'کالاهای سوپرمارکتی',
      src: '/assets/img/landing/category/05supermarket.png',
    },
    {
      key: '06beauty',
      title: 'زیبایی و سلامت',
      src: '/assets/img/landing/category/06beauty.png',
    },
    {
      key: '07kitchen',
      title: 'خانه و آشپزخانه',
      src: '/assets/img/landing/category/07kitchen.png',
    },
    {
      key: '08book',
      title: 'کتاب، لوازم تحریر و هنر',
      src: '/assets/img/landing/category/08book.png',
    },
    {
      key: '09sport',
      title: 'ورزش و سفر',
      src: '/assets/img/landing/category/09sport.png',
    },
    {
      key: '10native',
      title: 'محصولات بومی',
      src: '/assets/img/landing/category/10native.png',
    },
  ];
  return (
    <>
      <div className="pb-5 pt-14">
        <p className="text-center text-xl">دسته‌بندی‌های دیجی‌کالا</p>
        <div className="container grid grid-cols-3 md:grid-cols-5">
          {categories.map((category) => {
            return (
              <div
                key={category.key}
                className={`${classes.img} col-span-1 my-8 mx-auto py-3 text-center`}
              >
                <Link href={category.key}>
                  <a className="">
                    <img src={category.src} alt={category.key} />
                    <span className="text-[12px] font-bold">
                      {category.title}
                    </span>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-5 flex items-center justify-between gap-4">
        <div className="w-full md:w-1/2">
          <Link href="vitreous">
            <a>
              <img
                className="rounded-2xl"
                src="/assets/img/landing/banners/vitreous.jpg"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Link href="homeplus">
            <a>
              <img
                className="rounded-2xl"
                src="/assets/img/landing/banners/homeplus.jpg"
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
