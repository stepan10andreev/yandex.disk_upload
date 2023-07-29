// window можно убрать
// можно перенести в useEffect в компонент для создания спиннера
window.YaAuthSuggest.init({
    client_id: 'a78e495b76e9487f8929e2bf226ddb44',
    response_type: 'token',
    redirect_uri: 'http://localhost:3000/auth'
},
    'http://localhost:3000', {
    view: 'button',
    parentId: 'yandexAuthBtn',
    buttonView: 'main',
    buttonTheme: 'light',
    buttonSize: 'xxl',
    buttonBorderRadius: 5
}
)
    .then(function (result) {
        console.log('here')
        return result.handler()
    })
    .then(function (data) {
        console.log('Сообщение с токеном: ', data);
        localStorage.setItem('yandexToken', data.access_token);
    })
    .catch(function (error) {
        console.log('Что-то пошло не так: ', error);
    });


   
