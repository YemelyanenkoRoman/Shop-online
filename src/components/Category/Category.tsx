interface CategoryProps {
  name: string;
  id: string | number;
}

export const Category = (props: CategoryProps) => {
  return (
    <ul>
      <li key={props.id}>
        <a href="URL">{props.name}</a>
        <p>id: {props.id}</p>
      </li>
    </ul>
  );
};
