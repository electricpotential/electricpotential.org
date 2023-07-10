"use client"

import { GoArrow } from "@/components/icons"
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
      // TODO: add some loading state UI
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
      alert(`${email.value} has been successfully subscribed`) // TODO: improve UI of confirmation message
    } catch (error: any) {
      console.log("Error in submitting form subscription", error.message)
      alert("Error in submitting form subscription")
    }
  }

  return (
    <div className="flex flex-col gap-[16px] text-dark w-max">
      <span className="mx-5">
        Subscribe to our newsletter to stay up-to-date ✨
      </span>
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
          className="font-sans flex items-center justify-center w-[26px] h-[26px] bg-black text-white p-1"
          type="submit"
        >
          <GoArrow className="w-2.5 fill-white" />
        </button>
      </form>
    </div>
  )
}
