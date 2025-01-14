# Changelog

## PC v4.6 & Browser v5.1

#### Browser specific (Chrome, Safari, Edge, Opera)
- Block `delivered`
#### PC specific
- Allow customizing Zalo path

### Fixed
- `#copyExcel`
- `.message-view__banner.offline`
- `.message-view__banner--no-message-mutualGroup`
- `.img-msg-v2.-admin > .img-msg-v2__bub`

### Changed
- ZaDark Logo Icon

## Browser v5.0
### Added
#### Browser specific (Chrome, Safari, Edge, Opera)
- Block `seen`
- Block `typing`

## Browser v4.5
### Changed
#### Browser specific
- Add `_locales/vi`

## Browser v4.4
### Changed
#### Browser specific
- `manifest.json` : update description

## Browser v4.3
### Changed
#### Browser specific
- Convert English to Vietnamese

## PC v4.5

### Changed
#### PC specific
- Convert English to Vietnamese

## PC v4.4 & Browser v4.2

### Changed
- `zadark brand` : change "ZaDark – Best Dark Theme for Zalo" to "ZaDark – Zalo Dark Mode"
- `chat-input highlight` : remove blue line
- `conv-item pinned` : remove background

### Fixed
- `font` : update font files

## PC v4.3 & Browser v4.1

> 2022-03-24

### Added
- Safari Extension

### Changed
- Use `local font source` instead of `online font source`
- Change the algorithm to build code for pc
#### Browser specific
- Replace `ZaDark` with `SVG Logo` in Header

### Removed
- `@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap");`

## PC v4.2 & Browser v4.0

> 2022-03-22

### Changed
#### PC specific
- Build tool: replace `nexe` with `pkg`
- Header: update website to https://zadark.ncdaistudio.com

#### Browser specific
- manifest.json homepage_url: https://zadark.ncdaistudio.com
- Header: remove `About`, rename `Docs` to `Website`
- After installation, open `https://zadark.ncdaistudio.com/browser-ext/***` instead of `chrome-extension:@id/welcome.html`

### Removed
#### Browser specific
- Remove `welcome.html`

### Security
#### PC specific
- macOS codesign and notarize

## PC v4.1 & Browser v3.9

> 2022-03-18

### Added
- Edge Extension

### Fixed
- `.z-toggle > div`
- `.todo-filter-input`

## PC v4.0

> 2022-03-11

### Added
#### PC specific

- Sync with System (Zalo theme will match your system settings)
- Changelog (https://github.com/ncdai3651408/za-dark/blob/main/CHANGELOG.md)

## v3.8

> 2022-03-10

### Added
#### PC specific
- Add warning: "TO BE SAFE, before installing make sure you have downloaded this program from: https://sourceforge.net/projects/zadark/files/ZaDarkPC/" (PC only)

### Fixed
- `#scroll-vertical > div`
- `.file-icon__ext-text`
- `.conv-message.progress-bar .progress-track`
- `.file-progress__track`

## v3.7

> 2022-03-09

### Added
#### Browser specific
- Opera Extension

### Fixed
- `.chat-input__img-preview__thumb__title`
- `.za-screenshot`
- `::selection` (background)

## v3.6

> 2022-03-08

### Added
#### Browser specific
- Allows users to Enable/Disable notifications when ZaDark updates

### Changed
- `.chat-input__content.highlight`

### Fixed
- `.tipv2 .tip-close-button`

#### PC specific
- `.app-lock__main__input`

## v3.5

> 2022-03-07

### Fixed
- `.toast`

## v3.4

> 2022-03-04

### Fixed
- `.overlay__video__duration`
- `.overlay__video i`
- `.zl-avatar`

### Changed
#### Browser specific
- ZaDark Docs URL

## v3.3

> 2022-03-03

### Fixed
- `.friend-profile__addfriend__msg`

## v3.2

> 2022-02-19

### Added
#### Browser specific
- Firefox Extension

### Changed
- Delete the old build system
- Use gulp to automate the product build process
- Updated README to be more professional

### Fixed
- `.call-msg.me`
#### Browser specific
- Extension Popup: font-smoothing

## v3.1

> 2022-02-15

### Fixed
- Tab Friend Request List, Tab Joined Group List
- font-smoothing (Light Theme)
- `.image-show__caption`
- `.contact-list-item`
- `.zavi-sidebar-list-item`
- `.conv-item`
- `.file-sidebar__option`
- `.contact-list.web`
#### PC specific
- `.zavi-clock__date`
- `zavi-clock__time`
- `.zavi-btn`

## v3.0

> 2022-02-13

### Added
- Dark dimmed theme
#### Browser specific
- Welcome, Changelog page

### Changed
#### Browser specific
- Extension Popup
