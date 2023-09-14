import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/CommonButton/Button';

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
const MinContentPreview: ModalStory = {
    args: {
        isOpen: true,
        modalTitle: 'Modal Title',
        children: 'Modal content',
        footerChildren: 'Modal Footer content',
    },
};

const MidContentPreview: ModalStory = {
    args: {
        isOpen: true,
        modalTitle: 'Modal Title',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        footerChildren: 'Modal Footer content',
    },
};

const OverflowContentPreview: ModalStory = {
    args: {
        isOpen: true,
        modalTitle: 'Modal Title',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin. Sit amet tellus cras adipiscing enim. Diam volutpat commodo sed egestas egestas. Tristique senectus et netus et malesuada. Sed cras ornare arcu dui vivamus. Nulla facilisi etiam dignissim diam. Augue neque gravida in fermentum et sollicitudin ac. In aliquam sem fringilla ut morbi tincidunt. Vel pharetra vel turpis nunc eget lorem dolor sed. Viverra accumsan in nisl nisi scelerisque eu. Scelerisque in dictum non consectetur a erat nam. Morbi tincidunt ornare massa eget egestas purus viverra. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Cras tincidunt lobortis feugiat vivamus at. Pharetra diam sit amet nisl. Amet luctus venenatis lectus magna fringilla urna porttitor. Varius quam quisque id diam vel quam elementum pulvinar. Mattis aliquam faucibus purus in massa tempor nec feugiat. Aliquet nec ullamcorper sit amet risus.\n' +
            '\n' +
            'Et malesuada fames ac turpis egestas sed. Sed risus ultricies tristique nulla aliquet. Ornare massa eget egestas purus viverra accumsan in nisl. Pharetra diam sit amet nisl suscipit. Consequat ac felis donec et odio pellentesque. Quis vel eros donec ac. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Rhoncus mattis rhoncus urna neque viverra justo. Consectetur a erat nam at lectus urna duis convallis convallis. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Consectetur adipiscing elit duis tristique sollicitudin nibh. Eleifend quam adipiscing vitae proin sagittis nisl. Enim nunc faucibus a pellentesque. Etiam non quam lacus suspendisse faucibus interdum. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.\n' +
            '\n' +
            'Tellus at urna condimentum mattis pellentesque id nibh. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Magna fermentum iaculis eu non. Amet dictum sit amet justo donec enim diam vulputate ut. Consectetur a erat nam at. Ut placerat orci nulla pellentesque dignissim. Sem et tortor consequat id porta nibh. Non tellus orci ac auctor. Morbi tincidunt ornare massa eget egestas purus viverra accumsan.\n' +
            '\n' +
            'Nulla facilisi cras fermentum odio eu feugiat pretium. In massa tempor nec feugiat nisl pretium fusce. Ultrices gravida dictum fusce ut. Commodo elit at imperdiet dui accumsan sit. Libero justo laoreet sit amet cursus. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Vitae et leo duis ut diam quam nulla porttitor. Sit amet commodo nulla facilisi nullam vehicula ipsum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Enim nulla aliquet porttitor lacus. Massa sapien faucibus et molestie ac feugiat. Arcu non sodales neque sodales ut etiam sit amet nisl. Egestas pretium aenean pharetra magna. Orci phasellus egestas tellus rutrum. Sit amet justo donec enim diam vulputate ut pharetra sit. Scelerisque varius morbi enim nunc. Quis hendrerit dolor magna eget est. Lacus suspendisse faucibus interdum posuere lorem. Condimentum mattis pellentesque id nibh tortor. Viverra adipiscing at in tellus integer feugiat.\n' +
            '\n' +
            'Sed arcu non odio euismod lacinia at quis risus. Nibh cras pulvinar mattis nunc. Eget arcu dictum varius duis at consectetur lorem donec massa. Risus viverra adipiscing at in tellus integer. Non nisi est sit amet. In iaculis nunc sed augue lacus viverra vitae congue. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet nisl purus in mollis nunc sed id. Montes nascetur ridiculus mus mauris vitae ultricies. Aliquam nulla facilisi cras fermentum. Faucibus turpis in eu mi.\n' +
            '\n' +
            'Sociis natoque penatibus et magnis dis. Amet risus nullam eget felis eget nunc lobortis mattis. Iaculis at erat pellentesque adipiscing. Libero volutpat sed cras ornare arcu dui. Tincidunt dui ut ornare lectus sit amet. Tellus orci ac auctor augue mauris augue. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Posuere morbi leo urna molestie at elementum eu facilisis. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Ornare massa eget egestas purus viverra accumsan. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Diam vulputate ut pharetra sit amet aliquam id diam. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.\n' +
            '\n' +
            'Sapien eget mi proin sed libero enim. Nibh tellus molestie nunc non blandit massa enim nec dui. Imperdiet proin fermentum leo vel orci porta non pulvinar. Sapien et ligula ullamcorper malesuada proin libero nunc. At ultrices mi tempus imperdiet nulla malesuada. Sem integer vitae justo eget magna fermentum iaculis eu non. Sed id semper risus in hendrerit gravida rutrum quisque. A lacus vestibulum sed arcu non odio euismod lacinia at. Ultrices mi tempus imperdiet nulla malesuada. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Praesent elementum facilisis leo vel fringilla est ullamcorper.\n' +
            '\n' +
            'Arcu cursus euismod quis viverra nibh cras pulvinar. Ipsum dolor sit amet consectetur adipiscing elit ut. Dolor sit amet consectetur adipiscing elit ut. Sagittis vitae et leo duis ut diam quam nulla. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Maecenas sed enim ut sem viverra. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Ipsum dolor sit amet consectetur adipiscing elit. Diam in arcu cursus euismod quis. Ultricies leo integer malesuada nunc vel risus. Nulla aliquet enim tortor at auctor urna. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Faucibus scelerisque eleifend donec pretium vulputate sapien. Hendrerit gravida rutrum quisque non tellus orci ac.\n' +
            '\n' +
            'Mollis nunc sed id semper risus in hendrerit gravida rutrum. Pharetra diam sit amet nisl suscipit adipiscing. Tellus mauris a diam maecenas. Elementum facilisis leo vel fringilla est. Laoreet sit amet cursus sit amet. In tellus integer feugiat scelerisque varius morbi enim nunc. Nam aliquam sem et tortor consequat. Aliquet nec ullamcorper sit amet risus. Tortor posuere ac ut consequat semper viverra nam libero. Pellentesque habitant morbi tristique senectus. A iaculis at erat pellentesque adipiscing commodo elit at.\n' +
            '\n' +
            'Eros in cursus turpis massa tincidunt dui ut ornare. Massa tincidunt dui ut ornare lectus sit. Nisi quis eleifend quam adipiscing vitae. Tincidunt vitae semper quis lectus nulla at volutpat. Sodales neque sodales ut etiam sit amet. Ac tortor vitae purus faucibus. Tincidunt praesent semper feugiat nibh. Mauris augue neque gravida in fermentum et sollicitudin. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Maecenas accumsan lacus vel facilisis volutpat est velit. Commodo ullamcorper a lacus vestibulum. Feugiat in ante metus dictum at tempor. Laoreet sit amet cursus sit amet dictum sit amet. Diam ut venenatis tellus in metus vulputate.',
        footerChildren: (
            <>
                <Button isPrimary>Submit</Button>
                <Button>Cancel</Button>
            </>
        ),
    },
};

export default modalMeta;
export { MinContentPreview, MidContentPreview, OverflowContentPreview };
