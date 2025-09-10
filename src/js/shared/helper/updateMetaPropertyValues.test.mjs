import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { updateMetaPropertyValues } from "./updateMetaPropertyValues";

describe("updateMetaPropertyValues", () => {
  beforeEach(() => {
    // Clear the head before each test
    document.head.innerHTML = "";
  });

  // and after each test
  afterEach(() => {
    document.head.innerHTML = "";
  });

  it("should update the content of an existing meta tag with name attribute", () => {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "description");
    metaTag.setAttribute("content", "Old description");
    document.head.appendChild(metaTag);

    // Call the function to update the meta tag
    updateMetaPropertyValues("name", "description", "New description");

    // Check that the content was updated
    const updatedElement = document.querySelector('meta[name="description"]');
    expect(updatedElement.getAttribute("content")).toBe("New description");
  });

  it("should update the content of an existing meta tag with property attribute", () => {
    // Set up a meta tag with property attribute (common for Open Graph tags)
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("property", "og:title");
    metaTag.setAttribute("content", "Old title");
    document.head.appendChild(metaTag);

    // Update the Open Graph title
    updateMetaPropertyValues("property", "og:title", "New title");

    // Verify the content changed
    const updatedElement = document.querySelector('meta[property="og:title"]');
    expect(updatedElement.getAttribute("content")).toBe("New title");
  });

  it("should do nothing when meta element does not exist", () => {
    // Start with empty head (no meta tags)

    // Try to update a non-existent meta tag
    updateMetaPropertyValues("name", "nonexistent", "Some value");

    // Should still have no meta tags
    const elements = document.querySelectorAll("meta");
    expect(elements.length).toBe(0);
  });

  it("should do nothing when value is not a string", () => {
    // Set up a meta tag
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "test");
    metaTag.setAttribute("content", "original content");
    document.head.appendChild(metaTag);

    // Try to update with non-string values
    updateMetaPropertyValues("name", "test", 123);
    updateMetaPropertyValues("name", "test", null);
    updateMetaPropertyValues("name", "test", undefined);
    updateMetaPropertyValues("name", "test", {});

    // Content should remain unchanged
    const element = document.querySelector('meta[name="test"]');
    expect(element.getAttribute("content")).toBe("original content");
  });

  it("should handle empty string values", () => {
    // Set up a meta tag
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "keywords");
    metaTag.setAttribute("content", "old, keywords");
    document.head.appendChild(metaTag);

    // Update with empty string (which is still a string)
    updateMetaPropertyValues("name", "keywords", "");

    // Should accept empty string as valid
    const element = document.querySelector('meta[name="keywords"]');
    expect(element.getAttribute("content")).toBe("");
  });

  it("should work with different attribute types", () => {
    // Set up meta tags with different attribute types
    const nameTag = document.createElement("meta");
    nameTag.setAttribute("name", "author");
    nameTag.setAttribute("content", "Old Author");
    document.head.appendChild(nameTag);

    const propTag = document.createElement("meta");
    propTag.setAttribute("property", "og:description");
    propTag.setAttribute("content", "Old OG Description");
    document.head.appendChild(propTag);

    const httpEquivTag = document.createElement("meta");
    httpEquivTag.setAttribute("http-equiv", "refresh");
    httpEquivTag.setAttribute("content", "30");
    document.head.appendChild(httpEquivTag);

    // Update each type
    updateMetaPropertyValues("name", "author", "New Author");
    updateMetaPropertyValues("property", "og:description", "New OG Description");
    updateMetaPropertyValues("http-equiv", "refresh", "60");

    // All should be updated
    expect(document.querySelector('meta[name="author"]').getAttribute("content")).toBe(
      "New Author"
    );
    expect(document.querySelector('meta[property="og:description"]').getAttribute("content")).toBe(
      "New OG Description"
    );
    expect(document.querySelector('meta[http-equiv="refresh"]').getAttribute("content")).toBe("60");
  });

  it("should only update the first matching element if multiple exist", () => {
    // Create two meta tags with the same name (edge case)
    const firstTag = document.createElement("meta");
    firstTag.setAttribute("name", "duplicate");
    firstTag.setAttribute("content", "first");
    document.head.appendChild(firstTag);

    const secondTag = document.createElement("meta");
    secondTag.setAttribute("name", "duplicate");
    secondTag.setAttribute("content", "second");
    document.head.appendChild(secondTag);

    // Update - should only affect the first one found
    updateMetaPropertyValues("name", "duplicate", "updated");

    // First should be updated, second unchanged
    const allElements = document.querySelectorAll('meta[name="duplicate"]');
    expect(allElements[0].getAttribute("content")).toBe("updated");
    expect(allElements[1].getAttribute("content")).toBe("second");
  });
});
