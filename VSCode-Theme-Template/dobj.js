const fs = require("fs");

const TRANSPARENT = "#00000000";
const AUTHOR = "Nolan Gregory";
const NAME = "Lavender Theme";
const TYPE = "dark";
const DESCRIPTION = "Auto generated theme using @nulzo's Theme Builder";
const VERSION = "0.0.1";
const VSCODE_VERSION = "^1.70.0";

// Syntax constants are things like true, false, null, dot methods, class, def, func names, file names, package names, const, etc.
// These should usually be a dark compliment to the primary color, if not the primary color itself if it suffices.
// They should be easily distinguishable from the rest of the code, and the color shouldn't be reused for much else.
// const colorObject.syntax.constants = "#f5db94";
 
// syntax keywords are things like import, export, return, private, from, public, try, etc. Should be a similar (if not same) color as colorObject.syntax.constantss.
// These two will need to be decoupled later.
// const colorObject.syntax.keywords = "#ff9891";
 
// unsure? no clue what this does at this point.
// const colorObject.syntax.functions = "#FF0000"
 
// Strings. These are usually a shade of green or blue, but can be any color
// that isn't used for anything else. They should be easily distinguishable
// from the rest of the code.
// const colorObject.syntax.strings = "#d2ecb1"
 
// These are all variables and properties.
// Usually the same color as the base foreground, though there can be some
// color variance. They should be light (on a dark theme) and dark
// (on a light theme). They shouldn't be distracting as they are used
// frequently throughout the code.
// const colorObject.syntax.variables = "#c6b9ff"
 
// Typehinting. Should be a distinguishable and conspicious color.
// const colorObject.syntax.typehints = "#9fbfe4"
 
// Just numbers. These should be unique, and can be similar to strings.
// const colorObject.syntax.numbers = "#ffa285"
 
// Methods of classes. Should be very distinguishable from the syntax constants.
// const colorObject.syntax.methods = "#ffa958"

/**
 * The color object contains the values for the theme colors. This object
 * is used to generate the theme file, and it is deliberately duplicative.
 */
const colorObject = {
  /**
   * Foreground colors are the colors of text objects on the screen. Default,
   * secondary, tertiary are the main text colors, and are linked to the main
   * background colors. Accent, info, error, warning, and success should all be
   * used _when on top of their corresponding background colors_. The background
   * colors should be used as the main colors for the foreground if they are
   * being used on the default background colors.
   */
  foreground: {
    primary: "#000000",
    secondary: "#000000",
    tertiary: "#000000",
    accent: "#FDF3E9",
    muted: "#979797",
    inactive: "#999999",
    info: "#AED5F4",
    error: "#f69ba5",
    warning: "#FFDEB0",
    success: "#B5DFC9",
  },
  background: {
    primary: "#ffffff",
    secondary: "#c3c3c3",
    tertiary: "#818181",
    accent: "#0827f5",
    muted: "#adadad",
    inactive: "#2e2e2e",
    info: "#2196F3",
    error: "#E6344A",
    warning: "#e29e00",
    success: "#30AF6B",
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
    modified: "#0827f5",
    deleted: "#F52D37",
    untracked: "#008878",
    submodule: "#008878",
    conflicts: "#D73D94",
    added: "#05ffb0",
  },
  misc: {
    hover: "",
    selected: "",
    highlight: "#a39483",
    border: "#5c5c5c",
    border_dark: "#383838",
    border_light: "#b1b1b1",
  },
};

const package = {
  name: NAME,
  displayName: NAME,
  publisher: AUTHOR,
  author: AUTHOR,
  description: DESCRIPTION,
  version: VERSION,
  engines: {
    vscode: VSCODE_VERSION,
  },
  categories: ["Themes"],
  contributes: {
    themes: [
      {
        label: NAME,
        uiTheme: `vs-${TYPE}`,
        path: `./themes/nulzo-theme.json`,
      },
    ],
  },
};

/**
 * The color palette for the theme.
 * The documentation for this service can be found at
 * `https://code.visualstudio.com/api/references/theme-color`
 */
