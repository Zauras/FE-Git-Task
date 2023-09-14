import { Meta, StoryObj } from '@storybook/react';

import { EButtonSize } from '@/components/Button/CommonButton/Button.models';
import IconButton from '@/components/Button/IconButton/IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const buttonMeta = {
    title: 'Example/Button/IconButton',
    component: IconButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof IconButton>;

type ButtonStory = StoryObj<typeof buttonMeta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const Main: ButtonStory = {
    args: {},
};

const Large: ButtonStory = {
    args: {
        size: EButtonSize.Large,
    },
};

const Small: ButtonStory = {
    args: {
        size: EButtonSize.Small,
    },
};

export default buttonMeta;
export { Main, Large, Small };
