<template>
  <div class="card-primary">
    <div class="card-title card-title-underline-primary flex justify-between">
      <div>
        <b>{{ $t("ntm.my_orders", "My orders") }}</b>
        <div class="title-decoration-underline"></div>
      </div>
      <button>
        <nuxt-link>
          <a class="text-link text-xs flex gap-1">
            {{ $t("ntm.show_all", "Show all") }}
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
          <div>
            /public/dkala/status-processing.svg
          </div>
          <div class="flex flex-col justify-end">
            <p><b class="text-sm">0 {{ $t("ntm.orders", "orders") }}</b></p>
            <p><small>{{ $t("ntm.active_orders_count", "Active") }}</small></p>
          </div>
        </div>
        <div class="border-r-[1px]"></div>
        <div class="flex w-[1/3] grow mx-3 align-middle gap-5">
          <div>
            /public/dkala/status-delivered.svg
          </div>
          <div class="flex flex-col justify-end">
            <p><b class="text-sm">29 {{ $t("ntm.orders", "orders") }}</b></p>
            <p><small>{{ $t("ntm.delivered_orders_count", "Delivered") }}</small></p>
          </div>
        </div>
        <div class="border-r-[1px]"></div>
        <div class="flex w-[1/3] grow mx-3 align-middle gap-5">
          <div>
            /public/dkala/status-returned.svg
          </div>
          <div class="flex flex-col justify-end">
            <p><b class="text-sm">0 {{ $t("ntm.orders", "orders") }}</b></p>
            <p><small>{{ $t("ntm.rejected_orders_count", "Rejected") }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>