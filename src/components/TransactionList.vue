<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['transactions'])
const emit = defineEmits(['transactionDelete'])

const deleteTransaction = (id) => {
    emit('transactionDelete', id)
}
</script>
<template>
    <div class="flex flex-col mb-1">
        <label class="text-lg font-semibold mb-1 border-b pb-2 border-gray">History</label>
        <div class="h-32 overflow-y-auto no-scrollbar px-2 pb-2">
            <div v-for="transaction in props.transactions" :key="transaction.id"
                :class="['shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-1 px-2 text-sm flex justify-between mt-2 relative group border-r-4  translate-trasform hover:translate-x-4 linear duration-300', transaction.amount > 0 ? 'border-green-500' : 'border-red-500']">
                <label>{{ transaction.text }}</label>
                <label>${{ transaction.amount }}</label>
                <button @click="deleteTransaction(transaction.id)" type="button"
                    class="absolute -left-5 bg-red-500 p-1 rounded-full font-semibold pi pi-times text-xs hover:bg-opacity-80 ease-out duration-300 opacity-0 group-hover:opacity-100 text-white"></button>
            </div>
        </div>
    </div>
</template>