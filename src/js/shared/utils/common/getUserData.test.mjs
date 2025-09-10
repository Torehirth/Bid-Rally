import { describe, it, expect, beforeEach } from "vitest";
import { getUserData } from "./getUserData";

describe("getUserData", () => {
  let form;

  beforeEach(() => {
    document.body.innerHTML = "";
    form = document.createElement("form");
    document.body.appendChild(form);
  });

  it("should process form data with name, email and avatar", () => {
    form.innerHTML = `
      <input name="name" value="  John Doe  ">
      <input name="email" value="  JOHN@EXAMPLE.COM  ">
      <input name="avatar" value="  https://example.com/avatar.jpg  ">
    `;

    const result = getUserData(form);

    expect(result).toEqual({
      name: "john doe",
      email: "john@example.com",
      avatar: {
        url: "https://example.com/avatar.jpg",
        alt: "Could be an image of john doe",
      },
    });
  });

  it("should handle missing name and email fields", () => {
    form.innerHTML = `<input name="other" value="some value">`;

    const result = getUserData(form);

    expect(result).toEqual({
      other: "some value",
    });
  });

  it("should remove avatar field when empty", () => {
    form.innerHTML = `
      <input name="name" value="John">
      <input name="avatar" value="">
    `;

    const result = getUserData(form);

    expect(result).toEqual({
      name: "john",
    });
    expect(result.avatar).toBeUndefined();
  });

  it("should use default alt text when name is missing", () => {
    form.innerHTML = `<input name="avatar" value="avatar.jpg">`;

    const result = getUserData(form);

    expect(result.avatar.alt).toBe("Could be an image of the user");
  });
});
