import { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button/ButtonCommon/Button';
import { EButtonSize } from '@/components/Button/ButtonCommon/Button.models';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const buttonMeta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

type ButtonStory = StoryObj<typeof buttonMeta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const Primary: ButtonStory = {
    args: {
        primary: true,
        children: 'Button',
    },
};

const Secondary: ButtonStory = {
    args: {
        children: 'Button',
    },
};

const Large: ButtonStory = {
    args: {
        size: EButtonSize.Large,
        children: 'Button',
    },
};

const Small: ButtonStory = {
    args: {
        size: EButtonSize.Small,
        children: 'Button',
    },
};

export default buttonMeta;
export { Primary, Secondary, Large, Small };
