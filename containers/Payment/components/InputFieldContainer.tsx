import React from "react";
import styled from "styled-components";
import { TypographyENUM } from "@/types/coreTypes";

const FieldContainer = styled.div<{ fullWidth?: boolean, line?: number, isBoundary?: boolean }>`
	display: flex;
	flex-direction: row;
    align-items: center;
	padding: 16px;
	gap: 8px;
	width: ${props => props.fullWidth ? "100%" : "431px"};
	${props => props.isBoundary ? `
		height: ${props.line ? `${props.line * 56}px` : "56px"};
		border: 1px solid #E2E2EE;
		box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
		border-radius: 12px;
	` : ""}
	flex: none;
	align-self: stretch;
	flex-grow: 0;
	position: relative;
`;

const Box = styled.div<{ font: TypographyENUM, width?: string }>`
    font-family: ${props => props.font};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${props => props.width ? `${props.width}` : "100%"};
`;

const Label = styled.label`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.02em;
	color: var(--text);
	margin-bottom: 8px;
`;

const SubText = styled.div<{ isError?: boolean }>`
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 12px;
	letter-spacing: -0.02em;
	color: ${props => props.isError ? "var(--error)" : "var(--dark-blue-75)"};
	margin-top: 4px;
    margin-bottom: 4px;
    height: 12px;
    width: 100%;
`;

interface AddressInputFieldType {
	font?: TypographyENUM,
	children?: React.ReactNode,
	label?: string,
	subText?: string,
	isError?: boolean,
	isFullWidth?: boolean,
	line?: number,
	isBoundary?: boolean,
    width?: string
}

const InputFieldContainer = ({ font = TypographyENUM.lkSansRegular, children, label = "", subText = "", isError = false, isFullWidth = false, line = 1, isBoundary = true, width }: AddressInputFieldType) => {
	return (
		<Box font={font} width={width}>
			{label && <Label>{label}</Label>}
			<FieldContainer fullWidth={isFullWidth} line={line} isBoundary={isBoundary}>
				{children || null}
			</FieldContainer>
			<SubText isError={isError}>{subText}</SubText>
		</Box>
	);
};

export { InputFieldContainer };
