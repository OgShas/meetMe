import { startStimulusApp } from '@symfony/stimulus-bridge';
import controllers from './controllers.json';

export const app = startStimulusApp(require.context(
    './controllers',
    true,
    /\.[jt]sx?$/
));

