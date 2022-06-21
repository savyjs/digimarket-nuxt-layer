import Link from 'next/link';

const Banners = () => {
  return (
    <>
      <section>
        <div className="my-3 h-24 rounded-2xl bg-gray-100"></div>
        <div className="my-3 h-24 rounded-2xl bg-gray-100"></div>
      </section>
      <section>
        <div className="my-5 flex items-center justify-between gap-4">
          <div className="w-1/2 md:w-1/4">
            <Link href="tage">
              <a>
                <img
                  className="rounded-2xl"
                  src="/assets/img/landing/banners/tage-400-300.jpg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="w-1/2 md:w-1/4">
            <Link href="bingo">
              <a>
                <img
                  className="rounded-2xl"
                  src="/assets/img/landing/banners/bingo-400-300.jpg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="w-1/2 md:w-1/4">
            <Link href="cif">
              <a>
                <img
                  className="rounded-2xl"
                  src="/assets/img/landing/banners/cif-400-300.jpg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="w-1/2 md:w-1/4">
            <Link href="golrang">
              <a>
                <img
                  className="rounded-2xl"
                  src="/assets/img/landing/banners/golrang-400-300.jpg"
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banners;
