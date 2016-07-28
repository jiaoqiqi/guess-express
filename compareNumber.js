class CompareNumber {
    static compareNumber(answer, input) {
        const answerArray = answer.split('');
        const inputArray = input.split('');

        let a = 0;
        let b = 0;

        answerArray.map(answer => {
            const input = inputArray.find(input => answer === input);

            if (input) {
                const answerPosition = answerArray.indexOf(answer);
                const inputPosition = inputArray.indexOf(input);

                answerPosition === inputPosition ? a++ : b++;
            }
        });

        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;