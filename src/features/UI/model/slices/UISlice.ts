import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

interface ScrollPosition {
    path: string;
    position: number;
}

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<ScrollPosition>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
