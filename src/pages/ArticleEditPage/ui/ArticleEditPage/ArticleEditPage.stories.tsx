import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage />
);

export const Normal = Template.bind({});
Normal.args = {};
