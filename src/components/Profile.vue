<template>
    <div class="flex flex-col space-y-6 w-full md:flex-row-reverse md:justify-center md:items-center">
        <div class="space-y-2 md:flex md:flex-col md:flex-grow md:items-center">
            <h1 class="text-white text-3xl md:text-5xl font-bold">{{ $t('profile.presentation')}}</h1>
            <h2 class="text-light-gray italic font-thin text-xl md:text-2xl">{{ $t('profile.description')}}</h2>
        </div>
        <div class="flex flex-col items-center md:mr-8">
            <img class="w-60 h-60 rounded-full border border-white rotate-[-360deg] transtition duration-1000 hover:rotate-[360deg]" src="../assets/profile.jpg" alt="image description">
        </div>
    </div>
</template>