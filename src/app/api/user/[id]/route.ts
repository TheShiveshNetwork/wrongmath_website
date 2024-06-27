import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request:NextRequest, 
    { params }: { params: { id: string } }
) {
    const { id:email } = params;

    const user = await User.findOne({email})
                        .select("-hashedPassword");

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 201 });
}