import healthbar from '../healthbar.js'

test.each([
  [10, 'critical'],
  [30, 'wounded'],
  [60, 'healthy']
])('healthStatus returns %s for health %s', (health, expectedStatus) => {
  expect(healthbar({ name: 'Test', health })).toBe(expectedStatus)
})
