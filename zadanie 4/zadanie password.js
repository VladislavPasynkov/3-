let password = '1234-';

if (password.length >= 5 && password.includes('_') || password.includes('-')) {
    alert('Пароль надежный.')
    
} else {
    alert('Пароль не соответствует критериям, измените ваш пароль')
}