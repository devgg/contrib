use serde::{Deserialize, Serialize};
use serde_json::Result;
use std::fmt;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Topic {
    pub name: String,
    pub url: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Repository {
    pub name_with_owner: String,
    pub url: String,
    pub description: String,
    pub num_forks: i64,
    pub num_issues: i64,
    pub num_pull_requests: i64,
    pub num_stars: i64,
    pub topics: Vec<Topic>,
    pub label_counts: Vec<(String, i64)>,
    pub issues: Vec<Vec<String>>,
    pub languages: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Language {
    pub display_name: String,
    pub search_term: String,
    pub description: String,
    pub repositories: Vec<Repository>,
}

impl fmt::Display for Repository {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "name with owner: {}\nnum_stars: {}\nnum_issues: {}\ndescription: {}\nlabel_counts: {:#?}\n",
            self.name_with_owner, self.num_stars, self.num_issues, self.description, self.label_counts
        )
    }
}

pub trait ToJavascript {
    fn to_javascript(&self) -> String;
}

impl ToJavascript for String {
    fn to_javascript(&self) -> String {
        format!(r#""{}""#, self.replace("\\", "\\\\").replace("\"", "\\\""))
    }
}

impl ToJavascript for i64 {
    fn to_javascript(&self) -> String {
        self.to_string()
    }
}

impl<V1: ToJavascript, V2: ToJavascript> ToJavascript for (V1, V2) {
    fn to_javascript(&self) -> String {
        format!(
            r#"[{}, {}]"#,
            self.0.to_javascript(),
            self.1.to_javascript()
        )
    }
}

impl<V: ToJavascript> ToJavascript for Vec<V> {
    fn to_javascript(&self) -> String {
        format!(
            "[{}]",
            self.iter()
                .map(V::to_javascript)
                .collect::<Vec<String>>()
                .join(", ")
        )
    }
}

pub fn to_field<V: ToJavascript>(name: &str, value: &V) -> String {
    format!(r#"{}: {}"#, name, value.to_javascript())
}

fn to_object(value: &str) -> String {
    format!(r#"{{{}}}"#, value)
}

impl ToJavascript for Topic {
    fn to_javascript(&self) -> String {
        to_object(&[to_field("name", &self.name), to_field("url", &self.url)].join(","))
    }
}

impl ToJavascript for Repository {
    fn to_javascript(&self) -> String {
        to_object(
            &[
                to_field("name_with_owner", &self.name_with_owner),
                to_field("url", &self.url),
                to_field("description", &self.description),
                to_field("num_forks", &self.num_forks),
                to_field("num_issues", &self.num_issues),
                to_field("num_pull_requests", &self.num_pull_requests),
                to_field("num_stars", &self.num_stars),
                to_field("topics", &self.topics),
                to_field("label_counts", &self.label_counts),
                to_field("issues", &self.issues),
                to_field("languages", &self.languages),
            ]
            .join(",\n"),
        )
    }
}

impl ToJavascript for Language {
    fn to_javascript(&self) -> String {
        to_object(
            &[
                to_field("display_name", &self.display_name),
                to_field("search_term", &self.search_term),
                to_field("description", &self.description),
                to_field("repositories", &self.repositories),
            ]
            .join(",\n"),
        )
    }
}
