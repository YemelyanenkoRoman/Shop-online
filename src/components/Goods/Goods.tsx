// Глупый компонент, может получать данные только через пропс

import styled from 'styled-components';

interface GoodsProps {
  name: string;
  id: string | number;
}

const GoodsCard = styled.li`
  border: 1px solid black;
  max-width: 200px;
  margin: 20px;
`;

export const Goods = (props: GoodsProps) => {
  return (
    <ul>
      <GoodsCard key={props.id}>
        <a>{props.name}</a>
        <p>{props.id}</p>
      </GoodsCard>
    </ul>
  );
};
