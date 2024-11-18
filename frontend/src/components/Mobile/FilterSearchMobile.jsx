import React from 'react';
import { Search } from 'lucide-react';


export function FilterSearchMobile({
	films,
	lang,
	translation,
	isListView,
	onToggleView,
	searchTerm,
	handleSearchChange

}) {

	return (
		<div className='hidden iphone:block '>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col gap-4  w-full'>
					<div className='flex gap-3 items-center'>
						<div className='flex border text-xl rounded-full px-3 py-1 items-center filter flex-1'>
							<input
								type='text'
								placeholder={translation[lang].procurar}
								value={searchTerm}
								onChange={handleSearchChange}
								className='flex-grow border-none bg-transparent mr-2 outline-none text-base leading-none input-placeholder'
							/>
							<Search size={20} />
						</div>
						<div className='flex items-center '>
							{films.length} {translation[lang].filmesDispo}
						</div>
					</div>

					<div className='flex justify-center'>
						<button onClick={onToggleView} className='border rounded-full px-3 py-1 items-center transition-all duration-300 ease-in-out'>
							{isListView ? translation[lang].galeria : translation[lang].lista}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
