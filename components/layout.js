import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'React Challenge App' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
    </header>

    { children }

    <footer>
      {'Copyright: Hitesh Paul'}
    </footer>
  </div>
)
