import styled from '@emotion/styled';

const UserPanelContainerSC = styled.div`
    margin: 1rem 0;
    padding: 0.75rem 1.5rem;

    border: 2px solid ${(props) => props.theme.colors.borderGray};
    border-radius: 15px;

    .log-in-panel-container {
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: center;

        margin-right: 1rem;

        .log-in-form-container {
            display: flex;
            gap: 1.5rem;
        }
    }

    .user-profile-container {
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: center;

        margin-right: 1rem;

        .user-greeting {
            font-weight: 700;
        }
    }
`;

export default UserPanelContainerSC;
