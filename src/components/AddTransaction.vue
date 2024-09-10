<script setup>
import { reactive, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const form = reactive({
    text: '',
    amount: null
})

const emit = defineEmits(['transactionSubmitted'])

const addTransaction = () => {
    if (!form.text || !form.amount) {
        toast.error('Both fields must be filled')
        return;
    }

    const transactionData = {
        text: form.text,
        amount: parseFloat(form.amount)
    }

    emit('transactionSubmitted', transactionData)
    form.text = ''
    form.amount = ''
}
</script>
<template>
    <form @submit.prevent="addTransaction()" class="flex flex-col text-sm">
        <label class="text-center text-lg font-semibold pb-1 border-b border-gray mb-2">Add new transaction</label>
        <label class="font-medium mb-1">Provide Transaction Name</label>
        <input v-model="form.text" class="bg-gray py-1 px-2 outline-none border border-gray focus:border-violet mb-4"
            type="text">
        <label class="font-medium">Amount</label>
        <label class="text-xs mb-2">(negative = expense | positive = income)</label>
        <input v-model="form.amount" class="bg-gray py-1 px-2 outline-none border border-gray focus:border-violet mb-4"
            type="text">
        <button type="submit"
            class="bg-violet py-2 text-white font-semibold rounded hover:bg-opacity-80 linear duration-300">
            Add Transaction
        </button>
    </form>
</template>