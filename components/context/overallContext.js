import { createContext, useState } from 'react';

export const OverallContext = createContext({
	data: {},
	currentStep: 0,
	setCurrentStep: () => {},
	prevHandler: () => {},
	nextHandler: () => {},
});

export function OverallContextProvider({ children }) {
	const [data, setData] = useState({
		req_title: '',
		owner: '',
		hiring_man: '',
		urgency: '',
		no_of_openings: '',
		emp_type: '',
		gender_pref: '',
		status: '',
		job_title: '',
		job_desc: '',
		job_location: '',
		inter_mode: '',
		inter_dur: '',
		inter_lang: '',
	});

	const [pageValid, setPageValid] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);

	const prevHandler = (newData) => {
		setData((prev) => ({ ...prev, ...newData }));
		setCurrentStep((prev) => prev - 1);
	};

	const makeRequest = (newData) => {
		alert(JSON.stringify(newData, null, 2));
	};

	const nextHandler = (newData, final = false) => {
		setData((prev) => ({ ...prev, ...newData }));

		if (final) {
			makeRequest(newData);
			setData((prev) => ({
				...prev,
				req_title: '',
				owner: '',
				hiring_man: '',
				urgency: '',
				no_of_openings: '',
				emp_type: '',
				gender_pref: '',
				status: '',
				job_title: '',
				job_desc: '',
				job_location: '',
				inter_mode: '',
				inter_dur: '',
				inter_lang: '',
			}));
			setCurrentStep(0);
			setPageValid(false);
			return;
		}
		setCurrentStep((prev) => prev + 1);
	};

	return (
		<OverallContext.Provider
			value={{
				data: data,
				pageValid: pageValid,
				setPageValid: setPageValid,
				currentStep: currentStep,
				setCurrentStep: setCurrentStep,
				nextHandler: nextHandler,
				prevHandler: prevHandler,
			}}
		>
			{children}
		</OverallContext.Provider>
	);
}
