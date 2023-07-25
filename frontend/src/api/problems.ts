import axios from 'axios';

export type ProblemOverview = {
    id: string,
    difficulty: string
}

export type Problem = {
    id: string,
    difficulty: string
}

export const getProblems = async (): Promise<ProblemOverview[]> => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/problems`)
    return res.data;
}

export const getProblembyId = async (problemId: string) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/problems/${problemId}`)
    return res.data
}