import { useFormatDate } from "../useFormatDate";

it("returns N/A when date is an empty string", () => {
  const result = useFormatDate("");
  
  expect(result).toBe("N/A");
});