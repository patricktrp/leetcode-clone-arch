import { javascript } from "@codemirror/lang-javascript";
import { QueryClient, useQuery } from '@tanstack/react-query';
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from '@uiw/react-codemirror';
import Collapsible from "react-collapsible";
import { ResizableBox } from "react-resizable";
import { useParams } from 'react-router';
import { getProblembyId } from '../api/problems';
import { mapProblemIdToString } from "../utils/string-utils";
import styles from './ProblemDetailPage.module.css';

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
    const difficulty = problem?.difficulty.toLowerCase()

    if (isLoading) {
        return <div>no data</div>
    }

    if (error) {
        return <div>error</div>
    }

    return (
        <div style={{ display: 'flex' }}>
            <ResizableBox className={styles['prompt-container']}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ margin: '10px 10px 10px 0px' }}>{problemName}</h2>
                    <div title={difficulty} className={`${styles['difficulty']} ${styles[difficulty]} `}></div>
                </div>
                {problem?.prompt.description.map((paragraph: string) => <p style={{ maxWidth: '90%' }}>{paragraph}</p>)}
                <h3>Sample Input</h3>
                {problem?.prompt.sampleInput.map((input: string) => <code style={{ display: 'block' }}>{input}</code>)}
                <h3>Sample Output</h3>
                {problem?.prompt.sampleOutput.map((output: string) => <code style={{ display: 'block' }}>{output}</code>)}
                <br />
                {problem?.prompt.hints.map((hint: string, idx: number) =>
                    <Collapsible trigger={`Hint ${idx + 1}`}>
                        <p>{hint}</p>
                    </Collapsible>
                )}
                <Collapsible trigger={"Optimal Time and Space Complexity"}>
                    <p>{problem?.prompt.optimalSpaceTime}</p>
                </Collapsible>
            </ResizableBox>

            <ResizableBox className={styles['prompt-container']} style={{ flex: 1 }}>
                <CodeMirror
                    value={problem?.difficulty}
                    theme={okaidia}
                    extensions={[javascript()]}
                />
            </ResizableBox>
        </div >
    )
}

export default ProblemDetail