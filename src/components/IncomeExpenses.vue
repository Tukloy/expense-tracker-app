<script setup>
import { defineProps } from 'vue'

const props = defineProps(['income', 'expenses'])
</script>
<template>
    <div class="flex px-20 text-sm py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div class="pr-8 border-r border-gray">
            <label class="block text-center font-semibold">
                INCOME
            </label>
            <label class="text-center font-medium text-green-500">
                +${{ props.income }}
            </label>
        </div>
        <div class="pl-8">
            <label class="block text-center font-semibold">
                EXPENSE
            </label>
            <label class="text-center font-medium text-red-500">
                ${{ props.expenses }}
            </label>
        </div>
    </div>
</template>