let colors = {
  /**
   * Activity Bar is the bar on the far left of the window. It contains
   * icons for each of the views in the sidebar. These icons include
   * things like the explorer, search, source control, and debug views.
   * The icons can have badges that show the number of unread notifications
   * or messages in the view.
   */
  "activityBar.activeBackground": TRANSPARENT,
  "activityBar.activeBorder": colorObject.background.accent,
  "activityBar.activeFocusBorder": colorObject.background.primary,
  "activityBar.background": colorObject.background.tertiary,
  "activityBar.border": colorObject.misc.border_dark,
  "activityBar.foreground": colorObject.background.accent,
  "activityBar.inactiveForeground": `${colorObject.foreground.primary}90`,
  "activityBarBadge.background": colorObject.background.accent,
  "activityBarBadge.foreground": colorObject.foreground.accent,

  /**
   * Badges are small notifications that appear on the top of the terminal.
   * Similarly, they include things such as search results count.
   * These should match the colors and properties of the activity bar badges.
   */
  "badge.background": colorObject.background.accent,
  "badge.foreground": colorObject.foreground.accent,

  /**
   * Banners appear below the title bar and span the entire width of the
   * workbench whenever they are visible.
   */
  "banner.background": colorObject.background.secondary,
  "banner.foreground": colorObject.foreground.secondary,
  "banner.iconForeground": colorObject.background.accent,

  /**
   * Breadcrumbs are navigation elements that appear at the top of the
   * editor. They show the relative path of the current file.
   */
  "breadcrumb.background": colorObject.background.primary,
  "breadcrumb.focusForeground": colorObject.foreground.primary,
  "breadcrumb.foreground": colorObject.foreground.inactive,

  /**
   * Buttons are widgets, such as the `open a new file` button, that
   * perform an action when clicked. They can have text or icons.
   */
  "button.background": colorObject.background.accent,
  "button.border": TRANSPARENT,
  "button.foreground": colorObject.foreground.accent,
  "button.primaryBorder": colorObject.foreground.accent,
  "button.hoverBackground": `${colorObject.background.accent}f0`,
  "button.secondaryBackground": colorObject.background.tertiary,
  "button.secondaryBorder": colorObject.background.muted,
  "button.separator": colorObject.misc.border,
  "button.secondaryForeground": colorObject.foreground.primary,
  "button.secondaryHoverBackground": `${colorObject.background.muted}f0`,

  /**
   * Checkboxes are interactive elements that can be toggled on or off.
   * They are used in forms and settings, and act similarly to a button.
   */
  "checkbox.background": colorObject.background.primary,
  "checkbox.foreground": colorObject.foreground.primary,
  "checkbox.border": colorObject.misc.border,
  "checkbox.selectBackground": colorObject.background.accent,
  "checkbox.selectBorder": colorObject.background.accent,

  /**
   * The Command Center is the central hub for all commands in the editor.
   * It appears on the top of the editor as a search box that can be used
   * to search for commands, settings, and files.
   */
  "commandCenter.foreground": colorObject.foreground.primary,
  "commandCenter.background": colorObject.background.primary,
  "commandCenter.activeBackground": colorObject.background.primary,
  "commandCenter.activeForeground": colorObject.foreground.primary,
  "commandCenter.border": colorObject.misc.border,
  "commandCenter.inactiveForeground": colorObject.foreground.inactive,
  "commandCenter.inactiveBorder": colorObject.misc.border,
  "commandCenter.activeBorder": colorObject.misc.border,

  "dropdown.background": colorObject.background.primary,
  "dropdown.listBackground": colorObject.background.secondary,

  /**
   * Debugging Colors
   * - Debug Toolbar - The toolbar that appears at the top of the editor
   *     when debugging. It contains buttons for stepping through code,
   *     pausing, and stopping the debugger.
   *
   */
  "toolbar.hoverBackground": colorObject.background.muted,
  "toolbar.activeBackground": colorObject.background.muted,
  "editorActionList.foreground": colorObject.foreground.primary,
  "debugToolBar.background": colorObject.background.secondary,
  "debugToolBar.border": colorObject.misc.border,

  /**
   * Dropdowns are interactive elements that allow the user to select
   * from a list of options. They are used in forms and settings.
   */
  "dropdown.background": colorObject.background.secondary,
  "dropdown.border": colorObject.misc.border,
  "dropdown.foreground": colorObject.foreground.secondary,

  /**
   * Default values. These values are used if a specific widget is not
   * given a specific value for each. They should be used as a fallback
   * for all widgets.
   */
  disabledForeground: colorObject.background.inactive,
  descriptionForeground: colorObject.background.muted,
  errorForeground: colorObject.background.error,
  focusBorder: colorObject.misc.border,
  foreground: colorObject.foreground.primary,

  /**
   * Editor Colors. The editor is the main area of the window where code
   * is written and edited. It includes the text editor, terminal, and
   * output panel.
   * - Background - The background color of the editor.
   * - Foreground - The default color of the text in the editor.
   * - Selection - The color of the selected text in the editor.
   * - Highlight - The color of highlighted text in the editor.
   * - findMatch - The color of text that matches the find query.
   * - findMatchHighlight - The color of highlighted text that matches.
   */
  "editor.background": colorObject.background.primary,
  "editor.findMatchBackground": `${colorObject.background.accent}20`,
  "editor.findMatchHighlightBackground": `${colorObject.background.accent}ca`,
  "editor.findRangeHighlightBackground": `${colorObject.background.accent}50`,
  "editor.findMatchBorder": TRANSPARENT,
  "editor.findMatchHighlightBorder": TRANSPARENT,
  "editor.foreground": colorObject.foreground.primary,
  "editor.hoverHighlightBackground": TRANSPARENT,
  "editor.lineHighlightBackground": `${colorObject.background.secondary}40`,
  "editor.selectionBackground": `${colorObject.background.accent}20`,
  "editor.selectionHighlightBackground": `${colorObject.background.accent}30`,
  "editor.selectionHighlightBorder": TRANSPARENT,
  "editor.findMatchHighlightBackground": `${colorObject.background.accent}50`,
  "editor.wordHighlightTextBackground": `${colorObject.background.accent}50`,
  "editor.selectionHighlightBorder": TRANSPARENT,
  "editor.wordHighlightBackground": `${colorObject.background.accent}50`,
  "editor.wordHighlightStrongBackground": `${colorObject.background.accent}50`,
  "editor.selectionForeground": colorObject.foreground.primary,

  /**
   * Editor errors, warnings, and info colors. These colors are used to
   * color the squiggly lines that appear under errors, warnings, and info
   * messages in the editor.
   */
  "editorInfo.foreground": colorObject.background.info,
  "editorWarning.foreground": colorObject.background.warning,
  "editorError.foreground": colorObject.background.error,
  "editorHint.foreground": colorObject.foreground.primary,
  "editorHint.border": colorObject.misc.border,
  "problemsErrorIcon.foreground": colorObject.background.error,
  "problemsWarningIcon.foreground": colorObject.background.warning,
  "problemsInfoIcon.foreground": colorObject.background.info,

  "editorCodeLens.foreground": colorObject.foreground.inactive,

  "editorCursor.background": colorObject.background.primary,

  "editorCursor.foreground": colorObject.foreground.primary,

  "editorGroup.border": colorObject.misc.border,
  "editorGroupHeader.border": TRANSPARENT,
  "editorGroupHeader.tabsBackground": colorObject.background.secondary,
  "editorGroupHeader.tabsBorder": colorObject.misc.border,

  /**
   * The editor gutter is the area on the left side of the editor that
   * glyph margins and the line numbers.
   */
  "editorGutter.addedBackground": colorObject.git.untracked,
  "editorGutter.background": colorObject.background.primary,
  "editorGutter.deletedBackground": colorObject.git.deleted,
  "editorGutter.foldingControlForeground": colorObject.foreground.inactive,
  "editorGutter.modifiedBackground": colorObject.git.modified,

  /**
   * The editor hover widget is the popup that appears when hovering over
   * text in the editor. It shows information about the text, such as
   * documentation or type hints.
   */
  "editorHoverWidget.background": colorObject.background.secondary,
  "editorHoverWidget.border": colorObject.misc.border,
  "editorHoverWidget.foreground": colorObject.foreground.primary,
  "editorHoverWidget.highlightForeground": colorObject.foreground.primary,
  "editorHoverWidget.statusBarBackground": colorObject.background.secondary,

  /**
   * The editor line number is the number that appears to the left of each
   * line in the editor. It is used for navigation and reference.
   */
  "editorLineNumber.activeForeground": colorObject.background.accent,
  "editorLineNumber.foreground": `${colorObject.foreground.inactive}50`,
  "editorLineNumber.dimmedForeground": `${colorObject.foreground.inactive}20`,

  /**
   * The editor marker view shows when navigating to errors and
   * warnings in the editor (i.e. Go to Next Error or Warning command).
   */
  "editorMarkerNavigation.background": colorObject.background.secondary,
  "editorMarkerNavigationError.background": colorObject.background.error,
  "editorMarkerNavigationInfo.background": colorObject.background.info,
  "editorMarkerNavigationWarning.background": colorObject.background.warning,

  /**
   * Editor ruler for merge conflicts.
   */
  "editorOverviewRuler.background": colorObject.background.primary,
  "editorOverviewRuler.border": TRANSPARENT,

  /**
   * The editor widget is the popup that appears when clicking on a
   * symbol in the editor. It shows information about the symbol, such
   * as its definition and references.
   */
  "editorSuggestWidget.background": colorObject.background.secondary,
  "editorSuggestWidget.border": colorObject.misc.border,
  "editorSuggestWidget.focusHighlightForeground": colorObject.background.accent,
  "editorSuggestWidget.foreground": colorObject.foreground.primary,
  "editorSuggestWidget.highlightForeground": colorObject.foreground.primary,
  "editorSuggestWidget.highlightBackground": `${colorObject.background.accent}30`,
  "editorSuggestWidget.selectedBackground": `${colorObject.background.accent}30`,
  "editorSuggestWidget.selectedForeground": colorObject.background.primary,
  "editorSuggestWidget.selectedIconForeground": colorObject.background.primary,

  /**
   * The whitespace foreground is the color of the indentation
   * guides in the editor. These guides help to show the structure
   * of the code.
   */
  "editorWhitespace.foreground": colorObject.foreground.muted,

  "editorWidget.background": colorObject.background.secondary,
  "editorWidget.foreground": colorObject.foreground.primary,
  "editorWidget.resizeBorder": colorObject.background.accent,
  "editorWidget.border": colorObject.misc.border,

  /**
   * Git Colors. These colors are used to color the git elements in the
   * editor. These include things like added, modified, and deleted files,
   * as well as conflicts and submodules. It will color the name of the
   * file in the editor in the upper tab as well as the side tree view.
   */
  "gitDecoration.addedResourceForeground": colorObject.git.added,
  "gitDecoration.conflictingResourceForeground": colorObject.git.conflicts,
  "gitDecoration.deletedResourceForeground": colorObject.git.deleted,
  "gitDecoration.ignoredResourceForeground": colorObject.foreground.inactive,
  "gitDecoration.modifiedResourceForeground": colorObject.git.modified,
  "gitDecoration.stageDeletedResourceForeground": colorObject.git.deleted,
  "gitDecoration.stageModifiedResourceForeground": colorObject.git.modified,
  "gitDecoration.submoduleResourceForeground": colorObject.git.submodule,
  "gitDecoration.untrackedResourceForeground": colorObject.git.untracked,

  "icon.foreground": colorObject.foreground.primary,

  /**
   * The input colors are used for input elements, such as in
   * the search view or the find/replace dialog popups.
   */
  "input.background": colorObject.background.primary,
  "input.border": colorObject.misc.border,
  "input.foreground": colorObject.foreground.primary,
  "input.placeholderForeground": colorObject.foreground.muted,
  "inputOption.activeBackground": colorObject.background.primary,
  "inputOption.activeBorder": colorObject.misc.border,
  "inputOption.activeForeground": colorObject.foreground.primary,
  "inputOption.hoverBackground": `${colorObject.background.accent}30`,
  "inputValidation.errorBackground": `${colorObject.background.error}50`,
  "inputValidation.errorBorder": colorObject.background.error,
  "inputValidation.errorForeground": colorObject.background.error,
  "inputValidation.infoBackground": `${colorObject.background.info}50`,
  "inputValidation.infoBorder": colorObject.background.info,
  "inputValidation.infoForeground": colorObject.background.info,
  "inputValidation.warningBackground": `${colorObject.background.warning}50`,
  "inputValidation.warningBorder": colorObject.background.warning,

  /**
   * The keybinding colors are used for the keybinding labels in the
   * editor. These labels show the keybindings for commands, such as
   * `Ctrl` + `S` for save.
   */
  "keybindingLabel.foreground": colorObject.background.accent,
  "keybindingLabel.border": colorObject.background.accent,
  "keybindingLabel.bottomBorder": colorObject.background.accent,
  "keybindingLabel.background": colorObject.background.primary,
  "keybindingTable.headerBackground": colorObject.background.primary,

  /**
   * The list is attribute for "list and trees" like the File Explorer.
   * An active list/tree has keyboard focus, an inactive does not.
   * This is mainly used in the left sidebar file tree.
   */
  "list.activeSelectionBackground": `${colorObject.background.accent}`,
  "list.activeSelectionIconForeground": colorObject.background.primary,
  "list.dropBackground": `${colorObject.background.accent}`,
  "list.errorForeground": colorObject.background.error,
  "list.highlightForeground": colorObject.background.primary,
  "list.hoverBackground": `${colorObject.background.accent}f0`,
  "list.inactiveSelectionBackground": `${colorObject.background.accent}`,
  "list.inactiveSelectionForeground": colorObject.background.primary,
  "list.inactiveSelectionIconForeground": colorObject.background.primary,
  "list.warning": colorObject.background.warning,
  "listFilterWidget.background": colorObject.background.primary,
  "listFilterWidget.noMatchesOutline": colorObject.background.error,
  "listFilterWidget.outline": colorObject.background.error,
  "list.activeSelectionIconForeground": colorObject.background.primary,
  "list.focusForeground": colorObject.background.primary,
  "list.hoverForeground": `${colorObject.background.primary}`,

  /**
   * The menu is the dropdown menu that appears when clicking on a
   * menu item in the editor. It shows a list of commands that can be
   * run on the selected text or file. These are controlled as dropdowns
   * via the top buttons such as file, edit, view, etc.
   */
  "menu.background": colorObject.background.secondary,
  "menu.border": colorObject.misc.border,
  "menu.foreground": colorObject.foreground.secondary,
  "menu.selectionBackground": `${colorObject.background.accent}`,
  "menu.separatorBackground": colorObject.misc.border,
  "menubar.selectionBackground": `${colorObject.background.accent}30`,
  "menubar.selectionForeground": colorObject.foreground.primary,
  "menubar.selectionBorder": colorObject.misc.border,

  /**
   * The minimap is a minified version of the editor that shows an
   * overview of the code. It is used for navigation and reference, and
   * it shows up on the right side of each editor window.
   */
  "minimap.background": colorObject.background.primary,
  "minimap.findMatchHighlight": `${colorObject.background.accent}20`,
  "minimap.selectionHighlight": `${colorObject.background.accent}30`,
  "minimap.errorHighlight": colorObject.background.error,
  "minimap.warningHighlight": colorObject.background.warning,
  "minimap.selectionOccurrenceHighlight": `${colorObject.background.accent}30`,
  "minimap.infoHighlight": colorObject.background.info,
  "minimapSlider.activeBackground": `${colorObject.background.accent}50`,
  "minimapSlider.hoverBackground": `${colorObject.background.accent}20`,
  "minimapSlider.background": `${colorObject.background.accent}10`,

  /**
   * The notification center are toasts that slide up from the bottom-right
   * of the workbench. They show messages, errors, warnings, and info
   * messages to the user.
   */
  "notificationCenter.border": colorObject.misc.border,
  "notifications.background": colorObject.background.secondary,
  "notifications.border": colorObject.misc.border,
  "notifications.foreground": colorObject.foreground.secondary,
  "notificationsErrorIcon.foreground": colorObject.background.error,
  "notificationsInfoIcon.foreground": colorObject.background.info,
  "notificationsWarningIcon.foreground": colorObject.background.warning,
  "notificationToast.border": colorObject.misc.border,
  "notificationLink.foreground": colorObject.background.accent,
  "notificationCenterHeader.foreground": colorObject.foreground.secondary,
  "notificationCenterHeader.background": colorObject.background.secondary,
  "notificationCenter.border": colorObject.misc.border,

  /**
   * The panel is shown below the editor area and contain views
   * like Output and Integrated Terminal.
   */
  // FIX TO PRIMARY
  "panel.background": colorObject.background.secondary,
  "panel.border": colorObject.misc.border,
  "panelTitle.activeBorder": colorObject.background.accent,
  "panelTitle.activeForeground": colorObject.foreground.primary,
  "panelTitle.inactiveForeground": colorObject.foreground.inactive,
  "panelSectionHeader.border": colorObject.misc.border,
  "panelSection.border": colorObject.misc.border,

  /**
   * Peek views are used to show references and declarations as a view inside the editor.
   */
  "peekView.border": colorObject.misc.border,
  "peekViewEditor.background": colorObject.background.primary,
  "peekViewEditor.matchHighlightBackground": colorObject.background.error,
  "peekViewEditor.matchHighlightBorder": TRANSPARENT,
  "peekViewEditorGutter.background": colorObject.background.primary,
  "peekViewEditorStickyScroll.background": colorObject.background.inactive,
  "peekViewResult.background": colorObject.background.inactive,
  "peekViewResult.fileForeground": colorObject.foreground.primary,
  "peekViewResult.lineForeground": colorObject.foreground.inactive,
  "peekViewResult.matchHighlightBackground": colorObject.background.error,
  "peekViewTitle.background": colorObject.background.inactive,
  "peekViewTitleDescription.foreground": colorObject.foreground.inactive,
  "peekViewTitleLabel.foreground": colorObject.foreground.primary,

  "pickerGroup.border": colorObject.misc.border,
  "pickerGroup.foreground": colorObject.background.accent,

  "progressBar.background": colorObject.background.accent,

  /**
   * The scrollbar appears on the right side of the editor windows. It
   * is used for navigation and reference, and it should remain opaque
   * for visibility.
   */
  "scrollbar.shadow": TRANSPARENT,
  "scrollbarSlider.activeBackground": `${colorObject.foreground.primary}40`,
  "scrollbarSlider.background": `${colorObject.foreground.primary}10`,
  "scrollbarSlider.hoverBackground": `${colorObject.foreground.primary}20`,

  "selection.background": `${colorObject.background.accent}30`,

  /**
   * Settings are the configuration options for the editor. They are
   * used to customize the editor to the user's preferences. The
   * settings are accessible via the control panel.
   */
  "settings.headerForeground": colorObject.background.accent,
  "settings.modifiedItemIndicator": colorObject.background.accent,
  "settings.dropdownBorder": colorObject.misc.border,
  "settings.dropdownBackground": colorObject.background.primary,
  "settings.settingsHeaderHoverForeground": `${colorObject.background.accent}`,
  "settings.rowHoverBackground": `${colorObject.background.muted}20`,
  "settings.focusedRowBackground": `${colorObject.background.muted}50`,
  "settings.checkboxForeground": `${colorObject.background.accent}`,

  /**
   * Side Bar Colors. The side bar is the vertical bar on the left side
   * of the window. It contains file tree and files.
   */
  "sideBar.background": colorObject.background.secondary,
  "sideBar.border": colorObject.misc.border,
  "sideBar.foreground": colorObject.foreground.primary,
  "sideBarSectionHeader.background": colorObject.background.secondary,
  "sideBarSectionHeader.border": colorObject.misc.border_dark,
  "sideBarTitle.foreground": colorObject.foreground.primary,

  "sideBarActivityBarTop.border": colorObject.background.tertiary,
  "sideBarSection.border": colorObject.misc.border_dark,

  /**
   * The Status Bar is shown in the bottom of the workbench. It contains things
   * like the language mode, line and column number, and the git status.
   */
  "statusBar.background": colorObject.background.tertiary,
  "statusBar.border": colorObject.misc.border_dark,
  "statusBar.debuggingBackground": colorObject.background.tertiary,
  "statusBar.noFolderBackground": colorObject.background.tertiary,
  "statusBarItem.hoverBackground": `${colorObject.background.accent}f0`,
  "statusBarItem.hoverForeground": `${colorObject.background.primary}`,
  "statusBarItem.remoteBackground": colorObject.background.error,
  "statusBar.foreground": colorObject.foreground.primary,
  "statusBarItem.remoteHoverForeground": colorObject.background.accent,

  /**
   * The Tab Colors. The tabs are the tabs at the top of the editor that
   * show the open files. They can be clicked to switch between files.
   * The tab is the container for the editor.
   */
  // FIX 
  "tab.activeBackground": `${colorObject.background.secondary}`,
  "tab.activeBorderTop": colorObject.background.accent,
  "tab.activeBorder": colorObject.misc.border_dark,
  "tab.border": colorObject.misc.border,
  "tab.inactiveBackground": `${colorObject.background.secondary}`,
  "tab.selectedForeground": `${colorObject.foreground.secondary}`,
  "tab.activeForeground": `${colorObject.foreground.secondary}`,
  "tab.inactiveForeground": `${colorObject.foreground.secondary}`,

  /**
   * The terminal is the command line interface for the editor. It is used
   * to run commands and scripts, and it can be used to interact with the
   * editor and the file system.
   */
  "terminal.background": `${colorObject.background.primary}`,
  "terminal.border": colorObject.background.accent,
  "terminal.inactiveSelectionBackground": `${colorObject.background.accent}30`,
  "terminal.selectionBackground": `${colorObject.background.accent}30`,
  "terminalCursor.background": colorObject.background.primary,
  "terminalCursor.foreground": colorObject.background.accent,
  "textLink.activeForeground": colorObject.background.accent,
  "textLink.foreground": colorObject.foreground.primary,
  "terminalStickyScroll.border": colorObject.misc.border,
  "terminal.foreground": colorObject.foreground.primary,

  "inputOption.activeBorder": colorObject.background.accent,

  /**
   * Title Bar Colors. The title bar is the bar at the top of the window
   * that contains the title of the window and the minimize, maximize, and
   * close buttons.
   */
  "titleBar.activeBackground": `${colorObject.background.tertiary}`,
  "titleBar.activeForeground": colorObject.foreground.primary,
  "titleBar.border": colorObject.misc.border_dark,
  "titleBar.inactiveBackground": `${colorObject.background.tertiary}`,

  /**
   * The tree indent guide strokes are used in the file tree to show cascading
   * rulers for directory contents.
   */
  "tree.indentGuidesStroke": `${colorObject.foreground.muted}`,

  /**
   * Widgets are elements such as Find/Replace inside the editor.
   */
  "widget.border": colorObject.misc.border,
  "widget.shadow": TRANSPARENT,

  "welcomePage.tileBorder": colorObject.misc.border,
  "welcomePage.background": colorObject.background.primary,
  "welcomePage.progress.background": colorObject.background.inactive,
  "welcomePage.progress.foreground": colorObject.background.accent,
};


    
const theme = {
    "name": NAME,
    "colors": colors,
    "package": package,
    "semanticHighlighting": true,
    "type": TYPE,
    "semanticTokenColors": {
        "enumMember": {
            "foreground": colorObject.syntax.constants
        },
        "variable.constant": {
            "foreground": colorObject.syntax.numbers
        },
        "variable.defaultLibrary": {
            "foreground": colorObject.syntax.variables
        }
    },
    "tokenColors": [
        {
            "name": "Comment",
            "scope": [
                    "comment",
                    "punctuation.definition.comment"
            ],
            "settings": {
                "foreground": colorObject.foreground.muted
            }
        },
        {
            "name": "Decorators",
            "scope": [
                    "storage.type"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Constant Nums",
            "scope": [
                    "constant.numeric"
            ],
            "settings": {
                "foreground": colorObject.syntax.numbers,
                "fontStyle": "bold"
            }
        },
        {
            "name": "Constant Others",
            "scope": [
                    "constant"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Functions",
            "scope": [
                    "entity.name.function"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.functions
            }
        },
        {
            "name": "Classnames",
            "scope": [
                    "entity.name.type"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "All other entities",
            "scope": [
                    "entity.other"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Invalid",
            "scope": [
                    "invalid"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.foreground.error
            }
        },
        {
            "name": "Keywords",
            "scope": [
                    "keyword.control",
                    "keyword.operator.arithmetic"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Arithmetic operators",
            "scope": [
                    "keyword.operator.logical"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "Assignment",
            "scope": [
                    "keyword.operator.assignment"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Function meta names",
            "scope": [
                    "variable.parameter",
                    "string constant.other.placeholder"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Function meta calls",
            "scope": [
                    "meta.function-call",
                    "keyword.other.special-method"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Function meta calls",
            "scope": [
                    "constant.other.symbol",
                    "constant.other.key",
                    "entity.other.inherited-class",
                    "markup.heading",
                    "markup.inserted.git_gutter",
                "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "typehint",
            "scope": [
                    "support.type"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.typehints
            }
        },
        {
            "name": "React JSX Class",
            "scope": [
                    "support.class",
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": colorObject.syntax.typehints
            }
        },
        {
            "name": "Strings interped and regex",
            "scope": [
                    "string.interpolated",
                    "string.regexp"
            ],
            "settings": {
                "foreground": colorObject.syntax.typehints
            }
        },
        {
            "name": "Strings",
            "scope": [
                    "string.quoted.single",
                    "string.quoted"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "CSS Element",
            "scope": [
                    "source.css support.type.property-name",
                    "source.sass support.type.property-name",
                    "source.scss support.type.property-name",
                    "source.less support.type.property-name",
                    "source.stylus support.type.property-name",
                "source.postcss support.type.property-name"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "meta.method.js",
            "scope": [
                    "meta.class-method.js entity.name.function.js",
                    "variable.function.constructor"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "Tag",
            "scope": [
                    "entity.name.tag",
                    "meta.tag.sgml",
                    "markup.deleted.git_gutter"
            ],
            "settings": {
                "foreground": colorObject.syntax.typehints
            }
        },
        {
            "name": "Operator, Misc",
            "scope": [
                    "constant.other.color",
                    "punctuation.definition",
                    "punctuation.definition.tag.html",
                    "punctuation.separator.inheritance.php",
                    "punctuation.definition.tag.html",
                "punctuation.definition.tag.begin.html",
                "punctuation.definition.tag.end.html",
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "unison punctuation",
            "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "haskell variable generic-type",
            "scope": "variable.other.generic-type.haskell",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "haskell storage type",
            "scope": "storage.type.haskell",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "storage.modifier.lifetime.rust",
            "scope": "storage.modifier.lifetime.rust",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "support.function.std.rust",
            "scope": "support.function.std.rust",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "entity.name.lifetime.rust",
            "scope": "entity.name.lifetime.rust",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "variable.language.rust",
            "scope": "variable.language.rust",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "support.constant.edge",
            "scope": "support.constant.edge",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "regexp constant character-class",
            "scope": "constant.other.character-class.regexp",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "regexp operator.quantifier",
            "scope": "keyword.operator.quantifier.regexp",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "punctuation.definition",
            "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "Comment Markup Link",
            "scope": "comment markup.link",
            "settings": {
                "foreground": colorObject.foreground.muted
            }
        },
        {
            "name": "markup diff",
            "scope": "markup.changed.diff",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "diff",
            "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "inserted.diff",
            "scope": "markup.inserted.diff",
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "deleted.diff",
            "scope": "markup.deleted.diff",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "c++ function",
            "scope": "meta.function.c,meta.function.cpp",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "c++ block",
            "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "js/ts punctuation separator key-value",
            "scope": "punctuation.separator.key-value",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "js/ts import keyword",
            "scope": "keyword.operator.expression.import",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "math property js/ts",
            "scope": "support.constant.property.math",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "java source",
            "scope": "source.java",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "java modifier.import",
            "scope": "meta.method.java",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "java modifier.import",
            "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "java instanceof",
            "scope": "keyword.operator.instanceof.java",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "java variable.name",
            "scope": "meta.definition.variable.name.java",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "support.constant.property-value.scss",
            "scope": "support.constant.property-value.scss,support.constant.property-value.css",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "CSS/SCSS/LESS Operators",
            "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "css color standard name",
            "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "css comma",
            "scope": "punctuation.separator.list.comma.css",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "css attribute-name.id",
            "scope": "support.constant.color.w3c-standard-color-name.css",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "css property-name",
            "scope": "support.type.vendored.property-name.css",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "js variable readwrite",
            "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "js/ts json",
            "scope": "support.constant.json",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "js/ts Keyword",
            "scope": [
                    "keyword.operator.expression.instanceof",
                    "keyword.operator.new",
                    "keyword.operator.ternary",
                    "keyword.operator.optional",
                    "keyword.operator.expression.keyof"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "js/ts console",
            "scope": "support.type.object.console",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "js/ts support.variable.property.process",
            "scope": "support.variable.property.process",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "js console function",
            "scope": "entity.name.function,support.function.console",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "keyword.operator.misc.rust",
            "scope": "keyword.operator.misc.rust",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "keyword.operator.sigil.rust",
            "scope": "keyword.operator.sigil.rust",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "operator",
            "scope": "keyword.operator.delete",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "js dom variable",
            "scope": "support.variable.dom,support.variable.property.dom",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "C operator assignment",
            "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Punctuation",
            "scope": "punctuation.separator.delimiter",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Other punctuation .c",
            "scope": "punctuation.separator.c,punctuation.separator.cpp",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "C type posix-reserved",
            "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "keyword.operator.sizeof.c",
            "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "python block",
            "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "python placeholder reset to normal string",
            "scope": "constant.character.format.placeholder.other.python",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "Operators",
            "scope": "keyword.operator",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Compound Assignment Operators",
            "scope": "keyword.operator.assignment.compound",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Compound Assignment Operators js/ts",
            "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Keywords",
            "scope": "keyword",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Variables",
            "scope": "variable",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Variables",
            "scope": "variable.c",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Java Variables",
            "scope": "token.variable.parameter.java",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Packages",
            "scope": "token.package.keyword",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Packages",
            "scope": "token.package",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Functions",
            "scope": [
                    "entity.name.function",
                    "meta.require",
                    "support.function.any-method",
                    "variable.function"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Class name php",
            "scope": "variable.other.class.php",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Keyword Control",
            "scope": "keyword.control",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Control Elements",
            "scope": "control.elements, keyword.operator.less",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "Methods",
            "scope": "keyword.other.special-method",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Storage",
            "scope": "storage",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Storage JS TS",
            "scope": "token.storage",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
            "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Support",
            "scope": "support.function",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Supporting type",
            "scope": "support.type.property-name",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Support type",
            "scope": "support.constant.property-value",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Support type",
            "scope": "support.constant.font-name",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "Meta tag",
            "scope": "meta.tag",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Constant other symbol",
            "scope": "constant.other.symbol",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Tags",
            "scope": "entity.name.tag",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Attributes",
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "support.variable.magic.python",
            "scope": "support.variable.magic.python",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "punctuation.separator.parameters.python",
            "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "python logical",
            "scope": "keyword.operator.logical.python",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "pyCs",
            "scope": "variable.parameter.function.python",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "python block",
            "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "variable.parameter.function.language.special.python",
            "scope": "variable.parameter.function.language.special.python",
            "settings": {
                "fontStyle": "italic bold",
                "foreground": colorObject.syntax.typehints
            }
        },
        {
            "name": "Attribute IDs",
            "scope": "entity.other.attribute-name.id",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Attribute class",
            "scope": "entity.other.attribute-name.class.css",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "python function decorator @",
            "scope": "meta.function.decorator.python",
            "settings": {
                "foreground": colorObject.syntax.functions
            }
        },
        {
            "name": "python function support",
            "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Selector",
            "scope": "meta.selector",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Headings",
            "scope": "markup.heading",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Headings",
            "scope": "markup.heading punctuation.definition.heading, entity.name.section",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Units",
            "scope": "keyword.other.unit",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Bold",
            "scope": "markup.bold,todo.bold",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "markup Italic",
            "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "emphasis md",
            "scope": "emphasis md",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown headings",
            "scope": "entity.name.section.markdown",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
            "scope": "punctuation.definition.heading.markdown",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "punctuation.definition.list.begin.markdown",
            "scope": "punctuation.definition.list.begin.markdown",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown heading setext",
            "scope": "markup.heading.setext",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
            "scope": "punctuation.definition.bold.markdown",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
            "scope": "markup.inline.raw.markdown",
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
            "scope": "markup.inline.raw.string.markdown",
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
            "scope": "punctuation.definition.list.markdown",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
            "scope": [
                    "punctuation.definition.string.begin.markdown",
                    "punctuation.definition.string.end.markdown",
                    "punctuation.definition.metadata.markdown"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "beginning.punctuation.definition.list.markdown",
            "scope": [
                    "beginning.punctuation.definition.list.markdown"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
            "scope": "punctuation.definition.metadata.markdown",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
            "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
            "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Regular Expressions",
            "scope": "string.regexp",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Escape Characters",
            "scope": "constant.character.escape",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Embedded",
            "scope": "punctuation.section.embedded, variable.interpolation",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Embedded",
            "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "illegal",
            "scope": "invalid.illegal",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "illegal",
            "scope": "invalid.illegal.bad-ampersand.html",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Broken",
            "scope": "invalid.broken",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Deprecated",
            "scope": "invalid.deprecated",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Unimplemented",
            "scope": "invalid.unimplemented",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
            "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
            "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
            "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
            "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "[VSCODE-CUSTOM] JSON Property Name",
            "scope": "support.type.property-name.json",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
            "scope": "support.type.property-name.json punctuation",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "laravel blade tag",
            "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "laravel blade @",
            "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "error suppression",
            "scope": "keyword.operator.error-control.php",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "php instanceof",
            "scope": "keyword.operator.type.php",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "style double quoted array index normal begin",
            "scope": "punctuation.section.array.begin.php",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "style double quoted array index normal end",
            "scope": "punctuation.section.array.end.php",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "php illegal.non-null-typehinted",
            "scope": "invalid.illegal.non-null-typehinted.php",
            "settings": {
                "foreground": colorObject.background.error
            }
        },
        {
            "name": "php types",
            "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
            "settings": {
                "foreground": colorObject.syntax.typehints
            }
        },
        {
            "name": "php call-function",
            "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "php function-resets",
            "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "support php constants",
            "scope": "support.constant.core.rust",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "support php constants",
            "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "php goto",
            "scope": "entity.name.goto-label.php,support.other.php",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "php logical/bitwise operator",
            "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "php regexp operator",
            "scope": "keyword.operator.regexp.php",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "php comparison",
            "scope": "keyword.operator.comparison.php",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "php heredoc/nowdoc",
            "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "python function decorator @",
            "scope": "meta.function.decorator.python",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "parameter function js/ts",
            "scope": "function.parameter",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "brace function",
            "scope": "function.brace",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "parameter function ruby cs",
            "scope": "function.parameter.ruby, function.parameter.cs",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "constant.language.symbol.ruby",
            "scope": "constant.language.symbol.ruby",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "rgb-value",
            "scope": "rgb-value",
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "rgb value",
            "scope": "inline-color-decoration rgb-value",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "rgb value less",
            "scope": "less rgb-value",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "sass selector",
            "scope": "selector.sass",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "block scope",
            "scope": "block.scope.end,block.scope.begin",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "cs storage type",
            "scope": "storage.type.cs",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "cs local variable",
            "scope": "entity.name.variable.local.cs",
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "scope": "token.info-token",
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "scope": "token.warn-token",
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "scope": "token.error-token",
            "settings": {
                "foreground": colorObject.background.error
            }
        },
        {
            "scope": "token.debug-token",
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "String interpolation",
            "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Reset JavaScript string interpolation expression",
            "scope": [
                    "meta.template.expression"
            ],
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "Import module JS",
            "scope": [
                    "keyword.operator.module"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "js Flowtype",
            "scope": [
                    "support.type.type.flowtype"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "js class prop",
            "scope": [
                    "meta.property.object"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "js func parameter",
            "scope": [
                    "variable.parameter.function.js"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "js template literals begin",
            "scope": [
                    "keyword.other.template.begin"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "js template literals end",
            "scope": [
                    "keyword.other.template.end"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "js template literals variable braces begin",
            "scope": [
                    "keyword.other.substitution.begin"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "js template literals variable braces end",
            "scope": [
                    "keyword.other.substitution.end"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "go operator",
            "scope": [
                    "keyword.operator.arithmetic.go",
                    "keyword.operator.address.go"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "Go package name",
            "scope": [
                    "entity.name.package.go"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "elm prelude",
            "scope": [
                    "support.type.prelude.elm"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "elm constant",
            "scope": [
                    "support.constant.elm"
            ],
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "template literal",
            "scope": [
                    "punctuation.quasi.element"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "html/pug (jade) escaped characters and entities",
            "scope": [
                    "constant.character.entity"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
            "scope": [
                    "entity.other.attribute-name.pseudo-element",
                    "entity.other.attribute-name.pseudo-class"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "Clojure globals",
            "scope": [
                    "entity.global.clojure"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Clojure symbols",
            "scope": [
                    "meta.symbol.clojure"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Clojure constants",
            "scope": [
                    "constant.keyword.clojure"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "CoffeeScript Function Argument",
            "scope": [
                    "meta.arguments.coffee",
                    "variable.parameter.function.coffee"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Ini Default Text",
            "scope": [
                    "source.ini"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "Makefile prerequisities",
            "scope": [
                    "meta.scope.prerequisites.makefile"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Makefile text colour",
            "scope": [
                    "source.makefile"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Groovy import names",
            "scope": [
                    "storage.modifier.import.groovy"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Groovy Methods",
            "scope": [
                    "meta.method.groovy"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "Groovy Variables",
            "scope": [
                    "meta.definition.variable.name.groovy"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "Groovy Inheritance",
            "scope": [
                    "meta.definition.class.inherited.classes.groovy"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "HLSL Types",
            "scope": [
                    "support.type.texture.hlsl",
                    "support.type.sampler.hlsl",
                    "support.type.object.hlsl",
                    "support.type.object.rw.hlsl",
                    "support.type.fx.hlsl",
                "support.type.object.hlsl"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "SQL Variables",
            "scope": [
                    "text.variable",
                    "text.bracketed"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "heading 2, callable",
            "scope": [
                    "entity.name.class.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "heading 3, property",
            "scope": [
                    "constant.character.character-class.regexp.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "heading 4, type, class, interface",
            "scope": [
                    "constant.regexp.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.keywords
            }
        },
        {
            "name": "heading 5, enums, preprocessor, constant, decorator",
            "scope": [
                    "keyword.control.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "heading 6, number",
            "scope": [
                    "invalid.xi"
            ],
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "string",
            "scope": [
                    "beginning.punctuation.definition.quote.markdown.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.strings
            }
        },
        {
            "name": "comments",
            "scope": [
                    "beginning.punctuation.definition.list.markdown.xi"
            ],
            "settings": {
                "foreground": colorObject.foreground.inactive
            }
        },
        {
            "name": "link",
            "scope": [
                    "constant.character.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "accent",
            "scope": [
                    "accent.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.methods
            }
        },
        {
            "name": "wikiword",
            "scope": [
                    "wikiword.xi"
            ],
            "settings": {
                "foreground": colorObject.syntax.numbers
            }
        },
        {
            "name": "language operators like '+', '-' etc",
            "scope": [
                    "constant.other.color.rgb-value.xi"
            ],
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "elements to dim",
            "scope": [
                    "punctuation.definition.tag.xi"
            ],
            "settings": {
                "foreground": colorObject.foreground.inactive
            }
        },
        {
            "name": "Markdown underscore-style headers",
            "scope": [
                    "entity.name.label.cs",
                    "markup.heading.setext.1.markdown",
                    "markup.heading.setext.2.markdown"
            ],
            "settings": {
                "foreground": colorObject.syntax.variables
            }
        },
        {
            "name": "meta.brace.square",
            "scope": [
                    " meta.brace.square"
            ],
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "name": "[VSCODE-CUSTOM] Markdown Quote",
            "scope": "markup.quote.markdown",
            "settings": {
                "foreground": colorObject.foreground.inactive
            }
        },
        {
            "name": "punctuation.definition.block.sequence.item.yaml",
            "scope": "punctuation.definition.block.sequence.item.yaml",
            "settings": {
                "foreground": colorObject.foreground.primary
            }
        },
        {
            "scope": [
                "constant.language.symbol.elixir"
            ],
            "settings": {
                "foreground": colorObject.syntax.constants
            }
        },
        {
            "name": "JSON Key - Level 0",
            "scope": [
                    "source.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#C792EA"
            }
        },
        {
            "name": "JSON Key - Level 1",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#FFCB6B"
            }
        },
        {
            "name": "JSON Key - Level 2",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#F78C6C"
            }
        },
        {
            "name": "JSON Key - Level 3",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#FF5370"
            }
        },
        {
            "name": "JSON Key - Level 4",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#C17E70"
            }
        },
        {
            "name": "JSON Key - Level 5",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#82AAFF"
            }
        },
        {
            "name": "JSON Key - Level 6",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#f07178"
            }
        },
        {
            "name": "JSON Key - Level 7",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#C792EA"
            }
        },
        {
            "name": "JSON Key - Level 8",
            "scope": [
                    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "#C3E88D"
            }
        },
        {
            "name": "Markdown - Plain",
            "scope": [
                    "text.html.markdown",
                    "punctuation.definition.list_item.markdown"
            ],
            "settings": {
                "foreground": "#EEFFFF"
            }
        },
        {
            "name": "Markdown - Markup Raw Inline",
            "scope": [
                    "text.html.markdown markup.inline.raw.markdown"
            ],
            "settings": {
                "foreground": "#C792EA"
            }
        },
        {
            "name": "Markdown - Markup Raw Inline Punctuation",
            "scope": [
                    "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
            ],
            "settings": {
                "foreground": "#65737E"
            }
        },
        {
            "name": "Markdown - Heading",
            "scope": [
                    "markdown.heading",
                    "markup.heading | markup.heading entity.name",
                    "markup.heading.markdown punctuation.definition.heading.markdown"
            ],
            "settings": {
                "foreground": "#C3E88D"
            }
        },
        {
            "name": "Markup - Italic",
            "scope": [
                    "markup.italic"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "#f07178"
            }
        },
        {
            "name": "Markup - Bold",
            "scope": [
                    "markup.bold",
                    "markup.bold string"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": "#f07178"
            }
        },
        {
            "name": "Markup - Bold-Italic",
            "scope": [
                    "markup.bold markup.italic",
                    "markup.italic markup.bold",
                    "markup.quote markup.bold",
                    "markup.bold markup.italic string",
                    "markup.italic markup.bold string",
                "markup.quote markup.bold string"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": "#f07178"
            }
        },
        {
            "name": "Markup - Underline",
            "scope": [
                    "markup.underline"
            ],
            "settings": {
                "fontStyle": "underline",
                "foreground": "#F78C6C"
            }
        },
        {
            "name": "Markdown - Blockquote",
            "scope": [
                    "markup.quote punctuation.definition.blockquote.markdown"
            ],
            "settings": {
                "foreground": "#65737E"
            }
        },
        {
            "name": "Markup - Quote",
            "scope": [
                    "markup.quote"
            ],
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "Markdown - Link",
            "scope": [
                    "string.other.link.title.markdown"
            ],
            "settings": {
                "foreground": "#82AAFF"
            }
        },
        {
            "name": "Markdown - Link Description",
            "scope": [
                    "string.other.link.description.title.markdown"
            ],
            "settings": {
                "foreground": "#C792EA"
            }
        },
        {
            "name": "Markdown - Link Anchor",
            "scope": [
                    "constant.other.reference.link.markdown"
            ],
            "settings": {
                "foreground": "#FFCB6B"
            }
        },
        {
            "name": "Markup - Raw Block",
            "scope": [
                    "markup.raw.block"
            ],
            "settings": {
                "foreground": "#C792EA"
            }
        },
        {
            "name": "Markdown - Raw Block Fenced",
            "scope": [
                    "markup.raw.block.fenced.markdown"
            ],
            "settings": {
                "foreground": "#00000050"
            }
        },
        {
            "name": "Markdown - Fenced Bode Block",
            "scope": [
                    "punctuation.definition.fenced.markdown"
            ],
            "settings": {
                "foreground": "#00000050"
            }
        },
        {
            "name": "Markdown - Fenced Bode Block Variable",
            "scope": [
                    "markup.raw.block.fenced.markdown",
                    "variable.language.fenced.markdown",
                    "punctuation.section.class.end"
            ],
            "settings": {
                "foreground": "#EEFFFF"
            }
        },
        {
            "name": "Markdown - Fenced Language",
            "scope": [
                    "variable.language.fenced.markdown"
            ],
            "settings": {
                "foreground": "#65737E"
            }
        },
        {
            "name": "Markdown - Separator",
            "scope": [
                    "meta.separator"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": "#65737E"
            }
        },
        {
            "name": "Markup - Table",
            "scope": [
                    "markup.table"
            ],
            "settings": {
                "foreground": "#EEFFFF"
            }
        }
    ]
}

const result = JSON.stringify(theme, null, 4);
 
fs.writeFile('themes/nulzo-theme.json', result, (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
    }
});

