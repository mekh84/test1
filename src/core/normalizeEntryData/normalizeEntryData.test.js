import { normalizeEntryData } from './normalizeEntryData';

const fakeNormalizeSenseData = ({ headword, pronunciation }) => senseData =>
	`${senseData} ${headword} ${pronunciation}`;

const headword = 'headword';
const pronunciation = 'pronunciation';

describe('normalizeEntryData', () => {
	it('correctly normalizes entryData', () => {
		const entryData = {
			senses: ['sense1', 'sense2']
		};

		expect(
			normalizeEntryData(fakeNormalizeSenseData, {headword, pronunciation}, entryData)
		).toEqual([
			'sense1 headword pronunciation',
			'sense2 headword pronunciation'
		]);
	});
});