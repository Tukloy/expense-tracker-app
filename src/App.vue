<script setup>
import Header from '@/components/Header.vue'
import Balance from '@/components/Balance.vue'
import IncomeExpenses from '@/components/IncomeExpenses.vue'
import TransactionList from '@/components/TransactionList.vue'
import AddTransaction from '@/components/AddTransaction.vue'
import { useToast } from 'vue-toastification'
import { reactive, computed, onMounted } from 'vue'

const toast = useToast()
const state = reactive({
  transactions: []
})
const total = computed(() => {
  return state.transactions.reduce((index, transaction) => {
    return index + transaction.amount;
  }, 0)
})

const income = computed(() => {
  return state.transactions.filter((transaction) => transaction.amount > 0).reduce((index, transaction) => {
    return index + transaction.amount;
  }, 0).toFixed(2)
})

const expenses = computed(() => {
  return state.transactions.filter((transaction) => transaction.amount < 0).reduce((index, transaction) => {
    return index + transaction.amount;
  }, 0).toFixed(2)
})

const handleTransactionSubmitted = (transactionData) => {
  state.transactions.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  })
  saveTransactionsToLocalStorage();
  toast.success('Transaction added successfully')
}

const handleTransactionDelete = (id) => {
  state.transactions = state.transactions.filter((transaction) => transaction.id !== id);
  saveTransactionsToLocalStorage();
  toast.success('Transaction Deleted Successfully')

}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
}

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(state.transactions))
}

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    state.transactions = savedTransactions
  }
})

</script>
<template>
  <div class="bg-pink h-screen flex justify-center">
    <div class="flex justify-center py-9 h[100vh] items-center">
      <div class="bg-white flex flex-col p-6 rounded-lg text-black shadow-xl">
        <Header />
        <div class="container mt-4 flex flex-col gap-y-4">
          <Balance :total="total" />
          <IncomeExpenses :income="income" :expenses="expenses" />
          <TransactionList :transactions="state.transactions" @transactionDelete="handleTransactionDelete" />
          <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
        </div>
      </div>
    </div>
  </div>
</template>