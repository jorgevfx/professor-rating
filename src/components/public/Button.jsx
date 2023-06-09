import styled from "styled-components";

export const Button = ({text, width, height, fontSize, icon}) => {
    return (
        <CustomButton width={width} height={height} fontSize={fontSize}>
            {text}
            {icon && icon}
        </CustomButton>
    );
};

const CustomButton = styled.button`
    background: radial-gradient(
          circle at 0.2% 1.8%,
          rgb(255, 90, 8) 0%,
          rgb(88, 0, 0) 100.2%
    );
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: ${(props) => props.fontSize || "100%"};
    font-weight: 500;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "40px"};
    border-radius: 25px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    @media (min-width: 724px) {
        width: calc(${(props) => props.width || "100%"} * 1.2);
        height: calc(${(props) => props.height || "40px"} * 1.2);
        font-size: calc(${(props) => props.fontSize || "100%"} * 1.2);
    }
`;