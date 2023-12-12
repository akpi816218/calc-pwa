import { Button } from '@nextui-org/react';
import { type PressEvent } from '@react-types/shared';

export { type PressEvent };

export default function Btn({
	children,
	className,
	onPress,
	disabled
}: {
	children: React.ReactNode;
	className?: string;
	onPress?: (e: PressEvent) => void;
	disabled?: boolean;
}) {
	return (
		<Button
			className={`text-3xl font-medium leading-8 py-8 ${className}`}
			onPress={onPress}
			radius="full"
			isDisabled={disabled}
		>
			{children}
		</Button>
	);
}
