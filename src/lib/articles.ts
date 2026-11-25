export type HelpArticle = {
  slug: string
  category: string
  title: string
  summary: string
  updated: string
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[]
}

export const helpArticles: HelpArticle[] = [
  {
    slug: 'getting-started',
    category: 'Reader basics',
    title: 'Find your way around a story',
    summary: 'A practical starting point for discovering a title and using the reading options presented with it.',
    updated: 'Reader guide',
    sections: [
      { title: 'Start with the title page', paragraphs: ['Open the story you want to explore and review its description, creator information and any content notes shown with the title. These details can help you decide whether and when to read.'] },
      { title: 'Follow the available reading flow', paragraphs: ['Use the navigation controls provided with the story to continue through its published pages or installments. The available order and controls may differ by title.'] },
      { title: 'If something is not loading', paragraphs: ['Refresh once, check your connection and try the title again. If the issue continues, contact support with the title name, the page or step where it stopped and your device/browser. Do not send passwords or private account credentials.'] },
    ],
  },
  {
    slug: 'creator-preparation',
    category: 'Creator resources',
    title: 'Prepare a story before you publish',
    summary: 'A preflight checklist for clear files, useful context and a realistic release plan.',
    updated: 'Creator guide',
    sections: [
      { title: 'Organize the project', paragraphs: ['Keep your source files, final exports and references in clearly named folders. Retain the original working files and create a separate copy for upload or review.'] },
      { title: 'Review at reading size', paragraphs: ['Check text legibility, page order, cropping and contrast on a phone-sized screen as well as a desktop display. Ask someone unfamiliar with the project to follow the sequence.'] },
      { title: 'Confirm current requirements', paragraphs: ['Publishing options and technical specifications can change. Check the current creator guidance on Pylothouse before preparing a final delivery; this article does not set upload limits or promise acceptance.'] },
    ],
  },
  {
    slug: 'content-notes',
    category: 'Safety & community',
    title: 'Use content notes thoughtfully',
    summary: 'Help readers make informed choices without giving away more story than necessary.',
    updated: 'Community guide',
    sections: [
      { title: 'Be specific and proportionate', paragraphs: ['Describe relevant themes or depictions in plain language. A note should help a reader make a choice; it does not need to summarize the whole plot.'] },
      { title: 'Place the note where it helps', paragraphs: ['Put relevant information where readers can see it before encountering the material. For serial work, update notes when later installments introduce new content.'] },
      { title: 'Follow the platform rules', paragraphs: ['Content notes are not a substitute for the current community rules or any required age and rating settings. Review Pylothouse’s current policies when preparing a release.'] },
    ],
  },
  {
    slug: 'report-a-concern',
    category: 'Safety & community',
    title: 'Report a safety or rights concern',
    summary: 'What to include when contacting support about a specific page, account or work.',
    updated: 'Support guide',
    sections: [
      { title: 'Give enough context to locate it', paragraphs: ['Include the title or account name, a direct page link if available, and a short description of the issue. For time-sensitive safety issues, say so clearly.'] },
      { title: 'Share only what is needed', paragraphs: ['Do not include passwords, payment details, private messages unrelated to the report or other people’s sensitive personal information.'] },
      { title: 'Rights questions', paragraphs: ['If you are reporting a copyright concern, identify the material and explain your relationship to the rights involved. Formal notices and counter-notices may have legal effects; seek qualified advice if you are unsure.'] },
    ],
  },
  {
    slug: 'account-security',
    category: 'Account & privacy',
    title: 'Keep your account information safe',
    summary: 'Simple steps for account security and clear communication with support.',
    updated: 'Account guide',
    sections: [
      { title: 'Use a unique password', paragraphs: ['Choose a password you do not use on other services. If the platform offers additional sign-in protections, consider enabling them.'] },
      { title: 'Be cautious with requests', paragraphs: ['Support should not need your password or one-time sign-in code. Do not share either in an email or support request.'] },
      { title: 'Ask about privacy actions', paragraphs: ['Available account, data and deletion controls are defined by the current platform privacy information. Contact support if you cannot find the correct process.'] },
    ],
  },
]
