// assets/controllers/index.js
import { Application } from '@hotwired/stimulus';
import ExampleController from './example_controller';

const application = Application.start();
application.register('example', ExampleController);

export default application;
