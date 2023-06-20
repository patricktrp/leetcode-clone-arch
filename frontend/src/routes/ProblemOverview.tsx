import { Link } from 'react-router-dom'
import mockData from '../assets/MOCK_DATA.json'
import { useMemo } from 'react'

const ProblemOverview = (): JSX.Element => {
    const data = useMemo(() => mockData, [])
    return (
        <div>
            {data.map(problem => {
                return <div><Link to={problem.id}>{problem.id}</Link></div>
            })}
        </div>
    )
}

export default ProblemOverview