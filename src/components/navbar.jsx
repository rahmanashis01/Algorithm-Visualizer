import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home } from 'lucide-react'
import ThemeToggle from './theme-toggle'

export default function Navbar(props) {
  return (
    <nav className="nav-glass py-1 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">{props.title}</Link>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="lg" asChild>
          <Link href="/">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <Link href="/about">About</Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}

