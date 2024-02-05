export default function healthStatus ({ name, health }) {
  if (health <= 15) {
    return 'critical'
  } else if (health <= 50) {
    return 'wounded'
  } else {
    return 'healthy'
  }
}
