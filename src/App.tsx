import "./App.css";
import { Button } from "./Components/Button";
import { Greet } from "./Components/Greet";
import { Heading } from "./Components/Heading";
import { Input } from "./Components/Input";
import { Oscar } from "./Components/Oscar";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/personList";
import { Status } from "./Components/Status";
import { Container } from "./Components/Container";

function App() {
  const personName = { first: "Bruce", last: "Wayne" };
  let inputTxt = prompt("Please enter status: ");

  const nameList = [
    { firstName: "Bruce", lastName: "Wayne" },
    { firstName: "Clark", lastName: "Edwin" },
    { firstName: "Princess", lastName: "Diana" },
  ];

  const validStatuses = ["loading", "error", "success"];
  let status: "loading" | "error" | "success" | "invalid" = "loading"; // default status value

  if (inputTxt === null) {
    status = "invalid";
  } else if (validStatuses.includes(inputTxt)) {
    status = inputTxt as "loading" | "error" | "success";
  } else {
    status = "invalid";
    alert("Please enter a valid status.");
  }

  return (
    <div className="App">
      {/* <Heading>Placeholder text</Heading> */}
      <Oscar>
        {" "}
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet isLoggedIn={true} messageCount={20} name={personName.first} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {status === "invalid" ? (
        <div>Error: Please enter a valid status.</div>
      ) : (
        <Status status={status} />
      )}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked.", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
