import { colors, ZIndex } from "@shared/ui/common"
import { Dropdown } from "@shared/ui/features";
import { FC, ReactNode, Ref, useEffect, useState } from "react";
import styled, { css } from "styled-components"
import { Button } from "../../main";
import { Icon } from "../Icon/Icon";
import { Menu, MenuItem } from "../Menu/Menu";
import { filterUndefined } from "./utils/filterUndefined";
import { pushInto } from "./utils/pushInto";

export interface IColumn<Accessor extends string> {
	title: string;
	accessor: Accessor;
}

interface IProps<Accessor extends string = string> {
	initialActiveColumns?: IColumn<Accessor>[];
	columns: IColumn<Accessor>[]
	data: Record<Accessor, ReactNode>[];
	isToggleable?: boolean;
	onToggle?: (idx: number) => void;
	toggleActiveItemIdx?: number;
	onColumnsChange?: (columns: IColumn<string>[]) => void;
	itemRef: React.RefObject<HTMLElement>;
	isStickyHeader?: boolean;
}

export const Table: FC<IProps> = ({
	initialActiveColumns = [],
	columns,
	data,
	isToggleable,
	onToggle,
	toggleActiveItemIdx,
	onColumnsChange,
	itemRef,
	isStickyHeader = false,
}) => {
	const [openIdx, setOpenIdx] = useState<number | undefined>();
	const [columnsState, setColumnsState] = useState<IColumn<string>[]>([])
	const [activeColumns, setActiveColumns] = useState<IColumn<string>[]>(initialActiveColumns)
	useEffect(() => {
		setColumnsState(columns)
		if (!initialActiveColumns) {
			setActiveColumns(columns)
		}
	}, [columns])

	useEffect(() => {
		if (toggleActiveItemIdx) {
			setOpenIdx(toggleActiveItemIdx)
		}
	}, [toggleActiveItemIdx])

	if (!columnsState.length) {
		return null;
	}

	const toggleHandle = (idx: number) => {
		setOpenIdx(openIdx === idx ? undefined : idx);
		if (onToggle) {
			onToggle(idx);
		}
	}

	const toggleColumn = (column: IColumn<string>, idx: number) => {
		const newColumns = activeColumns.find((item) => item.accessor === column.accessor)
			? activeColumns.filter((item) => item.accessor !== column.accessor)
			: pushInto(activeColumns, column, idx)
		setActiveColumns(newColumns)

		if (onColumnsChange) {
			onColumnsChange(newColumns)
		}
	}

	const sortedActiveColumns = filterUndefined(columnsState.map((column) => {
		const isActive = !!activeColumns.find((item) => item.accessor === column.accessor);

		return isActive ? column : undefined
	}))

	return (
		<SWrapper>
			<SHeader isSticky={isStickyHeader}>
				{isToggleable && (
					<SHeaderColumn>
						<SOptions>
							<Dropdown
								content={({ toggle }) => (
									<div onClick={toggle}><Icon.Options size='sm' /></div>
								)}
								isAutoClose={true}
							>
								<SMenu>
									<Menu>
										{columnsState.map((column, idx) => (
											<MenuItem
												onClick={() => toggleColumn(column, idx)}
												isActive={!!activeColumns.find((item) => item.accessor === column.accessor)}
												withCheckbox={true}
											>{column.title}</MenuItem>
										))}
									</Menu>
								</SMenu>
							</Dropdown>
						</SOptions>
					</SHeaderColumn>
				)}
				{sortedActiveColumns.map((column) => (
					<SHeaderColumn key={column.accessor}>
						{column.title}
					</SHeaderColumn>
				))}
			</SHeader>
			<SBody>
				{data.map((item, idx) => (
					<>
						<SRow ref={itemRef as Ref<HTMLTableRowElement>} key={'row' + idx}>
							{isToggleable && (
								<SColumn>
									<Button
										size='sm'
										variant='outline'
										onClick={() => toggleHandle(idx)}
										isFullWidth={true}
									>
										<SAngleDown isActive={openIdx === idx} />
									</Button>
								</SColumn>
							)}
							{sortedActiveColumns.map((column, idx) => (
								<SColumn key={'body-' + idx}>
									{item[column.accessor]}
								</SColumn>
							))}
						</SRow>
						{openIdx === idx && 'body' in item && (
							<SRow>
								<td colSpan={100}>
									{item.body}
								</td>
							</SRow>
						)}
					</>
				))}
			</SBody>
		</SWrapper>
	)
}

const SBody = styled.tbody`
	margin-top: 10px;
	width: 100%;
	gap: 10px 5px;
	font-size: 0.9rem;
	color: ${colors.base.NEUTRAL_600};
`

const SMenu = styled.div`
	position: absolute;
	z-index: ${ZIndex.POPUP};
`

const SRow = styled.tr`
	position: relative;
	height: 40px;
`

const SOptions = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
`

const SAngleDown = styled(Icon.AngleDown).attrs({
	size: 'sm'
}) <{ isActive: boolean }>`
	margin: 0 auto;
	width: 25px;
	height: 25px;
  transition: 0.25s transform;

  ${({ isActive }) =>
		isActive &&
		css`
      transform: rotate(180deg);
    `}
`

const SRowBody = styled.div`
`

const SWrapper = styled.table`
	width: 100%;
	border-spacing: 0;

	& ${SRow}:not(:last-child)::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		border-bottom: 1px solid ${colors.base.NEUTRAL_300};
	}
`

const SHeader = styled.thead<{ isSticky?: boolean }>`
	backdrop-filter: saturate(180%) blur(5px);
	box-shadow: 0px 0px 0px 1px ${colors.base.NEUTRAL_300};
	background: rgba(239,239,239,.5);
	border-radius: 5px;
	color: ${colors.base.NEUTRAL_500};
	font-size: 0.75rem;
	text-transform: uppercase;
	width: 100%;
	height: 40px;
	body.dark & {
		background: rgba(0,0,0,.5);
	}
	${({ isSticky }) => isSticky && css`
		position: sticky;
		top: 5px;
		z-index: ${ZIndex.NAVBAR};
	`}
`

const SColumn = styled.td`
	border-radius: 5px;
	padding: 5px 10px;
	white-space: nowrap;
`

const SHeaderColumn = styled.th<{ maxWidth?: string }>`
	padding: 5px 10px;
	font-weight: 500;
	text-align: left;
	white-space: nowrap;
	${({ maxWidth }) => maxWidth && css`
		max-width: ${maxWidth};
	`}
`
