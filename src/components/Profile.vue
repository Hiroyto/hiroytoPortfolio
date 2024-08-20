<template>
    <!-- <div class="flex items-center">
        <img class="w-48 h-48 rounded-full border border-white ml-14 rotate-[-360deg] transtition duration-1000 hover:rotate-[360deg]" src="../assets/profile.jpg" alt="image description">
        <div class="text-white m-auto">
            <h1 class="text-4xl font-bold">{{ $t('profile.presentation')}}</h1>
            <h2 class="text-center font-thin text-lg">{{ $t('profile.description')}}</h2>
        </div>
    </div> -->
    <div class="flex flex-col space-y-6 w-full md:w-[60vw] md:flex-row-reverse">
        <div class="space-y-2">
            <h1 class="text-white text-3xl font-bold">{{ $t('profile.presentation')}}</h1>
            <h2 class="text-light-gray italic font-thin text-xl">{{ $t('profile.description')}}</h2>
        </div>
        <img class="m-auto w-60 h-60 rounded-full border border-white rotate-[-360deg] transtition duration-1000 hover:rotate-[360deg]" src="../assets/profile.jpg" alt="image description">
    </div>
</template>