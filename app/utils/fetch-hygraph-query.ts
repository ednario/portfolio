async function fetchHygraphQuery(query: string, revalidate?: number) {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate,
    },
  })

  const json = await response.json()

  if (json.errors?.length) {
    throw new Error(
      `Hygraph: ${json.errors
        .map((error: { message: string }) => error.message)
        .join(' | ')}`,
    )
  }

  if (!json.data) {
    throw new Error(
      'Hygraph returned empty data. Check HYGRAPH_URL and HYGRAPH_TOKEN — both must belong to the same project.',
    )
  }

  return json.data
}

export default fetchHygraphQuery
