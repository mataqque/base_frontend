type EventType = 'change';

export const dispatchEventSelect = (element: any, event: any, value: string) => {
	if (value !== null) {
		element.value = value;
		element.dispatchEvent(new Event(event, { bubbles: true }));
	}
};
export const dispatchEvent = (element: HTMLInputElement, event: EventType, value: string) => {
	element.setAttribute('value', value);
	element.value = value;
	element.dispatchEvent(new Event(event, { bubbles: true }));
};
export const setInputTextProps = (name: string, _form: any) => {
	return {
		name,
	};
};
