import { formatDate } from "./index";

describe("recive a string of date and return a dd/mm/yyyy format", () => {
  test("should return mm/dd/yyyy", () => {
    expect(formatDate("2021-04-12 08:25:41.567611")).toBe("12/04/2021");
  });

  test("should return an invalid date message", () => {
    expect(formatDate("20/12/20")).toBe("Invalid Date");
  });
});
