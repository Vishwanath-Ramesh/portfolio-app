const isProd = String(process.env.NODE_ENV).toLowerCase() === 'production'

function getServerConfiguration() {
  if (isProd)
    return {
      baseURL: 'https://vishwanath-portfolio.onrender.com/api',
    }

  return {
    baseURL: 'http://localhost:5000/api',
  }
}
const serverConfig = getServerConfiguration()

export default { serverConfig }
