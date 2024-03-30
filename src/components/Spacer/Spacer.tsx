import styled, { css } from 'styled-components';

interface SpacerProps {
  axis?: string;
  size?: number;
}

function getHeight(
  { axis, size }: SpacerProps = { axis: 'vertical', size: 1 }
) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth(
  { axis, size }: SpacerProps = { axis: 'horizontal', size: 1 }
) {
  return axis === 'vertical' ? 1 : size;
}

const Wrapper = styled.span<SpacerProps>`
  ${(props) => {
    return css`
      display: block;
      width: ${getWidth({ axis: props.axis, size: props.size })}px;
      min-width: ${getWidth({ axis: props.axis, size: props.size })}px;
      height: ${getHeight({ axis: props.axis, size: props.size })}px;
      min-height: ${getHeight({ axis: props.axis, size: props.size })}px;
    `;
  }}
`;

function Spacer({
  axis = 'vertical',
  size = 1,
}: {
  axis?: string;
  size?: number;
}) {
  return <Wrapper axis={axis} size={size} />;
}

export default Spacer;
