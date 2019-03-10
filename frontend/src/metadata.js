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
  constructor(displayName, description, imageUrl, links) {
    this.displayName = displayName;
    this.description = description;
    this.imageUrl = imageUrl;
    this.links = links;
  }
}

export default {
  c: new LanguageMetadata(
    "C",
    "C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. By design, C provides constructs that map efficiently to typical machine instructions, and therefore it has found lasting use in applications that had formerly been coded in assembly language, including operating systems, as well as various application software for computers ranging from supercomputers to embedded systems.",
    "https://pngimage.net/wp-content/uploads/2018/05/c-language-logo-png-4.png",
    getDefaultLinks(
      "c",
      "cppreference.com",
      "https://cppreference.com/w/c",
      "c",
      "c"
    )
  ),
  csharp: new LanguageMetadata(
    "C#",
    "C# (pronounced C sharp) is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.It was developed around 2000 by Microsoft within its .NET initiative.",
    "https://vedcomputech.com/images/Training/csharp.svg",
    getDefaultLinks(
      "csharp",
      "docs.microsoft.com",
      "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/",
      "csharp",
      "c_sharp"
    )
  ),
  cpp: new LanguageMetadata(
    "C++",
    "C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
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
    "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers 'write once, run anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
    "https://www.softexia.com/wp-content/uploads/2017/04/Java-logo.png",
    getDefaultLinks(
      "java",
      "docs.oracle.com",
      "https://docs.oracle.com/en/java/javase/11/docs/api/index.html",
      "java",
      "java"
    )
  ),
  javascript: new LanguageMetadata(
    "JavaScript",
    "JavaScript often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    getDefaultLinks(
      "javascript",
      "developer.mozilla.org",
      "https://developer.mozilla.org/bm/docs/Web/JavaScript",
      "javascript",
      "javascript"
    )
  ),
  python: new LanguageMetadata(
    "Python",
    "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales. Python features a dynamic type system and automatic memory management. It supports multiple programming paradigms, including object-oriented, imperative, functional and procedural, it also has a comprehensive standard library.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png",
    getDefaultLinks(
      "python",
      "docs.python.org",
      "https://docs.python.org",
      "python",
      "python"
    )
  ),
  rust: new LanguageMetadata(
    "Rust",
    "Rust is a multi-paradigm systems programming language focused on safety, especially safe concurrency. rust is syntactically similar to c++, but is designed to provide better memory safety while maintaining high performance.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1920px-Rust_programming_language_black_logo.svg.png",
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
    "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.",
    "https://cdn-images-1.medium.com/max/2000/1*mn6bOs7s6Qbao15PMNRyOA.png",
    getDefaultLinks(
      "typescript",
      "typescriptlang.org",
      "https://www.typescriptlang.org/docs/home.html",
      "typescript",
      "typescript",
      false
    )
  )
};
