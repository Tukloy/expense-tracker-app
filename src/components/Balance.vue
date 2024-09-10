<script setup>
import { defineProps } from 'vue'

const props = defineProps(['total'])
</script>
<template>
    <div>
        <label class="block text-md font-semibold">YOUR BALANCE</label>
        <label class="block text-xl font-bold">${{ props.total }}</label>
    </div>
</template>