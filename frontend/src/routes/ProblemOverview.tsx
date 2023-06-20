import { Link } from 'react-router-dom'

const MOCK_PROBLEMS = [
    {
        "id": "two-sum",
        "difficulty": "easy",
        "categories": ["array"]
    },
    {
        "id": "binary-search",
        "difficulty": "easy",
        "categories": ["array"]
    },
]

const ProblemOverview = (): JSX.Element => {
    return (
        <div>
            {MOCK_PROBLEMS.map(problem => {
                return <div><Link to={problem.id}>{problem.id}</Link></div>
            })}
        </div>
    )
}

export default ProblemOverview