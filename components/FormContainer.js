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

	const forms = [
		<RequisitionForm key={0} next={nextHandler} data={data} />,
		<JobForm key={1} next={nextHandler} prev={prevHandler} data={data} />,
		<InterviewForm key={2} prev={prevHandler} next={nextHandler} data={data} />,
	];

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
					pb="2"
					px="6"
					_hover={{
						color: '#333',
						fontWeight: 800,
						borderBottom: '3px solid',
						borderBottomColor: 'primary',
					}}
					fontWeight={currentStep === 0 ? 800 : 400}
					color={currentStep === 0 ? '#333' : 'inherit'}
					borderBottom={currentStep === 0 ? '3px solid' : '3px solid'}
					borderBottomColor={currentStep === 0 ? 'primary' : 'white'}
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
					pb="2"
					fontSize="1.2rem"
					cursor="pointer"
					_hover={{
						color: '#333',
						fontWeight: 800,
						borderBottom: '3px solid',
						borderBottomColor: 'primary',
					}}
					fontWeight={currentStep === 0 ? 800 : 400}
					color={currentStep === 1 ? '#333' : 'inherit'}
					borderBottom={currentStep === 1 ? '3px solid' : '3px solid'}
					borderBottomColor={currentStep === 1 ? 'primary' : 'white'}
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
					pb="2"
					fontSize="1.2rem"
					cursor="pointer"
					_hover={{
						color: '#333',
						fontWeight: 800,
						borderBottom: '3px solid',
						borderBottomColor: 'primary',
					}}
					fontWeight={currentStep === 0 ? 800 : 400}
					color={currentStep === 2 ? '#333' : 'inherit'}
					borderBottom={currentStep === 2 ? '3px solid' : '3px solid'}
					borderBottomColor={currentStep === 2 ? 'primary' : 'white'}
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
				<Box w="60%" mt="2" h="100%">
					{forms[currentStep]}
				</Box>
				<PreviewCard data={data} />
			</Flex>
		</Box>
	);
};

export default FormContainer;
