import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"

export default function UserProfile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-8">
            <Avatar className="h-24 w-24 mr-6">
              <img src="https://via.placeholder.com/150" alt="User Avatar" />
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Saved Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add saved property cards here */}
              <PropertyCard />
              <PropertyCard />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Receive email notifications
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Receive SMS notifications
                </label>
              </div>
              <div>
                <Button>Update Preferences</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PropertyCard() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src="https://via.placeholder.com/300x200" alt="Property" className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Beautiful House</h3>
        <p className="text-gray-600 mb-2">123 Main St, City, State</p>
        <p className="text-green-600 font-bold mb-2">$350,000</p>
        <div className="flex justify-between">
          <Button variant="outline" size="sm">
            <Link href="/property/1">View Details</Link>
          </Button>
          <Button variant="outline" size="sm">
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
