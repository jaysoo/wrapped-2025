export const teamColors = {
  infrastructure: '#22c55e',
  cli: '#3b82f6',
  cloud: '#a855f7',
  redpanda: '#f97316',
  docs: '#ec4899'
};

export const commitData = [
  { name: 'Patrick M.', commits: 1727, team: 'infrastructure' },
  { name: 'Steve P.', commits: 1147, team: 'infrastructure' },
  { name: 'Szymon', commits: 509, team: 'infrastructure' },
  { name: 'Louie W.', commits: 468, team: 'cloud' },
  { name: 'Altan S.', commits: 389, team: 'redpanda' },
  { name: 'Max K.', commits: 380, team: 'redpanda' },
  { name: 'Rares M.', commits: 353, team: 'cloud' },
  { name: 'Chau T.', commits: 348, team: 'cloud' },
  { name: 'Colum F.', commits: 347, team: 'cli' },
  { name: 'Jason J.', commits: 337, team: 'cli' },
  { name: 'James H.', commits: 318, team: 'redpanda' },
  { name: 'Jack H.', commits: 299, team: 'cli' },
  { name: 'Jon C.', commits: 280, team: 'redpanda' },
  { name: 'Leosvel P.', commits: 259, team: 'cli' },
  { name: 'Ben C.', commits: 257, team: 'redpanda' },
  { name: 'Mark L.', commits: 183, team: 'redpanda' },
  { name: 'Victor S.', commits: 156, team: 'redpanda' },
  { name: 'Craigory C.', commits: 132, team: 'cli' },
  { name: 'Nicole O.', commits: 104, team: 'cloud' },
  { name: 'Dillon', commits: 71, team: 'cloud' },
];

export const projectData = [
  { name: 'Infrastructure', value: 40, color: teamColors.infrastructure },
  { name: 'CLI', value: 19, color: teamColors.cli },
  { name: 'Orca', value: 17, color: teamColors.cloud },
  { name: 'Red Panda', value: 4, color: teamColors.redpanda },
];

export const frameworkReleases = [
  { name: 'Angular 21', icon: '🅰️' },
  { name: 'Next 16', icon: '▲' },
  { name: 'Expo 54', icon: '📱' },
  { name: 'Nuxt 4', icon: '💚' },
  { name: 'Vitest 4', icon: '⚡' },
  { name: 'Storybook 10', icon: '📖' },
  { name: 'Cypress 15', icon: '🌲' },
  { name: 'Node 24', icon: '💚' },
];

export const cloudHighlights = [
  { name: 'Onboarding Flow', icon: '🚀' },
  { name: 'Enterprise Usage UI', icon: '📊' },
  { name: 'Flaky Task Analytics', icon: '🔍' },
  { name: 'Graph UX Improvements', icon: '🕸️' },
  { name: 'Artifact Downloads', icon: '📦' },
  { name: 'EU Pro Support', icon: '🇪🇺' },
  { name: 'CI Stability', icon: '🛡️' },
  { name: 'PostHog Real-Time Monitoring', icon: '🧪' },
];

export const infraHighlights = [
  { name: 'Docker Layer Caching', icon: '🐳' },
  { name: 'Azure Single Tenant', icon: '☁️' },
  { name: 'Distributed Tracing', icon: '🔬' },
  { name: 'Grafana Dashboards', icon: '📉' },
  { name: 'Helm Chart v1', icon: '⎈' },
  { name: 'SOC2 Compliance', icon: '🔒' },
  { name: 'MongoDB Upgrade', icon: '🍃' },
  { name: 'Valkey Migration', icon: '⚡' },
];

export const redpandaHighlights = [
  { name: 'Self-Healing CI', icon: '🩹' },
  { name: 'GitHub Integration', icon: '🐙' },
  { name: 'GitLab Integration', icon: '🦊' },
  { name: 'Azure DevOps', icon: '🔷' },
  { name: 'Time-to-Green', icon: '⏱️' },
  { name: 'Polygraph', icon: '📐' },
];

