import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("Caseload test", async ({ page }) => {
  await page.goto("http://staging.ablespace.io");

  // Login Email and Password
  await page.locator("#email").fill(process.env.EMAIL);
  await page.getByRole("button", { name: "Continue", exact: true }).click();

  await page.locator("#password").fill(process.env.PASSWORD);
  await page.getByRole("button", { name: "Continue", exact: true }).click();

  // Verify that the user is redirected to the caseload page after login
  await expect(page).toHaveURL("https://staging.ablespace.io/caseload");
});
