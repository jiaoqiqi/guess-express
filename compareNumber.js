class CompareNumber {

    static compareNumber(answer, input) {

        console.log(answer);
        const answerArray = answer.toString().split('');
        const inputArray = input.split('');

        let a = 0;
        let b = 0;


        inputArray.map(input=> {
            
            const answer = answerArray.find(answer=>answer === input);
            if (answer) {
                answerArray.indexOf(answer) === inputArray.indexOf(input) ? a++ : b++
            }
        });
        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;