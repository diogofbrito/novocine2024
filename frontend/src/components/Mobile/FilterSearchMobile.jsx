import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { SlidersHorizontal, Search, Minus } from 'lucide-react';
import Select from 'react-select';

export function FilterSearchMobile({
	films,
	lang,
	translation,
	isListView,
	onToggleView,
	searchTerm,
	handleSearchChange,
	selectedYear,
	setSelectedYear,
	selectedCountry,
	setSelectedCountry,
	years,
	handleYearChange,
	customSelectStyles,
	countries,
	handleCountryChange,
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDrawer = open => () => {
		setIsMenuOpen(open);
	};
	return (
		<div className='hidden iphone:block '>
			<div className='flex justify-between items-center'>
				<button onClick={toggleDrawer(true)} className='border rounded-full px-3 py-1 flex gap-2 items-center'>
					{translation[lang].filtros}
					<SlidersHorizontal size={21} />
				</button>

				<div className='flex items-center '>
					{films.length} {translation[lang].filmesDispo}
				</div>
				<button onClick={onToggleView} className='border rounded-full px-3 py-1 items-center transition-all duration-300 ease-in-out'>
					{isListView ? translation[lang].galeria : translation[lang].lista}
				</button>
			</div>

			<Drawer
				anchor='left'
				open={isMenuOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					sx: {
						width: '60vw',
						backgroundColor: 'var(--background-color-light)',
						color: 'var(--text-color-dark)',
						'&[data-theme="dark"]': {
							backgroundColor: 'var(--background-color-dark)',
							color: 'var(--text-color-light)',
						},
						paddingLeft: '1rem',
						paddingRight: '1rem',
						borderTopRightRadius: '40px',
						borderBottomRightRadius: '40px',
					},
				}}
			>
				<div className='flex flex-col justify-between h-full py-6 px-2 '>
					<div className='flex justify-end'>
						<button className='px-3 py-1 border rounded-full' onClick={toggleDrawer(close)}>
							<Minus size={19} strokeWidth={2.5} />
						</button>
					</div>

					<div className='flex flex-col justify-start gap-4  '>
						<div className='flex border text-xl rounded-full px-3 py-1 items-center w-[400px] filter'>
							<input
								type='text'
								placeholder={translation[lang].procurar}
								value={searchTerm}
								onChange={handleSearchChange}
								className='flex-grow border-none bg-transparent mr-2 outline-none text-base leading-none input-placeholder'
							/>
							<Search size={20} />
						</div>
						<div>sg</div>
						<div>dsg</div>
						<div>
							<button onClick={() => setShowNewsletter(true)} className='uppercase px-3 py-1 border rounded-full font-bold'>
								NEWSLETTER
							</button>
						</div>
					</div>

					<div className='flex justify-end gap-2'>
						<button className='px-3 py-2 border rounded-full ' onClick={toggleDrawer(close)} aria-label='Toggle theme'>
							PROCURAR{' '}
						</button>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
