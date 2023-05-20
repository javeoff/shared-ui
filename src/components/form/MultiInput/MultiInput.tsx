import { colors, sizes } from "@shared/ui/common"
import { FC, KeyboardEvent, useRef } from "react"
import styled from "styled-components"
import { Tag } from "../../main/Tag/Tag"
import { useMultiInput } from "./hooks/useMultiInput"
import { IMultiInputTag, useMultiInputTags } from "./hooks/useMultiInputTags"

export interface IMultiInputProps {
	initialItems?: IMultiInputTag[]
	isFullWidth?: boolean;
}

export const MultiInput: FC<IMultiInputProps> = ({
	initialItems,
	isFullWidth = false,
}) => {
	const {
		tags,
		onAdd: tagAddHandle,
		onRemove: tagRemoveHandle,
	} = useMultiInputTags(initialItems)

	const deleteLastTagHandle = () => {
		const deleteTagIdx = tags.length - 1
		tagRemoveHandle(deleteTagIdx);
		inputRef.current.value = tags[deleteTagIdx].label;
	}

	const { inputRef, keyPressHandle } = useMultiInput(
		deleteLastTagHandle,
		tagAddHandle,
		tags,
	)

	return (
		<SWrapper isFullWidth={isFullWidth}>
			{tags.map((tag, idx) => (
				<Tag
					onClose={() => tagRemoveHandle(idx)}
					{...tag}
				/>
			))}
			<SInput
				ref={inputRef}
				onKeyDown={keyPressHandle}
			/>
		</SWrapper>
	)
}

const SWrapper = styled.div<{ isFullWidth: boolean }>`
	display: flex;
  width: 100%;
	${({ isFullWidth }) => !isFullWidth && `max-width: 240px;`}
	gap: 0 3px;
	position: relative;
	overflow: hidden;
  padding: 0 ${sizes.padding.EXTRA_SMALL};
  min-height: ${sizes.height.MEDIUM};
	box-sizing: border-box;
	padding: 5px;
  border: 1px solid ${colors.base.NEUTRAL_300};
  border-radius: ${sizes.radius.SMALL};
  font-size: ${sizes.font.SMALL};
  line-height: normal;
  transition: 0.25s border ease-in-out;
  background: ${colors.base.LIGHT};
  color: ${colors.text.DARK};
	cursor: default;
	user-select: none;
`

const SInput = styled.input`
	flex-grow: 1;
	height: 100%;
  border-radius: ${sizes.radius.SMALL};
	align-self: center;
	border: 0;
  outline: 0;
	background: transparent;
	box-sizing: border-box;
	padding: 0 5px;
	min-width: 50px;
	
	[contenteditable=true]:empty:before {
		content: attr(placeholder);
		color:gray;
	}
	[contenteditable=true] br{
		display:none;
	}
`
