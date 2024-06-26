import User from "@/models/User";
import { ConnectToDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


ConnectToDB();


export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User with this email does not exist" }, { status: 404 });
        }

        // check if password is correct
        const validPassword = await bcrypt.compare(password, user.hashedPassword);
        if (!validPassword) {
            return NextResponse.json({ error: "Invlid password" }, { status: 400 })
        }

        // create token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        // create a token with expiration 1d
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET || "", { expiresIn: "1d" });

        // Create a JSON response indicating successful login
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        }, { status: 200 });

        // Set the token as an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
} 