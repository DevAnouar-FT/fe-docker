import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchIcon from '../SearchIcon';

import makeSetup from '../../Helpers/Testing/Utils/Settings';

const setup = makeSetup(SearchIcon, {
    onClick: jest.fn(),
});

describe('Consonant/SearchIco', () => {

    describe('Interaction with UI', () => {
        test('should call onClick', () => {
            const { props: { onClick } } = setup();

            const iconElement = screen.getByText('Click to search');

            fireEvent.click(iconElement);

            expect(onClick).toBeCalled();
        });
    });
});
