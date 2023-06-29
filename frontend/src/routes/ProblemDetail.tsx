import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query'
import { getProblembyId } from '../api/problems';

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
    const { data } = useQuery(problemDetailQuery(params.problemId))

    return (
        <div>
            <p>{JSON.stringify(data)}</p>
            <CodeMirror
                value={"das"}
                theme={okaidia}
                extensions={[javascript()]}
            />
        </div >
    )
}

export default ProblemDetail