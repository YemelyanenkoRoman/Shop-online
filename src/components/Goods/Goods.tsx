// Глупый компонент, может получать данные только через пропс

import styled from 'styled-components';

interface GoodsProps {
  name: string;
  id: string;
  price: number;
  description: string;
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
        <p>{props.name}</p>
        <p>{props.id}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <button
          className="add"
          onClick={() => {
            console.log(props.id);
          }}
          id={props.id}
        >
          Put in shopping cart
        </button>
      </GoodsCard>
    </ul>
  );
};
