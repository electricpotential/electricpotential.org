"use client"

import { useState } from "react"

export const SubscriptionForm = () => {
  const [input, setInput] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.currentTarget
    const email = target.elements.namedItem("email") as HTMLInputElement

    const data = {
      contacts: [
        {
          email: email.value,
        },
      ],
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status)
      }

      const responseData = await response.json()
      console.log("subscription response:", responseData)
    } catch (error: any) {
      console.log("Error in submitting form subscription", error.message)
    }
  }

  return (
    <div className="flex flex-col gap-[16px] text-dark w-max">
      <span className="">Subscribe to our newsletter to stay up-to-date</span>
      <form onSubmit={handleSubmit} className="flex flex-row w-full">
        <input
          required
          id="email"
          type="email"
          name="email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-b border-black outline-none focus:border-electric-sky w-full"
          placeholder="Type in your email"
        ></input>
        <button
          className="w-[40px] bg-black text-white p-1"
          type="submit"
        >{`->`}</button>
      </form>
    </div>
  )
}
