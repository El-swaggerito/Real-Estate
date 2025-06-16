import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <Input type="password" id="password" required />
            </div>
            <Button className="w-full">Log In</Button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
