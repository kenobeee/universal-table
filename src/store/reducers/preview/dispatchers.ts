import {bindActions} from '../../bindActions';
import {actions} from './reducer';
import async from './async';

export const {
    setPreviewData,
} = bindActions(actions);

export const {
    getPreviewData,
} = bindActions(async);

