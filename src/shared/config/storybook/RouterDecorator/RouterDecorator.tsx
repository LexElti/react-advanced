import { Story, StoryContext } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getPathPattern } from '@/shared/const/router';

export const RouterDecorator = (
    StoryComponent: Story,
    options: StoryContext,
) => {
    const {
        parameters: { route = '/' },
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route
                    path={getPathPattern(route)}
                    element={<StoryComponent {...options} />}
                />
            </Routes>
        </MemoryRouter>
    );
};
