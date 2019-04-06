class LanguageLinks {
  constructor(name, url, icon) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }
}

function getGitHubLink(language) {
  return new LanguageLinks(
    "github.com",
    "https://github.com/topics/" + language,
    "github"
  );
}

function getReferenceLink(name, url) {
  return new LanguageLinks(name, url, "book");
}

function getStackOverflowLink(language) {
  return new LanguageLinks(
    "stackoverflow.com",
    "https://stackoverflow.com/tags/" + language + "/info",
    "stack overflow"
  );
}

function getWikipediaLink(language, suffix = true) {
  return new LanguageLinks(
    "wikipedia.org",
    "https://en.wikipedia.org/wiki/" +
      language +
      (suffix ? "_(programming_language)" : ""),
    "wikipedia w"
  );
}

function getDefaultLinks(
  githubLanguage,
  referenceName,
  referenceUrl,
  getStackOverflowLanguage,
  wikipedaLanguage,
  wikipediaSuffix = true
) {
  return [
    getGitHubLink(githubLanguage),
    getReferenceLink(referenceName, referenceUrl),
    getStackOverflowLink(getStackOverflowLanguage),
    getWikipediaLink(wikipedaLanguage, wikipediaSuffix)
  ];
}

class LanguageMetadata {
  constructor(displayName, links, imageOverrideUrl = null) {
    this.displayName = displayName;
    this.links = links;
    this.imageOverrideUrl = imageOverrideUrl;
  }
}

