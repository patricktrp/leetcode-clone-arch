import axios from 'axios'

export const getProblems = async () => {
    const res = await axios.get("http://localhost:8080/api/v1/problems")
    return res.data;
}

export const getProblembyId = async (problemId: string) => {
    const res = await axios.get(`http://localhost:8080/api/v1/problems/${problemId}`)
    return res.data
}