import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

let timerId: NodeJS.Timer;

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        let hasMore = getArticlesPageHasMore(getState());
        let isLoading = getArticlesPageIsLoading(getState());

        const fetchNextPage = () => {
            const page = getArticlesPageNum(getState());

            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        };

        if (!hasMore) {
            return;
        }
        if (!isLoading) {
            fetchNextPage();
            return;
        }

        if (timerId) {
            clearInterval(timerId);
        }

        timerId = setInterval(() => {
            hasMore = getArticlesPageHasMore(getState());
            isLoading = getArticlesPageIsLoading(getState());

            if (!hasMore) {
                clearInterval(timerId);
                return;
            }
            if (!isLoading) {
                clearInterval(timerId);
                fetchNextPage();
            }
        }, 500);
    },
);
