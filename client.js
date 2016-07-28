const express = require('express');
const request = require('request');

console.log('Welcome!\n');

const options = {
    baseUrl: 'http://localhost:3000',
    url: '/answer',
    method: 'GET',
    jason: true
};

request(options, (err, res, body) => {
    const answer = body;
    // console.log(answer);
    let chances = 6;

    console.log(`Please input your number(${chances}):`);
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        if (!validate(input.trim())) {
            console.log('Cannot input duplicate number!');
            console.log(`Please input your number (${chances}):`);
        }
        else {
            
            const compare = {
                baseUrl: 'http://localhost:3000',
                url: '/compare',
                method: 'POST',
                jason: true,
                body: {
                    input: input,
                    answer: answer
                }
            }
            request(compare, (err, res, body) => {
                if (body === '4A0B') {
                    console.log('Congratulations!');
                    process.exit();
                } else {
                    console.log(body);
                    chances--;
                    if (chances === 0) {
                        console.log('Game Over\n');
                        console.log(`Answer:${answer}`);
                        process.exit();
                    }
                    else {
                        console.log(`Please input your number(${chances}):`);
                    }
                }
            })
        }
    })
})


function validate(input) {
    if (input.length === 4) {
        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index
                && typeof parseInt(input) === 'number';
        });
    } else {
        return false;
    }
}