<template>
  <div>
    <nav>
      <ul class="flex items-end md:text-[12px] lg:text-[13px]">
        <li class="hoverable">
          <button class="flex items-center gap-1 font-bold text-gray-800">
            <svg class="h-4 w-4" fill="currentColor">
              <use href="#hamburgerMenu"></use>
            </svg>

            <span> دسته‌بندی کالا</span>
          </button>
          <NtmMegaMenu/>
        </li>
        <div class="py-2 pr-3">
          <span class="mx-3 block h-4 w-px bg-neutral-200"></span>
        </div>
        <li class="">
          <Link href="/best-selling">
            <a class="flex items-center gap-1 text-[12px] text-gray-500">
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#searchTrend"></use>
              </svg>
              پرفروش‌ترین‌ها
            </a>
          </Link>
        </li>
        <li class="">
          <Link href="/promotion-center">
            <a class="flex items-center gap-1 text-[12px] text-gray-500">
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#discount"></use>
              </svg>
              تخفیف‌ها و پیشنهادها
            </a>
          </Link>
        </li>
        <li class="">
          <Link href="/incredible-offers">
            <a class="flex items-center gap-1 text-[12px] text-gray-500">
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#amazing"></use>
              </svg>
              شگفت‌انگیزها
            </a>
          </Link>
        </li>
        <li class="">
          <Link href="/faq">
            <a class="text-[12px] text-gray-500">سوالی دارید؟</a>
          </Link>
        </li>
        <li class="">
          <Link href="/faq">
            <a class="text-[12px] text-gray-500">فروشنده شوید!</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div class="pl-4">
      <button
          class="flex items-center justify-between gap-1 text-gray-600"
      >
      <span>
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#pin"></use>
              </svg>
            </span>
        <span class="text-[11px]">لطفا شهر خود را انتخاب کنید</span>
      </button>
    </div>
  </div>
</template>