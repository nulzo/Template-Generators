const colors = 
{
    border: '#5c5c5c',
    input: '#5c5c5c',
    ring: '#0827f5',
    background: '#ffffff',
    foreground: '#000000',
    primary: {
        DEFAULT: '#0827f5',
        foreground: '#FFFFFF',
    },
    secondary: {
        DEFAULT: '#c3c3c3',
        foreground: '#000000',
    },
    tertiary: {
        DEFAULT: '#818181',
        foreground: '#000000',
    },
    error: {
        DEFAULT: '#E6344A',
        foreground: '#ffe5e8',
    },
    success: {
        DEFAULT: '#30AF6B',
        foreground: '#ecfff5',
    },
    warning: {
        DEFAULT: '#e29e00',
        foreground: '#fff6df',
    },
    muted: {
        DEFAULT: '#adadad',
        foreground: '#202020',
    },
    accent: {
        DEFAULT: '#008080',
        foreground: '#e3ffff',
    },
    popover: {
        DEFAULT: '#c3c3c3',
        foreground: '#000000',
    },
    card: {
        DEFAULT: '#c3c3c3',
        foreground: '#000000',
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
    "contrastActiveBorder": colors.border,
    "contrastBorder": colors.border,

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
    "window.activeBorder": colors.primary.DEFAULT,
    "window.inactiveBorder": colors.border,

    /**
     * Activity Bar is the bar on the far left of the window.
     */
    "activityBar.activeBackground": TRANSPARENT,
    "activityBar.activeBorder": colors.accent.DEFAULT,
    "activityBar.activeFocusBorder": colors.primary.DEFAULT,
    "activityBar.background": colors.tertiary.DEFAULT,
    "activityBar.border": colors.border,
    "activityBar.foreground": colors.accent.DEFAULT,
    "activityBar.inactiveForeground": `${colors.foreground}90`,
    "activityBarBadge.background": colors.accent.DEFAULT,
    "activityBarBadge.foreground": colors.accent.foreground,

    /**
     * Editor Colors.
     */
    "editor.background": colors.background,
    "editor.findMatchBackground": `${colors.accent.DEFAULT}20`,
    "editor.findMatchHighlightBackground": `${colors.accent.DEFAULT}ca`,
    "editor.findRangeHighlightBackground": `${colors.accent.DEFAULT}50`,
    "editor.findMatchBorder": TRANSPARENT,
    "editor.findMatchHighlightBorder": TRANSPARENT,
    "editor.foreground": colors.foreground,
    "editor.hoverHighlightBackground": TRANSPARENT,
    "editor.lineHighlightBackground": `${colors.secondary.DEFAULT}40`,
    "editor.selectionBackground": `${colors.accent.DEFAULT}20`,
    "editor.selectionHighlightBackground": `${colors.accent.DEFAULT}30`,
    "editor.selectionHighlightBorder": TRANSPARENT,
    "editor.wordHighlightTextBackground": `${colors.accent.DEFAULT}50`,
    "editor.wordHighlightBackground": `${colors.accent.DEFAULT}50`,
    "editor.wordHighlightStrongBackground": `${colors.accent.DEFAULT}50`,
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
    "editorSuggestWidget.focusHighlightForeground": colors.accent.DEFAULT,
    "editorSuggestWidget.foreground": colors.foreground,
    "editorSuggestWidget.highlightForeground": colors.foreground,
    "editorSuggestWidget.highlightBackground": `${colors.accent.DEFAULT}30`,
    "editorSuggestWidget.selectedBackground": `${colors.accent.DEFAULT}30`,
    "editorSuggestWidget.selectedForeground": colors.background,
    "editorSuggestWidget.selectedIconForeground": colors.background,

    /**
     * The whitespace foreground.
     */
    "editorWhitespace.foreground": colors.muted.DEFAULT,

    "editorWidget.background": colors.secondary.DEFAULT,
    "editorWidget.foreground": colors.foreground,
    "editorWidget.resizeBorder": colors.accent.DEFAULT,
    "editorWidget.border": colors.border,

    /**
     * Git Colors.
     */
    "gitDecoration.addedResourceForeground": colors.success.DEFAULT,
    "gitDecoration.conflictingResourceForeground": colors.warning.DEFAULT,
    "gitDecoration.deletedResourceForeground": colors.error.DEFAULT,
    "gitDecoration.ignoredResourceForeground": colors.muted.DEFAULT,
    "gitDecoration.modifiedResourceForeground": colors.warning.DEFAULT,
    "gitDecoration.stageDeletedResourceForeground": colors.error.DEFAULT,
    "gitDecoration.stageModifiedResourceForeground": colors.warning.DEFAULT,
    "gitDecoration.submoduleResourceForeground": colors.muted.DEFAULT,
    "gitDecoration.untrackedResourceForeground": colors.success.DEFAULT,

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
    "inputOption.hoverBackground": `${colors.accent.DEFAULT}30`,
    "inputValidation.errorBackground": `${colors.error.DEFAULT}50`,
    "inputValidation.errorBorder": colors.error.DEFAULT,
    "inputValidation.errorForeground": colors.error.DEFAULT,
    "inputValidation.infoBackground": `${colors.primary.DEFAULT}50`,
    "inputValidation.infoBorder": colors.primary.DEFAULT,
    "inputValidation.infoForeground": colors.primary.DEFAULT,
    "inputValidation.warningBackground": `${colors.warning.DEFAULT}50`,
    "inputValidation.warningBorder": colors.warning.DEFAULT,

    /**
     * The keybinding colors.
     */
    "keybindingLabel.foreground": colors.accent.DEFAULT,
    "keybindingLabel.border": colors.accent.DEFAULT,
    "keybindingLabel.bottomBorder": colors.accent.DEFAULT,
    "keybindingLabel.background": colors.background,
    "keybindingTable.headerBackground": colors.background,

    /**
     * The list attributes.
     */
    "list.activeSelectionBackground": `${colors.accent.DEFAULT}`,
    "list.activeSelectionIconForeground": colors.background,
    "list.dropBackground": `${colors.accent.DEFAULT}`,
    "list.errorForeground": colors.error.DEFAULT,
    "list.highlightForeground": colors.background,
    "list.hoverBackground": `${colors.accent.DEFAULT}f0`,
    "list.inactiveSelectionBackground": `${colors.accent.DEFAULT}`,
    "list.inactiveSelectionForeground": colors.background,
    "list.inactiveSelectionIconForeground": colors.background,

    /**
     * The Tab Colors.
     */
    "tab.activeBackground": `${colors.secondary.DEFAULT}`,
    "tab.activeBorderTop": colors.accent.DEFAULT,
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
    "debugIcon.breakpointForeground": colors.error.DEFAULT,
    "debugIcon.breakpointDisabledForeground": colors.muted.DEFAULT,
    "debugIcon.breakpointUnverifiedForeground": colors.warning.DEFAULT,
    "debugIcon.breakpointCurrentStackframeForeground": colors.success.DEFAULT,
    "debugIcon.breakpointStackframeForeground": colors.primary.DEFAULT,

    /**
     * The terminal colors.
     */
    "terminal.background": `${colors.background}`,
    "terminal.border": colors.accent.DEFAULT,
    "terminal.inactiveSelectionBackground": `${colors.accent.DEFAULT}30`,
    "terminal.selectionBackground": `${colors.accent.DEFAULT}30`,
    "terminalCursor.background": colors.background,
    "terminalCursor.foreground": colors.accent.DEFAULT,
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
    "welcomePage.progress.foreground": colors.accent.DEFAULT,

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
};