export const allProjects = [
  // Infrastructure
  { name: 'Docker Layer Caching', team: 'infrastructure' },
  { name: 'Azure Single Tenant', team: 'infrastructure' },
  { name: 'SOC2 DR/BC Exercise', team: 'infrastructure' },
  { name: 'Distributed Tracing', team: 'infrastructure' },
  { name: 'Helm Chart v1', team: 'infrastructure' },
  { name: 'MongoDB Upgrade', team: 'infrastructure' },
  { name: 'Grafana Dashboards', team: 'infrastructure' },
  { name: 'Observability Stack', team: 'infrastructure' },
  { name: 'Valkey Migration', team: 'infrastructure' },
  { name: 'Trivy Scanner', team: 'infrastructure' },
  { name: 'Cost Reporting', team: 'infrastructure' },
  { name: 'AWS CloudTrail', team: 'infrastructure' },
  // CLI
  { name: 'Terminal UI', team: 'cli' },
  { name: 'Migrate UI', team: 'cli' },
  { name: 'Expo 54 Support', team: 'cli' },
  { name: 'Vitest 4 Support', team: 'cli' },
  { name: 'Nuxt 4 Support', team: 'cli' },
  { name: 'Next 16 Support', team: 'cli' },
  { name: 'Cypress 15 Support', team: 'cli' },
  { name: 'Node 24 Support', team: 'cli' },
  { name: 'Storybook 10 Support', team: 'cli' },
  { name: 'Pnpm Catalog Support', team: 'cli' },
  { name: 'AI Code Generation', team: 'cli' },
  { name: 'Angular RSPack', team: 'cli' },
  { name: '.NET Plugin', team: 'cli' },
  // Cloud
  { name: 'Improved Nx Graph', team: 'cloud' },
  { name: 'Agent Resource Usage', team: 'cloud' },
  { name: 'Onboarding Flow', team: 'cloud' },
  { name: 'Enterprise Usage UI', team: 'cloud' },
  { name: 'Flaky Task Analytics', team: 'cloud' },
  { name: 'Graph UX Improvements', team: 'cloud' },
  { name: 'Agent Pod Debugging', team: 'cloud' },
  { name: 'Artifact Downloads', team: 'cloud' },
  { name: 'EU Pro Support', team: 'cloud' },
  // Red Panda
  { name: 'Self-Healing CI', team: 'redpanda' },
  { name: 'GitHub Integration', team: 'redpanda' },
  { name: 'GitLab Integration', team: 'redpanda' },
  { name: 'Azure DevOps Integration', team: 'redpanda' },
  { name: 'Time-to-Green Analytics', team: 'redpanda' },
  { name: 'Polygraph Conformance', team: 'redpanda' },
];

// Slide durations in ms
export const slideDurations = [
  2600,  // 0: Hero
  3600,  // 1: Big Numbers
  5600,  // 2: Projects Showcase (animated)
  2900,  // 3: Big Features Intro
  2400,  // 4: Self-Healing CI
  2400,  // 5: Terminal UI
  2400,  // 6: Migrate UI
  2400,  // 7: Improved Nx Graph
  2400,  // 8: Continuous Tasks
  2400,  // 9: .NET + Maven
  2400,  // 10: AI Code Generation
  2400,  // 11: CPU/Memory Tracking
  2400,  // 12: Flaky Task Analytics
  2400,  // 13: Onboarding Flow
  2400,  // 14: Enterprise Usage UI
  2400,  // 15: Azure Single Tenant
  2400,  // 16: Helm Chart
  2400,  // 17: Observability
  2400,  // 18: Docker + Nx Release
  2400,  // 19: GitHub Templates
  2400,  // 20: Node 24
  2400,  // 21: Nx & Ocean CI Stability
  2400,  // 22: Docs Migration to Astro Starlight
  2400,  // 23: Framework Support
  2400,  // 24: Orca Highlights
  2400,  // 25: Infrastructure Highlights
  2400,  // 26: Red Panda Highlights
  2900,  // 27: Closing
];

export const sectionCount = slideDurations.length;
