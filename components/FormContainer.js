import React, { useState, useContext } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import RequisitionForm from './RequisitionForm';
import JobForm from './JobForm';
import InterviewForm from './InterviewForm';
import PreviewCard from './PreviewCard';

import { OverallContext } from './context/overallContext';

const FormContainer = () => {
	const {
		currentStep,
		setCurrentStep,
		data,
		pageValid,
		nextHandler,
		prevHandler,
	} = useContext(OverallContext);

	const tabBar = ['Requisition Details', 'Job Details', 'Interview Settings'];

	const forms = [
		<RequisitionForm key={0} next={nextHandler} data={data} />,
		<JobForm key={1} next={nextHandler} prev={prevHandler} data={data} />,
		<InterviewForm key={2} prev={prevHandler} next={nextHandler} data={data} />,
	];

	const activeTab = (index) => {
		if (currentStep === index) {
			return {
				_active: {
					color: '#333',
					borderBottom: '3px solid primary',
				},
			};
		} else {
			return null;
		}
	};

	return (
		<Box h="100%">
			<Flex
				color="labelColor"
				w="100%"
				fontFamily="Nunito Sans"
				fontWeight={400}
			>
				<Text
					cursor="pointer"
					fontSize="1.2rem"
					_hover={{
						color: '#333',
						fontWeight: 600,
						borderBottom: '3px solid',
						borderBottomColor: 'primary',
					}}
					_active={
						currentStep === 0
							? {
									color: '#333',
									borderBottom: '3px solid',
									borderBottomColor: 'primary',
							  }
							: { color: '#999', borderBottom: '3px solid white' }
					}
					px="6"
					py="2"
					borderBottom="3px solid white"
					onClick={() => {
						if (pageValid) {
							setCurrentStep(0);
						} else {
							alert('Fill all the fields or Enter correct values');
						}
					}}
				>
					Requisition Details
				</Text>
				<Text
					px="6"
					py="2"
					fontSize="1.2rem"
					cursor="pointer"
					_hover={{
						color: '#333',
						fontWeight: 600,
						borderBottom: '3px solid',
						borderBottomColor: 'primary',
					}}
					_active={
						currentStep === 1
							? {
									color: '#333',
									borderBottom: '3px solid',
									borderBottomColor: 'primary',
							  }
							: { color: '#999', borderBottom: '3px solid white' }
					}
					borderBottom="3px solid white"
					onClick={() => {
						if (pageValid) {
							setCurrentStep(1);
						} else {
							alert('Fill all the fields or Enter correct values');
						}
					}}
				>
					Job Details
				</Text>
				<Text
					px="6"
					py="2"
					fontSize="1.2rem"
					cursor="pointer"
					_hover={{
						color: '#333',
						fontWeight: 600,
						borderBottom: '3px solid',
						borderBottomColor: 'primary',
					}}
					_active={
						currentStep === 2
							? {
									color: '#333',
									fontWeight: 600,
									borderBottom: '3px solid',
									borderBottomColor: 'primary',
							  }
							: { color: '#999', borderBottom: '3px solid white' }
					}
					borderBottom="3px solid white"
					onClick={() => {
						if (pageValid) {
							setCurrentStep(2);
						} else {
							alert('Fill all the fields or Enter correct values');
						}
					}}
				>
					Interview Settings
				</Text>
			</Flex>
			<Flex justify="space-between" h="100%" pt="2">
				<Box w="60%" mt="5" h="100%">
					{/* <Box>{currentStep === 0 ? <RequisitionForm /> : null}</Box>
					<Box>{currentStep === 1 ? <JobForm /> : null}</Box>
					<Box>{currentStep === 2 ? <InterviewForm /> : null}</Box> */}
					{forms[currentStep]}
				</Box>
				<PreviewCard data={data} />
			</Flex>
		</Box>
	);
};

export default FormContainer;
