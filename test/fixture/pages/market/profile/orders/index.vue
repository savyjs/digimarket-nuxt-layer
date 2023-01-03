<template>
  <div>

    <div class='mb-4 border-b border-gray-200 dark:border-gray-700'>
      <ul class='flex flex-auto -mb-px tabs-primary' id='myTab' data-tabs-toggle='#tabs' role='tablist'>
        <li class='mr-2' role='presentation'>
          <nuxt-link
              to="./orders">
            <button
                class='active'
                id='cart-tab'
                data-tabs-target='#cart'
                type='button'
                role='tab'
                aria-controls='cart'
                aria-selected='true'>جاری
              <span
                  class='badge-primary mr-2'>۵</span>
            </button>
          </nuxt-link>
        </li>
         <li class='mr-2' role='presentation'>
          <nuxt-link
              to="./orders">
            <button
                id='cart-tab'
                data-tabs-target='#cart'
                type='button'
                role='tab'
                aria-controls='cart'
                aria-selected='true'>جاری
            </button>
          </nuxt-link>
        </li>
         <li class='mr-2' role='presentation'>
          <nuxt-link
              to="./orders">
            <button
                id='cart-tab'
                data-tabs-target='#cart'
                type='button'
                role='tab'
                aria-controls='cart'
                aria-selected='true'>جاری
            </button>
          </nuxt-link>
        </li>

      </ul>
    </div>
    <div id='tabs'>
      <div id='cart'
           class='card-primary my-5 grid grid-cols-1 items-center justify-center text-center align-middle'
           role='tabpanel' aria-labelledby='cart-tab'>
      </div>
    </div>
  </div>
</template>