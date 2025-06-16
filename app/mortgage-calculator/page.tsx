"use client"
import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectGroup,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectLabel,
//   SelectItem,
//   SelectSeparator,
//   SelectScrollUpButton,
//   SelectScrollDownButton
// } from '@/components/ui/select'

export default function MortgageCalculator() {
  const [homeValue, setHomeValue] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(3.5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const calculateMortgage = () => {
    const principal = homeValue - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const mortgage =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    setMonthlyPayment(mortgage)
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-amber-900">Mortgage Calculator</h1>
          <div className="space-y-6 mb-8">
            <div>
              <label className="block mb-2">Home Value</label>
              <Input type="number" value={homeValue} onChange={(e) => setHomeValue(Number(e.target.value))} />
            </div>
            <div>
              <label className="block mb-2">Down Payment</label>
              <Input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
            </div>
            <div>
              <label className="block mb-2">Loan Term (years)</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Interest Rate (%)</label>
              <Input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
            <Button onClick={calculateMortgage} className="w-full bg-amber-500 hover:bg-amber-600 text-white">
              Calculate
            </Button>
          </div>
          {monthlyPayment > 0 && (
            <div className="bg-amber-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2 text-amber-900">Estimated Monthly Payment</h2>
              <p className="text-3xl font-bold text-amber-700">${monthlyPayment.toFixed(2)}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
