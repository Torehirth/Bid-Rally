import { test, expect } from "@playwright/test";

test.describe("registration", () => {
  test("successful registration shows success message", async ({ page }) => {
    await page.route("*/**/auth/register", (route) =>
      route.fulfill({
        status: 200,
        json: { name: "Test", email: process.env.VITE_TEST_USER_EMAIL },
      })
    );

    // Go to register page
    await page.goto("https://torehirth.github.io/Bid-Rally/register/");

    // Fill the form
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill(process.env.VITE_TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill(process.env.VITE_TEST_USER_PASSWORD);

    // Click register button
    await page.getByRole("button", { name: "Create Account" }).click();
  });

  test("failed registration shows error message", async ({ page }) => {
    await page.route("*/**/auth/register", (route) =>
      route.fulfill({
        status: 400,
        json: { message: "Registration failed" },
      })
    );
    await page.goto("https://torehirth.github.io/Bid-Rally/register/");

    // Fill the form with an email that will trigger a failure
    await page.locator('input[name="name"]').fill("Test User");
    await page.locator('input[name="email"]').fill("fail@gmail.com");
    await page.locator('input[name="password"]').fill("password123");

    await page.getByRole("button", { name: "Create Account" }).click();

    // Check for error message
    await expect(page.locator("#email-message")).toContainText(
      "Valid email required (example@stud.noroff.no)"
    );
  });
});
