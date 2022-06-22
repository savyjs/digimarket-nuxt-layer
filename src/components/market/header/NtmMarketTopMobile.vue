<template>
  <header class="container-4xl-w relative z-[3] w-full bg-white px-4 pt-4 pb-1">
    <div class="flex justify-between pb-3">
      <svg class="h-6 w-6" fill="currentColor">
        <use href="#hamburgerMenu"></use>
      </svg>
      <a href="/" class="ml-5 shrink-0">
        <img width="100" height="30" src="/dkala/logo.svg" alt="logo"/>
      </a>

      <svg class="h-6 w-6" fill="currentColor">
        <use href="#question"></use>
      </svg>
    </div>
    <div class="flex items-center justify-between border-t pt-3">
      <div
          id="search-box"
          class="px-4-lg text-body-2 rounded-8p flex h-10 w-3/4 items-center">
      <span class="pr-2 pl-3 text-[13px] text-gray-400">
                <FaSearch/>
              </span>
        <span class="cursor-text text-[12px] text-gray-400">
                جستجو
              </span>
        <div id="backdrop-searchModal"></div>
        <div
            id="overlay-searchModal"
            class="relative h-full w-full md:h-auto"
        ></div>
      </div>

      <div class="rounded-8p cursor-pointer p-1 text-neutral-700">
        <Link href="/login">
          <a class={classes.logoLogin}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>

            <span> ورود </span>
          </a>
        </Link>
      </div>
      <div class="text-neutral-700">
        <Link href="/checkout/cart">
          <a class="shrink-0">
            <svg class="h-6 w-6" fill="currentColor">
              <use href="#cartOff"></use>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  </header>
</template>