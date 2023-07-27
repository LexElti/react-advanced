import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.useFakeTimers();
jest.spyOn(global, 'setInterval');
jest.spyOn(global, 'clearInterval');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchAritcleList loading and hasMore', async () => {
        const articlesPage = {
            page: 2,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: true,
            hasMore: true,
        };
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage,
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(setInterval).toHaveBeenCalledTimes(1);

        articlesPage.isLoading = false;

        jest.advanceTimersByTime(1000);

        expect(clearInterval).toHaveBeenCalledTimes(2);
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });
});
