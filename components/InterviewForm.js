import React, { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Flex } from '@chakra-ui/react';
import { MyTextInput } from './CustomInput';
import { interviewSchema } from './validationSchema';
import { OverallContext } from './context/overallContext';
import { useFormikContext } from 'formik';

const AutoSubmit = () => {
	const { values } = useFormikContext();
	const { setData } = useContext(OverallContext);

	useEffect(() => {
		setData((prev) => ({ ...prev, ...values }));
	}, [setData, values]);

	return null;
};

const InterviewForm = (props) => {
	const handleSubmit = (values) => {
		props.next(values, true);
	};

	return (
		<Box>
			<Formik
				initialValues={props.data}
				validationSchema={interviewSchema}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<Form>
						<MyTextInput
							label="Interview Mode"
							name="inter_mode"
							type="text"
							placeholder="Eg., Virtual or On-site"
						/>
						<MyTextInput
							label="Interview Duration"
							name="inter_dur"
							type="number"
							placeholder="Please enter duration in minutes"
						/>

						<MyTextInput
							label="Interview Language"
							name="inter_lang"
							type="text"
							placeholder="Please enter any required languages"
						/>
						<AutoSubmit />
						<Flex pt="64" justify="flex-end">
							<Button
								px="14"
								type="button"
								color="white"
								bgColor="secondary"
								_hover={{ filter: 'auto', opacity: '0.75' }}
								_active={{ filter: 'auto', opacity: '0.9' }}
								onClick={() => props.prev(values)}
							>
								Previous
							</Button>
							<Button
								px="14"
								ml="6"
								type="submit"
								color="white"
								bgColor="primary"
								_hover={{ filter: 'auto', opacity: '0.75' }}
								_active={{ filter: 'auto', opacity: '0.9' }}
							>
								Submit
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default InterviewForm;
