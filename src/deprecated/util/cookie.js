export default {

    set(name, value, daysToExpire = 1, path = '/') {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + daysToExpire);

        document.cookie = `${name}=${value}; expires=${expirationDate.toString()};path=${path}`;
    },

    get(name) {
        let key, value, cookies = document.cookie.split(';');

        for (let i = 0, length = cookies.length; i < length; i++) {
            key = cookies[i].substr(0, cookies[i].indexOf('=')).replace(/^\s+|\s+$/g, '');
            value = cookies[i].substr(cookies[i].indexOf('=') + 1);

            if (key === name) {
                return decodeURI(value);
            }
        }
    },
}