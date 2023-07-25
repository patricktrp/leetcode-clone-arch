import { javascript } from "@codemirror/lang-javascript";
import { QueryClient, useQuery } from '@tanstack/react-query';
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from '@uiw/react-codemirror';
import { useParams } from 'react-router';
import { getProblembyId } from '../api/problems';
import { mapProblemIdToString } from "../utils/string-utils";

const problemDetailQuery = (problemId: string) => ({
    queryKey: ['problems', problemId],
    queryFn: async () => {
        const problem = await getProblembyId(problemId)
        return problem
    },
})

export const loader = (queryClient: QueryClient) =>
    async ({ params }) => {
        const query = problemDetailQuery(params.problemId)
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        )
    }

const ProblemDetail = (): JSX.Element => {
    const params = useParams()
    const { data: problem, isLoading, error } = useQuery(problemDetailQuery(params.problemId))
    const problemName = mapProblemIdToString(problem.id)

    if (isLoading) {
        return <div>no data</div>
    }

    if (error) {
        return <div>error</div>
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '15px' }}>
                <h1>{problemName}</h1>
                <div>{problem?.difficulty}</div>
                {problem?.prompt.description.map((paragraph: string) => <p>{paragraph}</p>)}
                <h3>Sample Input</h3>
                {problem?.prompt.sampleInput.map((input: string) => <p>{input}</p>)}
                <h3>Sample Output</h3>
                {problem?.prompt.sampleOutput.map((output: string) => <p>{output}</p>)}
                {problem?.prompt.hints.map((hint: string, idx: number) =>
                    <div>
                        <h3>Hint {idx + 1}</h3>
                        <p>{hint}</p>
                    </div>
                )}
                <h3>Optimal Time and Space Complexity</h3>
                <p>{problem?.prompt.optimalSpaceTime}</p>
            </div>

            <div style={{ flex: 1 }}>
                <CodeMirror
                    value={problem?.difficulty}
                    theme={okaidia}
                    extensions={[javascript()]}
                />
            </div>
        </div >
    )
}

export default ProblemDetail