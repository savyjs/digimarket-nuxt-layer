<template>
  <div class='gap-y-3 mx-1 py-5'>
    <div class='w-full flex gap-3 py-2'>
      <div class='gap-1 flex items-center'>
        <div>
          <svg class='icon-small'>
            <use href='#time'/>
          </svg>
        </div>
        <div class='text-[14px]'>انتخاب زمان ارسال</div>
      </div>
      <div class='gap-1 flex items-center'>
        <div>
          <svg class='icon-small fill-purple-500'>
            <use href='#plus'/>
          </svg>
        </div>
        <div class='text-[12px]'>بازه‌های دارای ظرفیت اختصاصی برای اعضای دیجی‌پلاس
        </div>
      </div>
    </div>
    <div class='w-full card-primary time-table p-0'>
      <div class='pt-5'>
        <ul
            class='nav nav-tabs border-b-2 border-gray-200 pb-0 p-0 md:items-stretch md:items-end flex flex-col md:flex-row flex-wrap list-none px-5 mb-4 '
            id='tabs-tab'
            role='tablist'>
          <li class='nav-item' role='presentation'>
            <a href='#tabs-home' class='nav-link active' id='tabs-home-tab'
               data-bs-toggle='pill'
               data-bs-target='#tabs-home' role='tab' aria-controls='tabs-home'
               aria-selected='true'>
              <div>
                <p>جمعه</p>
                <p>۲۳</p>
              </div>
            </a>
          </li>
          <li class='nav-item' role='presentation'>
            <a href='#tabs-profile' class='nav-link' id='tabs-profile-tab'
               data-bs-toggle='pill'
               data-bs-target='#tabs-profile' role='tab'
               aria-controls='tabs-profile' aria-selected='false'>
              <div>
                <p>شنبه</p>
                <p>۲۵</p>
              </div>
            </a>
          </li>
          <li class='nav-item' role='presentation'>
            <a href='#tabs-messages' class='nav-link' id='tabs-messages-tab'
               data-bs-toggle='pill'
               data-bs-target='#tabs-messages' role='tab'
               aria-controls='tabs-messages' aria-selected='false'>
              <div>
                <p>یکشنبه</p>
                <p>۲۶</p>
              </div>
            </a>
          </li>
          <li class='nav-item' role='presentation'>
            <a href='#tabs-contact' class='nav-link' id='tabs-contact-tab'
               data-bs-toggle='pill'
               data-bs-target='#tabs-contact' role='tab'
               aria-controls='tabs-contact' aria-selected='false'>
              <div>
                <p>دوشنبه</p>
                <p>۲۷</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class='tab-content p-5' id='tabs-tabContent'>
        <div class='tab-pane fade show active' id='tabs-home' role='tabpanel'
             aria-labelledby='tabs-home-tab'>
          <ul class='options flex flex-col justify-center'>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex gap-3 grow'>
                <input disabled id='country-option-2' type='radio'
                       name='time' value='1'
                       class='radio-option'
                       aria-labelledby='country-option-2'
                       aria-describedby='country-option-2'/>
                <label htmlFor='country-option-2'
                       class='block ml-2 text-sm font-medium text-gray-300 dark:text-gray-300'>
                  ساعت ۹ تا ۱۲
                </label>
              </div>
              <div>
                <span class='badge-warning text-[11px] text-regular px-5 py-1'>تکمیل</span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100 items-center'>
              <div class='flex gap-3 grow'>
                <input id='country-option-3' type='radio' name='time'
                       value='3'
                       class='radio-option'
                       aria-labelledby='country-option-3'
                       aria-describedby='country-option-3'/>
                <label htmlFor='country-option-3'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۲ تا ۱۵
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-4' type='radio' name='time'
                       value='4'
                       class='radio-option'
                       aria-labelledby='country-option-4'
                       aria-describedby='country-option-4'/>
                <label htmlFor='country-option-4'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۵ تا ۱۸
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-5' type='radio' name='time'
                       value='5'
                       class='radio-option'
                       aria-labelledby='country-option-5'
                       aria-describedby='country-option-5'/>
                <label htmlFor='country-option-5'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۸ تا ۲۱
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class='tab-pane fade' id='tabs-profile' role='tabpanel'
             aria-labelledby='tabs-profile-tab'>
          <ul class='options flex flex-col justify-center'>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex gap-3 grow'>
                <input disabled id='country-option-2' type='radio'
                       name='time' value='1'
                       class='radio-option'
                       aria-labelledby='country-option-2'
                       aria-describedby='country-option-2'/>
                <label htmlFor='country-option-2'
                       class='block ml-2 text-sm font-medium text-gray-300 dark:text-gray-300'>
                  ساعت ۹ تا ۱۲
                </label>
              </div>
              <div>
                <span class='badge-warning text-[11px] text-regular px-5 py-1'>تکمیل</span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100 items-center'>
              <div class='flex gap-3 grow'>
                <input id='country-option-3' type='radio' name='time'
                       value='3'
                       class='radio-option'
                       aria-labelledby='country-option-3'
                       aria-describedby='country-option-3'/>
                <label htmlFor='country-option-3'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۲ تا ۱۵
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-4' type='radio' name='time'
                       value='4'
                       class='radio-option'
                       aria-labelledby='country-option-4'
                       aria-describedby='country-option-4'/>
                <label htmlFor='country-option-4'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۵ تا ۱۸
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-5' type='radio' name='time'
                       value='5'
                       class='radio-option'
                       aria-labelledby='country-option-5'
                       aria-describedby='country-option-5'/>
                <label htmlFor='country-option-5'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۸ تا ۲۱
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class='tab-pane fade' id='tabs-messages' role='tabpanel'
             aria-labelledby='tabs-profile-tab'>
          <ul class='options flex flex-col justify-center'>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex gap-3 grow'>
                <input disabled id='country-option-2' type='radio'
                       name='time' value='1'
                       class='radio-option'
                       aria-labelledby='country-option-2'
                       aria-describedby='country-option-2'/>
                <label htmlFor='country-option-2'
                       class='block ml-2 text-sm font-medium text-gray-300 dark:text-gray-300'>
                  ساعت ۹ تا ۱۲
                </label>
              </div>
              <div>
                <span class='badge-warning text-[11px] text-regular px-5 py-1'>تکمیل</span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100 items-center'>
              <div class='flex gap-3 grow'>
                <input id='country-option-3' type='radio' name='time'
                       value='3'
                       class='radio-option'
                       aria-labelledby='country-option-3'
                       aria-describedby='country-option-3'/>
                <label htmlFor='country-option-3'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۲ تا ۱۵
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-4' type='radio' name='time'
                       value='4'
                       class='radio-option'
                       aria-labelledby='country-option-4'
                       aria-describedby='country-option-4'/>
                <label htmlFor='country-option-4'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۵ تا ۱۸
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-5' type='radio' name='time'
                       value='5'
                       class='radio-option'
                       aria-labelledby='country-option-5'
                       aria-describedby='country-option-5'/>
                <label htmlFor='country-option-5'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۸ تا ۲۱
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class='tab-pane fade' id='tabs-contact' role='tabpanel'
             aria-labelledby='tabs-contact-tab'>
          <ul class='options flex flex-col justify-center'>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex gap-3 grow'>
                <input disabled id='country-option-2' type='radio'
                       name='time' value='1'
                       class='radio-option'
                       aria-labelledby='country-option-2'
                       aria-describedby='country-option-2'/>
                <label htmlFor='country-option-2'
                       class='block ml-2 text-sm font-medium text-gray-300 dark:text-gray-300'>
                  ساعت ۹ تا ۱۲
                </label>
              </div>
              <div>
                <span class='badge-warning text-[11px] text-regular px-5 py-1'>تکمیل</span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100 items-center'>
              <div class='flex gap-3 grow'>
                <input id='country-option-3' type='radio' name='time'
                       value='3'
                       class='radio-option'
                       aria-labelledby='country-option-3'
                       aria-describedby='country-option-3'/>
                <label htmlFor='country-option-3'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۲ تا ۱۵
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5 border-b border-gray-100'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-4' type='radio' name='time'
                       value='4'
                       class='radio-option'
                       aria-labelledby='country-option-4'
                       aria-describedby='country-option-4'/>
                <label htmlFor='country-option-4'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۵ تا ۱۸
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
            <li class='flex items-center py-5'>
              <div class='flex items-center gap-3 grow'>
                <input id='country-option-5' type='radio' name='time'
                       value='5'
                       class='radio-option'
                       aria-labelledby='country-option-5'
                       aria-describedby='country-option-5'/>
                <label htmlFor='country-option-5'
                       class='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  ساعت ۱۸ تا ۲۱
                </label>
              </div>
              <div class='flex items-center gap-2 text-[11px] text-gray-600'>
                <span>اختصاصی دیجی پلاس</span>
                <span>
                  <svg class='icon-small icon-gray fill-purple-600'>
                    <use href='#plus'/>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>