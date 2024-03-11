import {bindActions} from '../../bindActions';
import {actions} from './reducer';

export const {
    setPreviewData,
} = bindActions(actions);
