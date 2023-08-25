import React from 'react';
import { render, screen } from '@testing-library/react';

import RepositoryList from '../RepositoryList';

test('renders no result screen if list is empty', () => {
    render(<RepositoryList repoList={[]} onRepoClick={() => null} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
