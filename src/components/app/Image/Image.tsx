import { FC } from "react";
import styled from "styled-components";

interface IProps {
	imageUrl: string;
	width: number;
	height: number;
}

export const Image: FC<IProps> = (props) => {
	return (
		<SImage {...props} />
	)
}

const SImage = styled.div<IProps>(({ width, height, imageUrl }) => `
	width: ${width}px;
	height: ${height}px;
	background: url('${imageUrl}');
	background-repeat: no-repeat;
	background-size: contain;
`)
