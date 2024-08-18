<script setup lang="ts">
    import MailIcon from './icons/MailIcon.vue';
</script>

<template>
    <div>
        <a class="border justify-center bg-blue-gradient m-auto w-72 border-white rounded-full flex text-white items-center" href="mailto:teste@gmail.com">{{ $t('contact')}}
            <MailIcon/>
        </a>
    </div>
</template>