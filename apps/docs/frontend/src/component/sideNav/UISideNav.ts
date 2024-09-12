import { prop, usePathname } from '@rvjs/core'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@rvjs/ui'

const UISideNav = () => {
  const pathname = usePathname()

  return SideNav({
    children: [
      SideNavItems({
        children: [
          SideNavLink({
            text: prop(() => 'Getting Started'),
            href: prop(() => '/ui/gettingStarted'),
            isActive: prop(() => pathname() === '/ui/gettingStarted'),
          }),
          SideNavMenu({
            menuName: prop(() => 'Layout'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Box'),
                href: prop(() => '/ui/layout/box'),
                isActive: prop(() => pathname() === '/ui/layout/box'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Flex'),
                href: prop(() => '/ui/layout/flex'),
                isActive: prop(() => pathname() === '/ui/layout/flex'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Grid'),
                href: prop(() => '/ui/layout/grid'),
                isActive: prop(() => pathname() === '/ui/layout/grid'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Section'),
                href: prop(() => '/ui/layout/section'),
                isActive: prop(() => pathname() === '/ui/layout/section'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Form'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Button'),
                href: prop(() => '/ui/form/button'),
                isActive: prop(() => pathname() === '/ui/form/button'),
              }),
              SideNavMenuItem({
                text: prop(() => 'TextInput'),
                href: prop(() => '/ui/form/text-input'),
                isActive: prop(() => pathname() === '/ui/form/text-input'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Typography'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Text'),
                href: prop(() => '/ui/typography/text'),
                isActive: prop(() => pathname() === '/ui/typography/text'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Highlight'),
                href: prop(() => '/ui/typography/highlight'),
                isActive: prop(() => pathname() === '/ui/typography/highlight'),
              }),
              SideNavMenuItem({
                text: prop(() => 'CodeSnippet'),
                href: prop(() => '/ui/typography/code-snippet'),
                isActive: prop(
                  () => pathname() === '/ui/typography/code-snippet',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'Link'),
                href: prop(() => '/ui/typography/link'),
                isActive: prop(() => pathname() === '/ui/typography/link'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Content'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Icon'),
                href: prop(() => '/ui/content/icon'),
                isActive: prop(() => pathname() === '/ui/content/icon'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Iframe'),
                href: prop(() => '/ui/content/iframe'),
                isActive: prop(() => pathname() === '/ui/content/iframe'),
              }),
              SideNavMenuItem({
                text: prop(() => 'OrderedList'),
                href: prop(() => '/ui/content/ordered-list'),
                isActive: prop(() => pathname() === '/ui/content/ordered-list'),
              }),
              SideNavMenuItem({
                text: prop(() => 'UnorderedList'),
                href: prop(() => '/ui/content/unordered-list'),
                isActive: prop(
                  () => pathname() === '/ui/content/unordered-list',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'ListItem'),
                href: prop(() => '/ui/content/list-item'),
                isActive: prop(() => pathname() === '/ui/content/list-item'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Shell'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'App'),
                href: prop(() => '/ui/shell/app'),
                isActive: prop(() => pathname() === '/ui/shell/app'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Body'),
                href: prop(() => '/ui/shell/body'),
                isActive: prop(() => pathname() === '/ui/shell/body'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Header'),
                href: prop(() => '/ui/shell/header'),
                isActive: prop(() => pathname() === '/ui/shell/header'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderGlobalAction'),
                href: prop(() => '/ui/shell/header-global-action'),
                isActive: prop(
                  () => pathname() === '/ui/shell/header-global-action',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderGlobalBar'),
                href: prop(() => '/ui/shell/header-global-bar'),
                isActive: prop(
                  () => pathname() === '/ui/shell/header-global-bar',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderHr'),
                href: prop(() => '/ui/shell/header-hr'),
                isActive: prop(() => pathname() === '/ui/shell/header-hr'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderMenuButton'),
                href: prop(() => '/ui/shell/header-menu-button'),
                isActive: prop(
                  () => pathname() === '/ui/shell/header-menu-button',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderMenuItem'),
                href: prop(() => '/ui/shell/header-menu-item'),
                isActive: prop(
                  () => pathname() === '/ui/shell/header-menu-item',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderName'),
                href: prop(() => '/ui/shell/header-name'),
                isActive: prop(() => pathname() === '/ui/shell/header-name'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderNavigation'),
                href: prop(() => '/ui/shell/header-navigation'),
                isActive: prop(
                  () => pathname() === '/ui/shell/header-navigation',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'SubMenu'),
                href: prop(() => '/ui/shell/sub-menu'),
                isActive: prop(() => pathname() === '/ui/shell/sub-menu'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SubMenuItem'),
                href: prop(() => '/ui/shell/sub-menu-item'),
                isActive: prop(() => pathname() === '/ui/shell/sub-menu-item'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNav'),
                href: prop(() => '/ui/shell/side-nav'),
                isActive: prop(() => pathname() === '/ui/shell/side-nav'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavItems'),
                href: prop(() => '/ui/shell/side-nav-items'),
                isActive: prop(() => pathname() === '/ui/shell/side-nav-items'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavLink'),
                href: prop(() => '/ui/shell/side-nav-link'),
                isActive: prop(() => pathname() === '/ui/shell/side-nav-link'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavMenu'),
                href: prop(() => '/ui/shell/side-nav-menu'),
                isActive: prop(() => pathname() === '/ui/shell/side-nav-menu'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavMenuItem'),
                href: prop(() => '/ui/shell/side-nav-menu-item'),
                isActive: prop(
                  () => pathname() === '/ui/shell/side-nav-menu-item',
                ),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Overlay'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Tooltip'),
                href: prop(() => '/ui/overlay/tooltip'),
                isActive: prop(() => pathname() === '/ui/overlay/tooltip'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Util'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'renderComponentFromJSON'),
                href: prop(() => '/ui/util/render-component-from-json'),
                isActive: prop(
                  () => pathname() === '/ui/util/render-component-from-json',
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default UISideNav
