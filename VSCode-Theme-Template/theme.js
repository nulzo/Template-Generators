export const theme = (colors, colorObject) => {
    return (
        {
            "colors": colors,
            "semanticHighlighting": true,
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
    )
};
