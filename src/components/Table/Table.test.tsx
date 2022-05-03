import { render, cleanup, screen } from "@testing-library/react";
import Table from ".";

const columns = ["column1", "column2"];

describe("Table component", () => {
  beforeEach(cleanup);

  test("Should render props", () => {
    render(
      <Table columns={columns}>
        <h3 data-testid="table-child">I'm a table child</h3>
      </Table>
    );

    const elements = screen.getAllByText(/column/i);
    const textChild = screen.getByTestId("table-child");

    expect(elements).toHaveLength(2);
    expect(textChild.textContent).toBe("I'm a table child");
  });

  test("Should render the length of childs", () => {
    render(
      <Table columns={columns}>
        <h1 data-testid="table-child">first child</h1>
        <h2 data-testid="table-child">second child</h2>
        <h3 data-testid="table-child">third child</h3>
      </Table>
    );

    const childs = screen.getAllByTestId("table-child");

    expect(childs).toHaveLength(3);
  });
});
