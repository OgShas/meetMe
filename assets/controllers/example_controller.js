// assets/controllers/example_controller.js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log('Stimulus контролерът е свързан!');
        this.element.textContent += ' (Stimulus е активен)';
    }
}
