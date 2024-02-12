from rich.console import Console
from rich.table import Table
from rich.prompt import Prompt
import json

console = Console()
error_console= Console(stderr=True, style="bold red")

class GenerateTheme:
	def __init__(self):
		self.TRANSPARENT = "#00000000"
		self.DEFAULT_HIGHLIGHT = "#44444410"
		self.author: str | None = None
		self.name: str | None = None
		self.type: str | None = None
		self.borders: str | None = None
		self.foregroundPrimary: str | None = None
		self.foregroundSecondary: str | None = None
		self.foregroundInactive: str | None = None
		self.backgroundPrimary: str | None = None
		self.backgroundSecondary: str | None = None
		self.accentPrimaryColor: str | None = None
		self.accentSecondaryColor: str | None = None
		self.borders: str | None = None
		self.error: str | None = None
		self.warningForeground: str | None = None
		self.info: str | None = None
		self.gitModified: str | None = None
		self.gitDeleted: str | None = None
		self.gitUntracked: str | None = None
		self.gitSubModule: str | None = None
		self.gitConflicts: str | None = None
		self.gitAdded: str | None = None
		self.syntaxConstant: str | None = None
		self.syntaxKeywords: str | None = None
		self.syntaxFunctions: str | None = None
		self.syntaxTypehint: str | None = None
		self.syntaxStringOperators: str | None = None
		self.syntaxVariablesProperties: str | None = None
		self.syntaxTypehint: str | None = None
		self.syntaxNumbers: str | None = None
		self.syntaxMethods: str | None = None
		self.hover = "#dddddd50"

	def __compile_theme(self):
		theme = {
			"name": self.name,
			"colors": {
				"foreground": self.foregroundPrimary,
				"errorForeground": self.error,
				"focusBorder": self.borders,
				"input.background": self.backgroundPrimary,
				"minimap.background": self.backgroundPrimary,
				"checkbox.background": self.backgroundPrimary,
				"dropdown.background": self.backgroundPrimary,
				"terminal.background": self.backgroundPrimary,
				"selection.background": self.accentPrimaryColor,
				"progressBar.background": self.accentPrimaryColor,
				"activityBar.activeBackground": self.TRANSPARENT,
				"activityBar.activeBorder": self.accentPrimaryColor,
				"activityBar.activeFocusBorder": self.backgroundPrimary,
				"activityBar.border": self.borders,
				"activityBar.foreground": self.foregroundPrimary,
				"activityBar.inactiveForeground": self.foregroundInactive,
				"activityBarBadge.foreground": self.foregroundPrimary,
				"activityBarBadge.background": self.accentPrimaryColor,
				"activityBar.background": self.backgroundPrimary,
				"sideBar.background": self.backgroundPrimary,
				"sideBar.border": self.borders,
				"sideBar.foreground": self.foregroundPrimary,
				"sideBarSectionHeader.background": self.backgroundPrimary,
				"sideBarSectionHeader.border": self.borders,
				"sideBarTitle.foreground": self.foregroundInactive,
				"list.inactiveSelectionBackground": self.error,
				"list.hoverBackground": self.hover,
				"list.activeSelectionBackground": self.error,
				"list.activeSelectionIconForeground": self.foregroundPrimary,
				"list.dropBackground": self.hover,
				"tree.indentGuidesStroke": self.hover,
				"list.highlightForeground": self.accentSecondaryColor,
				"listFilterWidget.background": self.backgroundPrimary,
				"listFilterWidget.outline": self.error,
				"listFilterWidget.noMatchesOutline": self.error,
				"list.errorForeground": self.error,
				"list.warningForeground": self.warning,
				"statusBar.border": self.borders,
				"statusBarItem.hoverBackground": self.hover,
				"statusBar.debuggingBackground": self.hover,
				"statusBar.noFolderBackground": self.hover,
				"statusBarItem.remoteBackground": self.error,
				"statusBar.background": self.backgroundSecondary,
				"titleBar.activeBackground": self.backgroundSecondary,
				"titleBar.border": self.borders,
				"titleBar.inactiveBackground": self.backgroundSecondary,
				"menubar.selectionBackground": self.error,
				"menu.selectionBackground": self.error,
				"menu.border": self.borders,
				"menu.background": self.backgroundSecondary,
				"menu.separatorBackground": self.borders,
				"button.foreground": self.foregroundPrimary,
				"button.background": self.foregroundSecondary,
				"button.border": self.borders,
				"button.hoverBackground": self.backgroundSecondary,
				"button.secondaryBackground": self.backgroundSecondary,
				"button.separator": self.borders,
				"input.border": self.borders,
				"input.foreground": self.foregroundPrimary,
				"input.placeholderForeground": self.foregroundInactive,
				"inputOption.activeBackground": self.backgroundPrimary,
				"inputOption.activeBorder": self.foregroundPrimary,
				"inputOption.activeForeground": self.foregroundPrimary,
				"inputOption.hoverBackground": self.backgroundSecondary,
				"panel.background": self.backgroundPrimary,
				"panel.border": self.borders,
				"panelTitle.activeBorder": self.accentPrimaryColor,
				"panelTitle.activeForeground": self.foregroundPrimary,
				"panelTitle.inactiveForeground": self.foregroundInactive,
				"terminal.selectionBackground": self.error,
				"terminal.inactiveSelectionBackground": self.hover,
				"terminal.border": self.borders,
				"terminalCursor.background": self.backgroundPrimary,
				"terminalCursor.foreground": self.foregroundPrimary,
				"badge.foreground": self.foregroundPrimary,
				"badge.background": self.accentPrimaryColor,
				"tab.activeBackground": self.backgroundPrimary,
				"tab.inactiveBackground": self.backgroundPrimary,
				"tab.activeBorderTop": self.accentPrimaryColor,
				"tab.border": self.borders,
				"editorGroupHeader.tabsBackground": self.backgroundPrimary,
				"editorGroupHeader.tabsBorder": self.borders,
				"banner.background": self.backgroundSecondary,
				"breadcrumb.background": self.backgroundPrimary,
				"breadcrumb.foreground": self.foregroundInactive,
				"breadcrumb.focusForeground": self.foregroundPrimary,
				"editorGroupHeader.border": self.TRANSPARENT,
				"scrollbar.shadow": self.TRANSPARENT,
				"scrollbarSlider.activeBackground": f"{self.accentPrimaryColor}40",
				"scrollbarSlider.background": f"{self.accentPrimaryColor}10",
				"scrollbarSlider.hoverBackground": f"{self.accentPrimaryColor}20",
				"widget.shadow": self.TRANSPARENT,
				"widget.border": self.TRANSPARENT,
				"editorWidget.background": self.backgroundSecondary,
				"editorWidget.resizeBorder": self.accentPrimaryColor,
				"editorWidget.foreground": self.foregroundPrimary,
				"pickerGroup.border": self.borders,
				"pickerGroup.foreground": self.accentPrimaryColor,
				"debugToolBar.background": self.backgroundSecondary,
				"notificationCenter.border": self.borders,
				"notifications.background": self.backgroundSecondary,
				"notifications.border": self.borders,
				"notificationToast.border": self.borders,
				"notificationsErrorIcon.foreground": self.error,
				"notificationsWarningIcon.foreground": self.warning,
				"notificationsInfoIcon.foreground": self.info,
				"gitDecoration.addedResourceForeground": self.gitAdded,
				"gitDecoration.conflictingResourceForeground": self.gitConflicts,
				"gitDecoration.deletedResourceForeground": self.error,
				"gitDecoration.ignoredResourceForeground": self.foregroundInactive,
				"gitDecoration.modifiedResourceForeground": self.gitModified,
				"gitDecoration.untrackedResourceForeground": self.gitUntracked,
				"gitDecoration.stageDeletedResourceForeground": self.gitDeleted,
				"gitDecoration.stageModifiedResourceForeground": self.gitModified,
				"gitDecoration.submoduleResourceForeground": self.gitSubModule,
				"editorGutter.addedBackground": self.gitUntracked,
				"editorGutter.background": self.backgroundPrimary,
				"editorGutter.deletedBackground": self.error,
				"editorGutter.modifiedBackground": self.gitModified,
				"editor.background": self.backgroundPrimary,
				"editor.foreground": self.foregroundPrimary,
				"editorLineNumber.foreground": f"{self.foregroundInactive}60",
				"editorLineNumber.activeForeground": self.foregroundInactive,
				"editorCursor.foreground": self.foregroundPrimary,
				"editorCursor.background": self.backgroundPrimary,
				"editor.selectionBackground": self.error,
				"editorWhitespace.foreground": self.error,
				"editor.selectionHighlightBackground": self.error,
				"editor.selectionHighlightBorder": self.TRANSPARENT,
				"editor.findMatchBackground": f"{self.warning}ca",
				"editor.findMatchHighlightBackground": f"{self.warning}60",
				"editor.findMatchBorder": self.TRANSPARENT,
				"editor.findMatchHighlightBorder": self.TRANSPARENT,
				"editor.findRangeHighlightBackground": self.DEFAULT_HIGHLIGHT,
				"editor.hoverHighlightBackground": self.TRANSPARENT,
				"editor.lineHighlightBackground": f"{self.backgroundSecondary}20",
				"editorWarning.foreground": self.warning,
				"editorInfo.foreground": self.info,
				"editorGutter.foldingControlForeground": self.foregroundInactive,
				"editorGroup.border": self.borders,
				"editorCodeLens.foreground": self.foregroundInactive,
				"editorError.foreground": self.error,
				"editorOverviewRuler.border": self.TRANSPARENT,
				"editorOverviewRuler.background": self.backgroundPrimary,
				"editorMarkerNavigation.background": self.backgroundSecondary,
				"editorMarkerNavigationError.background": self.error,
				"editorMarkerNavigationWarning.background": self.warning,
				"editorMarkerNavigationInfo.background": self.info,
				"editorSuggestWidget.background": self.backgroundSecondary,
				"editorSuggestWidget.border": self.borders,
				"editorSuggestWidget.focusHighlightForeground": self.warning,
				"editorSuggestWidget.foreground": self.foregroundPrimary,
				"editorSuggestWidget.selectedBackground": self.error,
				"editorSuggestWidget.highlightForeground": self.foregroundPrimary,
				"editorSuggestWidget.selectedForeground": self.foregroundPrimary,
				"editorSuggestWidget.selectedIconForeground": self.foregroundPrimary,
				"editorHoverWidget.background": self.backgroundSecondary,
				"editorHoverWidget.border": self.borders,
				"editorHoverWidget.foreground": self.foregroundPrimary,
				"editorHoverWidget.highlightForeground": self.foregroundPrimary,
				"editorHoverWidget.statusBarBackground": self.backgroundSecondary,
				"peekView.border": self.borders,
				"peekViewEditor.background": self.backgroundPrimary,
				"peekViewEditor.matchHighlightBackground": self.error,
				"peekViewEditor.matchHighlightBorder": self.TRANSPARENT,
				"peekViewEditorGutter.background": self.backgroundPrimary,
				"peekViewResult.background": self.backgroundSecondary,
				"peekViewResult.fileForeground": self.foregroundPrimary,
				"peekViewEditorStickyScroll.background": self.backgroundSecondary,
				"peekViewResult.lineForeground": self.foregroundInactive,
				"peekViewResult.matchHighlightBackground": self.error,
				"peekViewTitle.background": self.backgroundSecondary,
				"peekViewTitleLabel.foreground": self.foregroundPrimary,
				"peekViewTitleDescription.foreground": self.foregroundInactive,
			},
			"semanticHighlighting": True,
			"type": self.type,
			"semanticTokenColors": {
				"enumMember": {
					"foreground": self.syntaxConstant
				},
				"variable.constant": {
					"foreground": self.syntaxNumbers
				},
				"variable.defaultLibrary": {
					"foreground": self.syntaxVariablesProperties
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
						"foreground": self.foregroundInactive
					}
				},
				{
					"name": "Decorators",
					"scope": [
							"storage.type"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Constant Nums",
					"scope": [
							"constant.numeric"
					],
					"settings": {
						"foreground": self.syntaxNumbers,
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
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Functions",
					"scope": [
							"entity.name.function"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.syntaxFunctions
					}
				},
				{
					"name": "Classnames",
					"scope": [
							"entity.name.type"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "All other entities",
					"scope": [
							"entity.other"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Invalid",
					"scope": [
							"invalid"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.error
					}
				},
				{
					"name": "Keywords",
					"scope": [
							"keyword.control",
							"keyword.operator.arithmetic"
					],
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Arithmetic operators",
					"scope": [
							"keyword.operator.logical"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "Assignment",
					"scope": [
							"keyword.operator.assignment"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Function meta names",
					"scope": [
							"variable.parameter",
							"string constant.other.placeholder"
					],
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Function meta calls",
					"scope": [
							"meta.function-call",
							"keyword.other.special-method"
					],
					"settings": {
						"foreground": self.syntaxMethods
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
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "typehint",
					"scope": [
							"support.type"
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.syntaxTypehint
					}
				},
				{
					"name": "React JSX Class",
					"scope": [
							"support.class",
					],
					"settings": {
						"fontStyle": "bold",
						"foreground": self.syntaxTypehint
					}
				},
				{
					"name": "Strings interped and regex",
					"scope": [
							"string.interpolated",
							"string.regexp"
					],
					"settings": {
						"foreground": self.syntaxTypehint
					}
				},
				{
					"name": "Strings",
					"scope": [
							"string.quoted.single",
							"string.quoted"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
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
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "meta.method.js",
					"scope": [
							"meta.class-method.js entity.name.function.js",
							"variable.function.constructor"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
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
						"foreground": self.syntaxTypehint
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
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "unison punctuation",
					"scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "haskell variable generic-type",
					"scope": "variable.other.generic-type.haskell",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "haskell storage type",
					"scope": "storage.type.haskell",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "storage.modifier.lifetime.rust",
					"scope": "storage.modifier.lifetime.rust",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "support.function.std.rust",
					"scope": "support.function.std.rust",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "entity.name.lifetime.rust",
					"scope": "entity.name.lifetime.rust",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "variable.language.rust",
					"scope": "variable.language.rust",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "support.constant.edge",
					"scope": "support.constant.edge",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "regexp constant character-class",
					"scope": "constant.other.character-class.regexp",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "regexp operator.quantifier",
					"scope": "keyword.operator.quantifier.regexp",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "punctuation.definition",
					"scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "Comment Markup Link",
					"scope": "comment markup.link",
					"settings": {
						"foreground": self.foregroundInactive
					}
				},
				{
					"name": "markup diff",
					"scope": "markup.changed.diff",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "diff",
					"scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "inserted.diff",
					"scope": "markup.inserted.diff",
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "deleted.diff",
					"scope": "markup.deleted.diff",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "c++ function",
					"scope": "meta.function.c,meta.function.cpp",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "c++ block",
					"scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "js/ts punctuation separator key-value",
					"scope": "punctuation.separator.key-value",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "js/ts import keyword",
					"scope": "keyword.operator.expression.import",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "math property js/ts",
					"scope": "support.constant.property.math",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "java source",
					"scope": "source.java",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "java modifier.import",
					"scope": "meta.method.java",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "java modifier.import",
					"scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "java instanceof",
					"scope": "keyword.operator.instanceof.java",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "java variable.name",
					"scope": "meta.definition.variable.name.java",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "support.constant.property-value.scss",
					"scope": "support.constant.property-value.scss,support.constant.property-value.css",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "CSS/SCSS/LESS Operators",
					"scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "css color standard name",
					"scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "css comma",
					"scope": "punctuation.separator.list.comma.css",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "css attribute-name.id",
					"scope": "support.constant.color.w3c-standard-color-name.css",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "css property-name",
					"scope": "support.type.vendored.property-name.css",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "js variable readwrite",
					"scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "js/ts json",
					"scope": "support.constant.json",
					"settings": {
						"foreground": self.syntaxNumbers
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
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "js/ts console",
					"scope": "support.type.object.console",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "js/ts support.variable.property.process",
					"scope": "support.variable.property.process",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "js console function",
					"scope": "entity.name.function,support.function.console",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "keyword.operator.misc.rust",
					"scope": "keyword.operator.misc.rust",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "keyword.operator.sigil.rust",
					"scope": "keyword.operator.sigil.rust",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "operator",
					"scope": "keyword.operator.delete",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "js dom variable",
					"scope": "support.variable.dom,support.variable.property.dom",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "C operator assignment",
					"scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Punctuation",
					"scope": "punctuation.separator.delimiter",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Other punctuation .c",
					"scope": "punctuation.separator.c,punctuation.separator.cpp",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "C type posix-reserved",
					"scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "keyword.operator.sizeof.c",
					"scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "python block",
					"scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "python placeholder reset to normal string",
					"scope": "constant.character.format.placeholder.other.python",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "Operators",
					"scope": "keyword.operator",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Compound Assignment Operators",
					"scope": "keyword.operator.assignment.compound",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Compound Assignment Operators js/ts",
					"scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Keywords",
					"scope": "keyword",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Variables",
					"scope": "variable",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Variables",
					"scope": "variable.c",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Java Variables",
					"scope": "token.variable.parameter.java",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Packages",
					"scope": "token.package.keyword",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Packages",
					"scope": "token.package",
					"settings": {
						"foreground": self.foregroundPrimary
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
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "Class name php",
					"scope": "variable.other.class.php",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Keyword Control",
					"scope": "keyword.control",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Control Elements",
					"scope": "control.elements, keyword.operator.less",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "Methods",
					"scope": "keyword.other.special-method",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "Storage",
					"scope": "storage",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Storage JS TS",
					"scope": "token.storage",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
					"scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Support",
					"scope": "support.function",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Supporting type",
					"scope": "support.type.property-name",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Support type",
					"scope": "support.constant.property-value",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Support type",
					"scope": "support.constant.font-name",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "Meta tag",
					"scope": "meta.tag",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Constant other symbol",
					"scope": "constant.other.symbol",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Tags",
					"scope": "entity.name.tag",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Attributes",
					"scope": "entity.other.attribute-name",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "support.variable.magic.python",
					"scope": "support.variable.magic.python",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "punctuation.separator.parameters.python",
					"scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "python logical",
					"scope": "keyword.operator.logical.python",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "pyCs",
					"scope": "variable.parameter.function.python",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "python block",
					"scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "variable.parameter.function.language.special.self.python",
					"scope": "variable.parameter.function.language.special.self.python",
					"settings": {
						"fontStyle": "italic bold",
						"foreground": self.syntaxTypehint
					}
				},
				{
					"name": "Attribute IDs",
					"scope": "entity.other.attribute-name.id",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "Attribute class",
					"scope": "entity.other.attribute-name.class.css",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "python function decorator @",
					"scope": "meta.function.decorator.python",
					"settings": {
						"foreground": self.syntaxFunctions
					}
				},
				{
					"name": "python function support",
					"scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Selector",
					"scope": "meta.selector",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Headings",
					"scope": "markup.heading",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Headings",
					"scope": "markup.heading punctuation.definition.heading, entity.name.section",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "Units",
					"scope": "keyword.other.unit",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Bold",
					"scope": "markup.bold,todo.bold",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "markup Italic",
					"scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "emphasis md",
					"scope": "emphasis md",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown headings",
					"scope": "entity.name.section.markdown",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
					"scope": "punctuation.definition.heading.markdown",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "punctuation.definition.list.begin.markdown",
					"scope": "punctuation.definition.list.begin.markdown",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown heading setext",
					"scope": "markup.heading.setext",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
					"scope": "punctuation.definition.bold.markdown",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Inline Raw",
					"scope": "markup.inline.raw.markdown",
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Inline Raw",
					"scope": "markup.inline.raw.string.markdown",
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
					"scope": "punctuation.definition.list.markdown",
					"settings": {
						"foreground": self.syntaxVariablesProperties
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
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "beginning.punctuation.definition.list.markdown",
					"scope": [
							"beginning.punctuation.definition.list.markdown"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
					"scope": "punctuation.definition.metadata.markdown",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
					"scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
					"scope": "string.other.link.title.markdown,string.other.link.description.markdown",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "Regular Expressions",
					"scope": "string.regexp",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Escape Characters",
					"scope": "constant.character.escape",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Embedded",
					"scope": "punctuation.section.embedded, variable.interpolation",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Embedded",
					"scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "illegal",
					"scope": "invalid.illegal",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "illegal",
					"scope": "invalid.illegal.bad-ampersand.html",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Broken",
					"scope": "invalid.broken",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Deprecated",
					"scope": "invalid.deprecated",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Unimplemented",
					"scope": "invalid.unimplemented",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
					"scope": "source.json meta.structure.dictionary.json > string.quoted.json",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
					"scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
					"scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
					"scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "[VSCODE-CUSTOM] JSON Property Name",
					"scope": "support.type.property-name.json",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
					"scope": "support.type.property-name.json punctuation",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "laravel blade tag",
					"scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "laravel blade @",
					"scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "self.error suppression",
					"scope": "keyword.operator.self.error-control.php",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "php instanceof",
					"scope": "keyword.operator.type.php",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "style double quoted array index normal begin",
					"scope": "punctuation.section.array.begin.php",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "style double quoted array index normal end",
					"scope": "punctuation.section.array.end.php",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "php illegal.non-null-typehinted",
					"scope": "invalid.illegal.non-null-typehinted.php",
					"settings": {
						"foreground": self.error
					}
				},
				{
					"name": "php types",
					"scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
					"settings": {
						"foreground": self.syntaxTypehint
					}
				},
				{
					"name": "php call-function",
					"scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "php function-resets",
					"scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "support php constants",
					"scope": "support.constant.core.rust",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "support php constants",
					"scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "php goto",
					"scope": "entity.name.goto-label.php,support.other.php",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "php logical/bitwise operator",
					"scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "php regexp operator",
					"scope": "keyword.operator.regexp.php",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "php comparison",
					"scope": "keyword.operator.comparison.php",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "php heredoc/nowdoc",
					"scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "python function decorator @",
					"scope": "meta.function.decorator.python",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "parameter function js/ts",
					"scope": "function.parameter",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "brace function",
					"scope": "function.brace",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "parameter function ruby cs",
					"scope": "function.parameter.ruby, function.parameter.cs",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "constant.language.symbol.ruby",
					"scope": "constant.language.symbol.ruby",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "rgb-value",
					"scope": "rgb-value",
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "rgb value",
					"scope": "inline-color-decoration rgb-value",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "rgb value less",
					"scope": "less rgb-value",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "sass selector",
					"scope": "selector.sass",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "block scope",
					"scope": "block.scope.end,block.scope.begin",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "cs storage type",
					"scope": "storage.type.cs",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "cs local variable",
					"scope": "entity.name.variable.local.cs",
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"scope": "token.info-token",
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"scope": "token.warn-token",
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"scope": "token.self.error-token",
					"settings": {
						"foreground": self.error
					}
				},
				{
					"scope": "token.debug-token",
					"settings": {
						"foreground": self.syntaxKeywords
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
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Reset JavaScript string interpolation expression",
					"scope": [
							"meta.template.expression"
					],
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "Import module JS",
					"scope": [
							"keyword.operator.module"
					],
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "js Flowtype",
					"scope": [
							"support.type.type.flowtype"
					],
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "js class prop",
					"scope": [
							"meta.property.object"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "js func parameter",
					"scope": [
							"variable.parameter.function.js"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "js template literals begin",
					"scope": [
							"keyword.other.template.begin"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "js template literals end",
					"scope": [
							"keyword.other.template.end"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "js template literals variable braces begin",
					"scope": [
							"keyword.other.substitution.begin"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "js template literals variable braces end",
					"scope": [
							"keyword.other.substitution.end"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "go operator",
					"scope": [
							"keyword.operator.arithmetic.go",
							"keyword.operator.address.go"
					],
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "Go package name",
					"scope": [
							"entity.name.package.go"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "elm prelude",
					"scope": [
							"support.type.prelude.elm"
					],
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "elm constant",
					"scope": [
							"support.constant.elm"
					],
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "template literal",
					"scope": [
							"punctuation.quasi.element"
					],
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "html/pug (jade) escaped characters and entities",
					"scope": [
							"constant.character.entity"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
					"scope": [
							"entity.other.attribute-name.pseudo-element",
							"entity.other.attribute-name.pseudo-class"
					],
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "Clojure globals",
					"scope": [
							"entity.global.clojure"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Clojure symbols",
					"scope": [
							"meta.symbol.clojure"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Clojure constants",
					"scope": [
							"constant.keyword.clojure"
					],
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "CoffeeScript Function Argument",
					"scope": [
							"meta.arguments.coffee",
							"variable.parameter.function.coffee"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Ini Default Text",
					"scope": [
							"source.ini"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "Makefile prerequisities",
					"scope": [
							"meta.scope.prerequisites.makefile"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Makefile text colour",
					"scope": [
							"source.makefile"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Groovy import names",
					"scope": [
							"storage.modifier.import.groovy"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Groovy Methods",
					"scope": [
							"meta.method.groovy"
					],
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "Groovy Variables",
					"scope": [
							"meta.definition.variable.name.groovy"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "Groovy Inheritance",
					"scope": [
							"meta.definition.class.inherited.classes.groovy"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
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
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "SQL Variables",
					"scope": [
							"text.variable",
							"text.bracketed"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "heading 2, callable",
					"scope": [
							"entity.name.class.xi"
					],
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "heading 3, property",
					"scope": [
							"constant.character.character-class.regexp.xi"
					],
					"settings": {
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "heading 4, type, class, interface",
					"scope": [
							"constant.regexp.xi"
					],
					"settings": {
						"foreground": self.syntaxKeywords
					}
				},
				{
					"name": "heading 5, enums, preprocessor, constant, decorator",
					"scope": [
							"keyword.control.xi"
					],
					"settings": {
						"foreground": self.syntaxConstant
					}
				},
				{
					"name": "heading 6, number",
					"scope": [
							"invalid.xi"
					],
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "string",
					"scope": [
							"beginning.punctuation.definition.quote.markdown.xi"
					],
					"settings": {
						"foreground": self.syntaxStringOperators
					}
				},
				{
					"name": "comments",
					"scope": [
							"beginning.punctuation.definition.list.markdown.xi"
					],
					"settings": {
						"foreground": self.foregroundInactive
					}
				},
				{
					"name": "link",
					"scope": [
							"constant.character.xi"
					],
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "accent",
					"scope": [
							"accent.xi"
					],
					"settings": {
						"foreground": self.syntaxMethods
					}
				},
				{
					"name": "wikiword",
					"scope": [
							"wikiword.xi"
					],
					"settings": {
						"foreground": self.syntaxNumbers
					}
				},
				{
					"name": "language operators like '+', '-' etc",
					"scope": [
							"constant.other.color.rgb-value.xi"
					],
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "elements to dim",
					"scope": [
							"punctuation.definition.tag.xi"
					],
					"settings": {
						"foreground": self.foregroundInactive
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
						"foreground": self.syntaxVariablesProperties
					}
				},
				{
					"name": "meta.brace.square",
					"scope": [
							" meta.brace.square"
					],
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"name": "[VSCODE-CUSTOM] Markdown Quote",
					"scope": "markup.quote.markdown",
					"settings": {
						"foreground": self.foregroundInactive
					}
				},
				{
					"name": "punctuation.definition.block.sequence.item.yaml",
					"scope": "punctuation.definition.block.sequence.item.yaml",
					"settings": {
						"foreground": self.foregroundPrimary
					}
				},
				{
					"scope": [
						"constant.language.symbol.elixir"
					],
					"settings": {
						"foreground": self.syntaxConstant
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
		package = {
			"name": self.name,
			"displayName": self.name,
			"publisher": self.author,
			"author": self.author,
			"description": "Auto generated theme using @nulzo's Theme Builder",
			"version": "0.0.1",
			"engines": {
				"vscode": "^1.70.0"
			},
		"categories": [
				"Themes"
			],
			"contributes": {
				"themes": [
					{
					"label": self.name,
					"uiTheme": f"vs-{self.type}",
					"path": f"./themes/{self.name}-theme.json"
					}
				]
			}
		}

		with open(f"themes/{self.name}-theme.json", "w") as deez:
			json.dump(theme, deez) 
   
		with open("package.json", "w") as p:
			json.dump(package, p)
			
	
	def __get_name(self):
		self.author = Prompt.ask("- Enter your name for VSCode Extension (author/publisher)")
		self.name = Prompt.ask("- Enter the name of the theme")
		self.type = Prompt.ask("- Enter the color type", choices=["dark", "light"], default="dark")
  
	def __show_header(self):
		console.clear()
		console.print("Welcome to nulzo's VSCode Theme Generator", style="bold cyan")
		console.print("\n- Provide the desired colors to the prompts below. Defaults are provided if nothing is entered.", style="bold")
		console.print("- WARNING: Please only enter hex values! (i.e. #123456)\n", style="bold yellow")
  
	def __get_editor_colors(self):
		self.foregroundPrimary = Prompt.ask("- Primary foreground for the editor", default="#DDDDDD")
		self.foregroundSecondary = Prompt.ask("- Secondary foreground for the editor", default="#010101")
		self.foregroundInactive = Prompt.ask("- Inactive foreground for the editor", default="#717177")
		self.backgroundPrimary = Prompt.ask("- Primary background for the editor", default="#080A10")
		self.backgroundSecondary = Prompt.ask("- Secondary background for the editor", default="#12131c")
		self.accentPrimaryColor = Prompt.ask("- Primary accent for the editor", default="#899CF0")
		self.accentSecondaryColor = Prompt.ask("- Secondary accent for the editor", default="#CFD7F9")
		self.borders = Prompt.ask("- Border color for the editor", default="#DDDDDD")
		self.error = Prompt.ask("- Error color for the editor", default="#F52D37")
		self.warning = Prompt.ask("- Warning color for the editor", default="#FFC100")
		self.info = Prompt.ask("- Primary background for the editor", default="#E665C3")
		self.gitModified = Prompt.ask("- Git modified color for the editor", default="#848AD9")
		self.gitDeleted = Prompt.ask("- Git deleted color for the editor", default="#F52D37")
		self.gitUntracked = Prompt.ask("- Git untacked color for the editor", default="#93D1CA")
		self.gitSubModule = Prompt.ask("- Git submodule color for the editor", default="#8DB9E2")
		self.gitConflicts = Prompt.ask("- Git conflicts color for the editor", default="#D73D94")
		self.gitAdded = Prompt.ask("- Git added color for the editor", default="#78F5CD")
		self.syntaxConstant = Prompt.ask("- Syntax constants color for the editor", default="#FFBAF0")
		self.syntaxKeywords = Prompt.ask("- Syntax keywords color for the editor", default="#E297ED")
		self.syntaxFunctions = Prompt.ask("- Syntax functions color for the editor", default="#97B3ED")
		self.syntaxTypehint = Prompt.ask("- Syntax typehint color for the editor", default="#F5FF9B")
		self.syntaxStringOperators = Prompt.ask("- Syntax string color for the editor", default="#C1B7FF")
		self.syntaxVariablesProperties = Prompt.ask("- Syntax variable color for the editor", default="#DC9AD7")
		self.syntaxNumbers = Prompt.ask("- Syntax number color for the editor", default="#AFC8FF")
		self.syntaxMethods = Prompt.ask("- Syntax methods color for the editor", default="#A7CCF0")

	def show_color_theme(self):
		table = Table(show_header=True, header_style="bold")
		table.add_column("Element")
		table.add_column("Description", width=80, justify="center")
		table.add_column("Hex", justify="center", width=10)
		table.add_column("Color", justify="center", width=8)
		table.add_row("Primary Font", "Primary foreground for the editor", self.foregroundPrimary, f"[{self.foregroundPrimary}]■■■■■■" )
		table.add_row("Secondary Font", "Secondary foreground for the editor", self.foregroundSecondary, f"[{self.foregroundSecondary}]■■■■■■" )
		table.add_row("Primary Background", "Primary background for the editor", self.backgroundPrimary,f"[{self.backgroundPrimary}]■■■■■■" )
		table.add_row("Secondary Background", "Second background for the editor", self.backgroundSecondary, f"[{self.backgroundSecondary}]■■■■■■" )
		table.add_row("Primary Accent", "Primary accent color for the editor", self.accentPrimaryColor, f"[{self.accentPrimaryColor}]■■■■■■" )
		table.add_row("Secondary Accent", "Secondary accent color for the editor", self.accentSecondaryColor, f"[{self.accentSecondaryColor}]■■■■■■" )
		table.add_section()
		table.add_row("Error", "Error color for the editor", self.error, f"[{self.error}]■■■■■■" )
		table.add_row("Warning", "Warning color for the editor", self.warning, f"[{self.warning}]■■■■■■" )
		table.add_row("Info", "Info color for the editor", self.info, f"[{self.info}]■■■■■■" )
		table.add_row("Inactive", "Inactive foreground and color for editor", self.foregroundInactive, f"[{self.foregroundInactive}]■■■■■■" )
		table.add_row("Borders", "Color of the editor borders", self.borders, f"[{self.borders}]■■■■■■" )
		table.add_section()
		table.add_row("Git Modified", "Color of git modified files", self.gitModified,f"[{self.gitModified}]■■■■■■" )
		table.add_row("Git Deleted", "Color of git deleted files", self.gitDeleted, f"[{self.gitDeleted}]■■■■■■" )
		table.add_row("Git Untracked", "Color of git untracked files", self.gitUntracked, f"[{self.gitUntracked}]■■■■■■" )
		table.add_row("Git SubModule", "Color of git submodules", self.gitSubModule, f"[{self.gitSubModule}]■■■■■■" )
		table.add_row("Git Conflicts", "Color of git conflicting files", self.gitConflicts, f"[{self.gitConflicts}]■■■■■■" )
		table.add_row("Git Added", "Color of git added files", self.gitAdded, f"[{self.gitAdded}]■■■■■■" )
		table.add_section()
		table.add_row("Syntax Constant", "Syntax highlighting for constants", self.syntaxConstant, f"[{self.syntaxConstant}]■■■■■■" )
		table.add_row("Syntax Keywords", "Syntax highlighting for keywords", self.syntaxKeywords,f"[{self.syntaxKeywords}]■■■■■■" )
		table.add_row("Syntax Functions", "Syntax highlighting for functions", self.syntaxFunctions, f"[{self.syntaxFunctions}]■■■■■■" )
		table.add_row("Syntax Typehint", "Syntax highlighting for typehinting", self.syntaxTypehint, f"[{self.syntaxTypehint}]■■■■■■" )
		table.add_row("Syntax Strings", "Syntax highlighting for strings", self.syntaxStringOperators, f"[{self.syntaxStringOperators}]■■■■■■" )
		table.add_row("Syntax Variables", "Syntax highlighting for variables", self.syntaxVariablesProperties, f"[{self.syntaxVariablesProperties}]■■■■■■" )
		table.add_row("Syntax Properties", "Syntax highlighting for properties", self.syntaxVariablesProperties, f"[{self.syntaxVariablesProperties}]■■■■■■" )
		table.add_row("Syntax Numbers", "Syntax highlighting for numbers", self.syntaxNumbers, f"[{self.syntaxNumbers}]■■■■■■" )
		table.add_row("Syntax Methods", "Syntax highlighting for Methods", self.syntaxMethods, f"[{self.syntaxMethods}]■■■■■■" )
		console.print(table)
		console.print("WARNING: Dark colors will not render well. Rest assured that they will render find IRL.", style="bold yellow")
  
	def __confirm(self):
		choice = Prompt.ask("\nConfirm", choices=["y", "n"])
		if choice == "y":
			self.__compile_theme()
			console.print("Done! Thanks!")
		else:
			choice = Prompt.ask("Really?", choices=["y", "n"])
			if choice == "y":
				console.print("Ok! Cya!")
			else:
				self.__compile_theme()
				console.print("Done! Thanks!")
   
	def start(self):
		self.__show_header()
		self.__get_name()
		self.__get_editor_colors()
		self.show_color_theme()
		self.__confirm()