
import { newE2EPage } from "@stencil/core/testing";

const renderAlert = async (variant: string, content: string) => {
  const page = await newE2EPage();
  await page.setContent(content);
  await page.compareScreenshot(variant, { fullPage: false });
};

describe("usa-text-input", () => {
  it("textInput", () =>
    renderAlert(
      "textInput",
      `<usa-text-input></usa-text-input>`
    ));
});


