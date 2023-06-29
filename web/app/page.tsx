"use client"

import { Button } from "@/components/core"
export default function Home() {
  return (
    <main>
      <div className="bg-yellow-100 flex items-center min-h-screen w-full border border-blue-500">
        <div className="flex gap-20 flex-col w-full h-full items-center justify-center">
          <span className="text-3xl">Sample Playground</span>
          <Button
            // try passing in Tailwind CSS classes here to customize the Button component i.e. text-green-500
            className=""
            // you can pass in a custom on click function here
            onClick={() => alert("hi")}
          >
            {/* Try inserting different content here -- this is what gets passed over as the children prop */}
            <p>Click me!</p>
          </Button>
        </div>
      </div>
    </main>
  )
}
