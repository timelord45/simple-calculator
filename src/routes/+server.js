// @ts-nocheck
import { json } from '@sveltejs/kit';

// server page handle post request 
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    let { total, inputNumber, operator} = await request.json();

    const calculate = () => { // perform basic arithmetic operations 
        if (inputNumber !== '' && operator !== '') {
            switch (operator) {
                case '+':
                    total = String(Number(total) + Number(inputNumber));
                    break;
                case '-':
                    total = total - inputNumber;
                    break;
                case '*':
                    total = total * inputNumber;
                    break;
                case '/':
                    total = total / inputNumber;
                    break;
                default:
                    break;
            }
            inputNumber = '';
            operator = '';
        }
    };
    calculate();
    return json({ total, inputNumber, operator })

}
