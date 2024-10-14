/**
 * Theme Color Settings
 * Source: [Visual Studio Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color#title-bar-colors)
 */

// Color formats
// Color values can be defined in the RGB color model with an alpha channel for transparency.
// Supported hexadecimal notations: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
// Example: #e35f is the same color as #ee3355ff
// If no alpha value is defined, it defaults to ff (opaque, no transparency).
// If alpha is set to 00, the color is fully transparent.

const themeColors = {
    // Contrast colors
    /**
     * An extra border around active elements to separate them from others for greater contrast.
     */
    contrastActiveBorder: "#FF0000", // Example color
  
    /**
     * An extra border around elements to separate them from others for greater contrast.
     */
    contrastBorder: "#00FF00", // Example color
  
    // Base colors
    /**
     * Overall border color for focused elements. This color is only used if not overridden by a component.
     */
    focusBorder: "#0000FF",
  
    /**
     * Overall foreground color. This color is only used if not overridden by a component.
     */
    foreground: "#FFFFFF",
  
    /**
     * Overall foreground for disabled elements. This color is only used if not overridden by a component.
     */
    disabledForeground: "#A0A0A0",
  
    /**
     * Border color of widgets such as Find/Replace inside the editor.
     */
    widgetBorder: "#CCCCCC",
  
    /**
     * Shadow color of widgets such as Find/Replace inside the editor.
     */
    widgetShadow: "#00000080",
  
    /**
     * Background color of text selections in the workbench (for input fields or text areas).
     * Does not apply to selections within the editor and the terminal.
     */
    selectionBackground: "#B0C4DE",
  
    /**
     * Foreground color for description text providing additional information, for example for a label.
     */
    descriptionForeground: "#808080",
  
    /**
     * Overall foreground color for error messages (this color is only used if not overridden by a component).
     */
    errorForeground: "#FF0000",
  
    /**
     * The default color for icons in the workbench.
     */
    iconForeground: "#FFFF00",
  
    /**
     * The hover border color for draggable sashes.
     */
    sashHoverBorder: "#FFA500",
  
    // Window border
    /**
     * Border color for the active (focused) window.
     */
    windowActiveBorder: "#00CED1",
  
    /**
     * Border color for the inactive (unfocused) windows.
     * Supported on macOS and Linux when the custom title bar is enabled.
     */
    windowInactiveBorder: "#20B2AA",
  
    // Text colors
    /**
     * Background color for block quotes in text.
     */
    textBlockQuoteBackground: "#F0F8FF",
  
    /**
     * Border color for block quotes in text.
     */
    textBlockQuoteBorder: "#4682B4",
  
    /**
     * Background color for code blocks in text.
     */
    textCodeBlockBackground: "#F5F5F5",
  
    /**
     * Foreground color for links in text when clicked on and on mouse hover.
     */
    textLinkActiveForeground: "#0000EE",
  
    /**
     * Foreground color for links in text.
     */
    textLinkForeground: "#0000FF",
  
    /**
     * Foreground color for preformatted text segments.
     */
    textPreformatForeground: "#D2691E",
  
    /**
     * Background color for preformatted text segments.
     */
    textPreformatBackground: "#FFFACD",
  
    /**
     * Color for text separators.
     */
    textSeparatorForeground: "#D3D3D3",
  
    // Action colors
    /**
     * Toolbar background when hovering over actions using the mouse.
     */
    toolbarHoverBackground: "#E6E6E6",
  
    /**
     * Toolbar outline when hovering over actions using the mouse.
     */
    toolbarHoverOutline: "#A9A9A9",
  
    /**
     * Toolbar background when holding the mouse over actions.
     */
    toolbarActiveBackground: "#C0C0C0",
  
    /**
     * Action List background color.
     */
    editorActionListBackground: "#F0FFF0",
  
    /**
     * Action List foreground color.
     */
    editorActionListForeground: "#008000",
  
    /**
     * Action List foreground color for the focused item.
     */
    editorActionListFocusForeground: "#006400",
  
    /**
     * Action List background color for the focused item.
     */
    editorActionListFocusBackground: "#90EE90",
  
    // Button control
    /**
     * Button background color.
     */
    buttonBackground: "#ADD8E6",
  
    /**
     * Button foreground color.
     */
    buttonForeground: "#000080",
  
    /**
     * Button border color.
     */
    buttonBorder: "#00008B",
  
    /**
     * Button separator color.
     */
    buttonSeparator: "#4682B4",
  
    /**
     * Button background color when hovering.
     */
    buttonHoverBackground: "#87CEEB",
  
    /**
     * Secondary button foreground color.
     */
    buttonSecondaryForeground: "#2F4F4F",
  
    /**
     * Secondary button background color.
     */
    buttonSecondaryBackground: "#778899",
  
    /**
     * Secondary button background color when hovering.
     */
    buttonSecondaryHoverBackground: "#708090",
  
    /**
     * Background color of checkbox widget.
     */
    checkboxBackground: "#F5F5F5",
  
    /**
     * Foreground color of checkbox widget.
     */
    checkboxForeground: "#000000",
  
    /**
     * Border color of checkbox widget.
     */
    checkboxBorder: "#696969",
  
    /**
     * Background color of checkbox widget when the element it's in is selected.
     */
    checkboxSelectBackground: "#DCDCDC",
  
    /**
     * Border color of checkbox widget when the element it's in is selected.
     */
    checkboxSelectBorder: "#A9A9A9",
  
    /**
     * Foreground color of active radio option.
     */
    radioActiveForeground: "#FF4500",
  
    /**
     * Background color of active radio option.
     */
    radioActiveBackground: "#FFA07A",
  
    /**
     * Border color of the active radio option.
     */
    radioActiveBorder: "#CD5C5C",
  
    /**
     * Foreground color of inactive radio option.
     */
    radioInactiveForeground: "#696969",
  
    /**
     * Background color of inactive radio option.
     */
    radioInactiveBackground: "#F0F8FF",
  
    /**
     * Border color of the inactive radio option.
     */
    radioInactiveBorder: "#778899",
  
    /**
     * Background color of inactive active radio option when hovering.
     */
    radioInactiveHoverBackground: "#B0C4DE",
  
    // Dropdown control
    /**
     * Dropdown background.
     */
    dropdownBackground: "#FFFFFF",
  
    /**
     * Dropdown list background.
     */
    dropdownListBackground: "#F8F8FF",
  
    /**
     * Dropdown border.
     */
    dropdownBorder: "#D3D3D3",
  
    /**
     * Dropdown foreground.
     */
    dropdownForeground: "#000000",
  
    // Input control
    /**
     * Input box background.
     */
    inputBackground: "#FFFFFF",
  
    /**
     * Input box border.
     */
    inputBorder: "#A9A9A9",
  
    /**
     * Input box foreground.
     */
    inputForeground: "#000000",
  
    /**
     * Input box foreground color for placeholder text.
     */
    inputPlaceholderForeground: "#808080",
  
    /**
     * Background color of activated options in input fields.
     */
    inputOptionActiveBackground: "#E0FFFF",
  
    /**
     * Border color of activated options in input fields.
     */
    inputOptionActiveBorder: "#00CED1",
  
    /**
     * Foreground color of activated options in input fields.
     */
    inputOptionActiveForeground: "#00008B",
  
    /**
     * Background color of activated options in input fields when hovering.
     */
    inputOptionHoverBackground: "#AFEEEE",
  
    /**
     * Input validation background color for error severity.
     */
    inputValidationErrorBackground: "#FFE4E1",
  
    /**
     * Input validation foreground color for error severity.
     */
    inputValidationErrorForeground: "#B22222",
  
    /**
     * Input validation border color for error severity.
     */
    inputValidationErrorBorder: "#FF6347",
  
    /**
     * Input validation background color for information severity.
     */
    inputValidationInfoBackground: "#E6E6FA",
  
    /**
     * Input validation foreground color for information severity.
     */
    inputValidationInfoForeground: "#4169E1",
  
    /**
     * Input validation border color for information severity.
     */
    inputValidationInfoBorder: "#1E90FF",
  
    /**
     * Input validation background color for information warning.
     */
    inputValidationWarningBackground: "#FFFACD",
  
    /**
     * Input validation foreground color for warning severity.
     */
    inputValidationWarningForeground: "#FFD700",
  
    /**
     * Input validation border color for warning severity.
     */
    inputValidationWarningBorder: "#FFA500",
  
    // Scrollbar control
    /**
     * Scrollbar slider shadow to indicate that the view is scrolled.
     */
    scrollbarShadow: "#00000050",
  
    /**
     * Scrollbar slider background color when clicked on.
     */
    scrollbarSliderActiveBackground: "#87CEFA",
  
    /**
     * Scrollbar slider background color.
     */
    scrollbarSliderBackground: "#B0C4DE",
  
    /**
     * Scrollbar slider background color when hovering.
     */
    scrollbarSliderHoverBackground: "#ADD8E6",
  
    // Badge
    /**
     * Badge foreground color.
     */
    badgeForeground: "#FFFFFF",
  
    /**
     * Badge background color.
     */
    badgeBackground: "#FF4500",
  
    // Progress bar
    /**
     * Background color of the progress bar shown for long running operations.
     */
    progressBarBackground: "#32CD32",
  
    // Lists and trees
    /**
     * List/Tree background color for the selected item when the list/tree is active.
     */
    listActiveSelectionBackground: "#B0E0E6",
  
    /**
     * List/Tree foreground color for the selected item when the list/tree is active.
     */
    listActiveSelectionForeground: "#00008B",
  
    /**
     * List/Tree icon foreground color for the selected item when the list/tree is active.
     * An active list/tree has keyboard focus, an inactive does not.
     */
    listActiveSelectionIconForeground: "#0000CD",
  
    /**
     * List/Tree drag and drop background when moving items around using the mouse.
     */
    listDropBackground: "#E0FFFF",
  
    /**
     * List/Tree background color for the focused item when the list/tree is active.
     */
    listFocusBackground: "#AFEEEE",
  
    /**
     * List/Tree foreground color for the focused item when the list/tree is active.
     * An active list/tree has keyboard focus, an inactive does not.
     */
    listFocusForeground: "#4682B4",
  
    /**
     * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
     */
    listFocusHighlightForeground: "#20B2AA",
  
    /**
     * List/Tree outline color for the focused item when the list/tree is active.
     */
    listFocusOutline: "#5F9EA0",
  
    /**
     * List/Tree outline color for the focused item when the list/tree is active and selected.
     */
    listFocusAndSelectionOutline: "#008B8B",
  
    /**
     * List/Tree foreground color of the match highlights when searching inside the list/tree.
     */
    listHighlightForeground: "#3CB371",
  
    /**
     * List/Tree background when hovering over items using the mouse.
     */
    listHoverBackground: "#F0FFF0",
  
    /**
     * List/Tree foreground when hovering over items using the mouse.
     */
    listHoverForeground: "#2E8B57",
  
    /**
     * List/Tree background color for the selected item when the list/tree is inactive.
     */
    listInactiveSelectionBackground: "#98FB98",
  
    /**
     * List/Tree foreground color for the selected item when the list/tree is inactive.
     * An active list/tree has keyboard focus, an inactive does not.
     */
    listInactiveSelectionForeground: "#006400",
  
    /**
     * List/Tree icon foreground color for the selected item when the list/tree is inactive.
     * An active list/tree has keyboard focus, an inactive does not.
     */
    listInactiveSelectionIconForeground: "#228B22",
  
    /**
     * List background color for the focused item when the list is inactive.
     * Currently only supported in lists.
     */
    listInactiveFocusBackground: "#77DD77",
  
    /**
     * List/Tree outline color for the focused item when the list/tree is inactive.
     */
    listInactiveFocusOutline: "#32CD32",
  
    /**
     * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
     */
    listInvalidItemForeground: "#FF1493",
  
    /**
     * Foreground color of list items containing errors.
     */
    listErrorForeground: "#DC143C",
  
    /**
     * Foreground color of list items containing warnings.
     */
    listWarningForeground: "#FFD700",
  
    /**
     * List/Tree Filter background color of typed text when searching inside the list/tree.
     */
    listFilterWidgetBackground: "#F5FFFA",
  
    /**
     * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
     */
    listFilterWidgetOutline: "#8FBC8F",
  
    /**
     * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
     */
    listFilterWidgetNoMatchesOutline: "#FF6347",
  
    /**
     * Shadow color of the type filter widget in lists and tree.
     */
    listFilterWidgetShadow: "#2E8B57",
  
    /**
     * Background color of the filtered matches in lists and trees.
     */
    listFilterMatchBackground: "#FFF0F5",
  
    /**
     * Border color of the filtered matches in lists and trees.
     */
    listFilterMatchBorder: "#FF69B4",
  
    /**
     * List/Tree foreground color for items that are deemphasized.
     */
    listDeemphasizedForeground: "#D3D3D3",
  
    /**
     * List/Tree drag and drop border color when moving items between items when using the mouse.
     */
    listDropBetweenBackground: "#FAFAD2",
  
    /**
     * Tree Widget's stroke color for indent guides.
     */
    treeIndentGuidesStroke: "#B0E0E6",
  
    /**
     * Tree stroke color for the indentation guides that are not active.
     */
    treeInactiveIndentGuidesStroke: "#ADD8E6",
  
    /**
     * Tree stroke color for the indentation guides.
     */
    treeTableColumnsBorder: "#87CEFA",
  
    /**
     * Background color for odd table rows.
     */
    treeTableOddRowsBackground: "#F0FFF0",
  
    // Activity Bar
    /**
     * Activity Bar background color.
     */
    activityBarBackground: "#2F4F4F",
  
    /**
     * Drag and drop feedback color for the activity bar items.
     * The activity bar is showing on the far left or right and allows switching between views of the side bar.
     */
    activityBarDropBorder: "#20B2AA",
  
    /**
     * Activity Bar foreground color (for example used for the icons).
     */
    activityBarForeground: "#FFFFFF",
  
    /**
     * Activity Bar item foreground color when it is inactive.
     */
    activityBarInactiveForeground: "#808080",
  
    /**
     * Activity Bar border color with the Side Bar.
     */
    activityBarBorder: "#696969",
  
    /**
     * Activity notification badge background color.
     */
    activityBarBadgeBackground: "#FF4500",
  
    /**
     * Activity notification badge foreground color.
     */
    activityBarBadgeForeground: "#FFFFFF",
  
    /**
     * Activity Bar active indicator border color.
     */
    activityBarActiveBorder: "#32CD32",
  
    /**
     * Activity Bar optional background color for the active element.
     */
    activityBarActiveBackground: "#20B2AA",
  
    /**
     * Activity bar focus border color for the active item.
     */
    activityBarActiveFocusBorder: "#00CED1",
  
    /**
     * Active foreground color of the item in the Activity bar when it is on top.
     * The activity allows switching between views of the side bar.
     */
    activityBarTopForeground: "#FFFFFF",
  
    /**
     * Focus border color for the active item in the Activity bar when it is on top.
     * The activity allows switching between views of the side bar.
     */
    activityBarTopActiveBorder: "#FFD700",
  
    /**
     * Inactive foreground color of the item in the Activity bar when it is on top.
     * The activity allows switching between views of the side bar.
     */
    activityBarTopInactiveForeground: "#A9A9A9",
  
    /**
     * Drag and drop feedback color for the items in the Activity bar when it is on top.
     * The activity allows switching between views of the side bar.
     */
    activityBarTopDropBorder: "#FF6347",
  
    /**
     * Background color of the activity bar when set to top / bottom.
     */
    activityBarTopBackground: "#4682B4",
  
    /**
     * Background color for the active item in the Activity bar when it is on top / bottom.
     * The activity allows switching between views of the side bar.
     */
    activityBarTopActiveBackground: "#5F9EA0",
  
    /**
     * Foreground color of the warning activity badge.
     */
    activityWarningBadgeForeground: "#FF8C00",
  
    /**
     * Background color of the warning activity badge.
     */
    activityWarningBadgeBackground: "#FFD700",
  
    /**
     * Foreground color of the error activity badge.
     */
    activityErrorBadgeForeground: "#DC143C",
  
    /**
     * Background color of the error activity badge.
     */
    activityErrorBadgeBackground: "#FF0000",
  
    // Profiles
    /**
     * Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
     */
    profileBadgeBackground: "#6A5ACD",
  
    /**
     * Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
     */
    profileBadgeForeground: "#FFFFFF",
  
    /**
     * The color of the Profiles editor splitview sash border.
     */
    profilesSashBorder: "#708090",
  
    // Side Bar
    /**
     * Side Bar background color.
     */
    sideBarBackground: "#F5F5F5",
  
    /**
     * Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
     */
    sideBarForeground: "#000000",
  
    /**
     * Side Bar border color on the side separating the editor.
     */
    sideBarBorder: "#D3D3D3",
  
    /**
     * Drag and drop feedback color for the side bar sections.
     * The color should have transparency so that the side bar sections can still shine through.
     */
    sideBarDropBackground: "#98FB98",
  
    /**
     * Side Bar title foreground color.
     */
    sideBarTitleForeground: "#2E8B57",
  
    /**
     * Side Bar section header background color.
     */
    sideBarSectionHeaderBackground: "#E0FFFF",
  
    /**
     * Side Bar section header foreground color.
     */
    sideBarSectionHeaderForeground: "#008B8B",
  
    /**
     * Side bar section header border color.
     */
    sideBarSectionHeaderBorder: "#20B2AA",
  
    /**
     * Border color between the activity bar at the top/bottom and the views.
     */
    sideBarActivityBarTopBorder: "#5F9EA0",
  
    /**
     * Side bar title background color. The side bar is the container for views like explorer and search.
     */
    sideBarTitleBackground: "#FFFFFF",
  
    /**
     * Background color of sticky scroll in the side bar.
     */
    sideBarStickyScrollBackground: "#FAFAD2",
  
    /**
     * Border color of sticky scroll in the side bar.
     */
    sideBarStickyScrollBorder: "#FFD700",
  
    /**
     * Shadow color of sticky scroll in the side bar.
     */
    sideBarStickyScrollShadow: "#B0C4DE",
  
    // Minimap
    /**
     * Highlight color for matches from search within files.
     */
    minimapFindMatchHighlight: "#FF6347",
  
    /**
     * Highlight color for the editor selection.
     */
    minimapSelectionHighlight: "#00CED1",
  
    /**
     * Highlight color for errors within the editor.
     */
    minimapErrorHighlight: "#DC143C",
  
    /**
     * Highlight color for warnings within the editor.
     */
    minimapWarningHighlight: "#FFA500",
  
    /**
     * Minimap background color.
     */
    minimapBackground: "#F5F5F5",
  
    /**
     * Minimap marker color for repeating editor selections.
     */
    minimapSelectionOccurrenceHighlight: "#ADD8E6",
  
    /**
     * Opacity of foreground elements rendered in the minimap.
     * Example: "#000000c0" renders elements with 75% opacity.
     */
    minimapForegroundOpacity: 96, // Hex 'c0' is 192 in decimal which is 75% of 256
  
    /**
     * Minimap marker color for infos.
     */
    minimapInfoHighlight: "#1E90FF",
  
    /**
     * Minimap slider background color.
     */
    minimapSliderBackground: "#778899",
  
    /**
     * Minimap slider background color when hovering.
     */
    minimapSliderHoverBackground: "#B0C4DE",
  
    /**
     * Minimap slider background color when clicked on.
     */
    minimapSliderActiveBackground: "#4682B4",
  
    /**
     * Minimap gutter color for added content.
     */
    minimapGutterAddedBackground: "#32CD32",
  
    /**
     * Minimap gutter color for modified content.
     */
    minimapGutterModifiedBackground: "#FFD700",
  
    /**
     * Minimap gutter color for deleted content.
     */
    minimapGutterDeletedBackground: "#FF4500",
  
    // Editor Groups & Tabs
    /**
     * Color to separate multiple editor groups from each other.
     */
    editorGroupBorder: "#DCDCDC",
  
    /**
     * Background color when dragging editors around.
     */
    editorGroupDropBackground: "#E0FFFF",
  
    /**
     * Background color of the editor group title header when using single Tab.
     */
    editorGroupHeaderNoTabsBackground: "#F0F8FF",
  
    /**
     * Background color of the Tabs container.
     */
    editorGroupHeaderTabsBackground: "#F5F5F5",
  
    /**
     * Border color below the editor tabs control when tabs are enabled.
     */
    editorGroupHeaderTabsBorder: "#A9A9A9",
  
    /**
     * Border color between editor group header and editor (below breadcrumbs if enabled).
     */
    editorGroupHeaderBorder: "#D3D3D3",
  
    /**
     * Background color of an empty editor group.
     */
    editorGroupEmptyBackground: "#FFFFFF",
  
    /**
     * Border color of an empty editor group that is focused.
     */
    editorGroupFocusedEmptyBorder: "#00CED1",
  
    /**
     * Foreground color of text shown over editors when dragging files.
     * Informs the user that they can hold shift to drop into the editor.
     */
    editorGroupDropIntoPromptForeground: "#FF6347",
  
    /**
     * Background color of text shown over editors when dragging files.
     * Informs the user that they can hold shift to drop into the editor.
     */
    editorGroupDropIntoPromptBackground: "#FFFFFF",
  
    /**
     * Border color of text shown over editors when dragging files.
     * Informs the user that they can hold shift to drop into the editor.
     */
    editorGroupDropIntoPromptBorder: "#20B2AA",
  
    // Tabs
    /**
     * Active Tab background color in an active group.
     */
    tabActiveBackground: "#87CEFA",
  
    /**
     * Active Tab background color in an inactive editor group.
     */
    tabUnfocusedActiveBackground: "#B0C4DE",
  
    /**
     * Active Tab foreground color in an active group.
     */
    tabActiveForeground: "#000080",
  
    /**
     * Border to separate Tabs from each other.
     */
    tabBorder: "#D3D3D3",
  
    /**
     * Bottom border for the active tab.
     */
    tabActiveBorder: "#00008B",
  
    /**
     * Border to the top of a selected tab.
     */
    tabSelectedBorderTop: "#1E90FF",
  
    /**
     * Background of a selected tab.
     */
    tabSelectedBackground: "#ADD8E6",
  
    /**
     * Foreground of a selected tab.
     */
    tabSelectedForeground: "#0000CD",
  
    /**
     * Border between tabs to indicate that a tab can be inserted between two tabs.
     */
    tabDragAndDropBorder: "#FF6347",
  
    /**
     * Bottom border for the active tab in an inactive editor group.
     */
    tabUnfocusedActiveBorder: "#20B2AA",
  
    /**
     * Top border for the active tab.
     */
    tabActiveBorderTop: "#4682B4",
  
    /**
     * Top border for the active tab in an inactive editor group.
     */
    tabUnfocusedActiveBorderTop: "#00CED1",
  
    /**
     * Border on the right of the last pinned editor to separate from unpinned editors.
     */
    tabLastPinnedBorder: "#00FA9A",
  
    /**
     * Inactive Tab background color.
     */
    tabInactiveBackground: "#F0F8FF",
  
    /**
     * Inactive Tab background color in an unfocused group.
     */
    tabUnfocusedInactiveBackground: "#E6E6FA",
  
    /**
     * Inactive Tab foreground color in an active group.
     */
    tabInactiveForeground: "#696969",
  
    /**
     * Active tab foreground color in an inactive editor group.
     */
    tabUnfocusedActiveForeground: "#2E8B57",
  
    /**
     * Inactive tab foreground color in an inactive editor group.
     */
    tabUnfocusedInactiveForeground: "#808080",
  
    /**
     * Tab background color when hovering.
     */
    tabHoverBackground: "#B0E0E6",
  
    /**
     * Tab background color in an unfocused group when hovering.
     */
    tabUnfocusedHoverBackground: "#AFEEEE",
  
    /**
     * Tab foreground color when hovering.
     */
    tabHoverForeground: "#0000CD",
  
    /**
     * Tab foreground color in an unfocused group when hovering.
     */
    tabUnfocusedHoverForeground: "#20B2AA",
  
    /**
     * Border to highlight tabs when hovering.
     */
    tabHoverBorder: "#1E90FF",
  
    /**
     * Border to highlight tabs in an unfocused group when hovering.
     */
    tabUnfocusedHoverBorder: "#32CD32",
  
    /**
     * Border on the top of modified (dirty) active tabs in an active group.
     */
    tabActiveModifiedBorder: "#FF4500",
  
    /**
     * Border on the top of modified (dirty) inactive tabs in an active group.
     */
    tabInactiveModifiedBorder: "#DC143C",
  
    /**
     * Border on the top of modified (dirty) active tabs in an unfocused group.
     */
    tabUnfocusedActiveModifiedBorder: "#FF6347",
  
    /**
     * Border on the top of modified (dirty) inactive tabs in an unfocused group.
     */
    tabUnfocusedInactiveModifiedBorder: "#FF69B4",
  
    /**
     * Background color of the editor pane visible on the left and right side of the centered editor layout.
     */
    editorPaneBackground: "#F5F5F5",
  
    /**
     * Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
     */
    sideBySideEditorHorizontalBorder: "#778899",
  
    /**
     * Color to separate two editors from each other when shown side by side in an editor group from left to right.
     */
    sideBySideEditorVerticalBorder: "#708090",
  
    // Editor colors
    /**
     * Editor background color.
     */
    editorBackground: "#FFFFFF",
  
    /**
     * Editor default foreground color.
     */
    editorForeground: "#000000",
  
    /**
     * Color of editor line numbers.
     */
    editorLineNumberForeground: "#A9A9A9",
  
    /**
     * Color of the active editor line number.
     */
    editorLineNumberActiveForeground: "#00008B",
  
    /**
     * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
     */
    editorLineNumberDimmedForeground: "#D3D3D3",
  
    /**
     * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
     */
    editorCursorBackground: "#FF0000",
  
    /**
     * Color of the editor cursor.
     */
    editorCursorForeground: "#000000",
  
    /**
     * Color of the primary editor cursor when multiple cursors are present.
     */
    editorMultiCursorPrimaryForeground: "#FF4500",
  
    /**
     * The background color of the primary editor cursor when multiple cursors are present.
     * Allows customizing the color of a character overlapped by a block cursor.
     */
    editorMultiCursorPrimaryBackground: "#FFA07A",
  
    /**
     * Color of secondary editor cursors when multiple cursors are present.
     */
    editorMultiCursorSecondaryForeground: "#20B2AA",
  
    /**
     * The background color of secondary editor cursors when multiple cursors are present.
     * Allows customizing the color of a character overlapped by a block cursor.
     */
    editorMultiCursorSecondaryBackground: "#48D1CC",
  
    /**
     * Foreground color of the placeholder text in the editor.
     */
    editorPlaceholderForeground: "#808080",
  
    // Selection highlight
    /**
     * Color of the editor selection.
     */
    editorSelectionBackground: "#ADD8E6",
  
    /**
     * Color of the selected text for high contrast.
     */
    editorSelectionForeground: "#000000",
  
    /**
     * Color of the selection in an inactive editor.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorInactiveSelectionBackground: "#87CEFA",
  
    /**
     * Color for regions with the same content as the selection.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorSelectionHighlightBackground: "#E6E6FA",
  
    /**
     * Border color for regions with the same content as the selection.
     */
    editorSelectionHighlightBorder: "#D8BFD8",
  
    // Occurrences
    /**
     * Background color of a symbol during read-access, for example when reading a variable.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorWordHighlightBackground: "#FFB6C1",
  
    /**
     * Border color of a symbol during read-access, for example when reading a variable.
     */
    editorWordHighlightBorder: "#FF69B4",
  
    /**
     * Background color of a symbol during write-access, for example when writing to a variable.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorWordHighlightStrongBackground: "#FF1493",
  
    /**
     * Border color of a symbol during write-access, for example when writing to a variable.
     */
    editorWordHighlightStrongBorder: "#FF6347",
  
    /**
     * Background color of a textual occurrence for a symbol.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorWordHighlightTextBackground: "#F08080",
  
    /**
     * Border color of a textual occurrence for a symbol.
     */
    editorWordHighlightTextBorder: "#CD5C5C",
  
    // Find matches
    /**
     * Color of the current search match.
     */
    editorFindMatchBackground: "#FFD700",
  
    /**
     * Text color of the current search match.
     */
    editorFindMatchForeground: "#000000",
  
    /**
     * Foreground color of the other search matches.
     */
    editorFindMatchHighlightForeground: "#FF4500",
  
    /**
     * Color of the other search matches.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorFindMatchHighlightBackground: "#FFF8DC",
  
    /**
     * Color the range limiting the search (Enable 'Find in Selection' in the find widget).
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorFindRangeHighlightBackground: "#E0FFFF",
  
    /**
     * Border color of the current search match.
     */
    editorFindMatchBorder: "#B22222",
  
    /**
     * Border color of the other search matches.
     */
    editorFindMatchHighlightBorder: "#FFA500",
  
    /**
     * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
     */
    editorFindRangeHighlightBorder: "#20B2AA",
  
    // Search Results
    /**
     * Color of the text in the search viewlet's completion message.
     * For example, used in the text that says "{x} results in {y} files".
     */
    searchResultsInfoForeground: "#696969",
  
    // Search Editor Matches
    /**
     * Color of the editor's results in the Search Editor.
     */
    searchEditorFindMatchBackground: "#FFD700",
  
    /**
     * Border color of the editor's results in the Search Editor.
     */
    searchEditorFindMatchBorder: "#FFA500",
  
    /**
     * Search editor text input box border.
     */
    searchEditorTextInputBorder: "#A9A9A9",
  
    // Hover Highlight
    /**
     * Highlight below the word for which a hover is shown.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorHoverHighlightBackground: "#E6E6FA",
  
    // Line Highlight
    /**
     * Background color for the highlight of line at the cursor position.
     */
    editorLineHighlightBackground: "#F0F8FF",
  
    /**
     * Background color for the border around the line at the cursor position.
     */
    editorLineHighlightBorder: "#6495ED",
  
    // Editor Watermark
    /**
     * Foreground color for the labels in the editor watermark.
     */
    editorWatermarkForeground: "#B0C4DE",
  
    // Unicode Highlights
    /**
     * Border color used to highlight unicode characters.
     */
    editorUnicodeHighlightBorder: "#FF69B4",
  
    /**
     * Background color used to highlight unicode characters.
     */
    editorUnicodeHighlightBackground: "#FFC0CB",
  
    // Link
    /**
     * Color of active links.
     */
    editorLinkActiveForeground: "#1E90FF",
  
    // Range Highlight
    /**
     * Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorRangeHighlightBackground: "#FFFACD",
  
    /**
     * Border color of highlighted ranges.
     */
    editorRangeHighlightBorder: "#FFD700",
  
    // Symbol Highlight
    /**
     * Background color of highlighted symbol.
     * The color must not be opaque so as not to hide underlying decorations.
     */
    editorSymbolHighlightBackground: "#FFF0F5",
  
    /**
     * Border color of highlighted symbols.
     */
    editorSymbolHighlightBorder: "#FF69B4",
  
    // Whitespace
    /**
     * Color of whitespace characters in the editor.
     */
    editorWhitespaceForeground: "#D3D3D3",
  
    // Indent Guides
    /**
     * Color of the editor indentation guides.
     */
    editorIndentGuideBackground: "#D3D3D3",
  
    /**
     * Color of the editor indentation guides (1).
     */
    editorIndentGuideBackground1: "#A9A9A9",
  
    /**
     * Color of the editor indentation guides (2).
     */
    editorIndentGuideBackground2: "#778899",
  
    /**
     * Color of the editor indentation guides (3).
     */
    editorIndentGuideBackground3: "#708090",
  
    /**
     * Color of the editor indentation guides (4).
     */
    editorIndentGuideBackground4: "#2F4F4F",

  };
  
  module.exports = themeColors;