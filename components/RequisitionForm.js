import React, { useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Flex } from '@chakra-ui/react';
import { MyTextInput, MySelect } from './CustomInput';
import { requisitionSchema } from './validationSchema';
import { OverallContext } from './context/overallContext';
import { useFormikContext } from 'formik';

const AutoSubmit = () => {
	const { values } = useFormikContext();
	const { setData } = useContext(OverallContext);

	useEffect(() => {
		if (values.req_title) {
			console.log(values);
			setData((prev) => ({ ...prev, ...values }));
		}
	}, [setData, values]);

	return null;
};

const RequisitionForm = (props) => {
	const { setPageValid } = useContext(OverallContext);

	const handleSubmit = (values) => {
		props.next(values);
		setPageValid(true);
	};

	return (
		<Box>
			<Formik
				initialValues={props.data}
				validationSchema={requisitionSchema}
				onSubmit={handleSubmit}
			>
				{({ values }) => (
					<Form>
						<Box>
							<MyTextInput label="Request Title" name="req_title" type="text" />
							<MyTextInput
								label="Owner"
								name="owner"
								type="text"
								placeholder="Please enter owner or company's name"
							/>
							<MyTextInput
								label="Hiring manager"
								name="hiring_man"
								type="text"
								placeholder="Please enter hiring manager name"
							/>
							<MyTextInput
								label="Number of openings"
								name="no_of_openings"
								type="number"
								placeholder="Please enter no. of openings in digits"
							/>
							<MySelect label="Urgency" name="urgency">
								<option value="">Please select urgency level</option>
								<option value="Low">Low</option>
								<option value="Medium">Medium</option>
								<option value="High">High</option>
							</MySelect>
							<MyTextInput
								label="Employment Type"
								name="emp_type"
								type="text"
								placeholder="Eg., Permanent, Temporary or Others"
							/>
							<MySelect label="Gender Preference" name="gender_pref">
								<option value="">Please select your gender preferences</option>
								<option value="No Preference">No Preferences</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</MySelect>
							<MySelect label="status" name="status">
								<option value="">Please select your gender preferences</option>
								<option value="Inactive">Inactive</option>
								<option value="Active">Active</option>
							</MySelect>
							<AutoSubmit />
						</Box>
						<Flex
							justify="flex-end"
							py="10"
							// changed pt to py
						>
							<Button
								isDisabled
								px="14"
								type="button"
								color="white"
								bgColor="secondary"
								_hover={{ filter: 'auto', opacity: '0.75' }}
								_active={{ filter: 'auto', opacity: '0.9' }}
							>
								Previous
							</Button>
							<Button
								type="submit"
								px="16"
								ml="6"
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

export default RequisitionForm;
