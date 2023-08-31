import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    decorators: [
        (Story) => (
            <div style={{ paddingTop: 200 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
