import {DiContainer} from './di-container/di-container';
import {TYPES} from './di-container/types';
import {App} from './server/app';

DiContainer.get<App>(TYPES.App).start();
