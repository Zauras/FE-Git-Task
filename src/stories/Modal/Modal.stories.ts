import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const modalMeta = {
    title: 'Example/Modal',
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Modal>;

type ModalStory = StoryObj<typeof modalMeta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const Primary: ModalStory = {
    args: {
        isOpen: true,
        modalTitle: 'Modal Title',
        footerChildren: 'Modal Footer content',
        children: 'Modal content',
    },
};

export default modalMeta;
export { Primary };
