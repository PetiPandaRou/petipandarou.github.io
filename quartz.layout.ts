import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/PetiPandaRou/petipandarou.github.io",
      "Wikipedia": "https://fr.wikipedia.org/wiki/Utilisateur:PetiPandaRou",
      "LinkedIn": "https://www.linkedin.com/in/juliabuchner/",
      "Mastodon": "https://eldritch.cafe/@petipandarou",
      //"Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
            "Études": 100,
            "Bibliothèque": 200,
            "TTRPG": 300,
            "Blog": 400,
          }
       
          let orderA = 0
          let orderB = 0
       
          if (a.file && a.file.slug) {
            orderA = nameOrderMap[a.file.slug] || 0
          } else if (a.name) {
            orderA = nameOrderMap[a.name] || 0
          }
       
          if (b.file && b.file.slug) {
            orderB = nameOrderMap[b.file.slug] || 0
          } else if (b.name) {
            orderB = nameOrderMap[b.name] || 0
          }
       
          return orderA - orderB
        },
      })
    ),
  ],
  right: [
    Component.Search(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
