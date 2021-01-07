import Head from 'next/head'
import { motion } from 'framer-motion'

const tech = [
  { name: 'NextJS', url: 'https://nextjs.org/' },
  { name: 'TypeScript', url: 'https://https://www.typescriptlang.org/' },
  { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
  { name: 'Framer Motion', url: 'https://www.framer.com/api/motion/' },
  { name: 'ESLint', url: 'https://eslint.org/' },
  { name: 'Prettier', url: 'https://prettier.io/' },
  { name: 'Jest', url: 'https://jestjs.io/' },
  { name: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro' },
]

const list = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const item = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

export const Home = (): JSX.Element => (
  <motion.div
    className="container mx-auto min-h-screen flex flex-col justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delayChildren: 1 }}
  >
    <Head>
      <title>Template</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className="text-4xl mb-8">Welcome</h1>

    <motion.ul
      className="mb-8"
      variants={list}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
    >
      {tech.map((e) => (
        <motion.li key={e} variants={item}>
          <span className="mr-2">✅</span>{' '}
          <a className="transition hover:text-indigo-600" href={e.url} target="_blank" rel="noreferrer">
            {e.name}
          </a>
        </motion.li>
      ))}
    </motion.ul>

    <motion.button
      type="button"
      className="transition inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => {
        window.alert('It works!')
      }}
    >
      Test Button
    </motion.button>
  </motion.div>
)

export default Home
