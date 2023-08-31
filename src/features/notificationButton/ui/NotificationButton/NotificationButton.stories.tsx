import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Подробное описание',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Подробное описание',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Подробное описание',
                },
            ],
        },
    ],
};
