import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://torehirth.github.io/Bid-Rally/");

  // Expect a title "to contain" a substring of BidRally.
  await expect(page).toHaveTitle(/BidRally/);
});

test("Browse Auctions link", async ({ page }) => {
  await page.goto("https://torehirth.github.io/Bid-Rally/");

  // Click the Browse Auctions link.
  await page.getByRole("link", { name: "Browse Auctions" }).click();

  // Expects page to have a heading with the name of BidRally.
  await expect(page.getByRole("heading", { name: "BidRally" })).toBeVisible();
});

test("Has heading on new page", async ({ page }) => {
  await page.goto("https://torehirth.github.io/Bid-Rally/auctions/");

  // Expects page to have a heading with the name of All Auctions.
  await expect(page.getByRole("heading", { name: "All Auctions" })).toBeVisible();
});
