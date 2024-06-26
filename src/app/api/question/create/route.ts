import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    NextResponse.json({message: "Create a new question"})
}