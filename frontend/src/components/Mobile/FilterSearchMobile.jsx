import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import { SlidersHorizontal } from 'lucide-react';

export function FilterSearchMobile({ films, lang, translation, isListView, onToggleView }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = newOpen => () => {
		setOpen(newOpen);
	};
	return (
		<div className='hidden iphone:block '>
			<div className='flex justify-between items-center'>
				<button onClick={toggleDrawer(true)} className='border rounded-full px-3 py-1 flex gap-2 items-center'>
					{translation[lang].filtros}
					<SlidersHorizontal size={21} />
				</button>

				<div className='flex items-center '>
					<p>
						{films.length} {translation[lang].filmesDispo}
					</p>
				</div>
				<button onClick={onToggleView} className='border rounded-full px-3 py-1 items-center transition-all duration-300 ease-in-out'>
					{isListView ? translation[lang].galeria : translation[lang].lista}
				</button>
			</div>

			{/* SwipeableDrawer na parte inferior */}
			<SwipeableDrawer
				anchor='bottom'
				open={open}
				onClose={toggleDrawer(false)} // Fecha o Drawer
				onOpen={toggleDrawer(true)} // Abre o Drawer
			>
				{/* Conteúdo dentro do Drawer */}
				<Box sx={{ padding: 2 }}>
					<h2>Filter Options</h2>
					{/* Aqui você pode adicionar mais componentes ou filtros conforme necessário */}
				</Box>
			</SwipeableDrawer>
		</div>
	);
}
