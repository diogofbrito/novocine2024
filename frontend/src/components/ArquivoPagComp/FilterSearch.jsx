import React, { useEffect, useState, useMemo } from 'react';
import Select from 'react-select';
import { useDebounce } from 'use-debounce';
import { Search } from 'lucide-react';
import { useLang } from '../LangProvider';
import { translation } from '../../Lang/translation.js';
import { FilterSearchMobile } from '../Mobile/FilterSearchMobile';

export function FilterSearch({ searchTerm, setSearchTerm, selectedYear, setSelectedYear, selectedCountry, setSelectedCountry, films, onToggleView, isListView }) {
	const [years, setYears] = useState([]);
	const [countries, setCountries] = useState([]);

	const { lang } = useLang();

	const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

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

	const filteredFilms = films.filter(film => {
		return (
			(!debouncedSearchTerm || film.nome.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) &&
			(!selectedYear || film.ano === selectedYear) &&
			(!selectedCountry || film.pais === selectedCountry)
		);
	});

	const handleYearChange = selectedOption => {
		setSelectedYear(selectedOption ? selectedOption.value : '');
	};

	const handleCountryChange = selectedOption => {
		setSelectedCountry(selectedOption ? selectedOption.value : '');
	};

	const handleSearchChange = e => {
		setSearchTerm(e.target.value);
	};

	const getBackgroundColorByTheme = () => {
		const theme = document.documentElement.getAttribute('data-theme');
		return theme === 'light' ? 'var(--background-color-light)' : 'var(--background-color-dark)';
	};

	const getColorByTheme = () => {
		const theme = document.documentElement.getAttribute('data-theme');
		return theme === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)';
	};

	const customSelectStyles = {
		control: provided => ({
			...provided,
			border: '1px solid white',
			borderRadius: '99px',
			boxShadow: 'none',
			backgroundColor: 'transparent',
			width: '200px',
			'&:hover': {
				color: getColorByTheme(),
			},
		}),
		placeholder: provided => ({
			...provided,
			color: getColorByTheme(),
		}),
		singleValue: provided => ({
			...provided,
			color: getColorByTheme(),
		}),
		dropdownIndicator: provided => ({
			...provided,
			color: getColorByTheme(),
			paddingLeft: '8px',
			'&:hover': {
				color: 'white',
			},
		}),
		clearIndicator: provided => ({
			...provided,
			color: getColorByTheme(),
		}),
		menu: provided => ({
			...provided,
			borderRadius: '1.5rem',
			boxShadow: 'none',
			border: '1px solid ',
			borderColor: getColorByTheme(),
			backgroundColor: getBackgroundColorByTheme(),
			maxHeight: '300px',
			overflowY: 'auto',
			zIndex: 99999,
		}),

		indicatorSeparator: provided => ({
			...provided,
			backgroundColor: getColorByTheme(),
		}),
		option: provided => ({
			...provided,
			padding: '10px 20px',
			color: getColorByTheme(),
			backgroundColor: 'transparent',
			'&:hover': {
				color: '#e0e0e0',
				backgroundColor: 'transparent',
			},
		}),
	};

	
	return (
		<>
			<div className='z-50 flex w-full justify-between items-center iphone:hidden'>
				<div className='flex gap-4'>
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

					<Select
						options={years}
						onChange={handleYearChange}
						placeholder={translation[lang].selecAnos}
						isClearable
						isSearchable={false}
						value={years.find(year => year.value === selectedYear)}
						styles={customSelectStyles}
					
					/>

					<Select
						options={countries}
						onChange={handleCountryChange}
						placeholder={translation[lang].selecPais}
						isClearable
						isSearchable={false}
						value={countries.find(country => country.value === selectedCountry)}
						styles={customSelectStyles}
					/>

					<div className='flex items-center'>
						<p>
							{filteredFilms.length} {translation[lang].filmesDispo}
						</p>
					</div>
				</div>

				<button onClick={onToggleView} className='border rounded-full px-3 py-1 items-center transition-all duration-300 ease-in-out'>
					{isListView ? translation[lang].galeria : translation[lang].lista}
				</button>
			</div>

			<FilterSearchMobile
				translation={translation}
				lang={lang}
				films={filteredFilms}
				onToggleView={onToggleView}
				searchTerm={searchTerm}
				handleSearchChange={handleSearchChange}
				selectedYear={selectedYear}
				handleYearChange={handleYearChange}
				selectedCountry={selectedCountry}
				handleCountryChange={handleCountryChange}
				years={years}
				customSelectStyles={customSelectStyles}
				countries={countries}
				isListView={isListView}
			/>
		</>
	);
}
