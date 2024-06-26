import User from '@/models/User';
import { ConnectToDB } from '@/utils/db';
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server"

export const getDataFromToken = (request: NextRequest) => {
    try {
        // Retrieve the token from the cookies
        const token = request.cookies.get("token")?.value || '';

        // Verify and decode the token using the secret key
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);

        // Return the user ID from the decoded token
        return decodedToken.id;

    } catch (error: any) {
        console.log(`Error occured in getDataFromToken: ${error.message}`);
    }
}

ConnectToDB();

export async function GET(request:NextRequest) {
    try {
        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);

        // Find the user in the database based on the user ID
        const user = await User.findOne({_id: userId}).select("-hashedPassword");
        if (!user) {
            return NextResponse.json({ error: "User not found"}, { status: 404 });
        }
        return NextResponse.json({
            found: true,
            data: user
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}