'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025)

  useEffect(() => {
    // Set the current year on client side to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="footer-glass py-6 px-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {currentYear} H.M. Ashis Rahman. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <Link 
            href="https://github.com/rahmanashis01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            aria-label="Visit rahmanashis01 on GitHub"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm">Follow me</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

