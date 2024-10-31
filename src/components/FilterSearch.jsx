import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export function FilterSearch({ films, onSearchChange, onToggleView }) {
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
		<div className='flex flex-row gap-4 mb-12 w-2/3'>
			<div className='flex border text-xl rounded-full h-full px-4 py-2 items-center w-1/3'>
				<input
					type='text'
					placeholder='Procurar'
					className='flex-grow border-none bg-transparent p-0 mr-2 outline-none text-base leading-none search h-full'
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<Search size={20} />
			</div>

			<div className='relative'>
				<button className='border rounded-full leading-3 py-2.5 px-4 flex items-center w-[120px] justify-between' onClick={() => setIsYearOpen(!isYearOpen)}>
					{selectedYear || 'Anos'} {isYearOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
				</button>

				{isYearOpen && (
					<ul className='list-none py-2 mt-2 rounded-3xl border bg-[#FD6CB4] max-h-48 overflow-y-auto absolute w-full z-10 '>
						<li
							onClick={() => handleYearClick('')}
							className='
						 px-4 hover:bg-gray-400 cursor-pointer'
						>
							Anos
						</li>
						{years.map(year => (
							<li key={year} onClick={() => handleYearClick(year)} className='py-1 px-4 hover:bg-gray-400 cursor-pointer'>
								{year}
							</li>
						))}
					</ul>
				)}
			</div>

			<div className='relative'>
				<button className='border rounded-full leading-3 py-2.5 px-4 flex items-center w-[200px] justify-between' onClick={() => setIsCountryOpen(!isCountryOpen)}>
					{selectedCountry || 'Países'} {isCountryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
				</button>

				{isCountryOpen && (
					<ul className='list-none pt-2 mt-2 rounded-3xl  max-h-48 overflow-y-auto absolute w-full z-10 border bg-[#FD6CB4]'>
						<li onClick={() => handleCountryClick('')} className='py-1 px-4 hover:bg-gray-400 cursor-pointer'>
							Todos os Países
						</li>
						{countries.map(country => (
							<li key={country} onClick={() => handleCountryClick(country)} className='py-1 px-4 hover:bg-gray-400 cursor-pointer'>
								{country}
							</li>
						))}
					</ul>
				)}
			</div>

			<div className='flex items-center'>
				<p>{films.length} filmes</p>
			</div>

			<button onClick={onToggleView} className='border rounded-full py-2 px-4 transition duration-300 ease-in-out'>
				lista
			</button>
		</div>
	);
}
