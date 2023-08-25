module.exports = async () => {
  const staticRedirects = [
    {
      source: "/:slug*",
      destination: "https://calgarybisons.ca/:slug*", // Matched parameters can be used in the destination
      permanent: true,
    },
  ]

  const redirects = [...staticRedirects]

  return redirects
}
