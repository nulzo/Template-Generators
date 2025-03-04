export const colors = {
  border: "#515151",
  input: "#515151",
  ring: "#3e51c8",
  background: "#ffffff",
  foreground: "#000000",
  primary: {
    DEFAULT: "#3e51c8",
    foreground: "#FFFFFF",
  },
  secondary: {
    DEFAULT: "#c3c3c3",
    foreground: "#000000",
  },
  tertiary: {
    DEFAULT: "#818181",
    foreground: "#000000",
  },
  error: {
    DEFAULT: "#E6344A",
    foreground: "#ffe5e8",
  },
  success: {
    DEFAULT: "#30AF6B",
    foreground: "#ecfff5",
  },
  warning: {
    DEFAULT: "#dc9914",
    foreground: "#fff6df",
  },
  muted: {
    DEFAULT: "#adadad",
    foreground: "#202020",
  },
  accent: {
    DEFAULT: "#008080",
    foreground: "#e3ffff",
  },
  popover: {
    DEFAULT: "#c3c3c3",
    foreground: "#000000",
  },
  card: {
    DEFAULT: "#c3c3c3",
    foreground: "#000000",
  },
  syntax: {
    constants: "#5372ff",
    keywords: "#009196",
    functions: "#ff0000",
    strings: "#0827f5",
    variables: "#141414",
    typehints: "#141414",
    numbers: "#ff3e9f",
    methods: "#6422ff",
  },
  git: {
    modified: "#bc3ccd",
    deleted: "#F52D37",
    untracked: "#008878",
    submodule: "#008878",
    conflicts: "#D73D94",
    added: "#05ffb0",
  },
  markdown: {
    rawBlock: "#00000050",
  },
  json: {
    zero: "#0827f5",
    first: "#35e2e2",
    second: "#ff0000",
    third: "#00ff00",
    fourth: "#0000ff",
    fifth: "#ff00ff",
    sixth: "#ffff00",
    seventh: "#00ffff",
    eighth: "#ffa500",
  }
};

const TRANSPARENT = "#0c0b0b00";

/**
 * The color palette for the theme.
 * The documentation for this service can be found at
 * `https://code.visualstudio.com/api/references/theme-color`
 */
