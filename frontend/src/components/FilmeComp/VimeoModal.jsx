import React, { useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player/vimeo';
import { IconButton, Box, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeOff, FullscreenExit } from '@mui/icons-material';

export function VimeoModal({  film }) {
	const [open, setOpen] = useState(false);
	const [playing, setPlaying] = useState(false);
	const [muted, setMuted] = useState(false);
	const [volume, setVolume] = useState(0.8);
	const [progress, setProgress] = useState(0);
	const playerRef = useRef(null);

	const togglePlay = () => setPlaying(prev => !prev);
	const toggleMute = () => setMuted(prev => !prev);

	const handleVolumeChange = (e, newValue) => setVolume(newValue);
	const handleProgress = state => setProgress(state.played);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setPlaying(false); // Pause the video when closing
	};

	return (
		<div>
			<div className=''>
				<button
					onClick={handleOpen}
					className='flex items-center justify-center space-x-2 border  rounded-full pl-3 pr-2 py-1  hover:bg-white hover:bg-opacity-50 transition duration-300 ease-in-out '
				>
					<span className='font-bold text-xl iphone:text-lg'>PLAY</span>
					<span className='w-6 h-6'>
						<svg width='100%' height='100%' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM15.2566 11.1728C15.39 11.0958 15.39 10.9033 15.2566 10.8264L9.02232 7.22698C8.88899 7.15 8.72232 7.24623 8.72232 7.40019V14.599C8.72232 14.7529 8.88899 14.8491 9.02232 14.7722L15.2566 11.1728Z'
								fill='currentColor'
							></path>
						</svg>
					</span>
				</button>
			</div>

			<Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Box sx={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'black' }}>
					{/* Video Player */}
					<ReactPlayer
						ref={playerRef}
						url={film.vimeoId}
						playing={playing}
						muted={muted}
						volume={volume}
						light={true}
						onProgress={handleProgress}
						width='100%'
						height='100%'
						
					/>

					{/* Custom Controls */}
					<Box sx={{ position: 'absolute', bottom: '20px', width: '100%', px: 3, display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}>
						<IconButton onClick={togglePlay} color='inherit'>
							{playing ? <Pause /> : <PlayArrow />}
						</IconButton>

						<Slider value={progress * 100} onChange={(e, value) => playerRef.current.seekTo(value / 100)} sx={{ color: 'white', flexGrow: 1 }} />

						<IconButton onClick={toggleMute} color='inherit'>
							{muted ? <VolumeOff /> : <VolumeUp />}
						</IconButton>
						<Slider value={volume * 100} onChange={handleVolumeChange} sx={{ color: 'white', width: '100px' }} />

						<IconButton onClick={handleClose} color='inherit'>
							<FullscreenExit />
						</IconButton>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
