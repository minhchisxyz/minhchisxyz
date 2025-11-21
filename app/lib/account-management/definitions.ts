export type YearTotal = {
  year: number,
  total: number
}

export type MonthTotal = {
  month: number,
  total: number
}

export type Transaction = {
  id: number,
  date: Date,
  description: string,
  amount: number
}

export type GroupedTransactions = {
  date: Date,
  _sum: { amount: number | null }
}

export type CurrencyRate = {
  date: Date,
  rate: number
}
