import { NextRequest, NextResponse } from "next/server"

const fs = require("fs")
const path = require("path")
const client = require("@sendgrid/client")

export async function PUT(request: NextRequest) {
  const data = await request.json()

  try {
    client.setApiKey(process.env.SENDGRID_API_KEY)

    // https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact
    const response = await client.request({
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body: data,
      // headers: {
      // 	Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
      // }
    })

    return NextResponse.json({
      body: response,
      message: "This email has been successfully subscribed",
    })
  } catch (error: any) {
    console.log("error in route.ts subscribe")
    console.error(error.response.body.errors)
    return NextResponse.json({
      error,
      message: "This email subscription has failed",
    })
  }
}
