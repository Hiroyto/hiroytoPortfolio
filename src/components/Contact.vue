<script setup lang="ts">
    import MailIcon from './icons/MailIcon.vue';
</script>

<template>
    <div class="justify-center flex">
        <a class="mb-6 justify-center bg-blue-gradient w-72 md:h-[60px] text-xl h-18 border-white rounded-full flex text-white items-center" href="mailto:oieee@gmail.com">{{ $t('contact')}}
            <MailIcon/>
        </a>
    </div>
</template>