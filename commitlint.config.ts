import { RuleConfigSeverity, type UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', Infinity],
    'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 250],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 250],
    'subject-empty': [RuleConfigSeverity.Error, 'always'],
    'type-empty': [RuleConfigSeverity.Disabled],
    'type-enum': [RuleConfigSeverity.Disabled],
    // :shipit: - Changes that do not modify src or test files
    // :octocat: - Changes to `.github` folder
    // :godmode: - A new feature
    // ⛓ - :chains: - Changes related to project dependencies
    // 📜 :scroll: - Changes made only to documentation
    // 🛠️ :hammer_and_wrench: - A bug fix
    // 🎛 :control_knobs: - A code change that neither fixes a bug nor adds a feature
    // 🗞️ - :rolled_up_newspaper: - Making a version release
    // 🎀 :ribbon: - Changes that do not affect the meaning of the code (example: formatting)
    // 🧪 :test_tube: - Adding missing tests or correcting existing tests
  },
}

export default Configuration
