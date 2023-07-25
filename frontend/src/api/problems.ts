import axios from 'axios';

export type ProblemOverview = {
    id: string,
    difficulty: string
}

export type Problem = {
    id: string,
    difficulty: string,
    prompt: {
        description: string[],
        sampleInput: string[],
        sampleOutput: string[],
        hints: string[],
        optimalSpaceTime: string
    }
}

export const getProblems = async (): Promise<ProblemOverview[]> => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/problems`)
    return res.data;
}

export const getProblembyId = async (problemId: string): Promise<Problem> => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/problems/${problemId}`)
    return res.data
}