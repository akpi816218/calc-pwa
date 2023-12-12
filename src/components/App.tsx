import '@/styles/out.css';
import { Providers } from '@/components/Providers';
import { ReactNode, StrictMode, useState } from 'react';
import Btn, { PressEvent } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons/faBackspace';

export default function App() {
	const [eq, setEq] = useState('');
	return (
		<StrictMode>
			<Providers>
				<main className="min-w-screen min-h-screen max-w-screen max-h-screen dark:bg-neutral-800 text-3xl dark:text-neutral-300 flex flex-col justify-stretch content-stretch items-stretch">
					<div
						id="screen"
						className="p-8 flex flex-col flex-grow justify-end dark:bg-neutral-700 rounded-3xl"
					>
						<input
							type="text"
							id="screen-txt"
							className="text-right hover:border-none focus:border-none active:border-none p-2 rounded-xl"
							onKeyDown={e => e.preventDefault()}
							value={eq}
						></input>
					</div>
					<div className="flex flex-row justify-end">
						<div className="grid grid-cols-4 place-items-center gap-4 p-4">
							{(
								[
									{
										name: 'AC',
										handler: (e: PressEvent) => {
											setEq('');
										},
										class: 'bg-indigo-600',
										disabled: eq.length === 0
									},
									{
										name: '( )',
										handler: (e: PressEvent) => {},
										class: 'bg-violet-400 opacity-90'
									},
									{
										name: '%',
										handler: (e: PressEvent) => {
											setEq(eq + '%');
										},
										class: 'bg-violet-400 opacity-90'
									},
									{
										name: '÷',
										handler: (e: PressEvent) => {
											setEq(eq + '/');
										},
										class: 'bg-violet-400 opacity-90'
									},
									{
										name: '7',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '8',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '9',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '×',
										handler: (e: PressEvent) => {},
										class: 'bg-violet-400 opacity-90'
									},
									{
										name: '4',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '5',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '6',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '–',
										handler: (e: PressEvent) => {},
										class: 'bg-violet-400 opacity-90'
									},
									{
										name: '1',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '2',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '3',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '+',
										handler: (e: PressEvent) => {},
										class: 'bg-violet-400 opacity-90'
									},
									{
										name: '0',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '.',
										handler: (e: PressEvent) => {},
										class: ''
									},
									{
										name: '⌫',
										content: <FontAwesomeIcon icon={faBackspace} />,
										handler: (e: PressEvent) => {
											setEq(eq.substring(0, -1));
										},
										class: '',
										disabled: eq.length === 0
									},
									{
										name: '=',
										handler: (e: PressEvent) => {},
										class: 'bg-indigo-600',
										disabled: eq.length === 0
									}
								] as {
									name: string;
									content?: React.ReactNode;
									handler: (e: PressEvent) => void;
									class?: string;
									disabled?: boolean;
								}[]
							).map(v => (
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
