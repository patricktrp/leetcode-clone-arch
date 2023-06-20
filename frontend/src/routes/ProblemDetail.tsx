import { useParams } from "react-router"

const ProblemDetail = (): JSX.Element => {
    const { problemId } = useParams();

    return (
        <div>
            {problemId}
        </div>
    )
}

export default ProblemDetail