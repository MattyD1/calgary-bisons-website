import { TypedDocumentNode } from "@graphql-typed-document-node/core"
import {
  RequestDocument,
  Variables,
  request as graphqlRequest,
} from "graphql-request"

import { env } from "@/env.mjs"

// TODO: This may have to be replaced based on cache invalidation
// https://github.com/datocms/next-minimalistic-photography/blob/main/lib/dato.ts
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables
) {
  return graphqlRequest<TDocument, Variables>(
    "https://graphql.datocms.com/",
    document,
    variables,
    {
      Authorization: `Bearer ${env.NEXT_DATOCMS_API_TOKEN}`,
      "X-Exclude-Invalid": "true",
    }
  )
}
