import { type DefaultTreeAdapterTypes, parseFragment } from "parse5";
import { createElement, type ReactNode } from "react";

const contentTags = new Set([
  "p",
  "div",
  "ul",
  "ol",
  "li",
  "br",
  "strong",
  "b",
  "em",
  "i",
]);

function renderNode(node: DefaultTreeAdapterTypes.ChildNode): ReactNode {
  if ("value" in node) return node.value;
  if (!("tagName" in node)) return null;

  const tag = /^h[1-6]$/.test(node.tagName) ? "h3" : node.tagName;
  const props = { key: node.sourceCodeLocation?.startOffset };
  if (tag === "br") return createElement(tag, props);
  if (tag !== "h3" && !contentTags.has(tag)) return null;

  // Render only text and known HTML elements, without importing source attributes.
  return createElement(tag, props, node.childNodes.map(renderNode));
}

export function ProductDescription({
  html,
  isRetreat,
}: {
  html: string;
  isRetreat: boolean;
}) {
  const { childNodes } = parseFragment(html, { sourceCodeLocationInfo: true });
  const blocks = childNodes.filter((node) => "tagName" in node);
  // The retreat title, location, and date already appear beside its cover.
  const copy =
    isRetreat &&
    blocks
      .slice(0, 4)
      .map(({ tagName }) => tagName)
      .join() === "h1,h3,h3,h3"
      ? [blocks[1], ...blocks.slice(4)]
      : blocks;
  const listIndex = copy.findIndex(({ tagName }) => tagName === "ul");
  const hasProgram = listIndex > 0;

  return (
    <section
      className={
        hasProgram
          ? "product-description"
          : "product-description product-description-narrow"
      }
      aria-labelledby="product-description-heading"
    >
      <h2 id="product-description-heading">
        {isRetreat ? "About the retreat" : "About this offering"}
      </h2>
      {hasProgram ? (
        <div className="product-reading">
          <div className="product-copy">
            {copy.slice(0, listIndex - 1).map(renderNode)}
          </div>
          <div className="product-copy product-program">
            {copy.slice(listIndex - 1, listIndex + 1).map(renderNode)}
          </div>
          <div className="product-copy product-closing">
            {copy.slice(listIndex + 1).map(renderNode)}
          </div>
        </div>
      ) : (
        <div className="product-copy">{copy.map(renderNode)}</div>
      )}
    </section>
  );
}
