import '@/styles/out.css';
import { Providers } from '@/components/Providers';
import { StrictMode, useMemo, useState } from 'react';
import Btn, { PressEvent } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons/faBackspace';
import { Divider } from '@nextui-org/react';
import { evaluate } from 'mathjs';

export default function App() {
	const [eq, setEq] = useState(''),
		[result, setResult] = useState('');

	useMemo(() => {
		setResult('');
	}, [eq]);

	type ButtonObj = {
		name: string;
		content?: React.ReactNode;
		handler: ((e: PressEvent) => void) | (() => void);
		class?: string;
		disabled?: boolean;
	};

	const baseButtons: ButtonObj[] = [
			{
				name: 'AC',
				handler: () => {
					setEq('');
					setResult('');
				},
				class: 'bg-indigo-600',
				disabled: eq.length === 0
			},
			{
				name: '( )',
				handler: () => {
					// if can close a set of parentheses
					if (
						[...eq.matchAll(/\(/g)].length > [...eq.matchAll(/\)/g)].length &&
						eq.slice(-1) !== '('
					)
						setEq(eq + ')');
					// else, open a set of parentheses
					else setEq(eq + '(');
				},
				class: 'bg-violet-400 opacity-90'
			},
			{
				name: '%',
				handler: () => {
					setEq(eq + '%');
				},
				class: 'bg-violet-400 opacity-90'
			},
			{
				name: '÷',
				handler: () => {
					setEq(eq + '/');
				},
				class: 'bg-violet-400 opacity-90'
			},
			{
				name: '7',
				handler: () => {
					setEq(eq + '7');
				},
				class: ''
			},
			{
				name: '8',
				handler: () => {
					setEq(eq + '8');
				},
				class: ''
			},
			{
				name: '9',
				handler: () => {
					setEq(eq + '9');
				},
				class: ''
			},
			{
				name: '×',
				handler: () => {
					setEq(eq + '*');
				},
				class: 'bg-violet-400 opacity-90'
			},
			{
				name: '4',
				handler: () => {
					setEq(eq + '4');
				},
				class: ''
			},
			{
				name: '5',
				handler: () => {
					setEq(eq + '5');
				},
				class: ''
			},
			{
				name: '6',
				handler: () => {
					setEq(eq + '6');
				},
				class: ''
			},
			{
				name: '–',
				handler: () => {
					setEq(eq + '-');
				},
				class: 'bg-violet-400 opacity-90'
			},
			{
				name: '1',
				handler: () => {
					setEq(eq + '1');
				},
				class: ''
			},
			{
				name: '2',
				handler: () => {
					setEq(eq + '2');
				},
				class: ''
			},
			{
				name: '3',
				handler: () => {
					setEq(eq + '3');
				},
				class: ''
			},
			{
				name: '+',
				handler: () => {
					setEq(eq + '+');
				},
				class: 'bg-violet-400 opacity-90'
			},
			{
				name: '0',
				handler: () => {
					setEq(eq + '0');
				},
				class: ''
			},
			{
				name: '.',
				handler: () => {
					setEq(eq + '.');
				},
				class: ''
			},
			{
				name: '⌫',
				content: <FontAwesomeIcon icon={faBackspace} />,
				handler: () => {
					setEq(eq.slice(0, -1));
				},
				class: '',
				disabled: eq.length === 0
			},
			{
				name: '=',
				handler: () => {
					try {
						setResult(
							evaluate(eq.replaceAll(/[^\(\)1234567890\%\/\*\-\+\.\!]+/g, ''))
						);
					} catch {
						setResult('Syntax Error');
					}
				},
				class: 'bg-indigo-600',
				disabled: eq.length === 0
			}
		],
		complexButtons: ButtonObj[] = [];

	return (
		<StrictMode>
			<Providers>
				<main className="w-screen h-screen dark:bg-neutral-800 text-3xl dark:text-neutral-300 flex flex-col justify-stretch content-stretch items-stretch">
					<div
						id="screen"
						className="p-8 flex flex-col flex-grow justify-end dark:bg-neutral-700 rounded-b-3xl"
					>
						<input
							type="text"
							id="screen-txt"
							className="text-right focus-visible:outline-none p-2 rounded-xl text-6xl mono overflow-x-auto text-cyan-500"
							onKeyDown={e => e.preventDefault()}
							value={eq}
							readOnly
							tabIndex={-1}
							onClick={e => e.preventDefault()}
						/>
						<Divider className="m-2" />
						<input
							type="text"
							id="screen-result"
							className={`text-right  focus-visible:outline-none p-2 rounded-xl text-3xl font-medium mono ${
								result === 'Syntax Error' ? 'text-red-500' : 'text-sky-500'
							}`}
							onKeyDown={e => e.preventDefault()}
							value={result}
							readOnly
							tabIndex={-1}
						/>
					</div>
					<div className="flex flex-row justify-end">
						<div className="hidden md:grid grid-cols-4 place-items-center gap-4 p-4">
							{complexButtons.map(v => (
								<Btn
									onPress={v.handler}
									className={v.class}
									key={v.name}
									disabled={v.disabled}
								>
									{v.content ?? v.name}
								</Btn>
							))}
						</div>
						<div className="grid grid-cols-4 place-items-center gap-4 p-4">
							{baseButtons.map(v => (
								<Btn
									onPress={v.handler}
									className={v.class}
									key={v.name}
									disabled={v.disabled}
								>
									{v.content ?? v.name}
								</Btn>
							))}
						</div>
					</div>
				</main>
			</Providers>
		</StrictMode>
	);
}
