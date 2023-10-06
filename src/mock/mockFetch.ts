import shows from './mockData.json'

function getJson(url = '') {
  const { pathname, searchParams } = new URL(url)
  if (pathname === '/shows') {
    return shows
  }
  if (pathname === '/search/shows') {
    const q = searchParams.get('q')
    if (q === null || q === '') {
      return []
    }
    return shows.filter((show) => show.summary.includes(q)).map((show) => ({ show, rating: 0 }))
  }
  if (pathname.match(/\/shows\/\d+/)) {
    const id = Number(pathname.match(/\/shows\/(?<id>\d+)/)?.groups?.id)
    return shows.find((show) => show.id === id)
  }
  return shows.slice(0, 1)
}

function fetch(url: string) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'ok',
    redirected: false,
    body: () => '',
    bodyUsed: false,
    json: () => getJson(url)
  })
}

// @ts-ignore
globalThis.fetch = fetch

export default fetch
