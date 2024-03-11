import {bindActions} from '../../bindActions';
import {actions} from './reducer';
import async from './async';

export const {
    setPreviewData,
    updateItem
} = bindActions(actions);

export const {
    getPreviewData,
} = bindActions(async);

