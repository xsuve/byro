export interface Country {
  code: string;
  name: string;
  translation: string;
}

export const countryList: Country[] = [
  {
    code: 'ROU',
    name: 'Romania',
    translation: 'countries:ROU',
  },
  {
    code: 'DEU',
    name: 'Germany',
    translation: 'countries:DEU',
  },
  {
    code: 'HUN',
    name: 'Hungary',
    translation: 'countries:HUN',
  },
];
