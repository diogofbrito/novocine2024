import React, { useState } from 'react';
import XIcon from '@mui/icons-material/X';
import Facebook from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Collapse from '@mui/material/Collapse';

export function ShareFilmIcons( { film } ) {
    const [showShareOptions, setShowShareOptions] = useState(false);
    
    const handleCopyLink = () => {
			navigator.clipboard.writeText(window.location.href).catch(err => console.error('Erro ao copiar o link: ', err));
		};

    return (
			<div className='flex pt-2 -mx-2 -my-2 '>
				<IconButton onClick={() => setShowShareOptions(!showShareOptions)} sx={{ color: 'inherit' }}>
					<Tooltip title='Partilhar'>
						<ShareIcon />
					</Tooltip>
				</IconButton>

				<Collapse in={showShareOptions} timeout='auto'>
					<div className='flex'>
						<IconButton onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} sx={{ color: 'inherit' }}>
							<Tooltip title='Facebook'>
								<Facebook />
							</Tooltip>
						</IconButton>

						<IconButton onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=NOVOCINE: ${film.nome}`, '_blank')} sx={{ color: 'inherit' }}>
							<Tooltip title='X'>
								<XIcon />
							</Tooltip>
						</IconButton>

						<IconButton onClick={handleCopyLink} sx={{ color: 'inherit' }}>
							<Tooltip title='Copiar Link'>
								<LinkIcon />
							</Tooltip>
						</IconButton>
					</div>
				</Collapse>
			</div>
		);
};