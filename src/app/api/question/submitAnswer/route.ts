import Question from "@/models/Question";
import SolvedQuestions from "@/models/SolvedQuestions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const submission = await request.json();

        if (!submission.userId) {
            return NextResponse.json({ login: false, error: "Please login first" }, { status: 420 });
        }
    
        const question = await Question.findOne({ _id: submission.questionId });
        if (!question) {
            return NextResponse.json({ error: "Question not found" }, { status: 404 });
        }

        const newSubmission = new SolvedQuestions({
            userId: submission.userId,
            questionId: submission.questionId,
            answer: submission.answer,
        });

        newSubmission.save();
    
        if(question.correctAnswer === submission.answer) {
            return NextResponse.json({ message: "Correct Answer" }, { status: 201 });
        } else {
            return NextResponse.json({ 
                message: "Wrong Answer", 
                correctAnswer: question.correctAnswer 
            }, { status: 201 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Error submitting response"}, { status: 400 });
    }
}