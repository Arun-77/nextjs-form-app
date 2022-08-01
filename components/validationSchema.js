// This module contains all validation schema for forms

import * as Yup from 'yup';

export const requisitionSchema = Yup.object().shape({
	req_title: Yup.string()
		.matches(/^[a-zA-Z\s\&\.\@]*$/, 'Invalid Input Text')
		.required('This field is required.'),
	owner: Yup.string()
		.matches(/^[a-zA-Z\s\&\.\@\,]*$/, 'Invalid Input Text')
		.required('This field is required.'),
	hiring_man: Yup.string()
		.matches(/^[A-Za-z\s\.\@]*$/, 'Invalid Input Text')
		.required('This field is required.'),
	urgency: Yup.string()
		.oneOf(['Low', 'Medium', 'High'], 'Invalid urgency level.')
		.required('This field is required.'),
	no_of_openings: Yup.number()
		.moreThan(0, 'Entered value must be greater than 0')
		.positive('The Number of openings must be Positive')
		.integer('The Number of openings must be an Integer')
		.required('This field is required.'),
	emp_type: Yup.string()
		.matches(/^[A-Za-z\s\-\.]*$/, 'Invalid Input Text')
		.required('This field is required.'),
	gender_pref: Yup.string()
		.oneOf(['No Preference', 'Male', 'Female'], 'Invalid gender preference.')
		.required('This field is required.'),
	status: Yup.string()
		.oneOf(['Active', 'Inactive'], 'Invalid status.')
		.required('This field is required.'),
});

export const jobFormSchema = Yup.object().shape({
	job_title: Yup.string()
		.matches(/^[a-zA-Z\s\.\(\)\,]*$/, 'Invalid Input Text')
		.required('This field is required.'),
	job_desc: Yup.string()
		.matches(/^[A-Za-z0-9\s\.\-\,\#\@\(\)\&]*$/, 'Invalid Input Text')
		.required('This field is required.'),

	job_location: Yup.string()
		.matches(
			/^[A-Za-z0-9\s\-\.\,\/\@\(\)]*$/,
			'Invalid Input Text, allowed special characters: . , - / @ ( )'
		)
		.required('This field is required.'),
});

export const interviewSchema = Yup.object().shape({
	inter_mode: Yup.string()
		.matches(/^[a-zA-Z\s\.\-]*$/, 'Invalid Input Text')
		.required('This field is required.'),
	inter_dur: Yup.number()
		.moreThan(0, 'Entered duration must be greater than 0')
		.positive('The time cannot be Negative')
		.integer('The duration must be an Integer')
		.required('This field is required.'),

	inter_lang: Yup.string()
		.matches(
			/^[A-Za-z\s\-\.\,\/\&]*$/,
			'Invalid Input Text, special charcters allowed . , / - &'
		)
		.required('This field is required.'),
});
