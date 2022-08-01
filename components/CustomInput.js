import { useField } from 'formik';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Select,
	Textarea,
} from '@chakra-ui/react';

export const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<FormControl
			isInvalid={!!meta.error && meta.touched}
			minHeight="102px"
			pt="0.5"
		>
			<FormLabel color="labelColor" htmlFor={props.name}>
				{label}
			</FormLabel>
			<Input {...props} {...field} />
			{meta.touched && meta.error ? (
				<FormErrorMessage>{meta.error}</FormErrorMessage>
			) : null}
		</FormControl>
	);
};

export const MySelect = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<FormControl isInvalid={!!meta.error && meta.touched} minHeight="99px">
			<FormLabel color="labelColor" htmlFor={props.name}>
				{label}
			</FormLabel>
			<Select {...props} {...field} />
			{meta.touched && meta.error ? (
				<FormErrorMessage>{meta.error}</FormErrorMessage>
			) : null}
		</FormControl>
	);
};

export const MyTextarea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<FormControl isInvalid={!!meta.error && meta.touched} minHeight="165px">
			<FormLabel color="labelColor" htmlFor={props.name}>
				{label}
			</FormLabel>
			<Textarea {...props} {...field} resize="none" />
			{meta.touched && meta.error ? (
				<FormErrorMessage>{meta.error}</FormErrorMessage>
			) : null}
		</FormControl>
	);
};
