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
    "https://stackoverflow.com/questions/tagged/" + language,
    "stack overflow"
  );
}

function getWikipediaLink(language, suffix) {
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
      "docs.microsoft.com",
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
    getDefaultLinks("swift", "", "", "swift", "swift"),
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg"
  ),
  fsharp: new LanguageMetadata(
    "F#",
    getDefaultLinks("fsharp", "", "", "fsharp", "F_Sharp")
  ),
  clojure: new LanguageMetadata(
    "Clojure",
    getDefaultLinks("clojure", "", "", "clojure", "Clojure", false)
  ),
  scala: new LanguageMetadata(
    "Scala",
    getDefaultLinks("scala", "", "", "scala", "Scala")
  ),
  haskell: new LanguageMetadata(
    "Haskell",
    getDefaultLinks("haskell", "", "", "haskell", "haskell")
  ),
  julia: new LanguageMetadata(
    "Julia",
    getDefaultLinks("julia", "", "", "julia", "julia")
  ),
  r: new LanguageMetadata(
    "R",
    getDefaultLinks("r", "", "", "r", "r"),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png"
  ),
  ruby: new LanguageMetadata(
    "Ruby",
    getDefaultLinks("ruby", "", "", "ruby", "ruby"),
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
  ),
  erlang: new LanguageMetadata(
    "Erlang",
    getDefaultLinks("erlang", "", "", "erlang", "erlang")
  ),
  hack: new LanguageMetadata(
    "Hack",
    getDefaultLinks("hack", "", "", "hack", "hack")
  ),
  ocaml: new LanguageMetadata(
    "OCaml",
    getDefaultLinks("ocaml", "", "", "ocaml", "ocaml"),
    "https://ocaml.org/img/OCaml_Sticker.svg"
  ),
  cobol: new LanguageMetadata(
    "COBOL",
    getDefaultLinks("cobol", "", "", "cobol", "cobol"),
    "https://cacm.acm.org/system/assets/0003/2653/092618_Kackr.io_Cobol.large.jpg?1537981861&1537981860"
  ),
  matlab: new LanguageMetadata(
    "MATLAB",
    getDefaultLinks("matlab", "", "", "matlab", "matlab"),
    "https://www.mathworks.com/company/newsletters/articles/the-mathworks-logo-is-an-eigenfunction-of-the-wave-equation/_jcr_content/mainParsys/image_2.adapt.full.high.gif/1469941373397.gif"
  ),
  perl: new LanguageMetadata(
    "Perl",
    getDefaultLinks("perl", "", "", "perl", "perl"),
    "https://cdn.worldvectorlogo.com/logos/perl.svg"
  ),
  objectivec: new LanguageMetadata(
    "Objective-C",
    getDefaultLinks("objectivec", "", "", "objectivec", "objectivec"),
    "https://seeklogo.com/images/O/objective-c-logo-81746870EF-seeklogo.com.png"
  ),
  lua: new LanguageMetadata(
    "Lua",
    getDefaultLinks("lua", "", "", "lua", "lua")
  ),
  groovy: new LanguageMetadata(
    "Groovy",
    getDefaultLinks("groovy", "", "", "groovy", "groovy")
  )
};
