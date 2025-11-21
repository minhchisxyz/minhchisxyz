
import {CurrencyRate} from "@/app/lib/account-management/definitions";
import prisma from "@/app/lib/account-management/prisma";

export async function saveRate(rate: number) {
  try {
    console.log("Saving rate...")
    const date = new Date()
    date.setUTCHours(0, 0, 0, 0)
    return await prisma.currencyExchangeRate.create({
      data: {
        date: date,
        rate: rate
      }
    })
  } catch (error) {
    console.log('Database Error:', error);
    throw new Error('Failed to save rate.');
  }
}

export async function fetchRate() {
  try {
    console.log("Fetching rate...");
    const date = new Date()
    date.setUTCHours(0, 0, 0, 0)
    return await prisma.currencyExchangeRate.findFirst({
      where: {
        date: date
      }
    })
  } catch (error) {
    console.log('Database Error:', error);
    throw new Error('Failed to fetch rate.');
  }
}

export async function fetchBalance() {
  try {
    console.log("Fetching balance...");
    return (await prisma.transaction.aggregate({
      _sum: {
        amount: true
      }
    }))._sum.amount ?? 0
  } catch (error) {
    console.log('Database Error:', error);
    throw new Error('Failed to fetch balance.');
  }
}

export async function fetchAllRates() {
  try {
    console.log("Fetching all rates...");
    return await prisma.currencyExchangeRate.findMany({
      select: {
        date: true,
        rate: true
      }
    }) as CurrencyRate[]
  } catch (error) {
    console.log('Database Error:', error);
    throw new Error('Failed to fetch all rates.');
  }
}