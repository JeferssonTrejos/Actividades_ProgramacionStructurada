//EJEMPLO OPERADOR 
const age = 19;

age > 18
    ? console.log('Es mayor de edad ')
    : console.log('Es menor de edad');

const canvate = age > 18 ? 'Puede votar' : 'No puede votar';

console.log(canvate);

//EJEMPLO FOR IN

const colors = ['rojo', 'azul', 'verde', 'amaiullo', 'negro'];

for (const index in colors) {
    console.log(colors[index]);
};

const colorsObject = {
    color1: 'Blanco',
    color2: 'Azul',
    color3: 'Morado'
}

for (const key in colorsObject) {
    console.log(colorsObject[key]);
};




const companies = [
    { name: 'company one', category: 'Finance', start: '1981', end: '2004' },
    { name: 'company two', category: 'Retail', start: '1992', end: '2008' },
    { name: 'company three', category: 'Auto', start: '1999', end: '2007' },
    { name: 'company four', category: 'Tec', start: '1989', end: '2010' },
    { name: 'company five', category: 'Finance', start: '1989', end: '2010'},
    { name: 'company six', category: 'Tec', start: '1989', end: '2010' },
    { name: 'company seven', category: 'Tec', start: '1989', end: '2010' }
];

const companiesName = companies.map(company => company.name);

console.log(companiesName);

const companiesNameAndCategories = companies.map(company =>{
    return{
        name: company.name,
        categories: company.category
    }
});

console.log(companiesNameAndCategories);