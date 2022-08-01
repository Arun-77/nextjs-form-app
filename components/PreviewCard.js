import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const PreviewCard = ({ data }) => {
	console.log(data);

	return (
		<Box
			w="40%"
			mt="8"
			h="53vh"
			pb="4"
			borderRadius="9px"
			ml="10"
			boxShadow={'0px 0px 20px 0px #999'}
		>
			<Flex justify="space-between" fontFamily="Open Sans">
				<Text px="6" py="1">
					Draft
				</Text>
				<Text
					px="8"
					py="1"
					bgColor="primary"
					color="white"
					borderTopRightRadius="9px"
				>
					Preview
				</Text>
			</Flex>
			{Object.values(data).some((datum) => datum !== '') ? (
				<Box py="4" px="4">
					{data.job_title !== '' ? (
						<Flex
							justify="flex-start"
							align="center"
							px="5"
							py="3"
							bgColor="darkblue"
							color="white"
							borderRadius="5px"
							flexWrap="wrap"
						>
							<Text>{data.job_title}</Text>
							<Flex>
								<Text color="whiteAlpha.700">OPENINGS</Text>
								<Text pl="2">{data.no_of_openings}</Text>
							</Flex>
						</Flex>
					) : null}
					{data.emp_type !== '' ? (
						<>
							<Heading as="h4" fontSize="1.2rem" mt="4">
								REQUISITION DETAILS
							</Heading>
							<Flex gap={2} flexWrap="wrap" mt="4" justify="space-between">
								<Box mx="2">
									<Text fontSize="small" color="blackAlpha.700">
										OWNER
									</Text>
									<Text fontWeight={600} letterSpacing="1.5px">
										{data.owner}
									</Text>
								</Box>
								<Box mx="2">
									<Text fontSize="small" color="blackAlpha.700">
										URGENCY
									</Text>
									<Text fontWeight={600} letterSpacing="1.5px">
										{data.urgency}
									</Text>
								</Box>
								<Box mx="2">
									<Text fontSize="small" color="blackAlpha.700">
										EMPLOYMENT
									</Text>
									<Text fontWeight={600} letterSpacing="1.5px">
										{data.emp_type}
									</Text>
								</Box>
								<Box mx="2">
									<Text fontSize="small" color="blackAlpha.700">
										GENDER PREF.
									</Text>
									<Text fontWeight={600} letterSpacing="1.5px">
										{data.gender_pref}
									</Text>
								</Box>
								<Box mx="2">
									<Text fontSize="small" color="blackAlpha.700">
										HIRING MAN.
									</Text>
									<Text fontWeight={600} letterSpacing="1.5px">
										{data.hiring_man}
									</Text>
								</Box>
								<Box mx="2">
									<Text fontSize="small" color="blackAlpha.700">
										STATUS
									</Text>
									<Text fontWeight={600} letterSpacing="1.5px">
										{data.status}
									</Text>
								</Box>
							</Flex>
						</>
					) : null}
					{data.job_location !== '' ? (
						<>
							<Heading as="h4" fontSize="1.2rem" mt="3">
								OTHER DETAILS
							</Heading>

							<Box mx="2" mt="4">
								<Text fontSize="small" color="blackAlpha.700">
									JOB LOCATION
								</Text>
								<Text fontWeight={600} letterSpacing="1.5px">
									{data.job_location}
								</Text>
							</Box>
						</>
					) : null}
				</Box>
			) : (
				<Heading
					as="h2"
					fontFamily="Nunito Sans"
					px="10"
					py="20"
					textAlign="center"
					h="100%"
				>
					Fill the Form to see preview
				</Heading>
			)}
		</Box>
	);
};

export default PreviewCard;
