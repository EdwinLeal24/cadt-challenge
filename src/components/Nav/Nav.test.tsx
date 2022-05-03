import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import Nav from "./index";
import { DESIGNS_PATH } from "router/paths";

const label = "DESIGNS";

describe("Nav component", () => {
  test("should renders the nav component", () => {
    render(
      <BrowserRouter>
        <Nav path={DESIGNS_PATH} label={label} />
      </BrowserRouter>
    );

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test("should redirect and update history", () => {
    const history = createMemoryHistory();

    render(
      <Router location={""} navigator={history}>
        <Nav path={DESIGNS_PATH} label={label} />
      </Router>
    );

    userEvent.click(screen.getByText(/DESIGNS/));

    expect(history.location.pathname).toEqual("/designs");
  });
});
