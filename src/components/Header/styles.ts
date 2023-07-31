import styled  from "styled-components"

export const Container = styled.div`
    font-size: 1.7rem;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`;