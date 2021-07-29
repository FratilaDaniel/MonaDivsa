import styled from "styled-components";

const ImageContainerDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, 1px);
    grid-template-columns: repeat(${props => props.columns}, 1px);
    box-shadow: 2px 3px 2px teal;
`;

export default ImageContainerDiv;
