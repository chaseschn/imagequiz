import { flowers } from "../../../imagequiz-backend/temp/flowers";

let backendAddress = 'http://localhost:4002';

let apiAccess = {
    addCustomer: (name, email, password) => {
        fetch(`${backendAddress}/register`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x;
        });
    },
    Login: (props) => {
        fetch(`${backendAddress}/login`, {
            method: '/login',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(l => {
            console.log(l);
            return(l);
        });
    },
    getFlowers: () => {
        fetch(`${backendAddress}/flowers`,{
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
        }})
        .then(y => y.json())
        .then(y => {
            console.log(y);
            return y;
        });
    },
    getQuiz: (id) => {
        fetch(`${backendAddress}/quiz/:id`,{
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(z => z.json())
        .then(z => {
            console.log(z);
            return(z);
        });
    },
    addScores: (quizTaker, quizName, score) => {
        fetch(`${backendAddress}/score`,{
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quizTaker, quizName, score})
        })
        .then(s => s.json())
        .then(s => {
            console.log(s);
            return(s);
        });
    }
}

export default apiAccess;