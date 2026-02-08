/* eslint-disable no-else-return */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import { useDarkMode } from 'next-dark-mode'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Logos from '../components/logos'
import Projects from '../components/projects'

export default function IndexPage({ projects }) {
  const { darkModeActive } = useDarkMode()

  return (
    <Layout>
      <Head>
        <title>Raihan Akbar</title>
        <meta name="description" content="Personal site of Raihan Akbar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async defer data-domain="jasonlong.me" src="https://plausible.io/js/plausible.js" />
        <link rel="icon" type="image/png" sizes="32x32" href="/reicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/reicon-16x16.png" />
      </Head>

      <div className="flex flex-col mx-auto text-gray-900 bg-white max-w-screen-xl dark:bg-gray-900">
        <Hero />
        <About />
        <Logos />
        <Projects projects={projects} dark={darkModeActive} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), 'projects')
  const fileNames = fs.readdirSync(projectsDirectory)

  // Filter to only .md files in the root directory (exclude subdirectories)
  const mdFiles = fileNames.filter(fileName => {
    const fullPath = path.join(projectsDirectory, fileName)
    const isFile = fs.statSync(fullPath).isFile()
    const isMdFile = fileName.endsWith('.md')
    return isFile && isMdFile
  })

  const projects = mdFiles.map(fileName => {
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const description = matterResult.content

    return {
      fileName,
      description,
      ...matterResult.data
    }
  })

  projects.sort((a, b) => {
    if (a.pageOrder > b.pageOrder) {
      return 1
    } else {
      return -1
    }
  })

  return {
    props: {
      projects
    }
  }
}
