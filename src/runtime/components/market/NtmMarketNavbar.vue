<template>
  <div :class="`rtl bg-default navbar-wrapper ${showNavbar ? 'show-nav' : 'hide-nav'}`">
    <nav class="nav bg-default">
      <ul class="flex items-end md:text-[12px] lg:text-[13px]">
        <li @mouseover="megaMenuStatus = true" @mouseleave="megaMenuStatus = false">
          <button
              class="flex items-center gap-1 font-bold text-gray-800 dark:text-gray-200">
            <svg class="h-4 w-4" fill="currentColor">
              <use href="#hamburgerMenu"></use>
            </svg>
            <span> دسته‌بندی کالا</span>
          </button>
          <NtmMegaMenu v-show="megaMenuStatus"/>
        </li>
        <div class="py-2 pr-3">
          <span class="mx-3 block h-4 w-px"></span>
        </div>
        <li class="">
          <nuxt-link to="/best-selling">
            <a class="flex items-center gap-1 text-[12px] text-gray-500 dark:text-gray-200">
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#searchTrend"></use>
              </svg>
              پرفروش‌ترین‌ها
            </a>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/promotion-center">
            <a class="flex items-center gap-1 text-[12px] text-gray-500 dark:text-gray-200">
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#discount"></use>
              </svg>
              تخفیف‌ها و پیشنهادها
            </a>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/incredible-offers">
            <a class="flex items-center gap-1 text-[12px] text-gray-500 dark:text-gray-200">
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#amazing"></use>
              </svg>
              شگفت‌انگیزها
            </a>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/faq">
            <a class="text-[12px] text-gray-500 dark:text-gray-200">سوالی دارید؟</a>
          </nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/faq">
            <a class="text-[12px] text-gray-500 dark:text-gray-200">فروشنده شوید!</a>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="pl-4 bg-default">
      <button
          data-bs-toggle="modal"
          data-bs-target="#divisionsModal"
          class="flex items-center justify-between gap-1 text-gray-600"
      >
      <span>
              <svg class="h-4 w-4" fill="currentColor">
                <use href="#pin"></use>
              </svg>
            </span>
        <span class="text-[11px]">لطفا شهر خود را انتخاب کنید</span>
      </button>
      <NtmDivisions/>
    </div>
  </div>
</template>
<script setup>

const megaMenuStatus = useState('megaMenuStatus', () => false)
const toggleNavbar = useState('showNavbar', () => true);
const showNavbar = useState('toggleNavbar', () => true);
const lastScrollY = useState('lastScrollY', () => 0);
const setLastScrollY = useState('setLastScrollY', () => 0);
const divisionsModal = useState('divisionsModal');

const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date() /* NUXT_BIRTHDAY */)

const controlNavbar = () => {
  if (typeof window !== 'undefined') {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      toggleNavbar(false);
    } else {
      // if scroll up show the navbar
      toggleNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }
};

</script>
<style scoped>
.nav li {
  margin-right: 1rem;
  padding-bottom: 8px;
  border-bottom: 2px solid transparent;
  transition: 0.3s linear;
}

.nav li:hover {
  border-bottom: 2px solid red;
}

li .bordernone:hover {
  border-bottom: transparent;
}

.navbar-wrapper {
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar-wrapper.show-nav {
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding-top: 5px;
}

.navbar-wrapper.hide-nav {
  z-index: 1;
  top: -35px;
}

</style>