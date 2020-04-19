import Header from "./components/Header";
import './scss/app.scss';

// console.log('It works!')

const app = () => {
    document.getElementById('header').innerHTML = Header();
}

// Init app
app();
