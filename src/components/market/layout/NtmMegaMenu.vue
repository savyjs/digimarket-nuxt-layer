<template>
  <div>
    <div class="megaMenu mb-16 bg-white px-0 shadow-xl sm:mb-0">
      <div class="flex h-fit w-full justify-between">
        <div class="w-1/6 border-l border-gray-200">
          <div>
            <a
                v-for="(category,index) in items"
                :key="category.key"
                :href="category.key"
                @mouseover="megaMenuMainCategoryIndex = index"
                class="hover flex items-center py-3 text-right text-sm"
            >
              <svg class="h-4 w-4" fill="currentColor">
                <use :href="category?.icon"></use>
              </svg>
              <span class="pr-2"> {{ category?.title }}</span>
            </a>
          </div>
        </div>
        <div v-if="mainCategory" class="w-full px-4">
          <div class="flex">
            <div class="w-4/5">
              <a class="flex cursor-pointer py-4 text-right text-[11px] text-gray-700">
                <span class="pl-1">همه </span>
                <span>{{ mainCategory?.title }}</span>
                <svg class="h-4 w-4" fill="currentColor">
                  <use href="#chevronLeft"></use>
                </svg>
              </a>

              <div class="flex h-[420px] flex-col flex-wrap pb-5">
                <template v-for="category in mainCategory.categories">
                  <NuxtLink :to="category.key">
                    <a class="mt-1 flex  py-1 hover:text-red-600">
                      <span class="w-0.5 bg-red-600"></span>
                      <span class="pl-1 pr-2 font-bold"> {{ category?.title }}</span>

                      <svg class="h-3 w-3" fill="currentColor">
                        <use href="#chevronLeft"></use>
                      </svg>
                    </a>
                  </NuxtLink>
                  <template v-for="subCategory in category.subCategories">
                    <NuxtLink :to="subCategory.key">
                      <a class="mt-1 flex py-1 text-[11px] text-gray-500  hover:text-red-600">
                        <span class="px-2"> {{ subCategory?.title }}</span>
                      </a>
                    </NuxtLink>
                  </template>
                </template>
              </div>
            </div>
            <div class="w-1/5 pt-4">
              <a class="">
                <img
                    src="/assets/img/MegaMenuRandom.jpg"
                    class="rounded-lg"
                    alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const megaMenuMainCategoryIndex = ref(0)
