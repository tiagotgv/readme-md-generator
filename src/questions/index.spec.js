const questions = require('./')

describe('questions', () => {
  it('should export questions in the correct order', () => {
    const questionsNameOrder = Object.keys(questions)

    expect(questionsNameOrder).toEqual([
      'askProjectName',
      'askProjectVersion',
      'askProjectDescription',
      'askProjectHomepage',
      'askProjectDemoUrl',
      'askProjectDocumentationUrl',
      'askAuhtorName',
      'askAuthorGithub',
      'askAuthorWebsite',
      'askAuthorTwitter',
      'askAuthorLinkedIn',
      'askAuthorPatreon',
      'askProjectPrerequisites',
      'askLicenseName',
      'askLicenseUrl',
      'askContributing',
      'askInstallCommand',
      'askUsage',
      'askTestCommand'
    ])
  })
})
