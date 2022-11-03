let name = 'Agent';
let surname = '007';

let normalName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let normalSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

let proverkaName = normalName != name || normalSurname != surname ? 'Имя преобразилось' : 'Имя без изменений';

console.log(normalName, normalSurname, proverkaName);