const dummyData = ([
  {
    key: 'electronic',
    title: 'کالای دیجیتال',
    icon: '#electronic',
    categories: [
      {
        key: 'electronic_01',
        title: 'لوازم جانبی گوشی',
        subCategories: [
          {
            key: 'electronic_01_01',
            title: 'کیف و کاور گوشی',
          },
          {
            key: 'electronic_01_02',
            title: 'پاوربانک (شارژر همراه)',
          },
          {
            key: 'electronic_01_033',
            title: 'پایه نگهدارنده گوشی',
          },
        ],
      },
      {
        key: 'electronic_02',
        title: 'گوشی موبایل',
        subCategories: [
          {
            key: 'electronic_02_01',
            title: 'سامسونگ',
          },
          {
            key: 'electronic_02_02',
            title: 'هوآوری',
          },
          {
            key: 'electronic_02_03',
            title: 'اپل',
          },
          {
            key: 'electronic_02_04',
            title: 'شیائومی',
          },
          {
            key: 'electronic_02_05',
            title: 'آنر',
          },
          {
            key: 'electronic_02_06',
            title: 'نوکیا',
          },
        ],
      },
      {
        key: 'electronic_03',
        title: 'واقعیت مجازی',
        subCategories: [],
      },
      {
        key: 'electronic_04',
        title: 'مچ‌بند و ساعت هوشمند',
        subCategories: [],
      },
      {
        key: 'electronic_05',
        title: 'هدفون، هدست، هندزفری',
        subCategories: [],
      },
      {
        key: 'electronic_06',
        title: 'اسپییکر بلوتوث و با سیم',
        subCategories: [],
      },
      {
        key: 'electronic_07',
        title: 'هارد فلش و SSD',
        subCategories: [],
      },
      {
        key: 'electronic_08',
        title: 'دوربین',
        subCategories: [
          {
            key: 'electronic_08_01',
            title: 'دوربین عکاسی دیجیتال',
          },
          {
            key: 'electronic_08_02',
            title: 'دوربین ورزشی و فیلم برداری',
          },
          {
            key: 'electronic_08_03',
            title: 'دوربین چاپ سریع',
          },
        ],
      },
      {
        key: 'electronic_09',
        title: 'لوازم جانبی دوربین',
        subCategories: [
          {
            key: 'electronic_09_01',
            title: 'لنز',
          },
          {
            key: 'electronic_09_02',
            title: 'کیف',
          },
          {
            key: 'electronic_09_03',
            title: 'کارت حافظه',
          },
          {
            key: 'electronic_09_04',
            title: 'کاغذ چاپ عکس',
          },
        ],
      },
      {
        key: 'electronic_10',
        title: 'تلسکوپ',
        subCategories: [],
      },
      {
        key: 'electronic_11',
        title: 'پلی استیش، ایکس باکس و بازی',
        subCategories: [],
      },
      {
        key: 'electronic_12',
        title: 'کامپیوتر و تجهیزات جانبی',
        subCategories: [
          {
            key: 'electronic_12_01',
            title: 'تجهیزات مخصوص بازی',
          },
          {
            key: 'electronic_12_02',
            title: 'مانیتور',
          },
          {
            key: 'electronic_12_03',
            title: 'کیس‌های اسمبل شده',
          },
          {
            key: 'electronic_12_04',
            title: 'قطعات داخلی کامپیوتر',
          },
          {
            key: 'electronic_12_05',
            title: 'ماوس',
          },
          {
            key: 'electronic_12_06',
            title: 'کیبورد',
          },
        ],
      },
      {
        key: 'electronic_13',
        title: 'لپ تاپ',
        subCategories: [],
      },
      {
        key: 'electronic_14',
        title: 'لوازم جانبی لپ تاپ',
        subCategories: [
          {
            key: 'electronic_14_01',
            title: 'یف، کوله و کاور',
          },
          {
            key: 'electronic_14_02',
            title: 'کابل صدا، AUX و HDMI',
          },
        ],
      },
      {
        key: 'electronic_15',
        title: 'تبلت',
        subCategories: [],
      },
      {
        key: 'electronic_16',
        title: 'شارژر تبلت و موبایل',
        subCategories: [],
      },
      {
        key: 'electronic_17',
        title: 'کیف، کاور، لوازم جانبی تبلت',
        subCategories: [],
      },
      {
        key: 'electronic_18',
        title: 'باتری',
        subCategories: [],
      },
      {
        key: 'electronic_19',
        title: 'دوربین‌های تحت شبکه',
        subCategories: [],
      },
      {
        key: 'electronic_20',
        title: 'مودم و تجهیزات شبکه',
        subCategories: [],
      },
      {
        key: 'electronic_21',
        title: 'ماشین های اداری',
        subCategories: [
          {
            key: 'electronic_21_01',
            title: 'تلفن، بی سیم و سانترال',
          },
          {
            key: 'electronic_21_02',
            title: 'فکس',
          },
          {
            key: 'electronic_21_03',
            title: 'پرینتر',
          },
          {
            key: 'electronic_21_04',
            title: 'لوازم جانبی اداری',
          },
        ],
      },
      {
        key: 'electronic_22',
        title: 'کتابخوان فیدیبوک',
        subCategories: [],
      },
      {
        key: 'electronic_23',
        title: 'کارت هدیه خرید از دیجی‌کالا',
        subCategories: [],
      },
    ],
  },
  {
    key: 'tools',
    title: 'خودرو، ابزار و تجهیزات صنعتی',
    icon: '#tools',
    categories: [
      {
        key: 'tools_01',
        title: 'خودروهای ایرانی و خارجی',
        subCategories: [],
      },
      {
        key: 'tools_02',
        title: 'موتورسیکلت',
        subCategories: [],
      },
      {
        key: 'tools_03',
        title: 'لوازم جانبی خودرو و موتورسیکلت',
        subCategories: [
          {
            key: 'tools_03_01',
            title: 'لوازم تزیینی',
          },
          {
            key: 'tools_03_02',
            title: 'سیستم صوتی و تصویری',
          },
          {
            key: 'tools_03_03',
            title: 'نظافت و نگهداری خودرو',
          },
          {
            key: 'tools_03_04',
            title: 'کلاه کاسکت و لوازم جانبی موتور',
          },
        ],
      },
      {
        key: 'tools_04',
        title: 'لوازم یدکی خودرو و موتورسیکلت',
        subCategories: [
          {
            key: 'tools_04_01',
            title: 'دیسک و صفحه کلاج',
          },
          {
            key: 'tools_04_02',
            title: 'جلوبندی و تعلیق',
          },
          {
            key: 'tools_04_03',
            title: 'چراغ خودرو',
          },
          {
            key: 'tools_04_04',
            title: 'تسمه خودرو',
          },
          {
            key: 'tools_04_05',
            title: 'کمک فنر',
          },
        ],
      },
      {
        key: 'tools_05',
        title: 'لوازم مصرفی خودرو و موتووسیکلت',
        subCategories: [
          {
            key: 'tools_05_01',
            title: 'لاستیک و تایر',
          },
          {
            key: 'tools_05_02',
            title: 'لنت ترمز',
          },
          {
            key: 'tools_05_03',
            title: 'روغن موتور و ضد یخ',
          },
          {
            key: 'tools_05_04',
            title: 'مکمل سوخت و روغن و انواع فیلتر',
          },
        ],
      },
      {
        key: 'tools_06',
        title: 'ابزار برقی',
        subCategories: [
          {
            key: 'tools_06_01',
            title: 'دریل، پیچ گوشتی برقی و شارژی',
          },
          {
            key: 'tools_06_02',
            title: 'فرز و سنگ رومیزی',
          },
          {
            key: 'tools_06_03',
            title: 'موتور برق',
          },
          {
            key: 'tools_06_04',
            title: 'مکنده و دمنده',
          },
          {
            key: 'tools_06_05',
            title: 'کارواش',
          },
          {
            key: 'tools_06_06',
            title: 'کمپرسور',
          },
          {
            key: 'tools_06_07',
            title: 'ابزار همه کاره برقی و شارژی',
          },
        ],
      },
      {
        key: 'tools_07',
        title: 'ابزار غیر برقی',
        subCategories: [
          {
            key: 'tools_07_01',
            title: 'ابزار دستی',
          },
          {
            key: 'tools_07_03',
            title: 'مجموعه ابزار',
          },
          {
            key: 'tools_07_04',
            title: 'نردبان',
          },
          {
            key: 'tools_07_05',
            title: 'پیچ گوشتی و فازمتر',
          },
          {
            key: 'tools_07_06',
            title: 'نظم دهنده ابزار',
          },
          {
            key: 'tools_07_07',
            title: 'متر، تراز، اندازه‌گیری دقیق',
          },
          {
            key: 'tools_07_08',
            title: 'لوازم روانکاری',
          },
          {
            key: 'tools_07_09',
            title: 'چسب صنعتی',
          },
        ],
      },
      {
        key: 'tools_08',
        title: 'لوازم و یراق آلات ساختمانی',
        subCategories: [
          {
            key: 'tools_08_01',
            title: 'شیرآلات',
          },
          {
            key: 'tools_08_02',
            title: 'رنگ',
          },
          {
            key: 'tools_08_03',
            title: 'دستگیره در',
          },
        ],
      },
      {
        key: 'tools_09',
        title: 'لوازم باغبانی',
        subCategories: [
          {
            key: 'tools_09_01',
            title: 'قیچی، چاقو و ابزار باغبانی',
          },
          {
            key: 'tools_09_02',
            title: 'بذر و تخم گیاهان',
          },
          {
            key: 'tools_09_03',
            title: 'تبر، بیل و کلنگ',
          },
          {
            key: 'tools_09_04',
            title: 'خاک، کود و آفت کش',
          },
        ],
      },
      {
        key: 'tools_10',
        title: 'نور و روشنایی',
        subCategories: [
          {
            key: 'tools_10_01',
            title: 'لوستر و آباژور',
          },
          {
            key: 'tools_10_02',
            title: 'لامپ',
          },
          {
            key: 'tools_10_03',
            title: 'چندراهی برق و محافظ ولتاژ',
          },
        ],
      },
      {
        key: 'tools_11',
        title: 'تجهیزات ایمنی و کار',
        subCategories: [
          {
            key: 'tools_11_01',
            title: 'کفش ایمنی',
          },
        ],
      },
      {
        key: 'tools_12',
        title: 'حفاظتی و امنیتی',
        subCategories: [
          {
            key: 'tools_12_01',
            title: 'گاوصندوق',
          },
        ],
      },
    ],
  },
  {
    key: 'fashion',
    title: 'مد و پوشاک',
    icon: '#fashion',
    categories: [
      {
        key: '',
        title: 'مردانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'لباس مردانه',
        subCategories: [
          {
            key: '',
            title: 'تی شرت و پلوشرت',
          },
          {
            key: '',
            title: 'پیراهن',
          },
          {
            key: '',
            title: 'شلوار',
          },
          {
            key: '',
            title: 'لباس زیر',
          },
        ],
      },
      {
        key: '',
        title: 'کفش مردانه',
        subCategories: [
          {
            key: '',
            title: 'کفش روزمره',
          },
          {
            key: '',
            title: 'کفش رسمی',
          },
        ],
      },
      {
        key: '',
        title: 'اکسسوری مردانه',
        subCategories: [
          {
            key: '',
            title: 'ساعت',
          },
          {
            key: '',
            title: 'کیف',
          },
          {
            key: '',
            title: 'کمربند',
          },
        ],
      },
      {
        key: '',
        title: 'زنانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'لباس زنانه',
        subCategories: [
          {
            key: '',
            title: 'پوشش اسلامی',
          },
          {
            key: '',
            title: 'بلوز و شومیز',
          },
          {
            key: '',
            title: 'تی شرت و پولوشرت',
          },
          {
            key: '',
            title: 'شلوار و سرهمی',
          },
          {
            key: '',
            title: 'لباس زیر',
          },
        ],
      },
      {
        key: '',
        title: 'کفش زنانه',
        subCategories: [
          {
            key: '',
            title: 'کفش روزمره',
          },
          {
            key: '',
            title: 'کفش تخت',
          },
        ],
      },
      {
        key: '',
        title: 'اکسسوری زنانه',
        subCategories: [
          {
            key: '',
            title: 'ساعت',
          },
          {
            key: '',
            title: 'کیف',
          },
          {
            key: '',
            title: 'شال و روسری',
          },
        ],
      },
      {
        key: '',
        title: 'زیورآلات زنانه',
        subCategories: [
          {
            key: '',
            title: 'دستبند',
          },
          {
            key: '',
            title: 'گوشواره',
          },
          {
            key: '',
            title: 'گردنبند',
          },
        ],
      },
      {
        key: '',
        title: 'زیورآلات طلا زنانه',
        subCategories: [
          {
            key: '',
            title: 'دستبند',
          },
          {
            key: '',
            title: 'گوشواره',
          },
          {
            key: '',
            title: 'آویز',
          },
          {
            key: '',
            title: 'گردنبند',
          },
        ],
      },
      {
        key: '',
        title: 'زیورآلات نقره زنانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'عینک آفتابی زنانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'عینک آفتابی مردانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'پوشاک ورزشی مردانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'پوشاک ورزشی زنانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'کفش ورزشی مردانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'کفش ورزشی زنانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'پوشاک ورزشی پسرانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'پوشاک ورزشی دخترانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'کفش ورزشی پسرانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'کفش ورزشی دخترانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'کوله پشتی مردانه',
        subCategories: [],
      },
      {
        key: '',
        title: 'بچه گانه',
        subCategories: [
          {
            key: '',
            title: 'نوزاد',
          },
          {
            key: '',
            title: 'پسرانه',
          },
          {
            key: '',
            title: 'دخترانه',
          },
        ],
      },
    ],
  },
  {
    key: 'kidsToy',
    title: 'اسباب بازی، کودک و نوزاد',
    icon: '#kidsToy',
    categories: [
      {
        key: '',
        title: '',
        subCategories: [
          {
            key: '',
            title: '',
          },
        ],
      },
    ],
  },
  {
    key: 'superMarket',
    title: 'کالاهای سوپرمارکتی',
    icon: '#fresh',
    categories: [
      {
        key: '',
        title: '',
        subCategories: [
          {
            key: '',
            title: '',
          },
        ],
      },
    ],
  },
  {
    key: 'health',
    title: 'زیبایی و سلامت',
    icon: '#beauty',
    categories: [
      {
        key: '',
        title: '',
        subCategories: [
          {
            key: '',
            title: '',
          },
        ],
      },
    ],
  },
  {
    key: 'homeKitchen',
    title: 'خانه و آشپزخانه',
    icon: '#homeKitchen',
    categories: [
      {
        key: '',
        title: '',
        subCategories: [
          {
            key: '',
            title: '',
          },
        ],
      },
    ],
  },
  {
    key: 'book',
    title: 'کتاب، لوازم تحریر و هنر',
    icon: '#fresh',
    categories: [
      {
        key: '',
        title: '',
        subCategories: [
          {
            key: '',
            title: '',
          },
        ],
      },
    ],
  },
  {
    key: 'sportOutdoor',
    title: 'ورزش و سفر',
    icon: '#sportOutdoor',
    categories: [
      {
        key: '',
        title: '',
        subCategories: [
          {
            key: '',
            title: '',
          },
        ],
      },
    ],
  },
  {
    key: 'nativeBusiness',
    title: 'محصولات بومی و محلی',
    icon: '#nativeBusiness',
    categories: [],
  },
]);
const items = ref(dummyData);
const mainCategory = computed(() => {
  return items.value[megaMenuMainCategoryIndex.value];
});
</script>