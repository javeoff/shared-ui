import { Table } from "../Table"

const columns = [
	{
		title: 'First Name',
		accessor: 'firstName',
	},
	{
		title: 'Last Name',
		accessor: 'lastName',
	}
]

const data = [
	{
		firstName: 'Mark',
		lastName: 'Otto',
	}
]

export const TableExample = () => {
	return (
		<Table
			columns={columns}
			data={data}
		/>
	)
}
