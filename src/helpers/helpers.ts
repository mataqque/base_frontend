import { type TypeGeneric, type EventType } from './interface';

type IPropsChangeActive = (value: string, firstValue: string, secondValue: string) => string;

export const changeActive: IPropsChangeActive = (value, firstValue, secondValue): string => {
	let newStatus;
	switch (value) {
		case '':
			newStatus = 'open';
			break;
		case firstValue:
			newStatus = 'close';
			break;
		case secondValue:
			newStatus = 'open';
			break;
		default:
			newStatus = '';
	}
	return newStatus;
};

export const callbackDelay = (callback: VoidFunction, delay?: number): void => {
	const delayInterval = setInterval(
		() => {
			callback();
			clearInterval(delayInterval);
		},
		!delay ? 1000 : delay
	);
};

export const dispatchEvent = (element: HTMLInputElement, event: EventType, value: string) => {
	element.setAttribute('value', value);
	element.value = value;
	element.dispatchEvent(new Event(event, { bubbles: true }));
};
export const dispatchEventSelect = (element: any, event: any, value: string) => {
	if (value !== null) {
		element.value = value;
		element.dispatchEvent(new Event(event, { bubbles: true }));
	}
};

export const getNumberAdress = (value: string): number | null => {
	const matchResult = value.match(/\d+/);
	if (matchResult !== null) {
		return parseInt(matchResult[0]);
	}
	return null;
};

export const generateId = ({ type }: { type: string }): string => {
	const typeid: TypeGeneric = {
		number: new Date().getTime().toString(),
		string: Math.random().toString(36).substr(2, 18),
	};
	const typeIdDefault: string = typeid.string;
	return typeid[type as keyof TypeGeneric] || typeIdDefault;
};
