import axios from "axios";
import { render, screen } from "@testing-library/react";
import Designs from "./index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeDesigns = [
  {
    courses: 111,
    id: 20,
    name: "20th Design",
    status: "in-progress",
    updated: "2021-04-12 08:25:41.567611",
    user_id_last_update: 1,
    wales: 333,
  },
  {
    courses: 400,
    id: 19,
    name: "19th Design",
    status: "in-progress",
    updated: "2021-04-11 08:25:41.567611",
    user_id_last_update: 2,
    wales: 100,
  },
];

describe("Designs view", () => {
  test("should display a list of designs", async () => {
    mockedAxios.get.mockResolvedValue({
      data: fakeDesigns,
    });
    render(<Designs />);

    const list = await screen.findByTestId("design-list");
    expect(list).toBeInTheDocument();
  });
});