export default {
  c: new LanguageMetadata(
    "C",
    getDefaultLinks(
      "c",
      "cppreference.com",
      "https://cppreference.com/w/c",
      "c",
      "c"
    ),
    "https://pngimage.net/wp-content/uploads/2018/05/c-language-logo-png-4.png"
  ),
  csharp: new LanguageMetadata(
    "C#",
    getDefaultLinks(
      "csharp",
      "microsoft.com",
      "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/",
      "csharp",
      "c_sharp"
    ),
    "https://vedcomputech.com/images/Training/csharp.svg"
  ),
  cpp: new LanguageMetadata(
    "C++",
    getDefaultLinks(
      "cpp",
      "cppreference.com",
      "https://cppreference.com/w/cpp",
      "c++",
      "c++"
    )
  ),
  java: new LanguageMetadata(
    "Java",
    getDefaultLinks(
      "java",
      "docs.oracle.com",
      "https://docs.oracle.com/en/java/javase/11/docs/api/index.html",
      "java",
      "java"
    ),
    "https://www.softexia.com/wp-content/uploads/2017/04/Java-logo.png"
  ),
  javascript: new LanguageMetadata(
    "JavaScript",
    getDefaultLinks(
      "javascript",
      "developer.mozilla.org",
      "https://developer.mozilla.org/bm/docs/Web/JavaScript",
      "javascript",
      "javascript"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  ),
  python: new LanguageMetadata(
    "Python",
    getDefaultLinks(
      "python",
      "docs.python.org",
      "https://docs.python.org",
      "python",
      "python"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  ),
  rust: new LanguageMetadata(
    "Rust",
    getDefaultLinks(
      "rust",
      "doc.rust-lang.org",
      "https://doc.rust-lang.org/reference/index.html",
      "rust",
      "rust"
    )
  ),
  typescript: new LanguageMetadata(
    "TypeScript",
    getDefaultLinks(
      "typescript",
      "typescriptlang.org",
      "https://www.typescriptlang.org/docs/home.html",
      "typescript",
      "typescript",
      false
    ),
    "https://cdn-images-1.medium.com/max/2000/1*mn6bOs7s6Qbao15PMNRyOA.png"
  ),
  kotlin: new LanguageMetadata(
    "Kotlin",
    getDefaultLinks(
      "kotlin",
      "kotlinlang.org",
      "https://kotlinlang.org/docs/reference/",
      "kotlin",
      "kotlin"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1920px-Kotlin-logo.svg"
  ),
  go: new LanguageMetadata(
    "Go",
    getDefaultLinks(
      "go",
      "golang.org",
      "https://golang.org/ref/spec",
      "go",
      "go"
    )
  ),
  swift: new LanguageMetadata(
    "Swift",
    getDefaultLinks(
      "swift",
      "swift.org",
      "https://swift.org/documentation/#the-swift-programming-language",
      "swift",
      "swift"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg"
  ),
  fsharp: new LanguageMetadata(
    "F#",
    getDefaultLinks(
      "fsharp",
      "microsoft.com",
      "https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/",
      "fsharp",
      "F_Sharp"
    )
  ),
  clojure: new LanguageMetadata(
    "Clojure",
    getDefaultLinks(
      "clojure",
      "clojuredocs.org",
      "https://clojuredocs.org/quickref",
      "clojure",
      "Clojure",
      false
    )
  ),
  scala: new LanguageMetadata(
    "Scala",
    getDefaultLinks(
      "scala",
      "scala-lang.org",
      "https://docs.scala-lang.org/",
      "scala",
      "Scala"
    )
  ),
  haskell: new LanguageMetadata(
    "Haskell",
    getDefaultLinks(
      "haskell",
      "haskell.org",
      "https://www.haskell.org/documentation/",
      "haskell",
      "haskell"
    )
  ),
  julia: new LanguageMetadata(
    "Julia",
    getDefaultLinks(
      "julia",
      "julialang.org",
      "https://docs.julialang.org",
      "julia",
      "julia"
    )
  ),
  r: new LanguageMetadata(
    "R",
    getDefaultLinks(
      "r",
      "r-project.org",
      "https://cran.r-project.org/doc/manuals/r-release/R-lang.html",
      "r",
      "r"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png"
  ),
  ruby: new LanguageMetadata(
    "Ruby",
    getDefaultLinks(
      "ruby",
      "ruby-doc.org",
      "https://ruby-doc.org/gettingstarted/",
      "ruby",
      "ruby"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
  ),
  elixir: new LanguageMetadata(
    "Elixir",
    getDefaultLinks(
      "elixir",
      "elixir-lang.org",
      "https://elixir-lang.org/docs.html",
      "elixir",
      "elixir"
    ),
    "https://elixir-lang.org/images/logo/logo.png"
  ),
  erlang: new LanguageMetadata("Erlang", [
    getReferenceLink("erlang.org", "https://www.erlang.org/docs"),
    getStackOverflowLink("erlang"),
    getWikipediaLink("erlang")
  ]),
  hack: new LanguageMetadata("Hack", [
    getReferenceLink("hhvm.com", "https://docs.hhvm.com/hack/"),
    getStackOverflowLink("hacklang"),
    getWikipediaLink("hack")
  ]),
  ocaml: new LanguageMetadata(
    "OCaml",
    getDefaultLinks(
      "ocaml",
      "ocaml.org",
      "https://ocaml.org/docs/",
      "ocaml",
      "ocaml",
      false
    ),
    "https://ocaml.org/img/OCaml_Sticker.svg"
  ),
  cobol: new LanguageMetadata(
    "COBOL",
    [
      getReferenceLink("sourceforge.io", "https://open-cobol.sourceforge.io/"),
      getStackOverflowLink("cobol"),
      getWikipediaLink("cobol", false)
    ],
    "https://cacm.acm.org/system/assets/0003/2653/092618_Kackr.io_Cobol.large.jpg?1537981861&1537981860"
  ),
  dart: new LanguageMetadata(
    "Dart",
    getDefaultLinks(
      "dart",
      "dartlang.org",
      "https://www.dartlang.org/guides/get-started",
      "dart",
      "dart"
    ),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Dart_programming_language_logo.svg/2880px-Dart_programming_language_logo.svg.png"
  ),
  matlab: new LanguageMetadata(
    "MATLAB",
    getDefaultLinks(
      "matlab",
      "mathworks.com",
      "https://www.mathworks.com/help/matlab/",
      "matlab",
      "matlab"
    ),
    "https://www.mathworks.com/company/newsletters/articles/the-mathworks-logo-is-an-eigenfunction-of-the-wave-equation/_jcr_content/mainParsys/image_2.adapt.full.high.gif/1469941373397.gif"
  ),
  perl: new LanguageMetadata(
    "Perl",
    getDefaultLinks(
      "perl",
      "perl.org",
      "https://perldoc.perl.org/",
      "perl",
      "perl"
    ),
    "https://cdn.worldvectorlogo.com/logos/perl.svg"
  ),
  php: new LanguageMetadata(
    "PHP",
    getDefaultLinks(
      "php",
      "php.net",
      "https://www.php.net/manual/en/",
      "php",
      "php",
      false
    ),
    "https://www.php.net/images/logos/new-php-logo.svg"
  ),
  objectivec: new LanguageMetadata(
    "Objective-C",
    [
      getReferenceLink(
        "apple.com",
        "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html"
      ),
      getStackOverflowLink("objective-c"),
      getWikipediaLink("objective-c", false)
    ],
    "https://seeklogo.com/images/O/objective-c-logo-81746870EF-seeklogo.com.png"
  ),
  lua: new LanguageMetadata(
    "Lua",
    getDefaultLinks(
      "lua",
      "lua.org",
      "https://www.lua.org/docs.html",
      "lua",
      "lua"
    )
  ),
  groovy: new LanguageMetadata("Groovy", [
    getReferenceLink(
      "groovy-lang.org",
      "http://groovy-lang.org/documentation.html"
    ),
    getStackOverflowLink("groovy"),
    getWikipediaLink("groovy")
  ])
};
