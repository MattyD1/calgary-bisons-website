import React from "react"
import { tw } from "@/src/libs/utils"
import clsx from "clsx"
import { Maybe } from "graphql/jsutils/Maybe"
import {
  StructuredText,
  StructuredTextDocument,
  renderMarkRule,
} from "react-datocms/structured-text"

import { StructuredText as StructuredTextType } from "@/types"

interface IParagraphProps {
  body?: StructuredTextType
  highlightColor?: { bg: string; text: string; before: string }
  className: string
}

const Paragraph = ({ body, highlightColor, className }: IParagraphProps) => {
  if (!body) return null

  return (
    <div className={className}>
      <StructuredText
        data={body.value as StructuredTextDocument}
        customMarkRules={[
          renderMarkRule("underline", ({ children, key }) => {
            if (!highlightColor)
              return <React.Fragment key={key}>{children}</React.Fragment>

            return (
              <span
                key={key}
                className={tw(
                  `relative inline-block h-full before:absolute before:-bottom-[2px] before:block before:h-[3px] before:w-full before:bg-accent`,
                  highlightColor.before
                )}
              >
                {children}
              </span>
            )
          }),
          renderMarkRule("strikethrough", ({ children, key }) => {
            if (!highlightColor)
              return <React.Fragment key={key}>{children}</React.Fragment>

            return (
              <span
                key={key}
                className={tw(
                  `relative inline-block h-full before:absolute before:top-1/2 before:block before:h-[3px] before:w-full`,
                  highlightColor.before
                )}
              >
                {children}
              </span>
            )
          }),
          renderMarkRule("highlight", ({ children, key }) => {
            if (!highlightColor)
              return <React.Fragment key={key}>{children}</React.Fragment>

            return (
              <span key={key} className={highlightColor.text}>
                {children}
              </span>
            )
          }),
        ]}
      />
    </div>
  )
}

export { Paragraph }
