// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './bootstrap.js';

//stimulus
import './controllers';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExampleComponent from './react/ExampleComponent';

const container = document.getElementById('react-root');
if (container) {
    const root = createRoot(container);
    root.render(<ExampleComponent />);
}
