import axios from "axios";
import { render, screen } from "@testing-library/react";
import Setouts from "./index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const fakeSetouts = [
  {
    id: 1,
    updated: "2021-03-24 08:44:31.810221",
    name: "1st Setout",
    machine_name: "RSJ_4_1",
    machine_width: 130,
    courses: 200,
  },
  {
    id: 2,
    updated: "2021-03-25 08:44:31.810221",
    name: "2nd Setout",
    machine_name: "RSJ_4_1_ON",
    machine_width: 150,
    courses: 300,
  },
];

describe("Setouts view", () => {
  test("should display a list of setouts", async () => {
    mockedAxios.get.mockResolvedValue({
      data: fakeSetouts,
    });
    render(<Setouts />);

    const list = await screen.findByTestId("setouts-list");
    expect(list).toBeInTheDocument();
  });
});
