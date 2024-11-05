/* import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import sanityClient from '../../SanityClient';

export function FilterSearch({ searchTerm, setSearchTerm, selectedYear, setSelectedYear, selectedCountry, setSelectedCountry, films, onToggleView, isListView }) {
	const [isYearOpen, setIsYearOpen] = useState(false);
	const [isCountryOpen, setIsCountryOpen] = useState(false);
	const [years, setYears] = useState([]);
	const [countries, setCountries] = useState([]);
	const [fiYears, setFiYears] = useState([]);
	const [fiCountries, setFiCountries] = useState([]);

	useEffect(() => {
		const uniqueYears = Array.from(new Set(films.map(film => film.ano))).sort((a, b) => b - a);
		const uniqueCountries = Array.from(new Set(films.map(film => film.pais))).sort();

		setFiYears(uniqueYears);
		setFiCountries(uniqueCountries);

		const getMetaData = () =>
			sanityClient.fetch(`
				{
					"years": array::unique(*[
						  _type == "filme" 
						  && !(_id in path("drafts.**"))
					].ano),
					"countries": array::unique(*[
						  _type == "filme" 
						  && !(_id in path("drafts.**"))
					].pais),
				}
			`);

		getMetaData().then(({ years, countries }) => {
			if (!years || !countries) {
				throw new Error('No years, no countries list');
			}
			setYears(years.sort((a, b) => b - a));
			setCountries(countries.sort());
		});
	}, [films]);

	const handleSearchChange = e => {
		const term = e.target.value;
		setSearchTerm(term);
	};

	const handleYearClick = year => {
		const newYear = year === selectedYear ? '' : year;
		setSelectedYear(newYear);
		setIsYearOpen(false);
	};

	const handleYearClickReset = year => {
		handleYearClick(year);
		setSelectedCountry('');
		setSearchTerm('');
	};

	const handleCountryClick = country => {
		const newCountry = country === selectedCountry ? '' : country;
		setSelectedCountry(newCountry);
		setIsCountryOpen(false);
	};

	const handleCountryClickReset = year => {
		handleCountryClick(year);
		setSelectedYear('');
		setSearchTerm('');
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
							{fiYears.map(year => (
								<li key={year} onClick={() => handleYearClick(year)} className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer'>
									{year}
								</li>
							))}
							<hr />
							{years
								.filter(year => !fiYears.includes(year))
								.map(year => (
									<li key={year} onClick={() => handleYearClickReset(year)} className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer opacity-50'>
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
							{fiCountries.map(country => (
								<li key={country} onClick={() => handleCountryClick(country)} className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer'>
									{country}
								</li>
							))}
							<hr />
							{countries
								.filter(country => !fiCountries.includes(country))
								.map(country => (
									<li
										key={country}
										onClick={() => handleCountryClickReset(country)}
										className='py-1 px-4 hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] cursor-pointer opacity-50'
									>
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
 */




import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Search } from 'lucide-react';


export function FilterSearch({ searchTerm, setSearchTerm, selectedYear, setSelectedYear, selectedCountry, setSelectedCountry, films, onToggleView, isListView }) {
	const [years, setYears] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const uniqueYears = Array.from(new Set(films.map(film => film.ano)))
			.sort((a, b) => b - a)
			.map(year => ({ value: year, label: year }));
		const uniqueCountries = Array.from(new Set(films.map(film => film.pais)))
			.sort()
			.map(country => ({ value: country, label: country }));
		setYears(uniqueYears);
		setCountries(uniqueCountries);
	}, [films]);

	const handleYearChange = selectedOption => {
		setSelectedYear(selectedOption ? selectedOption.value : ''); 
	};

	const handleCountryChange = selectedOption => {
		setSelectedCountry(selectedOption ? selectedOption.value : ''); 
	};

	const handleSearchChange = e => {
		setSearchTerm(e.target.value);
	};

	const customSelectStyles = {
	control: (provided, state) => ({
		...provided,
		border: '1px solid white', // Borda preta ou da cor desejada
		borderRadius: '99px', // Deixa os cantos arredondados
		boxShadow: 'none', // Remove a sombra padrão do select
		'&:hover': {
			backgroundColor: '', // Cor da borda no hover
		},
		backgroundColor: 'transparent',
		width: '200px',
	}),
	placeholder: provided => ({
		...provided,
		color: 'white', // Cor do texto do placeholder
	}),
	singleValue: provided => ({
		...provided,
		color: 'white', // Cor do texto selecionado
	}),
	dropdownIndicator: provided => ({
		...provided,
		color: 'white', // Cor do ícone de dropdown
		paddingLeft: '8px', // Remove espaçamento interno adicional
		'&:hover': {
			color: 'white',
		},
	}),
	clearIndicator: provided => ({
		...provided,
		paddingRight: '10px',
		color: 'white',
	}),
	menu: provided => ({
		...provided,
		borderRadius: '1.5rem', // Arredondamento das bordas do menu
		boxShadow: 'none', // Remove sombra do menu
		border: '1px solid #ddd',
		backgroundColor: 'pink', // Borda do menu dropdown
	}),

	indicatorSeparator: provided => ({
		...provided,
		backgroundColor: 'white',
	}),
	option: (provided, state) => ({
		...provided,
		padding: '10px 20px', // Espaçamento interno das opções
		color: 'white',
		'&:hover': {
			color: '#e0e0e0',
			backgroundColor: 'transparent', // Cor de fundo no hover
		},
	}),
};

	return (
		<div className='z-50 flex  w-full justify-between items-center '>
			<div className='flex gap-4 '>
				<div className='flex border text-xl rounded-full px-3 py-1 items-center w-[400px] filter'>
					<input
						type='text'
						placeholder='Procurar'
						value={searchTerm}
						onChange={handleSearchChange}
						className='flex-grow border-none bg-transparent mr-2 outline-none text-base leading-none input-placeholder'
					/>
					<Search size={20} />
				</div>

				<Select
					options={years}
					onChange={handleYearChange}
					placeholder='Selecionar Anos'
					isClearable
					isSearchable={false}
					value={years.find(year => year.value === selectedYear)}
					styles={customSelectStyles}
					classNamePrefix='react-select'
				/>

				<Select
					options={countries}
					onChange={handleCountryChange}
					placeholder='Selecionar Países'
					isClearable
					isSearchable={false}
					value={countries.find(country => country.value === selectedCountry)}
					styles={customSelectStyles}
				/>

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
