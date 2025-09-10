import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    await page.route("*/**/auth/login", (route) =>
      route.fulfill({
        status: 200,
        json: { name: "Test", email: process.env.VITE_TEST_USER_EMAIL },
      })
    );

    await page.goto("https://torehirth.github.io/Bid-Rally/login/");

    await page.locator('input[name="email"]').fill(process.env.VITE_TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill(process.env.VITE_TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.locator("login button")).toBeHidden();
  });

  test("wrong password shows error", async ({ page }) => {
    await page.route("*/**/auth/login", (route) =>
      route.fulfill({
        status: 401,
        json: { message: "Invalid email or password" },
      })
    );

    await page.goto("https://torehirth.github.io/Bid-Rally/login/");

    await page.locator('input[name="email"]').fill(process.env.VITE_TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrong Password");

    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.locator("#message")).toContainText("Bad data from login");
  });
});
