<template>
  <div class="card-primary">
    <div class="card-title card-title-underline-primary flex justify-between">
      <div>
        <b>سفارش‌های من</b>
        <div class="title-decoration-underline"></div>
      </div>
      <button>
        <nuxt-link>
          <a class="text-link text-xs flex gap-1">
            مشاهده‌ی همه
            <svg class="icon icon-small fill-link">
              <use href="#chevronLeft"/>
            </svg>
          </a>
        </nuxt-link>
      </button>
    </div>
    <div class="card-body">
      <div class="flex w-full align-middle pt-12 pb-3">
        <div class="flex w-[1/3] grow mx-3 align-middle gap-5">
          <div><img src="/public/dkala/status-processing.svg"/></div>
          <div class="flex flex-col justify-end">
            <p><b class="text-sm">0 سفارش</b></p>
            <p><small>جاری</small></p>
          </div>
        </div>
        <div class="border-r-[1px]"></div>
        <div class="flex w-[1/3] grow mx-3 align-middle gap-5">
          <div><img src="/public/dkala/status-delivered.svg"/></div>
          <div class="flex flex-col justify-end">
            <p><b class="text-sm">29 سفارش</b></p>
            <p><small>تحویل شده</small></p>
          </div>
        </div>
        <div class="border-r-[1px]"></div>
        <div class="flex w-[1/3] grow mx-3 align-middle gap-5">
          <div><img src="/public/dkala/status-returned.svg"/></div>
          <div class="flex flex-col justify-end">
            <p><b class="text-sm">0 سفارش</b></p>
            <p><small>مرجوع شده</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>