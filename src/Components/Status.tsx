interface Statusprops {
  status: "loading" | "success" | "error";
}

export const Status = (props: Statusprops) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "error fetching data";
  } else {
    message = "Unknown status";
  }

  return (
    <div>
      <h2> Status - {message} </h2>
    </div>
  );
};
