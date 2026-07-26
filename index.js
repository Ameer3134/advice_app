const adviceId = document.querySelector(".adviceId");

const displayAdvice = document.querySelector(".advice");

const btn = document.querySelector(".btn");


async function getAdvice () {

    const url = 'https://api.adviceslip.com/advice';

    try{

        const response = await fetch(url);
        if(!response.ok) {
            throw new Error (`Response status: ${response.status}`)
    }

const adviceData = await response.json();
displayAdvice.textContent = adviceData.slip.advice
adviceId.textContent = `ADVICE: ${adviceData.slip.id}`

}catch(error)  {
    console.error(error.message)
    }

    
}

// getAdvice()
btn.addEventListener("click", getAdvice
 )