// import {useVideoConfig, useCurrentFrame} from 'remotion';

import {France} from './France';
import {Rain} from './Rain';

export const MyComposition = () => {
	// const {fps, durationInFrames, width, height} = useVideoConfig();

	// const frame = useCurrentFrame();
	// const opacity = frame / durationInFrames;

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: '#FAF0EB',
				color: '#FB641B',
				// opacity,
			}}
		>
			Its Raining!
			<France />
			<Rain />
		</div>
	);
};
