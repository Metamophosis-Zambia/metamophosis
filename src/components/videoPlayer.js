import React from 'react';
import video1 from '../assets/videos/cvid.mp4';

function VideoPlayer() {
	return (
		<div className="w-full max-w-screen-md mx-auto" autoPlay="true" kind="captions">
			<video className="w-100 h-80 rounded-md" controls>
				<source src={video1} type="video/mp4" />
				<track src="captions_en.vtt" kind="captions" />
				{/* You can add more <source> tags for different file types */}
			</video>
		</div>
	);
}

export default VideoPlayer;
