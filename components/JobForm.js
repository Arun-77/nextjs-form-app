import React, { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Flex } from '@chakra-ui/react';
import { MyTextInput, MyTextarea } from './CustomInput';
import { jobFormSchema } from './validationSchema';
import { OverallContext } from './context/overallContext';
import { useFormikContext } from 'formik';

const AutoSubmit = () => {
	const { values } = useFormikContext();
	const { setData } = useContext(OverallContext);

	useEffect(() => {
		if (values.job_title) {
			console.log(values);
			setData((prev) => ({ ...prev, ...values }));
		}
	}, [setData, values]);

	return null;
};

const JobForm = (props) => {
	const { setPageValid } = useContext(OverallContext);

	const handleSubmit = (values) => {
		props.next(values);
		setPageValid(true);
	};

	return (
		<Box h="100%">
			<Formik
				initialValues={props.data}
				validationSchema={jobFormSchema}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<Form>
						<MyTextInput label="Job Title" name="job_title" type="text" />
						<MyTextarea
							label="Job Description"
							name="job_desc"
							type="textarea"
						/>

						<MyTextInput label="Job location" name="job_location" type="text" />
						<AutoSubmit />
						<Flex pt="56" justify="flex-end">
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
								px="16"
								ml="6"
								type="submit"
								color="white"
								bgColor="primary"
								_hover={{ filter: 'auto', opacity: '0.75' }}
								_active={{ filter: 'auto', opacity: '0.9' }}
							>
								Next
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default JobForm;
