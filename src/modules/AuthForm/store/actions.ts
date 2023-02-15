import { createAction } from '@utils/createAction';

export const AUTH_MODAL_IS_OPEN = 'AUTH_MODAL_IS_OPEN';

export const authModalIsOpen = createAction<boolean>(AUTH_MODAL_IS_OPEN);
