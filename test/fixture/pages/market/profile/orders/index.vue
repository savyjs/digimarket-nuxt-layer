<template>
  <div>
    <div class='mb-4 border-b border-gray-200 dark:border-gray-700'>
      <ul class='flex flex-auto -mb-px tabs-primary' id='myTab' data-tabs-toggle='#tabs' role='tablist'>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders">
            <button
                class='active'
                id='cart-tab'
                data-tabs-target='#in_progress'
                type='button'
                role='tab'
                aria-controls='in_progress'
                aria-selected='true'>جاری
              <span
                  class='badge-primary mr-2'>۵</span>
            </button>
          </nuxt-link>
        </li>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders/delivered">
            <button
                id='cart-tab'
                data-tabs-target='#delivered'
                type='button'
                role='tab'
                aria-controls='delivered'
                aria-selected='true'>تحویل شده
            </button>
          </nuxt-link>
        </li>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders/returned">
            <button
                id='cart-tab'
                data-tabs-target='#returned'
                type='button'
                role='tab'
                aria-controls='returned'
                aria-selected='true'>مرجوع شده
            </button>
          </nuxt-link>
        </li>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="/market/profile/orders/cancelled">
            <button
                id='cart-tab'
                data-tabs-target='#cancelled'
                type='button'
                role='tab'
                aria-controls='cancelled'
                aria-selected='true'>لغو شده
            </button>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div id='tabs'>
      <div id='in_progress'
           class='card-primary my-5 grid grid-cols-1 items-center justify-center text-center align-middle'
           role='tabpanel' aria-labelledby='cart-tab'>
        
      </div>
    </div>
  </div>
</template>
<script setup>

</script>