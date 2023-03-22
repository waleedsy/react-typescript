import { Name } from "./personTypes";

type personListProps = {
  names: Name[] /*{
    firstName: string;
    lastName: string;
  }[];*/;
};

export const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