export const color = {
  /**
   * Contrast colors.
   */
  // contrastActiveBorder: colors.border,
  // contrastBorder: colors.border,

  /**
   * Base Colors.
   */
  "focusBorder": colors.ring,
  "foreground": colors.foreground,
  "disabledForeground": colors.muted.DEFAULT,
  "widget.border": colors.border,
  "widget.shadow": colors.secondary.DEFAULT,
  "selection.background": colors.primary.DEFAULT,
  "descriptionForeground": colors.muted.DEFAULT,
  "errorForeground": colors.error.DEFAULT,
  "icon.foreground": colors.foreground,
  "sash.hoverBorder": colors.primary.DEFAULT,

  /**
   * Window Border. The theme colors for VS Code window border.
   */
  "window.activeBorder": colors.border,
  "window.inactiveBorder": colors.border,

  /**
   * Activity Bar is the bar on the far left of the window.
   */
  "activityBar.activeBackground": TRANSPARENT,
  "activityBar.activeBorder": colors.primary.DEFAULT,
  "activityBar.activeFocusBorder": colors.primary.DEFAULT,
  "activityBar.background": colors.tertiary.DEFAULT,
  "activityBar.border": colors.border,
  "activityBar.foreground": colors.primary.DEFAULT,
  "activityBar.inactiveForeground": `${colors.foreground}90`,
  "activityBarBadge.background": colors.primary.DEFAULT,
  "activityBarBadge.foreground": colors.primary.foreground,

  /**
   * Editor Colors.
   */
  "editor.background": colors.background,
  "editor.findMatchBackground": `${colors.primary.DEFAULT}20`,
  "editor.findMatchHighlightBackground": `${colors.primary.DEFAULT}ca`,
  "editor.findRangeHighlightBackground": `${colors.primary.DEFAULT}50`,
  "editor.findMatchBorder": TRANSPARENT,
  "editor.findMatchHighlightBorder": TRANSPARENT,
  "editor.foreground": colors.foreground,
  "editor.hoverHighlightBackground": TRANSPARENT,
  "editor.lineHighlightBackground": `${colors.secondary.DEFAULT}40`,
  "editor.selectionBackground": `${colors.primary.DEFAULT}20`,
  "editor.selectionHighlightBackground": `${colors.primary.DEFAULT}30`,
  "editor.selectionHighlightBorder": TRANSPARENT,
  "editor.wordHighlightTextBackground": `${colors.primary.DEFAULT}50`,
  "editor.wordHighlightBackground": `${colors.primary.DEFAULT}50`,
  "editor.wordHighlightStrongBackground": `${colors.primary.DEFAULT}50`,
  "editor.selectionForeground": colors.foreground,

  /**
   * Editor errors, warnings, and info colors.
   */
  "editorInfo.foreground": colors.primary.DEFAULT,
  "editorWarning.foreground": colors.warning.DEFAULT,
  "editorError.foreground": colors.error.DEFAULT,
  "editorHint.foreground": colors.foreground,
  "editorHint.border": colors.border,
  "problemsErrorIcon.foreground": colors.error.DEFAULT,
  "problemsWarningIcon.foreground": colors.warning.DEFAULT,
  "problemsInfoIcon.foreground": colors.primary.DEFAULT,

  /**
   * The editor widget.
   */
  "editorSuggestWidget.background": colors.secondary.DEFAULT,
  "editorSuggestWidget.border": colors.border,
  "editorSuggestWidget.focusHighlightForeground": colors.primary.DEFAULT,
  "editorSuggestWidget.foreground": colors.foreground,
  "editorSuggestWidget.highlightForeground": colors.foreground,
  "editorSuggestWidget.highlightBackground": `${colors.primary.DEFAULT}30`,
  "editorSuggestWidget.selectedBackground": `${colors.primary.DEFAULT}30`,
  "editorSuggestWidget.selectedForeground": colors.background,
  "editorSuggestWidget.selectedIconForeground": colors.background,

  /**
   * The whitespace foreground.
   */
  "editorWhitespace.foreground": colors.muted.DEFAULT,

  "editorWidget.background": colors.secondary.DEFAULT,
  "editorWidget.foreground": colors.foreground,
  "editorWidget.resizeBorder": colors.primary.DEFAULT,
  "editorWidget.border": colors.border,

  /**
   * Git Colors.
   */
  "gitDecoration.addedResourceForeground": colors.git.added,
  "gitDecoration.conflictingResourceForeground": colors.git.conflicts,
  "gitDecoration.deletedResourceForeground": colors.git.deleted,
  "gitDecoration.ignoredResourceForeground": colors.muted.DEFAULT,
  "gitDecoration.modifiedResourceForeground": colors.git.modified,
  "gitDecoration.stageDeletedResourceForeground": colors.git.deleted,
  "gitDecoration.stageModifiedResourceForeground": colors.git.modified,
  "gitDecoration.submoduleResourceForeground": colors.git.submodule,
  "gitDecoration.untrackedResourceForeground": colors.git.untracked,

  /**
   * The input colors.
   */
  "input.background": colors.background,
  "input.border": colors.border,
  "input.foreground": colors.foreground,
  "input.placeholderForeground": colors.muted.DEFAULT,
  "inputOption.activeBackground": colors.background,
  "inputOption.activeBorder": colors.border,
  "inputOption.activeForeground": colors.foreground,
  "inputOption.hoverBackground": `${colors.primary.DEFAULT}30`,
  "inputValidation.errorBackground": `${colors.error.DEFAULT}50`,
  "inputValidation.errorBorder": colors.error.DEFAULT,
  "inputValidation.errorForeground": colors.error.DEFAULT,
  "inputValidation.infoBackground": `${colors.primary.DEFAULT}50`,
  "inputValidation.infoBorder": colors.primary.DEFAULT,
  "inputValidation.infoForeground": colors.primary.DEFAULT,
  "inputValidation.warningBackground": `${colors.warning.DEFAULT}`,
  "inputValidation.warningBorder": colors.warning.DEFAULT,

  /**
   * The keybinding colors.
   */
  "keybindingLabel.foreground": colors.primary.DEFAULT,
  "keybindingLabel.border": colors.primary.DEFAULT,
  "keybindingLabel.bottomBorder": colors.primary.DEFAULT,
  "keybindingLabel.background": colors.background,
  "keybindingTable.headerBackground": colors.background,

  /**
   * The list attributes.
   */
  "list.activeSelectionBackground": `${colors.primary.DEFAULT}`,
  "list.activeSelectionIconForeground": colors.background,
  "list.dropBackground": `${colors.primary.DEFAULT}`,
  "list.errorForeground": colors.error.DEFAULT,
  "list.highlightForeground": colors.background,
  "list.hoverBackground": `${colors.primary.DEFAULT}f0`,
  "list.inactiveSelectionBackground": `${colors.primary.DEFAULT}`,
  "list.inactiveSelectionForeground": colors.background,
  "list.inactiveSelectionIconForeground": colors.background,
  "list.warningForeground": colors.warning.DEFAULT,

  /**
   * The Tab Colors.
   */
  "tab.activeBackground": `${colors.secondary.DEFAULT}`,
  "tab.activeBorderTop": colors.primary.DEFAULT,
  "tab.activeBorder": colors.border,
  "tab.border": colors.border,
  "tab.inactiveBackground": `${colors.secondary.DEFAULT}`,
  "tab.selectedForeground": `${colors.secondary.foreground}`,
  "tab.activeForeground": `${colors.secondary.foreground}`,
  "tab.inactiveForeground": `${colors.secondary.foreground}`,

  /**
   * Text Colors.
   */
  "textBlockQuote.background": colors.secondary.DEFAULT,
  "textBlockQuote.border": colors.border,
  "textCodeBlock.background": colors.secondary.DEFAULT,
  "textLink.activeForeground": colors.primary.DEFAULT,
  "textLink.foreground": colors.primary.DEFAULT,
  "textPreformat.foreground": colors.foreground,
  "textPreformat.background": colors.secondary.DEFAULT,
  "textSeparator.foreground": colors.muted.DEFAULT,

  /**
   * Symbol Icons Colors.
   */
  "symbolIcon.arrayForeground": colors.foreground,
  "symbolIcon.booleanForeground": colors.foreground,
  "symbolIcon.classForeground": colors.foreground,
  "symbolIcon.colorForeground": colors.foreground,
  "symbolIcon.constantForeground": colors.foreground,
  "symbolIcon.enumeratorForeground": colors.foreground,
  "symbolIcon.enumeratorMemberForeground": colors.foreground,
  "symbolIcon.eventForeground": colors.foreground,
  "symbolIcon.fieldForeground": colors.foreground,
  "symbolIcon.fileForeground": colors.foreground,
  "symbolIcon.folderForeground": colors.foreground,
  "symbolIcon.functionForeground": colors.foreground,
  "symbolIcon.interfaceForeground": colors.foreground,
  "symbolIcon.keyForeground": colors.foreground,
  "symbolIcon.keywordForeground": colors.foreground,
  "symbolIcon.methodForeground": colors.foreground,
  "symbolIcon.moduleForeground": colors.foreground,
  "symbolIcon.namespaceForeground": colors.foreground,
  "symbolIcon.nullForeground": colors.foreground,
  "symbolIcon.numberForeground": colors.foreground,
  "symbolIcon.objectForeground": colors.foreground,
  "symbolIcon.operatorForeground": colors.foreground,
  "symbolIcon.packageForeground": colors.foreground,
  "symbolIcon.propertyForeground": colors.foreground,
  "symbolIcon.referenceForeground": colors.foreground,
  "symbolIcon.snippetForeground": colors.foreground,
  "symbolIcon.stringForeground": colors.foreground,
  "symbolIcon.structForeground": colors.foreground,
  "symbolIcon.textForeground": colors.foreground,
  "symbolIcon.typeParameterForeground": colors.foreground,
  "symbolIcon.unitForeground": colors.foreground,
  "symbolIcon.variableForeground": colors.foreground,

  /**
   * Debug Icons Colors.
   */
  "debugIcon.breakpointForeground": colors.accent.DEFAULT,
  "debugIcon.breakpointDisabledForeground": colors.muted.DEFAULT,
  "debugIcon.breakpointUnverifiedForeground": colors.warning.DEFAULT,
  "debugIcon.breakpointCurrentStackframeForeground": colors.success.DEFAULT,
  "debugIcon.breakpointStackframeForeground": colors.primary.DEFAULT,

  /**
   * The terminal colors.
   */
  "terminal.background": `${colors.background}`,
  "terminal.border": colors.primary.DEFAULT,
  "terminal.inactiveSelectionBackground": `${colors.primary.DEFAULT}30`,
  "terminal.selectionBackground": `${colors.primary.DEFAULT}30`,
  "terminalCursor.background": colors.background,
  "terminalCursor.foreground": colors.primary.DEFAULT,
  "terminal.foreground": colors.foreground,
  "terminalStickyScroll.border": colors.border,

  /**
   * Title Bar Colors.
   */
  "titleBar.activeBackground": `${colors.tertiary.DEFAULT}`,
  "titleBar.activeForeground": colors.foreground,
  "titleBar.border": colors.border,
  "titleBar.inactiveBackground": `${colors.tertiary.DEFAULT}`,

  /**
   * The tree indent guide strokes.
   */
  "tree.indentGuidesStroke": `${colors.muted.DEFAULT}`,

  /**
   * Widgets.
   */
  "widget.border": colors.border,
  "widget.shadow": TRANSPARENT,

  "welcomePage.tileBorder": colors.border,
  "welcomePage.background": colors.background,
  "welcomePage.progress.background": colors.muted.DEFAULT,
  "welcomePage.progress.foreground": colors.primary.DEFAULT,

  /**
   * Notebook Colors.
   */
  "notebook.editorBackground": colors.background,
  "notebook.cellBorderColor": colors.border,
  "notebook.cellHoverBackground": colors.secondary.DEFAULT,
  "notebook.focusedCellBackground": colors.secondary.DEFAULT,
  "notebook.selectedCellBackground": colors.primary.DEFAULT,

  /**
   * Chart Colors.
   */
  "charts.foreground": colors.foreground,
  "charts.lines": colors.primary.DEFAULT,
  "charts.red": colors.error.DEFAULT,
  "charts.blue": colors.primary.DEFAULT,
  "charts.yellow": colors.warning.DEFAULT,
  "charts.orange": "#FFA500",
  "charts.green": colors.success.DEFAULT,
  "charts.purple": "#800080",

  /**
   * Ports Colors
   */
  "ports.iconRunningProcessForeground": colors.foreground,

  // Comments View colors
  "commentsView.resolvedIcon": colors.success.DEFAULT,
  "commentsView.unresolvedIcon": colors.warning.DEFAULT,

  // Action Bar colors
  "actionBar.toggledBackground": colors.primary.DEFAULT,

  // Simple Find Widget
  "simpleFindWidget.sashBorder": colors.border,

  // Breadcrumbs colors
  "breadcrumb.foreground": colors.muted.DEFAULT,
  "breadcrumb.background": colors.background,
  "breadcrumb.focusForeground": colors.foreground,
  "breadcrumb.activeSelectionForeground": colors.primary.DEFAULT,
  "breadcrumbPicker.background": colors.background,

  // Snippets colors
  "editor.snippetTabstopHighlightBackground": `${colors.primary.DEFAULT}40`,
  "editor.snippetTabstopHighlightBorder": colors.primary.DEFAULT,
  "editor.snippetFinalTabstopHighlightBackground": `${colors.success.DEFAULT}40`,
  "editor.snippetFinalTabstopHighlightBorder": colors.success.DEFAULT,

  // Settings Editor colors
  "settings.headerForeground": colors.foreground,
  "settings.modifiedItemIndicator": colors.warning.DEFAULT,
  "settings.dropdownBackground": colors.background,
  "settings.dropdownForeground": colors.foreground,
  "settings.dropdownBorder": colors.border,
  "settings.checkboxBackground": colors.background,
  "settings.checkboxForeground": colors.foreground,
  "settings.checkboxBorder": colors.border,
  "settings.textInputBackground": colors.background,
  "settings.textInputForeground": colors.foreground,
  "settings.textInputBorder": colors.border,
  "settings.numberInputBackground": colors.background,
  "settings.numberInputForeground": colors.foreground,
  "settings.numberInputBorder": colors.border,

  // Additional merged properties
  "badge.background": colors.primary.DEFAULT,
  "badge.foreground": colors.primary.foreground,

  "banner.background": colors.secondary.DEFAULT,
  "banner.foreground": colors.secondary.foreground,
  "banner.iconForeground": colors.primary.DEFAULT,

  "button.background": colors.primary.DEFAULT,
  "button.border": TRANSPARENT,
  "button.foreground": colors.primary.foreground,
  "button.primaryBorder": colors.primary.foreground,
  "button.hoverBackground": `${colors.primary.DEFAULT}f0`,
  "button.secondaryBackground": colors.tertiary.DEFAULT,
  "button.secondaryBorder": colors.muted.DEFAULT,
  "button.separator": colors.border,
  "button.secondaryForeground": colors.foreground,
  "button.secondaryHoverBackground": `${colors.muted.DEFAULT}f0`,

  "checkbox.background": colors.background,
  "checkbox.foreground": colors.foreground,
  "checkbox.border": colors.border,
  "checkbox.selectBackground": colors.primary.DEFAULT,
  "checkbox.selectBorder": colors.primary.DEFAULT,

  "commandCenter.foreground": colors.foreground,
  "commandCenter.background": colors.background,
  "commandCenter.activeBackground": colors.background,
  "commandCenter.activeForeground": colors.foreground,
  "commandCenter.border": colors.border,
  "commandCenter.inactiveForeground": colors.muted.DEFAULT,
  "commandCenter.inactiveBorder": colors.border,
  "commandCenter.activeBorder": colors.border,

  "dropdown.background": colors.background,
  "dropdown.listBackground": colors.secondary.DEFAULT,

  "toolbar.hoverBackground": colors.muted.DEFAULT,
  "toolbar.activeBackground": colors.muted.DEFAULT,
  "editorActionList.foreground": colors.foreground,
  "debugToolBar.background": colors.secondary.DEFAULT,
  "debugToolBar.border": colors.border,

  "editorCodeLens.foreground": colors.muted.DEFAULT,

  "editorCursor.background": colors.background,
  "editorCursor.foreground": colors.foreground,

  "editorGroup.border": colors.border,
  "editorGroupHeader.border": TRANSPARENT,
  "editorGroupHeader.tabsBackground": colors.secondary.DEFAULT,
  "editorGroupHeader.tabsBorder": colors.border,

  "editorGutter.addedBackground": colors.git.untracked,
  "editorGutter.background": colors.background,
  "editorGutter.deletedBackground": colors.git.deleted,
  "editorGutter.foldingControlForeground": colors.muted.DEFAULT,
  "editorGutter.modifiedBackground": colors.git.modified,

  "editorHoverWidget.background": colors.secondary.DEFAULT,
  "editorHoverWidget.border": colors.border,
  "editorHoverWidget.foreground": colors.foreground,
  "editorHoverWidget.highlightForeground": colors.foreground,
  "editorHoverWidget.statusBarBackground": colors.secondary.DEFAULT,

  "editorLineNumber.activeForeground": colors.primary.DEFAULT,
  "editorLineNumber.foreground": `${colors.muted.DEFAULT}50`,
  "editorLineNumber.dimmedForeground": `${colors.muted.DEFAULT}20`,

  "editorMarkerNavigation.background": colors.secondary.DEFAULT,
  "editorMarkerNavigationError.background": colors.error.DEFAULT,
  "editorMarkerNavigationInfo.background": colors.primary.DEFAULT,
  "editorMarkerNavigationWarning.background": colors.warning.DEFAULT,

  "editorOverviewRuler.background": colors.background,
  "editorOverviewRuler.border": TRANSPARENT,

  "menu.background": colors.secondary.DEFAULT,
  "menu.border": colors.border,
  "menu.foreground": colors.secondary.foreground,
  "menu.selectionBackground": `${colors.primary.DEFAULT}`,
  "menu.separatorBackground": colors.border,
  "menubar.selectionBackground": `${colors.primary.DEFAULT}30`,
  "menubar.selectionForeground": colors.foreground,
  "menubar.selectionBorder": colors.border,

  "minimap.background": colors.background,
  "minimap.findMatchHighlight": `${colors.primary.DEFAULT}20`,
  "minimap.selectionHighlight": `${colors.primary.DEFAULT}30`,
  "minimap.errorHighlight": colors.error.DEFAULT,
  "minimap.warningHighlight": colors.warning.DEFAULT,
  "minimap.selectionOccurrenceHighlight": `${colors.primary.DEFAULT}30`,
  "minimap.infoHighlight": colors.primary.DEFAULT,
  "minimapSlider.activeBackground": `${colors.primary.DEFAULT}50`,
  "minimapSlider.hoverBackground": `${colors.primary.DEFAULT}20`,
  "minimapSlider.background": `${colors.primary.DEFAULT}10`,

  "notificationCenter.border": colors.border,
  "notifications.background": colors.secondary.DEFAULT,
  "notifications.border": colors.border,
  "notifications.foreground": colors.secondary.foreground,
  "notificationsErrorIcon.foreground": colors.error.DEFAULT,
  "notificationsInfoIcon.foreground": colors.primary.DEFAULT,
  "notificationsWarningIcon.foreground": colors.warning.DEFAULT,
  "notificationToast.border": colors.border,
  "notificationLink.foreground": colors.primary.DEFAULT,
  "notificationCenterHeader.foreground": colors.secondary.foreground,
  "notificationCenterHeader.background": colors.secondary.DEFAULT,
  "notificationCenter.border": colors.border,

  "panel.background": colors.secondary.DEFAULT,
  "panel.border": colors.border,
  "panelTitle.activeBorder": colors.primary.DEFAULT,
  "panelTitle.activeForeground": colors.foreground,
  "panelTitle.inactiveForeground": colors.muted.DEFAULT,
  "panelSectionHeader.border": colors.border,
  "panelSection.border": colors.border,

  "peekView.border": colors.border,
  "peekViewEditor.background": colors.background,
  "peekViewEditor.matchHighlightBackground": colors.primary.DEFAULT,
  "peekViewEditor.matchHighlightBorder": TRANSPARENT,
  "peekViewEditorGutter.background": colors.background,
  "peekViewEditorStickyScroll.background": colors.muted.DEFAULT,
  "peekViewResult.background": colors.muted.DEFAULT,
  "peekViewResult.fileForeground": colors.foreground,
  "peekViewResult.lineForeground": colors.muted.DEFAULT,
  "peekViewResult.matchHighlightBackground": colors.primary.DEFAULT,
  "peekViewTitle.background": colors.muted.DEFAULT,
  "peekViewTitleDescription.foreground": colors.muted.DEFAULT,
  "peekViewTitleLabel.foreground": colors.foreground,

  "pickerGroup.border": colors.border,
  "pickerGroup.foreground": colors.primary.DEFAULT,

  "progressBar.background": colors.primary.DEFAULT,

  "scrollbar.shadow": TRANSPARENT,
  "scrollbarSlider.activeBackground": `${colors.foreground}40`,
  "scrollbarSlider.background": `${colors.foreground}10`,
  "scrollbarSlider.hoverBackground": `${colors.foreground}20`,

  "settings.settingsHeaderHoverForeground": `${colors.primary.DEFAULT}`,
  "settings.rowHoverBackground": `${colors.muted.DEFAULT}20`,
  "settings.focusedRowBackground": `${colors.muted.DEFAULT}50`,
  "settings.checkboxForeground": `${colors.primary.DEFAULT}`,

  "sideBar.background": colors.secondary.DEFAULT,
  "sideBar.border": colors.border,
  "sideBar.foreground": colors.foreground,
  "sideBarSectionHeader.background": colors.secondary.DEFAULT,
  "sideBarSectionHeader.border": colors.border,
  "sideBarTitle.foreground": colors.foreground,
  "sideBarTitle.background": colors.secondary.DEFAULT,

  "sideBarActivityBarTop.border": colors.tertiary.DEFAULT,
  "sideBarSection.border": colors.border,

  "statusBar.background": colors.tertiary.DEFAULT,
  "statusBar.border": colors.border,
  "statusBar.debuggingBackground": colors.tertiary.DEFAULT,
  "statusBar.noFolderBackground": colors.tertiary.DEFAULT,
  "statusBarItem.hoverBackground": `${colors.primary.DEFAULT}f0`,
  "statusBarItem.hoverForeground": `${colors.background}`,
  "statusBarItem.remoteBackground": colors.primary.DEFAULT,
  "statusBar.foreground": colors.foreground,
  "statusBarItem.remoteHoverForeground": colors.primary.DEFAULT,
};
