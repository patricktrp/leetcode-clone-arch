import { Link } from 'react-router-dom'
import mockData from '../assets/MOCK_DATA.json'
import { useMemo } from 'react'
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';

type Problem = {
    id: string,
    difficulty: string,
    categories: string[]
}

const ProblemOverview = (): JSX.Element => {
    const data = useMemo(() => mockData, [])
    const columnHelper = createColumnHelper<Problem>()
    const columns = [
        columnHelper.accessor('id', {
            header: 'Problem',
            cell: x => <Link to={x.row.original.id}>{JSON.stringify(x.row.original.id)}</Link>
        }),
        columnHelper.accessor('difficulty', {
            header: 'Difficulty'
        }),
        columnHelper.accessor('categories', {
            header: 'Categories'
        })
        // columnHelper.accessor('age', {
        //     header: () => 'Age',
        //     cell: info => info.renderValue(),
        //     footer: info => info.column.id,
        // }),
        // columnHelper.accessor('visits', {
        //     header: () => <span>Visits</span>,
        //     footer: info => info.column.id,
        // }),
        // columnHelper.accessor('status', {
        //     header: 'Status',
        //     footer: info => info.column.id,
        // }),
        // columnHelper.accessor('progress', {
        //     header: 'Profile Progress',
        //     footer: info => info.column.id,
        // }),
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

export default ProblemOverview