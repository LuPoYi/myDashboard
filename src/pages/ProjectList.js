import { Helmet } from 'react-helmet'
import { Box, Container, Grid } from '@material-ui/core'
import ProjectCard from 'src/components/project/ProjectCard'

const projects = [
  {
    title: 'FruitCombo',
    icon: 'https://fruitcombo.vercel.app/fruitcombo.ico',
    link: 'https://fruitcombo.vercel.app/',
    description: 'FruitCombo is a DApp, using Protocolink API'
  },
  {
    title: 'Dinzuki Elemental',
    icon: 'https://dinzuki-elemental.vercel.app/favicon.ico',
    link: 'https://dinzuki-elemental.vercel.app/',
    description: 'Dinzuki Elemental is NFT project only for private group',
    source: 'https://github.com/LuPoYi/dinzuki-elemental-frontend'
  },
  {
    title: 'Truth',
    icon: 'https://truth-ten.vercel.app/favicon.ico',
    link: 'https://truth-ten.vercel.app/',
    description: 'Truth is an transferable NFT game',
    source: 'https://github.com/LuPoYi/truth-frontend'
  },

  {
    title: 'Address Tagger',
    icon: 'https://lh3.googleusercontent.com/v5U7lKXs6d9pfukAJSDe9mF6-rcA-E1clpBzVsDVi3fRJzArLcwI5MzdNd7wQwPlMjkMM693UZOqZ2FFDDEEpHLydw=w128-h128-e365-rj-sc0x00ffffff',
    link: 'https://chrome.google.com/webstore/detail/address-tagger/bkggjlncdpekehpdgojehmpoldhofehl?hl=zh-TW',
    description:
      'Address Tagger is a wallet address book extension that displays the wallet alias when you select or hover over a wallet address.',
    source: 'https://github.com/dinngo/address-tagger'
  }
]

const ProjectList = () => (
  <>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item key={project.title} lg={4} md={6} xs={12}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
)

export default ProjectList
