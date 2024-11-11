import React, { useState, useEffect } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

const drawerBleeding = 56;


export function FilterSearchMobile({ films, lang, translation }) {
	 const [open, setOpen] = useState(false);

		const toggleDrawer = newOpen => () => {
			setOpen(newOpen);
		};

	return (
		<>
			<Box
				sx={{
					textAlign: 'center',
					pt: 1,
					display: { xs: 'block', sm: 'none' },
				}}
			>
				<Button variant='contained' color='primary' onClick={toggleDrawer(true)}>
					Open Filter
				</Button>
			</Box>

			<SwipeableDrawer
				anchor='bottom'
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={0}
				disableSwipeToOpen={true}
				ModalProps={{
					keepMounted: true,
				}}
				PaperProps={{
					style: {
						height: `calc(30% + ${drawerBleeding}px)`,
						overflow: 'visible',
					},
				}}
				sx={{
					display: { xs: 'block', sm: 'none' } ,
                }}
			>
				<Box
					sx={{
						position: 'absolute',
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: 'visible',
						right: 0,
						left: 0,
						backgroundColor: 'pink',
						p: 2,
						boxShadow: 0,
					}}
				>
					<div
						style={{
							width: 30,
							height: 6,
							backgroundColor: grey[300],
							borderRadius: 3,
							position: 'absolute',
							top: 8,
							left: 'calc(50% - 15px)',
						}}
					></div>

					<div className='flex items-center '>
						<p>
							{films.length} {translation[lang].filmesDispo}
						</p>
					</div>
				</Box>

				{/* Conteúdo principal do Drawer */}
				<Box sx={{ px: 2, pb: 2, pt: 6, height: '100%', backgroundColor: 'pink' }}>
					<Typography variant='body2' color='text.secondary'>
						Aqui está o conteúdo do filtro para pesquisa no modo mobile.
					</Typography>
					{/* Conteúdo adicional do filtro */}
					<Box sx={{ mt: 2 }}>
						<Typography variant='body1'>Aqui podem ir os filtros ou outros componentes</Typography>
					</Box>
				</Box>
			</SwipeableDrawer>
		</>
	);
}
