import { QueryClient, useQuery } from '@tanstack/react-query';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { ProblemOverview, getProblems } from '../api/problems';
import { mapProblemIdToHeading } from '../utils/string-utils';

const problemOverviewQuery = () => ({
    queryKey: ['problems'],
    queryFn: async () => {
        const problems = await getProblems()
        return problems
    },
})

export const loader = (queryClient: QueryClient) =>
    async () => {
        const query = problemOverviewQuery()
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        )
    }

const ProblemOverviewPage = (): JSX.Element => {
    const { data } = useQuery(problemOverviewQuery())

    const columnHelper = createColumnHelper<ProblemOverview>()
    const columns = [
        columnHelper.accessor('id', {
            header: 'Problem',
            cell: x => <Link to={x.row.original.id}>{mapProblemIdToHeading(x.row.original.id)}</Link>
        }),
        columnHelper.accessor('difficulty', {
            header: 'Difficulty',
        })
    ]

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProblemOverviewPage