// Returning "NextResponse" instead of "New Response" and returning json file instead of string

import { NextResponse } from "next/server";

export async function GET(Request) {
  return NextResponse.json("Goodbye now 👋 !");
}
