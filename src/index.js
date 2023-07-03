import p5 from 'p5';
import { app, sketch } from './js/ui/sketch';
import './css/fonts.css';
import './css/styles.css';

// Refer variables from .env => ${process.env.varName}

const container = document.getElementById('app');
app.setView({ width: window.innerWidth, height: window.innerHeight });
new p5(sketch, container);