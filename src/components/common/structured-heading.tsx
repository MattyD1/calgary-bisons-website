import React from "react"
import clsx from "clsx"
import { isParagraph } from "datocms-structured-text-utils"
import {
  StructuredText,
  StructuredTextDocument,
  renderMarkRule,
  renderNodeRule,
} from "react-datocms/structured-text"

import { StructuredText as StructuredTextType } from "@/types"
import { HeroImageModelHeadingField } from "@/libs/graphql/generated"

interface IHeadingProps {
  heading: StructuredTextType
  highlightColor?: { bg: string; text: string }
  className: string
}

const Heading = ({ heading, highlightColor, className }: IHeadingProps) => {
  return (
    <StructuredText
      data={heading.value as StructuredTextDocument}
      customNodeRules={[
        renderNodeRule(
          isParagraph,
          ({ adapter: { renderNode }, children, key }) => {
            // Translate to a heading 1 with styling
            return renderNode(
              "h1",
              {
                key,
                className: className,
              },
              children
            )
          }
        ),
      ]}
      customMarkRules={[
        renderMarkRule("highlight", ({ children, key }) => {
          if (!highlightColor)
            return <React.Fragment key={key}>{children}</React.Fragment>

          return (
            <span key={key} className={clsx(highlightColor.text)}>
              {children}
            </span>
          )
        }),
      ]}
    />
  )
}

export { Heading }
