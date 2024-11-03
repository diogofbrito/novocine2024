import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export function FilterSearch({ films, onSearchChange, onToggleView, isListView  }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [selectedCountry, setSelectedCountry] = useState('');
	const [isYearOpen, setIsYearOpen] = useState(false);
	const [isCountryOpen, setIsCountryOpen] = useState(false);
	const [years, setYears] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const uniqueYears = Array.from(new Set(films.map(film => film.ano))).sort((a, b) => b - a);
		const uniqueCountries = Array.from(new Set(films.map(film => film.pais))).sort();

		setYears(uniqueYears);
		setCountries(uniqueCountries);
	}, [films]);

	const handleSearchChange = e => {
		const term = e.target.value;
		setSearchTerm(term);
		onSearchChange({ searchTerm: term, selectedYear, selectedCountry });
	};

	const handleYearClick = year => {
		const newYear = year === selectedYear ? '' : year;
		setSelectedYear(newYear);
		setIsYearOpen(false);
		onSearchChange({ searchTerm, selectedYear: newYear, selectedCountry });
	};

	const handleCountryClick = country => {
		const newCountry = country === selectedCountry ? '' : country;
		setSelectedCountry(newCountry);
		setIsCountryOpen(false);
		onSearchChange({ searchTerm, selectedYear, selectedCountry: newCountry });
	};

	return (
		<div className='z-50 flex  w-full justify-between items-center '>
			<div className='flex gap-4 '>
				<div className='flex border text-xl rounded-full px-3 py-1 items-center w-[400px] filter'>
					<input
						type='text'
						placeholder='Procurar'
						className='flex-grow border-none bg-transparent mr-2 outline-none text-base leading-none input-placeholder'
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					<Search size={20} />
				</div>

				<div className='relative'>
					<button
						className='border rounded-full  py-1 px-3 flex items-center w-[200px] justify-between hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] filter'
						onClick={() => setIsYearOpen(!isYearOpen)}
					>
						{selectedYear || 'Anos'} {isYearOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
					</button>

					{isYearOpen && (
						<ul className='list-none  mt-2 rounded-3xl border max-h-48 overflow-y-auto absolute w-full z-10 '>
							<li
								onClick={() => handleYearClick('')}
								className='
						 px-4 py-1 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer'
							>
								Todos os anos
							</li>
							{years.map(year => (
								<li key={year} onClick={() => handleYearClick(year)} className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer'>
									{year}
								</li>
							))}
						</ul>
					)}
				</div>

				<div className='relative'>
					<button
						className='border rounded-full py-1 px-3 flex items-center w-[200px] justify-between hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] filter'
						onClick={() => setIsCountryOpen(!isCountryOpen)}
					>
						{selectedCountry || 'Países'} {isCountryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
					</button>

					{isCountryOpen && (
						<ul className='list-none pt-0 mt-2 rounded-3xl  max-h-48 overflow-y-auto absolute w-full z-10 border '>
							<li onClick={() => handleCountryClick('')} className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer'>
								Todos os países
							</li>
							{countries.map(country => (
								<li key={country} onClick={() => handleCountryClick(country)} className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer'>
									{country}
								</li>
							))}
						</ul>
					)}
				</div>

				<div className='flex items-center '>
					<p>{films.length} Filmes</p>
				</div>
			</div>

			<button onClick={onToggleView} className='border rounded-full px-3 py-1 items-center transition-all duration-300 ease-in-out'>
				{isListView ? 'Galeria' : 'Lista'}
			</button>
		</div>
	);
}
