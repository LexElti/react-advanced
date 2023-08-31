import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    height: 250,
};
