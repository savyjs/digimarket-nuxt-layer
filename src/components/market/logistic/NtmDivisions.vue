<template>
    <div class="fixed top-32 z-50 h-full w-96 md:h-auto">
        <div class="relative rounded-lg bg-white p-3 shadow dark:bg-gray-700">
            <div class="flex items-center justify-between border-b border-gray-200 pt-2 pb-3 text-sm">
                <span class="text-h5 color-900 font-bold">انتخاب شهر</span>
                <button onClick={props.onConfirm}>
                    <svg class="h-5 w-5" fill="currentColor">
                        <use href="#close"></use>
                    </svg>
                </button>
            </div>
            <div class="pt-3">
                <span class="text-sm text-sky-400">مکان یابی خودکار</span>
            </div>
            <div class="pt-3">
                <Provinces/>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>