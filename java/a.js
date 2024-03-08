const jwt = require('jsonwebtoken');

const payload = {
    userId: '123456',
    username: 'exampleuser'
};

const secretKey = 'your_secret_key';

const token = jwt.sign(payload, secretKey);
console.log(token);
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error('Token verification failed');
    } else {
        console.log('Token verified successfully');
        console.log(decoded); // Decoded payload
    }
});
