<script>
// @ts-nocheck

    let total = '';
    let inputNumber = '';
    let operator = '';
    let answer = '';
  
    // http post request to the root file from the server
    async function calculateResult() {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ total, inputNumber, operator}),
        headers: {
          'content-type': 'application/json'
        }
      });
      const result = await response.json();
      answer = result.total;
    }
  
    // @ts-ignore
    //function for the number buttons 
    const numberClick = (clickValue) => {
        if (clickValue === 'C') {
          clear();
        } else if (clickValue === '=') {
          calculateResult();
        } else if (['+', '-', '*', '/'].includes(clickValue)) {
          setOperator(clickValue);
        } else {
            inputNumber += clickValue;
        }
      };
  
    // reset the inputed number
    const clear = () => {
      total = '';
      inputNumber = '';
      operator = '';
      answer = '';
    };
  
    // @ts-ignore
    //for the operation buttons 
    const setOperator = (newOperator) => {
      if (inputNumber !== '') {
        operator = newOperator;
        total = inputNumber;
        inputNumber = '';
      }
    };
  </script>
  
  <main>  
    <div class="calculator">
      <input class="input-1" value={total + operator + inputNumber} readonly/>
      <input class="input-2" value={answer} />
      <div class="buttons">
            <div class="operations">
                <button on:click={() => setOperator('+')}>+</button>
                <button on:click={() => setOperator('-')}>-</button>
                <button on:click={() => setOperator('*')}>x</button>
                <button on:click={() => setOperator('/')}>÷</button>
            </div>
            <div class="numbers">
                <div>
                    <button on:click={() => numberClick('7')}>7</button>
                    <button on:click={() => numberClick('8')}>8</button>
                    <button on:click={() => numberClick('9')}>9</button>
                </div>
                <div>
                    <button on:click={() => numberClick('4')}>4</button>
                    <button on:click={() => numberClick('5')}>5</button>
                    <button on:click={() => numberClick('6')}>6</button>
                </div>
                <div>
                    <button on:click={() => numberClick('1')}>1</button>
                    <button on:click={() => numberClick('2')}>2</button>
                    <button on:click={() => numberClick('3')}>3</button>
                </div>
                <div>
                    <button on:click={() => clear()}>C</button>
                    <button on:click={() => numberClick('0')}>0</button>
                </div>
            </div>
            <div class="equal">
               <button on:click={() => calculateResult()}>=</button>
            </div>      
      </div>
    </div>
  </main>
  <style>   
   .calculator {
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
		width:300px;
        height:400px;
		border:1px solid #eee;
		box-shadow:2px 2px 2px #eee;
		padding:10px;
	}
	.calculator .input-1 {
		width:98%;
        height:10%;
		outline:none;
		text-align:right;
		font-size:30px;
	}
    .calculator .input-2 {
		width:98%;
        height:20%;
		outline:none;
		text-align:right;
		font-size:50px;
	}
	.calculator .buttons {
		display:flex;
        width: 100%;
        height: 35%;
		flex-wrap:wrap;
        justify-content:space-between;
        
	}
	.calculator .buttons .operations {
		display:flex;     
		width: 100%;
        height: 35%;
	}
	.calculator .buttons .operations button {
        height:100%;
		width:100%;
        justify-content:space-between;
	}
	.calculator .buttons .numbers {
		width: 75%;
        height: 80%;
	}
	.calculator .buttons .numbers > div {
		display:flex;
		justify-content:space-between;
        width: 100%;
        height: 45%;
	}
	.calculator .buttons .numbers > div button {
		width:50%;
	}
	.calculator .equal {
		flex:1;
        width:95%;
	}
	.calculator .equal button {
		margin-left:5%;
		width:95%;
		height:180%;
		background:#00acee;
		color:#eee;
	}
	.calculator button {
		outline:none;
	}
  </style>
  
  
  
  