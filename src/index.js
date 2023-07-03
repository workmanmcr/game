import p5 from 'p5';
import './css/fonts.css';
import './css/styles.css';

// Refer variables from .env => ${process.env.varName}

const container = document.getElementById('app');
setApp({ width: window.innerWidth, height: window.innerHeight });
new p5(sketch, container);